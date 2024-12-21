
/** THIS JS FILE CONTAINS ALL COMMONLY SHARED FUNCTIONALITIES */

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

function closeSidebar() {
    
    if(isToggled) {
        toggleSidebar();
    }
}

// The current theme, default to Cosmic.
let currentTheme = localStorage.getItem("theme") != null ? localStorage.getItem("theme") : "Cosmic";

let settingsContainer = null;
function toggleSettings() {
  
  closeSidebar();
  // Check if the settings have been already added to the document
  // if not create the settings
  if(document.getElementById("settingsContainer") == null){
    createSettings();
  }
  else {
    settingsContainer = document.getElementById("settingsContainer");
  }

  if(settingsContainer.style.display == "flex"){
    settingsContainer.style.display = "none";
  }
  else {
    settingsContainer.style.display = "flex";
  }
}

/** Creates and adds the settings to the center div.
*/
function createSettings() {
  
  // Container/Wrapper for the settings
  settingsContainer = document.createElement('div');
  settingsContainer.id = "settingsContainer";
  settingsContainer.className = "settingsContainer";
  document.getElementById("center").appendChild(settingsContainer);

  // Main area containing all the content
  let settingsContent = document.createElement('div');
  settingsContent.id = "settingsContent";
  settingsContent.className = "settingsContent";
  settingsContainer.appendChild(settingsContent);

  let settingsTop = document.createElement('div');
  settingsTop.id = "settingsTop";
  settingsTop.className = "settingsTop";
  settingsContent.appendChild(settingsTop);

  let settingsHeader = document.createElement('h1');
  settingsHeader.id = "settingsHeader";
  settingsHeader.className = "settingsHeader";
  settingsHeader.textContent = "Settings";
  settingsTop.appendChild(settingsHeader);

  let settingsClose = document.createElement('button');
  settingsClose.id = "settingsClose";
  settingsClose.className = "settingsClose";
  settingsClose.title = "Close"
  settingsClose.onclick = toggleSettings;
  settingsContent.appendChild(settingsClose);

  // The area containing the actual settings
  let settings = document.createElement('div');
  settings.id = "settings";
  settings.className = "settings";
  settingsContent.appendChild(settings);

  createThemeSettings(settings);
}

function createThemeSettings(settings) {
  
  // Theme settings section container
  let themeSettings = document.createElement('div');
  themeSettings.id = "themeSettings";
  themeSettings.className = "themeSettings";
  settings.appendChild(themeSettings);

  // Top part has the header
  let themeSettingsTop = document.createElement('div');
  themeSettingsTop.id = "themeSettingsTop";
  themeSettingsTop.className = "themeSettingsTop";
  themeSettings.appendChild(themeSettingsTop);

  let themeSettingsHeader = document.createElement('h2');
  themeSettingsHeader.id = "themeSettingsHeader";
  themeSettingsHeader.className = "themeSettingsHeader";
  themeSettingsHeader.textContent = "Theme";
  themeSettingsTop.appendChild(themeSettingsHeader);

  // Bottom part has the options
  let themeSettingsBottom = document.createElement('div');
  themeSettingsBottom.id = "themeSettingsBottom";
  themeSettingsBottom.className = "themeSettingsBottom";
  themeSettings.appendChild(themeSettingsBottom);

  let themeDescription = document.createElement('p');
  themeDescription.id = "themeDescription";
  themeDescription.className = "themeDescription";
  themeDescription.textContent = "Change the overall appearance";
  themeSettingsBottom.appendChild(themeDescription);

  // create radio buttons for themes
  let themes = ["Cosmic", "Dark", "Light"];
  for(x of themes){

    let radio = document.createElement('input');
    radio.setAttribute('type', 'radio');
    radio.setAttribute('name', 'themes');
    radio.className = "themeRadioButton";
    radio.dataset.theme = x;
    radio.onclick = () => { 
      setTheme(radio.dataset.theme); 
    };

    if(x == currentTheme) {
      radio.checked = true;
    }
    themeSettingsBottom.appendChild(radio);

    let label = document.createElement('label');
    label.setAttribute('for', x);
    label.textContent = x;
    themeSettingsBottom.appendChild(label);

    // let linebreak = document.createElement('br');
    // themeSettingsBottom.appendChild(linebreak);
  }
}

/** Sets the current theme based on the given parameter.
 * @param {string} selectedTheme - The theme to be applied.
*/
function setTheme(selectedTheme) {
  if(selectedTheme != currentTheme){
    document.documentElement.classList.toggle(currentTheme);
    currentTheme = selectedTheme;
    localStorage.setItem("theme", currentTheme);
    applyTheme();
  }
}

function applyTheme() {
  document.documentElement.classList.toggle(currentTheme);
}


/** Creates a small effect at the cursor's location when the user clicks anything on the page. 
 * @param {MouseEvent} click - The MouseEvent object.
*/
function doClickEffect(click) {

  // Add the "effect" div
  const cEffect = document.createElement("div");
  cEffect.className = "click-effect";
  document.body.appendChild(cEffect);

  // Position it at the click position
  cEffect.style.left = `${click.clientX}px`;
  cEffect.style.top = `${click.clientY}px`;

  // When CSS animation is done, remove the element
  cEffect.onanimationend = () => document.body.removeChild(cEffect);
}
document.addEventListener("click", doClickEffect);