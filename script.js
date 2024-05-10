const prevButton = document.getElementById("prevButton");
const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");
const song = document.getElementById("song");
const songTitle = document.getElementById("songTitle");
const songCover = document.getElementById("songCover");
const cover = document.getElementById("cover");

const musics = [
  "Bury The Light - Casey Edward.mp3",
  "Dragonforce - Through The Fire and Flames.mp3",
  "Iwan Fals - Yang Terlupakan.mp3",
  "Menanti Kejujuran.mp3",
  "NOAH - Bintang di Surga.mp3",
];

const covers = [
  "devil may cry-cover.jpeg",
  "dragon-cover.jpg",
  "iwan fals-cover.jpg",
  "gong-cover.jpeg",
  "noah-cover.png",
];

const musicTitles = [
  "Bury The Light",
  "Through The Fire and Flames",
  "Yang Terlupakan",
  "Menanti Kejujuran",
  "Bintang di Surga",
];

let order = 0;
let rotation = null;
let angle = 0;

songTitleHandler();
changeCover();

playButton.addEventListener("click", (event) => {
  const playIcon = playButton.getElementsByTagName("i")[0];
  if (playIcon.classList.contains("fa-play")) {
    song.play();
    playIcon.classList.remove("fa-play");
    playIcon.classList.add("fa-pause");
    playButton.style.paddingLeft = "0";
    startRotate();
  } else if (playIcon.classList.contains("fa-pause")) {
    song.pause();
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play");
    playButton.style.paddingLeft = "5px";
    stopRotate();
  }
});

nextButton.addEventListener("click", (event) => {
  song.pause();
  song.currentTime = 0;

  if (order < 4) {
    order++;
  } else {
    order = 0;
  }

  stopRotate();
  angle = 0;
  cover.style.transform = `rotate(${angle}deg)`;

  musicHandler();
  songTitleHandler();
  changeCover();
});

prevButton.addEventListener("click", (event) => {
  song.pause();
  song.currentTime = 0;

  if (order > 0) {
    order--;
  } else {
    order = musics.length - 1;
  }

  stopRotate();
  angle = 0;
  cover.style.transform = `rotate(${angle}deg)`;

  musicHandler();
  songTitleHandler();
  changeCover();
});

function songTitleHandler() {
  const titleText = musicTitles[order];
  songTitle.innerHTML = titleText;
}

function changeCover() {
  songCover.setAttribute("src", `img/${covers[order]}`);
}

function musicHandler() {
  song.setAttribute("src", `audio/${musics[order]}`);
  const playIcon = playButton.getElementsByTagName("i")[0];
  playIcon.classList.remove("fa-pause");
  playIcon.classList.add("fa-play");
}

function rotateCover() {
  angle -= 0.9;
  cover.style.transform = `rotate(${angle}deg)`;

  rotation = requestAnimationFrame(rotateCover);
}

function startRotate() {
  if (!rotation) {
    rotation = requestAnimationFrame(rotateCover);
  }
}

function stopRotate() {
  if (rotation) {
    cancelAnimationFrame(rotation);
    rotation = null;
  }
}
