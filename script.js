const searchBar = document.querySelector(".search input")
const searchIcon2 = document.querySelector(".search span")
const search = document.querySelector(".search")
const logo = document.querySelector(".logo")
const navBtn = document.querySelector(".nav-btn")
const nav = document.querySelector("nav")
const searchIcon = document.querySelector(".searchIcon")

let flag = false;

searchIcon.addEventListener('click',()=>{

    if(flag == false){

         logo.style.display = "none";
    nav.style.display = "none";
    navBtn.style.display = "none";
    searchBar.style.display = "block"
    search.style.display = "flex"
    flag = true;
    
    }
   


})
search.addEventListener('click',()=>{
    if(flag == true){
        logo.style.display = "block";
        nav.style.display = "block";
        navBtn.style.display = "block";
        searchBar.style.display = "none"
        search.style.display = "none"
        flag = false
    }
})


