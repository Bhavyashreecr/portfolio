
/* h2 element of banner */
function myFunction(element, color) {
  element.style.color = color;
}
function myFunction1(element, color){
  element.style.color = color;
}
/*button element of banner */
function myFunc(element, color){
    element.style.backgroundColor = color;
}
function myFunc2(element, color){
  element.style.backgroundColor = color;
}

/*text change of download resume button in footer */
function change(){
  document.getElementById("download").innerHTML="Downloaded"; 
}

/* card image change on mouseover and mouseout */
/*img1*/
function setNewImage(){
  document.getElementById('img1').src="/images/c ACADEMY.jpg";
}
function setOldImage(){
  document.getElementById('img1').src="/images/colmar.jpg"
}

/*img2*/
function setNewImage1(){
  document.getElementById('img2').src="/images/t games.jpg";
}
function setOldImage1(){
  document.getElementById('img2').src="/images/toys.jpg"
}

/*img3*/
function setNewImage2(){
  document.getElementById('img3').src="/images/c door.jpg";
}
function setOldImage2(){
  document.getElementById('img3').src="/images/chore.jpg"
}

/* about section readmore button */

function readFunc() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("morePara");
  var btnText = document.getElementById("read-more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

