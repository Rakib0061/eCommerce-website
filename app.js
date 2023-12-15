const curncy_li = document.querySelectorAll(".curncy_li");
const curncy_ul = document.getElementById("curncy_ul");
const curncy_btn = document.getElementById("curncy_btn");

curncy_btn.addEventListener("click", () => {
    curncy_ul.classList.toggle("d-none");
    curncy_btn.children[2].style.transform != "rotate(180deg)" ?  curncy_btn.children[2].style.transform = "rotate(180deg)" :  curncy_btn.children[2].style.transform = "rotate(0deg)";
});

curncy_li.forEach(vlu => {
    vlu.addEventListener("click", () => {
        let x = vlu.getAttribute("data-title");
        
        curncy_btn.children[1].innerHTML = x;

    });
});