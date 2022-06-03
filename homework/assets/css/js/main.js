let btn = document.querySelector("#btn");
let menuBtn = document.querySelector("#menu-btn");
let searchBtn = document.querySelector("#btn2");
let sidebar = document.querySelector(".sidebar");
let subMenu = document.querySelector(".sub-menu");
let linkName1 = document.querySelector(".links-name1");
let linkName2 = document.querySelector(".links-name2");
let linkName3 = document.querySelector(".links-name3");
let linkName4 = document.querySelector(".links-name4");
let linkName5 = document.querySelector(".links-name5");
let linkName6 = document.querySelector(".links-name6");
let linkName7 = document.querySelector(".links-name7");
let linkName8 = document.querySelector(".links-name8");
let logoName = document.querySelector(".logo-name");
let collapseText = document.querySelector(".collapse-text");
let rightIcon = document.querySelector(".right-icon");
let leftIcon = document.querySelector(".arrow-collapse");
let tool1 = document.querySelector(".tool1");
let tool2 = document.querySelector(".tool2");
let tool3 = document.querySelector(".tool3");
let tool4 = document.querySelector(".tool4");
let tool5 = document.querySelector(".tool5");
let tool6 = document.querySelector(".tool6");
let tool7 = document.querySelector(".tool7");
let tool8 = document.querySelector(".tool8");
let resize = document.querySelector(".sub-search");
let subSearch = document.querySelector(".sub-search");
btn.onclick = function() {
    sidebar.classList.toggle("active");
    linkName1.classList.toggle("active");
    linkName2.classList.toggle("active");
    linkName3.classList.toggle("active");
    linkName4.classList.toggle("active");
    linkName5.classList.toggle("active");
    linkName6.classList.toggle("active");
    linkName7.classList.toggle("active");
    linkName8.classList.toggle("active");
    logoName.classList.toggle("active");
    collapseText.classList.toggle("active");
    rightIcon.classList.toggle("active-icon");
    leftIcon.classList.toggle("active-icon");
    tool1.classList.toggle("sub-active");
    tool2.classList.toggle("sub-active");
    tool3.classList.toggle("sub-active");
    tool4.classList.toggle("sub-active");
    tool5.classList.toggle("sub-active");
    tool6.classList.toggle("sub-active");
    tool7.classList.toggle("sub-active");
    tool8.classList.toggle("sub-active");
}
menuBtn.onclick = function(){
    subMenu.classList.toggle("d-none");
    resize.classList.toggle("resize-left");
}
searchBtn.onclick = function(){
    resize.classList.toggle("d-none-search");
}