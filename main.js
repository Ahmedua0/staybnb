let navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach(link =>{
    link.addEventListener("click", function(){
        document.querySelector(".active").classList.remove("active");
        link.classList.add("active")
    })
})

let navbar = document.getElementById("navbar");
let icon = document.querySelector(".icon");
icon.onclick = function(){
navbar.classList.toggle("hidemenu");
}