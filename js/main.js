const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

// sidebar
if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        sidebar.style.right="0";
    });
}

if(closeBtn){
    closeBtn.addEventListener("click",()=>{
        sidebar.style.right="-320px";
    });
}


// =======================
// FAKE AR SYSTEM
// =======================

const arBtn = document.getElementById("ar-btn");
const fakeAR = document.getElementById("fake-ar");
const closeAR = document.getElementById("close-ar");

if(arBtn){
    arBtn.addEventListener("click",()=>{
        fakeAR.classList.remove("hidden");
    });
}

if(closeAR){
    closeAR.addEventListener("click",()=>{
        fakeAR.classList.add("hidden");
    });
}