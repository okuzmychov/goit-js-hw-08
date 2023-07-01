import Player from '@vimeo/player';
const frame = document.querySelector('iframe');
const player = new Player(frame);

const onPlay = function ({seconds}) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', onPlay)
const LS = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(LS).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the videos duration
            break;

        default:
            // some other error occurred
            break;
    }
});