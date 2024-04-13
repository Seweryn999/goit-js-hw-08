import Vimeo from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

const saveTimeToLocalStorage = async () => {
  const currentTime = await player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
};

player.on('timeupdate', throttle(saveTimeToLocalStorage, 1000));
