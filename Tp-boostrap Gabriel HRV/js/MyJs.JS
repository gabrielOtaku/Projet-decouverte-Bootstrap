/*Tableau President + Animation*/
/*
const presidents = [
  {
    nom: "Joe Biden",
    biographie:
      "46e président des États-Unis. Il a été vice-président de Barack Obama.",
    drapeau:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    bgColor: "#0033A0",
  },
  {
    nom: "Emmanuel Macron",
    biographie:
      "25e président de la République française. Il est le plus jeune président de l'histoire française.",
    drapeau:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    bgColor: "#002395",
  },
  {
    nom: "Vladimir Poutine",
    biographie:
      "Président de la Fédération de Russie depuis 2012. Ancien officier du KGB.",
    drapeau:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
    bgColor: "#D52B1E",
  },
  {
    nom: "Justin Trudeau",
    biographie:
      "23e premier ministre du Canada. Chef du Parti libéral du Canada depuis 2013.",
    drapeau:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone_2011%29.svg",
    bgColor: "#D20D3C",
  },
  {
    nom: "Xi Jinping",
    biographie:
      "Président de la République populaire de Chine. Secrétaire général du Parti communiste chinois.",
    drapeau:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    bgColor: "#DE2910",
  },
  {
    nom: "Volodymyr Zelensky",
    biographie: "6e président de l'Ukraine. Ancien acteur et comédien.",
    drapeau:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
    bgColor: "#FFD500",
  },
  {
    nom: "Rishi Sunak",
    biographie:
      "Premier ministre du Royaume-Uni depuis 2022. Chef du Parti conservateur.",
    drapeau:
      "https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg",
    bgColor: "#00247D",
  },
];*/

/*Implementation des fonctions d'animation*/
/*const carousel = document.querySelector("#carouselExampleDark");

const body = document.querySelector("body");


carousel.addEventListener("slid.bs.carousel", function (e) {
  const activeSlideIndex = e.to;

  // Change la couleur selon le president
  body.style.backgroundColor = presidents[activeSlideIndex].bgColor;

  // Met à jour le texte de la légende
  const captionTitle = carousel.querySelector(
    ".carousel-item.active .carousel-caption h5"
  );
  const captionText = carousel.querySelector(
    ".carousel-item.active .carousel-caption p"
  );

  if (captionTitle && captionText) {
    captionTitle.textContent = presidents[activeSlideIndex].nom;
    captionText.textContent = presidents[activeSlideIndex].biographie;
  }
});

// Initialisation de la première diapositive
body.style.backgroundColor = presidents[0].bgColor;
const captionTitle = carousel.querySelector(
  ".carousel-item.active .carousel-caption h5"
);
const captionText = carousel.querySelector(
  ".carousel-item.active .carousel-caption p"
);
if (captionTitle && captionText) {
  captionTitle.textContent = presidents[0].nom;
  captionText.textContent = presidents[0].biographie;
}*/

/*Animation Chanson*/

const audio = document.getElementById('audio-file');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');
const icon = playBtn.querySelector("i");

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove("bi-play-fill");
    icon.classList.add("bi-pause-fill");
  } else {
    audio.pause();
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-play-fill");
  }
});

audio.addEventListener('ended', () => {
  icon.classList.remove("bi-pause-fill");
  icon.classList.add("bi-play-fill");
  progressBar.style.width = "0%";
});

// Mise à jour de la barre de progression
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});
