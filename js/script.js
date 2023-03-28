function toggleMode() {
   body.classlist.toggle('light-mode');

const modeMessage = body.classList.contains('light-mode')
   'Dark-Mode'
   : "Light-Mode"
   
modeStatus.innerText = "Currently in " + modeMessage;
}

modeToggle.addEventListener('click', toggleMode);
