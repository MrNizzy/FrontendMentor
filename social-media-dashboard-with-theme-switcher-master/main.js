function switchTheme(){
    let theme = document.getElementById("theme").classList;
    if(theme.contains("dark")){
        document.getElementById("theme").classList.remove("dark");
        document.getElementById("theme").classList.add("light");
    }else if(theme.contains("light")){
        document.getElementById("theme").classList.remove("light");
        document.getElementById("theme").classList.add("dark");
    }else{
        console.log("Theme switch not work");
    }
}