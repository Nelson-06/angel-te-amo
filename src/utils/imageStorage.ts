// Lightweight, robust image compression and IndexedDB persistence

const DB_NAME = 'eterno_amor_db';
const DB_VERSION = 1;
const STORE_NAME = 'app_config';
const CONFIG_KEY = 'user_custom_config';

/**
 * Compress an image file to a lightweight data URL (max 1200px, 85% quality)
 * to ensure fast rendering and effortless storage without quota limits.
 */
export function compressImageFile(file: File, maxWidth = 1280, maxHeight = 1280, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(img.src);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Try WebP, fallback to JPEG
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.onerror = () => reject(new Error('No se pudo procesar la imagen'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Error al leer el archivo'));
    reader.readAsDataURL(file);
  });
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB no soportado'));
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveConfigToStorage<T>(data: T): Promise<void> {
  // 1. Try saving to IndexedDB (unlimited storage for photos)
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(data, CONFIG_KEY);
    await new Promise<void>((resolve, reject) => {
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.warn('IndexedDB save failed, falling back to localStorage:', err);
  }

  // 2. Also try localStorage
  try {
    localStorage.setItem('eterno_amor_couple_config_v1', JSON.stringify(data));
  } catch (err) {
    console.warn('localStorage full or unavailable:', err);
  }
}

export async function loadConfigFromStorage<T>(): Promise<T | null> {
  // 1. Try loading from IndexedDB first
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(CONFIG_KEY);
    const result = await new Promise<T | undefined>((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    if (result) return result;
  } catch (err) {
    console.warn('IndexedDB read failed, trying localStorage:', err);
  }

  // 2. Try localStorage
  try {
    const saved = localStorage.getItem('eterno_amor_couple_config_v1');
    if (saved) {
      return JSON.parse(saved) as T;
    }
  } catch {
    // Ignore
  }

  return null;
}

export async function clearStorage(): Promise<void> {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(CONFIG_KEY);
  } catch {
    // Ignore
  }
  try {
    localStorage.removeItem('eterno_amor_couple_config_v1');
  } catch {
    // Ignore
  }
}
