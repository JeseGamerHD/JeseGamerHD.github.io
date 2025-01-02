
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

let formContainer = null;
function toggleForm() {
  
  if(formContainer == null){
    createContactForm();
  }

  if(formContainer.style.display == "flex"){
    formContainer.style.display = "none";
  }
  else {
    closeFormConfirmation();
    formContainer.style.display = "flex";
    document.getElementById("contactForm").style.display = "flex";
  }
}

function showFormConfirmation() {
  let form = document.getElementById("contactForm");
  form.style.display = "none";
  document.getElementById("formConfirmWrapper").style.display = "flex";
}

function closeFormConfirmation() {
  let formConfirmation = document.getElementById("formConfirmWrapper");
  formConfirmation.style.display = "none";
}

function createContactForm() {
  
  // Container
  formContainer = document.createElement('div');
  formContainer.id = "formContainer";
  formContainer.className = "formContainer";
  document.getElementById("center").appendChild(formContainer);

  // Workaround for the formspree redirect
  let dummyframe = document.createElement('iframe');
  dummyframe.id = "dummyframe";
  dummyframe.name = "dummyframe";
  dummyframe.style.display = "none";
  formContainer.appendChild(dummyframe);

  let formContentArea = document.createElement('div');
  formContentArea.id = "formContentArea";
  formContentArea.className = "formContentArea";
  formContainer.appendChild(formContentArea);

  let formContentAreaTop = document.createElement('div');
  formContentAreaTop.id = "formContentAreaTop";
  formContentAreaTop.className = "formContentAreaTop";
  formContentArea.appendChild(formContentAreaTop);

  let formClose = document.createElement('button');
  formClose.id = "formClose";
  formClose.className = "formClose";
  formClose.title = "Close"
  formClose.onclick = toggleForm;
  formContentArea.appendChild(formClose);

  // Top part, icon + text
  let formHeaderContainer = document.createElement('div');
  formHeaderContainer.id = "formHeaderContainer";
  formHeaderContainer.className = "formHeaderContainer";
  formContentAreaTop.appendChild(formHeaderContainer);

  let formIcon = document.createElement('img');
  formIcon.src = "/images/icons/ContactIcon.png";
  formHeaderContainer.appendChild(formIcon);

  let formHeader = document.createElement('h1');
  formHeader.textContent = "Contact";
  formHeaderContainer.appendChild(formHeader);

  // Actual form part (middle)
  let formWrapper = document.createElement('div');
  formWrapper.id = "formWrapper";
  formWrapper.className = "formWrapper";
  formContentArea.appendChild(formWrapper);

  let contactForm = document.createElement('form');
  contactForm.id = "contactForm";
  contactForm.className = "contactForm";
  contactForm.action = "https://formspree.io/f/mvggwnky";
  contactForm.method = "POST";
  contactForm.target = "dummyframe";
  contactForm.onsubmit = showFormConfirmation;

  let emailPart = document.createElement('div');
  emailPart.id = "emailPart";
  emailPart.className = "emailPart";
  contactForm.appendChild(emailPart);

  let emailLabel = document.createElement('label');
  emailLabel.textContent = "Your email:"
  emailPart.appendChild(emailLabel);

  let emailInput = document.createElement('input');
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "example@mail.to";
  emailInput.required = true;
  emailPart.appendChild(emailInput);

  let messagePart = document.createElement('div');
  messagePart.id = "messagePart";
  messagePart.className = "messagePart";
  contactForm.appendChild(messagePart);

  let messageLabel = document.createElement('label');
  messageLabel.textContent = "Your message:"
  messagePart.appendChild(messageLabel);

  let messageInput = document.createElement('textarea');
  messageInput.name = "message";
  messageInput.placeholder = "Type your message here.";
  messageInput.required = true;
  messagePart.appendChild(messageInput);

  let honeypot = document.createElement('input');
  honeypot.className = "honeypot";
  honeypot.type = "text";
  honeypot.name = "_gotcha";
  contactForm.appendChild(honeypot);

  let submitBtn = document.createElement('button');
  submitBtn.type = "submit";
  submitBtn.textContent = "Send";
  contactForm.appendChild(submitBtn);

  // Finally add the form
  formWrapper.appendChild(contactForm);

  // Create a confirmation display in advance
  let formConfirmWrapper = document.createElement('div');
  formConfirmWrapper.id = "formConfirmWrapper";
  formConfirmWrapper.className = "formConfirmWrapper";
  formConfirmWrapper.style.display = "none";
  formWrapper.appendChild(formConfirmWrapper);

  let confirmIcon = document.createElement('img');
  confirmIcon.src = "/images/icons/ConfirmIconLarge.png"
  formConfirmWrapper.appendChild(confirmIcon);

  let confirmMessage = document.createElement('h1');
  confirmMessage.textContent = "Message sent!";
  formConfirmWrapper.appendChild(confirmMessage);

  let closeConfirmBtn = document.createElement('button');
  closeConfirmBtn.textContent = "Close";
  closeConfirmBtn.onclick = toggleForm;
  formConfirmWrapper.appendChild(closeConfirmBtn);
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