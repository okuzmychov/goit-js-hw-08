import Player from '@vimeo/player';

const frame = document.querySelector('iframe');
const player = new Player(frame);

player.on('timeupdate', onPlay);
const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

const LS = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(LS)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
