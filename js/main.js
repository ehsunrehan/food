const menuBtn = document.getElementById("menu-btn");

const sidebar = document.getElementById("sidebar");

const closeBtn = document.getElementById("close-btn");

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