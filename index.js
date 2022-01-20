// I link HTML with JS
console.log("test if they are linked");

//functionnalities:
// 1-when i click in the btnPlus the quantity increment
// => var: btnPlus / qte
// 2-decrement
// 3-remove
// 4-like
// 5-total Price

//************************************************** */ù
// step2
const btnsPlus = document.querySelectorAll(".btn-plus");
const btnsMinus = document.querySelectorAll(".btn-moins");
const btnsRemove = document.getElementsByClassName("btn-delete");
const btnsLike = document.querySelectorAll("button.btn-like");
const like = document.getElementsByClassName("fas");
// multiple element [element1,element2,element3]
//const qtes = document.querySelectorAll(".quantity");
const qtes = document.getElementsByClassName("quantity");
//const btnsLike = document.querySelectorAll("button.btn-like");
//const svgLikes = document.querySelectorAll(".like");
console.log(btnsLike);
// qtes  [span1,span2,span3]
// step3 event and functions
// addEventListener("event", "function")=> 1 element
// nooooooooooooooooooooooooooooooo
//btnsPlus[0].addEventListener("click", function () {
//  alert("test");});
//btnsPlus[1].addEventListener("click", function () {  alert("test"); });
//  btnsPlus[2].addEventListener("click", function () { alert("test");});
//Increment event
for (let i = 0; i < btnsPlus.length; i++) {
  btnsPlus[i].addEventListener("click", function () {
    // qtes[i].innerHTML = +qtes[i].innerHTML + 1;
    // qtes[i].innerHTML++;
    if (qtes[i].innerHTML < 100) {
      btnsPlus[i].previousElementSibling.innerHTML =
        +btnsPlus[i].previousElementSibling.innerHTML + 1;
      totale();
    } else {
      alert("100 is the maximum quntity");
    }
  });
}

// decrement event
for (let i = 0; i < btnsMinus.length; i++) {
  btnsMinus[i].addEventListener("click", function () {
    // qtes[i].innerHTML = +qtes[i].innerHTML - 1;
    // qtes[i].innerHTML--;
    btnsMinus[i].childNodes[1].style.fill = "red!important";
    if (btnsMinus[i].nextElementSibling.innerHTML > 0) {
      btnsMinus[i].nextElementSibling.innerHTML--;
      totale();
    }
  });
}

// remove
for (let i = 0; i < btnsRemove.length; i++) {
  btnsRemove[i].addEventListener("click", function () {
    btnsRemove[i].parentElement.parentElement.remove();
    totale();
  });
}

// like button

for (let i = 0; i < like.length; i++) {
  like[i].addEventListener("click", function () {
    // if (like[i].style.color == "red") {
    //   like[i].style.color = "black";
    // } else {
    //   like[i].style.color = "red";
    // }
    // -----------------------------
    // or
    like[i].classList.toggle("btn-like");
  });
}
/*like with the svg
for (let i = 0; i < btnsLike.length; i++) {
  btnsLike[i].addEventListener("click", function () {
    if (svgLikes[i].style.fill == "red") {
      svgLikes[i].style.fill = "black";
    } else {
      svgLikes[i].style.fill = "red";
    }
  });
}*/

function totale() {
  // calcul total price
  // prices=[10,20,30,40]
  // qtes=[2,5,1,3]
  // totalPrice= 10*2+20*5+30*1+3*40
  const totalPrice = document.getElementById("prix-total");
  const qtes = document.querySelectorAll(".quantity");
  const prix = document.querySelectorAll(".prx");
  let somme = 0;
  for (let i = 0; i < prix.length; i++) {
    somme = somme + prix[i].innerHTML * qtes[i].innerHTML;
  }
  totalPrice.innerHTML = somme;
}
