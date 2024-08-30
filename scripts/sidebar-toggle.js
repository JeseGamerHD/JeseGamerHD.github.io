let toggleBtn = document.getElementById("mobileSidebarToggle");
let sidebar = document.getElementById("sideBar");

function toggleSidebar() {
    
    toggleBtn.classList.toggle("mobileSidebarToggle-open");
    sidebar.classList.toggle("sideBar-open");
}