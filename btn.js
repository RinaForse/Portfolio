const btn = document.querySelector(".btn-project",);
const btnArrow = document.querySelector("#btn-project",);


btn.addEventListener("mouseover", ()=> {
    btnArrow.classList.add("active")
});

btn.addEventListener("mouseout", ()=> {
    btnArrow.classList.remove("active")
});

