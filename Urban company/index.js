const upper2main = document.querySelector("#upper2main"),
      firstImg = upper2main.querySelectorAll("img")[0],
      arrowIcons = document.querySelectorAll("#upper2 i");

let firstImgWidth = firstImg.clientWidth + 30;
let scrollWidth = upper2main.scrollWidth - upper2main.clientWidth;

const showHideIcons = () => {
    arrowIcons[0].style.display = upper2main.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = Math.round(upper2main.scrollLeft) >= Math.round(scrollWidth) ? "none" : "block";
};

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = firstImgWidth * 3;
        upper2main.scrollLeft += icon.id === "left" ? -scrollAmount : scrollAmount;
        setTimeout(showHideIcons, 60);
    });
});


showHideIcons();


// const cardlist = document.querySelector(".card-list"),
//       firstLi = cardlist.querySelectorAll("li")[0],
//       cardArrowIcons = document.querySelectorAll("#container2 i");

// let firstLiWidth = firstLi.clientWidth + 20;
// let cardScrollWidth = cardlist.scrollWidth - cardlist.clientWidth;

// const showHideCardIcons = () => {
//     cardArrowIcons[0].style.display = cardlist.scrollLeft === 0 ? "none" : "block";
//     cardArrowIcons[1].style.display = Math.round(cardlist.scrollLeft) >= Math.round(cardScrollWidth) ? "none" : "block";
// };

// cardArrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         cardlist.scrollLeft += icon.id === "left1" ? -firstLiWidth : firstLiWidth;
//         setTimeout(showHideCardIcons, 60);
//     });
// });

// showHideCardIcons();

const cardlist = document.querySelector(".card-list"),
      firstLi = cardlist.querySelectorAll("li")[0],
      cardArrowIcons = document.querySelectorAll("#container2 i");

let firstLiWidth = firstLi.clientWidth + 20;
let cardScrollWidth = cardlist.scrollWidth - cardlist.clientWidth;

const showHideCardIcons = () => {
   cardArrowIcons[0].style.display = cardlist.scrollLeft === 0 ? "none" : "block";
    cardArrowIcons[1].style.display = Math.round(cardlist.scrollLeft)+1 >= Math.round(cardScrollWidth) ? "none" : "block";
};

cardArrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = icon.id === "left1" ? -firstLiWidth : firstLiWidth;
        cardlist.scrollLeft += scrollAmount;
        setTimeout(showHideCardIcons, 60);
    });
});

showHideCardIcons();








const cardlist2 = document.querySelector(".card-list2"),
      firstLi2 = cardlist2.querySelectorAll("li")[0],
      cardArrowIcons2 = document.querySelectorAll("#container3 i");

let firstLiWidth2 = firstLi2.clientWidth + 20;
let cardScrollWidth2 = cardlist2.scrollWidth - cardlist2.clientWidth;

const showHideCardIcons2 = () => {
   cardArrowIcons2[0].style.display = cardlist2.scrollLeft === 0 ? "none" : "block";
   cardArrowIcons2[1].style.display = Math.round(cardlist2.scrollLeft)+1 >= Math.round(cardScrollWidth2) ? "none" : "block";
};

cardArrowIcons2.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = icon.id === "left2" ? -firstLiWidth2 : firstLiWidth2;
        cardlist2.scrollLeft += scrollAmount;
        setTimeout(showHideCardIcons2, 60);
    });
});

showHideCardIcons2();











const cardlist3 = document.querySelector(".card-list3"),
      firstLi3 = cardlist3.querySelectorAll("li")[0],
      cardArrowIcons3 = document.querySelectorAll("#container4 i");

let firstLiWidth3 = firstLi3.clientWidth + 20;
let cardScrollWidth3 = cardlist3.scrollWidth - cardlist3.clientWidth;

const showHideCardIcons3 = () => {
   cardArrowIcons3[0].style.display = cardlist3.scrollLeft === 0 ? "none" : "block";
   cardArrowIcons3[1].style.display = Math.round(cardlist3.scrollLeft)+1 >= Math.round(cardScrollWidth3) ? "none" : "block";
};

cardArrowIcons3.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = icon.id === "left3" ? -firstLiWidth3 : firstLiWidth3;
        cardlist3.scrollLeft += scrollAmount;
        setTimeout(showHideCardIcons3, 60);
    });
});

showHideCardIcons3();







const cardlist4 = document.querySelector(".card-list4"),
      firstLi4 = cardlist4.querySelectorAll("li")[0],
      cardArrowIcons4 = document.querySelectorAll("#container5 i");

let firstLiWidth4 = firstLi4.clientWidth + 20;
let cardScrollWidth4 = cardlist4.scrollWidth - cardlist4.clientWidth;

const showHideCardIcons4 = () => {
   cardArrowIcons4[0].style.display = cardlist4.scrollLeft === 0 ? "none" : "block";
   cardArrowIcons4[1].style.display = Math.round(cardlist4.scrollLeft)+1 >= Math.round(cardScrollWidth4) ? "none" : "block";
};

cardArrowIcons4.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = icon.id === "left4" ? -firstLiWidth4 : firstLiWidth4;
        cardlist4.scrollLeft += scrollAmount;
        setTimeout(showHideCardIcons4, 60);
    });
});

showHideCardIcons4();





const cardlist5 = document.querySelector(".card-list5"),
      firstLi5 = cardlist5.querySelectorAll("li")[0],
      cardArrowIcons5 = document.querySelectorAll("#container6 i");

let firstLiWidth5 = firstLi5.clientWidth + 20;
let cardScrollWidth5 = cardlist5.scrollWidth - cardlist5.clientWidth;

const showHideCardIcons5 = () => {
   cardArrowIcons5[0].style.display = cardlist5.scrollLeft === 0 ? "none" : "block";
   cardArrowIcons5[1].style.display = Math.round(cardlist5.scrollLeft)+1 >= Math.round(cardScrollWidth5) ? "none" : "block";
};

cardArrowIcons5.forEach(icon => {
    icon.addEventListener("click", () => {
        let scrollAmount = icon.id === "left5" ? -firstLiWidth5 : firstLiWidth5;
        cardlist5.scrollLeft += scrollAmount;
        setTimeout(showHideCardIcons5, 60);
    });
});

showHideCardIcons5();