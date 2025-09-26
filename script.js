// creating sidebar


let menu = document.querySelector("#nav_right h1");
let aside = document.querySelector("aside");
let sidebar = document.querySelector("#sidebar_main");

let hover_sidebar = document.querySelector(".sidebar");

let main = document.querySelector("main");

let toggle = 1;

menu.addEventListener("click", function () {

    if (toggle == 1) {
        hover_sidebar.style.display = "flex";
        aside.style.minWidth = "20%";
        main.style. marginLeft = "20%";
        sidebar.style.display = "none";
        toggle = 0;
    } else {
        hover_sidebar.style.display = "none";
        aside.style.minWidth = "0%";
        main.style. marginLeft = "80px";
        sidebar.style.display = "flex";
        toggle = 1;
    }

});

main.addEventListener("click", function () {
    hover_sidebar.style.display = "none";
    aside.style.minWidth = "0%";
    main.style. marginLeft = "80px";
    sidebar.style.display = "flex";
    toggle = 1;
});