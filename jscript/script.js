console.log("cześć");

let zmianaKoloru = document.querySelector(".header__button");
let container = document.querySelector(".container")
let naglowek = document.querySelector(".naglowek");

console.log(zmianaKoloru);

zmianaKoloru.addEventListener("click", () => {

   container.classList.toggle("białeTło");
});

let link = document.querySelector(".link")

let zmianaCzcionki = document.querySelector(".header__button--fontChange");

console.log(zmianaCzcionki);

zmianaCzcionki.addEventListener("click", () => {

   container.classList.toggle("czcionka");
});


zmianaKoloru.addEventListener("click", () => {

   if (zmianaKoloru.innerText === "Zmień nastrój") {
      zmianaKoloru.innerText = "Odczaruj nastrój"
   } else zmianaKoloru.innerText = "Zmień nastrój"
});

