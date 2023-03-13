
//02-video
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_KEY = 'videoplayer-current-time'; //назва ключа для зберігання даних в локальному сховищі. toString() - перетворює число до рядка

const saveVideoTime = e => {
    localStorage.setItem(LOCAL_KEY, e.seconds.toString()) //збереження час в локальному сховищі браузера, використовуючи метод setItem() на об'єкті localStorage.
    console.log(e.seconds);
}

player.on('play', throttle(saveVideoTime, 1000)) //метод on() на об'єкті player, який очікує подію "play"
//throttle(saveVideoTime, 1000) - вказувати другий параметр обов'язково(час,через який функцію можна викликати знову), в іншому випадку - за замовчуванням параметр =0 і це призводить до перевантаження браузера
const currentVideoTime = parseFloat(localStorage.getItem(LOCAL_KEY));

player.setCurrentTime(parseFloat(currentVideoTime)).then(function(seconds) {//parseFloat() - приймає  рядок, а повертає число, в setCurrentTime(2.33)
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        break;
        default:
        break;
    }
});


