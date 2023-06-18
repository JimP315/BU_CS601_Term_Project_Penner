let selection = document.querySelector('select');
let preference = document.querySelector('h3');

selection.addEventListener('change', () => {
    preference.innerText = selection.options[selection.selectedIndex].text;
    console.log(selection.selectedIndex);
})
