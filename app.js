const menu = document.querySelector('.Menu');
const menu2 = document.querySelector('.Menu2');
const sidebar = document.querySelector('.sideBar');
const activity = document.querySelector('.activityCards');


const addView = ()=> {
    sidebar.classList.toggle("sideBarView");
    activity.classList.toggle("activityView")
    menu.classList.toggle("menuView")

}

menu.addEventListener('click',addView);
menu2.addEventListener('click',addView);
