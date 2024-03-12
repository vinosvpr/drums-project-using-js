function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return;//skip its not a transform
    this.classList.remove('playing')
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
function key65elePlay() {
    const key65audio = document.querySelector(`.key65`);
    const key65key = document.querySelector(`#key65`);
    // console.log(key65audio)
    if(!key65audio) return; //stop the function from all together
    key65audio.currentTime = 0;
    key65audio.play();
    key65key.classList.add('playing');
    }
const key65ele = document.getElementById("key65");
key65ele.addEventListener("click", key65elePlay);

function key83elePlay() {
    const key83audio = document.querySelector(`.key83`);
    const key83key = document.querySelector(`#key83`);
    // console.log(key65audio)
    if(!key83audio) return; //stop the function from all together
    key83audio.currentTime = 0;
    key83audio.play();
    key83key.classList.add('playing');
    }
const key83ele = document.getElementById("key83");
key83ele.addEventListener("click", key83elePlay);

function key68elePlay() {
    const key68audio = document.querySelector(`.key68`);
    const key68key = document.querySelector(`#key68`);
    // console.log(key65audio)
    if(!key68audio) return; //stop the function from all together
    key68audio.currentTime = 0;
    key68audio.play();
    key68key.classList.add('playing');
    }
const key68ele = document.getElementById("key68");
key68ele.addEventListener("click", key68elePlay);

function key70elePlay() {
    const key70audio = document.querySelector(`.key70`);
    const key70key = document.querySelector(`#key70`);
    // console.log(key65audio)
    if(!key70audio) return; //stop the function from all together
    key70audio.currentTime = 0;
    key70audio.play();
    key70key.classList.add('playing');
    }
const key70ele = document.getElementById("key70");
key70ele.addEventListener("click", key70elePlay);

function key71elePlay() {
    const key71audio = document.querySelector(`.key71`);
    const key71key = document.querySelector(`#key71`);
    // console.log(key65audio)
    if(!key71audio) return; //stop the function from all together
    key71audio.currentTime = 0;
    key71audio.play();
    key71key.classList.add('playing');
    }
const key71ele = document.getElementById("key71");
key71ele.addEventListener("click", key71elePlay);

function key72elePlay() {
    const key72audio = document.querySelector(`.key72`);
    const key72key = document.querySelector(`#key72`);
    // console.log(key65audio)
    if(!key72audio) return; //stop the function from all together
    key72audio.currentTime = 0;
    key72audio.play();
    key72key.classList.add('playing');
    }
const key72ele = document.getElementById("key72");
key72ele.addEventListener("click", key72elePlay);

function key74elePlay() {
    const key74audio = document.querySelector(`.key74`);
    const key74key = document.querySelector(`#key74`);
    // console.log(key65audio)
    if(!key74audio) return; //stop the function from all together
    key74audio.currentTime = 0;
    key74audio.play();
    key74key.classList.add('playing');
    }
const key74ele = document.getElementById("key74");
key74ele.addEventListener("click", key74elePlay);

function key75elePlay() {
    const key75audio = document.querySelector(`.key75`);
    const key75key = document.querySelector(`#key75`);
    // console.log(key65audio)
    if(!key75audio) return; //stop the function from all together
    key75audio.currentTime = 0;
    key75audio.play();
    key75key.classList.add('playing');
    }
const key75ele = document.getElementById("key75");
key75ele.addEventListener("click", key75elePlay);

function key76elePlay() {
    const key76audio = document.querySelector(`.key76`);
    const key76key = document.querySelector(`#key76`);
    // console.log(key65audio)
    if(!key76audio) return; //stop the function from all together
    key76audio.currentTime = 0;
    key76audio.play();
    key76key.classList.add('playing');
    }
const key76ele = document.getElementById("key76");
key76ele.addEventListener("click", key76elePlay);


