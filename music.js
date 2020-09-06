let scene = document.querySelector('#scene');
let song = document.querySelector('#song');
let vers = document.querySelector('#vers');
let play = document.querySelector('#play');
let sprite = document.querySelector('#dawn');
let ctr = 0;

songs = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3', '10.mp3', '11.mp3', '12.mp3', '13.mp3', '14.mp3', '15.mp3', '16.mp3',
    '17.mp3', '18.mp3', '19.mp3', '20.mp3', '21.mp3'
];
scenes = ['sandgem.png', 'lake.png', 'center.png', 'jubilife.png',
    'floaroma.png', 'eterna.png', 'hearthome.png', 'amity.png', '209.png', 'solaceon.png', 'canalave.png', '216.png', 'snowpoint.png', 'valor.png', 'veilstone.png', 'galactic.png',
    'coronet.png', '228.png', 'end.png', 'end.png', 'end.png'
];
verss = ['vers.night', '', 'vers.night', 'vers.night', 'vers.day', '', 'vers.night', '', 'vers.night', 'vers.night', 'vers.night', 'vers.night', 'vers.night',
    'vers.day', 'vers.night', '', '', 'vers.night', 'vers.day', 'vers.night', ''
];
titles = ["Sandgem Town", "Lake", "Pokemon Center", "Jubilife City", "Floaroma Town", "Eterna Forest", "Hearthome City", "Amity Square",
    "Route 209", "Solaceon Town", "Canalave City", "Route 216", "Snowpoint City", "Valor Lakefront", "Veilstone City", "Team Galactic HQ",
    "Mt. Coronet", "Route 228", "League", "League", "Ending"
];
sprites = ['dw2.png', 'contest.png', 'snow.png'];

let playSong = true;

function playPause() {
    if (playSong) {
        scene = document.querySelector('#scene');
        song = document.querySelector('#song');
        sprite = document.querySelector('#dawn');
        play.src = "pause.png";

        song.play();
        playSong = false;
    } else {
        play.src = "play.png";
        song.pause();
        playSong = true;
    }
}

song.addEventListener('ended', function() {
    next();
});

function next() {
    ctr++;
    if (ctr > 20) {
        ctr = 0;
    }

    go(ctr);
}

function prev() {
    ctr--;
    if (ctr < 0) {
        ctr = 20;
    }
    go(ctr);
}

function go(ctr) {

    if (ctr == 6) {
        sprite.src = sprites[1];
    } else if (ctr == 11 || ctr == 12 || ctr == 16) {
        sprite.src = sprites[2];
    } else {
        sprite.src = sprites[0];
    }

    song.src = songs[ctr];
    scene.src = scenes[ctr];
    vers.innerHTML = verss[ctr];
    title.innerHTML = titles[ctr];
    playSong = true;
    playPause();
}