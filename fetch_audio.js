const https = require('https');
const fs = require('fs');

// We use a completely generic, extremely reliable open-source MP3 URL for testing
// SoundHelix provides 100% reliable continuous 256kbps audio test streams
const url = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3';

const file = fs.createWriteStream('public/ambient.mp3');

https.get(url, (response) => {
    if (response.statusCode !== 200) {
        console.error('Failed to download:', response.statusCode);
        return;
    }
    response.pipe(file);
    file.on('finish', () => {
        file.close();
        console.log('Download completed successfully.');
    });
}).on('error', (err) => {
    fs.unlink('public/ambient.mp3', () => {});
    console.error('Error downloading:', err.message);
});
