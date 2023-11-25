const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector("#modal-close");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open");
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});



// const btn = document.querySelector("#btn-send",);
// btn.addEventListener("click", ()=> {
//     btn.classList.add("active")
// });

