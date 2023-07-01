import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const frame = document.querySelector('iframe');
const player = new Player(frame);

const onPlay = throttle(function({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}, 1000);

player.on('timeupdate', onPlay)
const LS = localStorage.getItem('videoplayer-current-time')

player.setCurrentTime(LS).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});