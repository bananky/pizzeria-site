function myFunction(imgs) {

  var expandImg = document.getElementById("expandedImg");

  var imgText = document.getElementById("imgtext");

  expandImg.src = imgs.src;

  imgText.innerHTML = imgs.alt;

  expandImg.parentElement.style.display = "block";
}

function changeTheme(){
  let themeLink = document.getElementById("theme-link");


  console.log( window.sessionStorage.getItem("dark_theme") );

  if(window.sessionStorage.getItem("dark_theme") === "true"){
    themeLink.href = "light.css";
    window.sessionStorage.setItem("dark_theme", "false");
    // window.darkTheme = false;
  }else {
    themeLink.href = "dark_kontakt.css";
    window.sessionStorage.setItem("dark_theme", "true");
    // window.darkTheme = true;
  }
}
