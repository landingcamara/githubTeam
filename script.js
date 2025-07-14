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

 let quantite = 0;
  function changerQuantite(val) {
    quantite = Math.max(0, quantite + val); // empêche valeur négative
    document.getElementById('quantite').innerText = quantite;
  }
