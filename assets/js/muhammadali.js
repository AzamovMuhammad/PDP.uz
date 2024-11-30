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


const modal2 = document.querySelector(".modal2");
const overlay2 = document.querySelector(".overlay2");
const openModalBtn2 = document.querySelector(".btn-open2");
const closeModalBtn2 = document.querySelector(".btn-close2");

// close modal function
const closeModal2 = function () {
  modal2.classList.add("hidden2");
  overlay2.classList.add("hidden2");
};

// close the modal when the close button and overlay is clicked
closeModalBtn2.addEventListener("click", closeModal2);
overlay2.addEventListener("click", closeModal2);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden2")) {
    closeModal2();
  }
});

// open modal function
const openModal2 = function () {
  modal2.classList.remove("hidden2");
  overlay2.classList.remove("hidden2");
};
// open modal event
openModalBtn2.addEventListener("click", openModal2);

  

function playFingerSnap() {
  const audio = document.getElementById('audio');
  audio.play()
}
// playFingerSnap()