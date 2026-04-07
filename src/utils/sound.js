/**
 * Web Audio API based aesthetic click sound synthesizer.
 * Creates a premium, crisp "tick" sound without needing external MP3s.
 */

let audioCtx = null;

export const playClickSound = () => {
  try {
    // Only initialize audio context on user interaction to comply with browser autoplay policies
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    
    // Resume if suspended
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Make it a short, high-pitched mechanical tick
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.05);

    // Filter to make it less harsh
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(1000, audioCtx.currentTime);

    // Very fast envelope for that "click" feel
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.05);
  } catch (error) {
    console.warn("Failed to play UI sound", error);
  }
};
