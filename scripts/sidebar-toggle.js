let toggleBtn = document.getElementById("mobileSidebarToggle");
let sidebar = document.getElementById("sideBar");

let isToggled = false; // Flag for checking if sidebar is active
function toggleSidebar() {
    
    isToggled = !isToggled;

    toggleBtn.classList.toggle("mobileSidebarToggle-open");
    sidebar.classList.toggle("sideBar-open");

    // Add/Remove a listener for detecting when the user clicks/taps outside of the sidebar to close it
    if (isToggled) {
        // Add only when sidebar is active
        document.getElementById("center").addEventListener("click", toggleSidebar);
    } 
    else {
        // Remove when sidebar is inactive
        document.getElementById("center").removeEventListener("click", toggleSidebar);
    }
}