/**
 * Web Audio Ambient Romantic & Gothic Synthesizer
 * Generates delicate gothic piano / music box arpeggios, romantic pads, and sound effects
 */

class RomanticAudioManager {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;
  private currentStep: number = 0;
  private masterGain: GainNode | null = null;
  private volume: number = 0.5;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // Play a single resonant gothic bell / chime note
  public playChime(freq: number = 523.25, duration: number = 1.5, type: OscillatorType = 'sine') {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.25 * this.volume, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // Ignore audio errors gracefully if blocked
    }
  }

  // Sound effect: Blowing candle out (soft airy whoosh + magical chime)
  public playBlowCandle() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      
      // Noise burst for breath
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(100, now + 0.35);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3 * this.volume, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.4);

      // Magical twinkle chime
      [880, 1108.73, 1318.51, 1760].forEach((freq, idx) => {
        setTimeout(() => {
          this.playChime(freq, 1.8, 'triangle');
        }, idx * 120);
      });
    } catch {
      // Silent error
    }
  }

  // Sound effect: Romantic Letter Seal Breaking
  public playWaxSeal() {
    this.playChime(392.00, 0.8, 'sine');
    setTimeout(() => this.playChime(587.33, 1.2, 'sine'), 100);
  }

  // Start continuous ambient dark romance melody loop
  public toggleMusic(callback?: (playing: boolean) => void) {
    if (this.isPlaying) {
      this.stopMusic();
      if (callback) callback(false);
      return false;
    } else {
      this.startMusic();
      if (callback) callback(true);
      return true;
    }
  }

  public startMusic() {
    this.initContext();
    this.isPlaying = true;
    this.currentStep = 0;

    // Romantic Gothic Nocturne arpeggio sequence (A minor / F major / D minor / E7)
    // Dreamy notes in frequencies (Hz)
    const melodyPattern = [
      440, 523.25, 659.25, 880, 659.25, 523.25, // Am
      349.23, 440, 523.25, 698.46, 523.25, 440, // F
      293.66, 349.23, 440, 587.33, 440, 349.23, // Dm
      329.63, 392.00, 493.88, 659.25, 493.88, 392.00 // E
    ];

    const bassNotes = [220, 174.61, 146.83, 164.81];

    const stepInterval = 420; // ms per note

    const playNext = () => {
      if (!this.isPlaying) return;

      const note = melodyPattern[this.currentStep % melodyPattern.length];
      this.playChime(note, 2.2, 'triangle');

      // Play soft resonant sub-bass on measure heads
      if (this.currentStep % 6 === 0) {
        const bassIdx = Math.floor(this.currentStep / 6) % bassNotes.length;
        this.playChime(bassNotes[bassIdx], 3.5, 'sine');
      }

      this.currentStep++;
      this.timer = window.setTimeout(playNext, stepInterval);
    };

    playNext();
  }

  public stopMusic() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}

export const romanticAudio = new RomanticAudioManager();
