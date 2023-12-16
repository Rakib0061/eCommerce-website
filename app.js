const curncy_li = document.querySelectorAll(".curncy_li");
const curncy_flg = document.querySelectorAll(".curncy_flg");
const curncy_ul = document.getElementById("curncy_ul");
const curncy_btn = document.getElementById("curncy_btn");

curncy_btn.addEventListener("click", () => {
    curncy_ul.classList.toggle("d-none");
    curncy_btn.children[2].style.transform != "rotate(180deg)" ?  curncy_btn.children[2].style.transform = "rotate(180deg)" :  curncy_btn.children[2].style.transform = "rotate(0deg)";
});

curncy_li.forEach(vlu => {
    vlu.addEventListener("click", () => {
        curncy_btn.children[1].innerHTML = vlu.getAttribute("data-title");
        
        curncy_flg.forEach(flg => {
            if (vlu.getAttribute("data-title") === flg.getAttribute("data-title")) {
                flg.classList.add("active");
            } else {
                flg.classList.remove("active");
            }
        })
    });
});