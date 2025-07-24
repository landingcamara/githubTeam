 const navbar = document.getElementById("cc-navbar");


 window.addEventListener("scroll", () => {
     if (window.scrollY > 50) {
         navbar.classList.add("navbar-scrolled");
     }else{
         navbar.classList.remove("navbar-scrolled");
     }
 });

 const btn = document.getElementById("navBtn");

 btn.addEventListener("click", () => {
     btn.classList.toggle("clicked");
 });

//  ...........................QUANTITE .................

 let quantite1 = 0;
  function changerQuantite1(val) {
    quantite1 = Math.max(0, quantite1 + val); // empêche valeur négative
    document.getElementById('quantite1').innerText = quantite1;
  }
  let quantite2 = 0;
  function changerQuantite2(val) {
    quantite2 = Math.max(0, quantite2 + val); // empêche valeur négative
    document.getElementById('quantite2').innerText = quantite2;
  }
let quantite3 = 0;
  function changerQuantite3(val) {
    quantite3 = Math.max(0, quantite3 + val); // empêche valeur négative
    document.getElementById('quantite3').innerText = quantite3;
  }
  let quantite4 = 0;
  function changerQuantite4(val) {
    quantite4 = Math.max(0, quantite4 + val); // empêche valeur négative
    document.getElementById('quantite4').innerText = quantite4;
  }
  let quantite5 = 0;
  function changerQuantite5(val) {
    quantite5 = Math.max(0, quantite5 + val); // empêche valeur négative
    document.getElementById('quantite5').innerText = quantite5;
  }
  let quantite6 = 0;
  function changerQuantite6(val) {
    quantite6 = Math.max(0, quantite6 + val); // empêche valeur négative
    document.getElementById('quantite6').innerText = quantite6;
  }

  // ............................. checked...............

  
  const select = document.querySelectorAll("choix");
  const waveMethod =document.getElementById('waveMethod');
  const orangeMoneyMethod =document.getElementById('orangeMoneyMethod');
  const paypalMethod =document.getElementById('paypalMethod');

 
  select.forEach(select => {
    select.addEventListener('change', function (){
      //Masquer tous les divs
      waveMethod.classList.add('hidden');
      orangeMoneyMethod.classList.add('hidden');
      paypalMethod.classList.add('hidden');

      // Afficher le bon div
      if (this.value === 'a') {
        waveMethod.classList.remove('hidden');
      }else if (this.value === 'b'){
        orangeMoneyMethod.classList.remove('hidden');
      }else if (this.value === 'c'){
        paypalMethod.classList.remove('hidden');
      }
    });
  });

    // ...................................SLIDE.................

const buttons = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

// Tableau img : [0, 1, 2]

buttons.forEach((button) =>{
    button.addEventListener("click", (e) =>{
        const calcNextSlide = e.target.id  ==="next" ? 1 : -1;
        const slideActive = document.querySelector(".active");

        newIndex =calcNextSlide + [...slides].indexOf(slideActive);

        if(newIndex<0) newIndex = [...slides].length - 1
        if(newIndex >=[...slides].length) newIndex = 0;
        slides[newIndex].classList.add("active");

        
        slideActive.classList.remove("active");
        //console.log(e.target.id);
    });
});

const btnTop = document.getElementById("btnTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});