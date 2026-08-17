import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const PORT = 3000;
const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

async function startServer() {
  const app = express();

  // Increase payload limit for high-res base64 photo uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // Serve uploads statically
  app.use("/uploads", express.static(UPLOADS_DIR));

  // API endpoint to save permanent default photos
  app.post("/api/photos/upload", (req, res) => {
    try {
      const { index, dataUrl } = req.body;
      if (typeof index !== "number" || !dataUrl) {
        return res.status(400).json({ error: "Missing index or dataUrl" });
      }

      const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        return res.status(400).json({ error: "Invalid data URL" });
      }

      const buffer = Buffer.from(matches[2], "base64");
      const filename = `photo_${index}.png`;
      const filePath = path.join(UPLOADS_DIR, filename);

      fs.writeFileSync(filePath, buffer);

      const photoUrl = `/uploads/${filename}?t=${Date.now()}`;
      return res.json({ success: true, index, photoUrl });
    } catch (err: any) {
      console.error("Error saving photo:", err);
      return res.status(500).json({ error: err.message || "Failed to save photo" });
    }
  });

  // API endpoint to get all currently saved default photos
  app.get("/api/photos", (req, res) => {
    try {
      const savedPhotos: Record<number, string> = {};
      for (let i = 0; i < 10; i++) {
        const filename = `photo_${i}.png`;
        const filePath = path.join(UPLOADS_DIR, filename);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          savedPhotos[i] = `/uploads/${filename}?t=${stats.mtimeMs}`;
        }
      }
      return res.json({ photos: savedPhotos });
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
