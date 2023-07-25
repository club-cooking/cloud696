import Plyr from 'plyr';

const player = new Plyr('audio', {});

// Expose player so it can be used from the console
window.player = player;
