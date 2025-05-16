function mode(){
    let icon = document.querySelector("#icon");
    let r = document.querySelector(":root")
    icon.classList.toggle("active");
    if(icon.classList.contains("active")){
        r.style.setProperty("--light", "rgb(26, 26, 26)");
        r.style.setProperty("--dark", "rgb(240, 240, 240)");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        r.style.setProperty("--light", "rgb(240, 240, 240)");
        r.style.setProperty("--dark", "rgb(26, 26, 26)");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}