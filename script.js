let x = 0, bool = false, interval;

const rotate = () => {
    const cubes = document.querySelectorAll('.cube');
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}

const changePlayPause = () => {
    const i = document.querySelector('.play-pause i');
    const cls = i.classList[1];
    if(cls === 'fa-play-circle') {
        i.classList.remove('fa-play-circle');
        i.classList.add('fa-pause-circle'); 
    } else {
        i.classList.remove('fa-pause-circle');
        i.classList.add('fa-play-circle'); 
    }
    
}

const playPause = () => {
    if(!bool) {
        interval = setInterval(() => {
            x -= 90;
            rotate();
        }, 2500);
        changePlayPause();
        bool = true;
    } else {
        clearInterval(interval);
        changePlayPause();
        bool = false;
    }
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    x += 90;
    rotate();
    if(bool) {
        playPause();
    }
});

document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    x += 25;
    rotate();
});

document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('click', () =>{
    x -= 90;
    rotate();
    if(bool) {
        playPause();
    }
});

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    x += 25;
    rotate();
});

document.querySelector('.play-pause').addEventListener('click', () =>{
    playPause();
});