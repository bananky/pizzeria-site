function changeTheme(){
  let themeLink = document.getElementById("theme-link");


  console.log( window.sessionStorage.getItem("dark_theme") );

  if(window.sessionStorage.getItem("dark_theme") === "true"){
    themeLink.href = "light.css";
    window.sessionStorage.setItem("dark_theme", "false");
    // window.darkTheme = false;
  }else {
    themeLink.href = "dark.css";
    window.sessionStorage.setItem("dark_theme", "true");
    // window.darkTheme = true;
  }
}
