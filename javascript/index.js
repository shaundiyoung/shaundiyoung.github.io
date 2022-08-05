let h1 = document.getElementById("caroselH1");
// let trackPosition = 0;
// h1.style.position = "absolute";


h1.addEventListener("mouseover", () => {
h1.style.fontSize = "4rem";
h1.style.transform = 'rotate(30deg)';
});
h1.addEventListener("mouseleave", () => {
    h1.style.fontSize = "8rem";
    
h1.style.transform = 'rotate(0deg)';
});

