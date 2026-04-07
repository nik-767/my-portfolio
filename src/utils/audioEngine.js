// src/utils/audioEngine.js
class AudioController {
    constructor() {
        // Use the local song file placed in public/. Replace the file name if needed.
        this.bgMusic = new Audio('/ES_To and From - DonVayei.mp3');
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.3; // Ambient and quiet
        this.bgMusic.preload = 'auto';
        this.isPlaying = false;
    }

    play() {
        if (!this.isPlaying) {
            this.bgMusic.play().catch(e => console.error('Audio playback blocked by browser policies:', e));
            this.isPlaying = true;
        }
    }

    stop() {
        if (this.isPlaying) {
            this.bgMusic.pause();
            this.isPlaying = false;
        }
    }
}

export const ambientSynth = new AudioController();

export const playModalOpenSound = () => {
    // Professional, clean 'UI Interface Soft Pop/Click'. Very standard, unobtrusive, widely used aesthetic sound.
    const sfx = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
    sfx.volume = 0.4;
    sfx.play().catch(e => console.error('SFX playback blocked:', e));
};

export const playSubmitSound = () => {
    // Satisfying, futuristic 'positive notification' chime for successful form initiation
    const sfx = new Audio('https://assets.mixkit.co/active_storage/sfx/951/951-preview.mp3');
    sfx.volume = 0.5;
    sfx.play().catch(e => console.error('SFX playback blocked:', e));
};
