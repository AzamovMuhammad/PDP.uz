window.onscroll = function () {
  let currentScrollpos = window.pageYOffset;
  if (currentScrollpos === 0) {
    document.getElementById("navbar").style.background =
      "rgba(47, 47, 47, 0.227)";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("link1").style.color = "white";
    document.getElementById("link2").style.color = "white";
    document.getElementById("link3").style.color = "white";
    document.getElementById("link4").style.color = "white";
    document.getElementById("white").style.display = "block";
    document.getElementById("black").style.display = "none";
    document.getElementById("fas").style.color = "white";
  } else {
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.boxShadow = "0px 1px 8px #c5c5c5";
    document.getElementById("link1").style.color = "black";
    document.getElementById("link2").style.color = "black";
    document.getElementById("link3").style.color = "black";
    document.getElementById("link4").style.color = "black";
    document.getElementById("black").style.display = "block";
    document.getElementById("white").style.display = "none";
    document.getElementById("fas").style.color = "black";
  }
};

// ================================history of pdp===============================
const timelineButtons = document.querySelectorAll(".year-btn");
const contentTitle = document.querySelector(".content h1");
const contentText = document.querySelector(".content p");
const contentImage = document.getElementById("content-image");

const data = {
  2017: {
    title: "PDP ga asos solindi",
    text: "O’z oldiga ulkan maqsadlarni qoʻygan holda, oʻquv markazi ochildi. Personal Development Process – axborot texnologiyalari taʼlim markazi. Ilk 300 o'quvchi muvaffaqiyatli bitirdi.",
    img: "assets/img/pdp history/2017.jpg",
  },
  2019: {
    title: "Yangi Markaz",
    text: "600 kishiga moʻljallangan yangi markaz ochilishi. Dasturchilarni intensiv tarzda tayyorlash uchun birinchi bootcamp kurslari taqdim etildi.",
    img: "assets/img/pdp history/2019.jpg",
  },
  2020: {
    title: "Onlayn Platforma",
    text: "Birinchi onlayn darslar: PDP Onlayn. Dasturlashni butun dunyodagi hamyurtlarimiz oʻrganishiga imkoniyat yaratildi va hozirda 20 ta davlatlardan 700 nafardan ortiq talabalar foydalanishmoqda.",
    img: "assets/img/pdp history/2020.jpg",
  },
  2021: {
    title: "Keng imkoniyatlar",
    text: "Sigʻimi 3000 tagacha boʻlgan yangi markaz ochilishi. Dasturchilarni ish bilan taʼminlash uchun autsors va rekruting kompaniyalari ochildi.",
    img: "assets/img/pdp history/2021.jpg",
  },
  2022: {
    title: "PDP University",
    text: "PDP University – ilgʻor mutaxassislarni tayyorlashga yoʻnaltirilgan toʻlaqonli IT Universiteti tashkil qilindi.",
    img: "assets/img/pdp history/2022.jpg",
  },
  2023: {
    title: "PDP School",
    text: "PDP School - O'zbekistondagi birinchi bor ITga ixtisoslashgan xususiy maktabga asos solindi",
    img: "assets/img/pdp history/2023.jpg",
  },
};

timelineButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".year-btn.active").classList.remove("active");
    button.classList.add("active");

    const year = button.getAttribute("data");
    contentTitle.textContent = data[year].title;
    contentText.textContent = data[year].text;
    contentImage.src = data[year].img;
  });
});

// ============================ modal part =====================================
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);


function playFingerSnap() {
  const audio = document.getElementById('audio');
  audio.play()
}
// playFingerSnap()