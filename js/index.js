

// 7. Blur / focus event

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});

//-------------------------------------------------------------------------
// 8. Buttons
const buttons = document.querySelectorAll('.btn')

buttons[0].addEventListener('click', function(event) {
    buttons[0].textContent = 'Lets go to the beach!';
})

buttons[1].addEventListener('click', function(event) {
    buttons[1].textContent = 'Lets get outta here!';
})

buttons[2].addEventListener('click', function(event) {
    buttons[2].textContent = 'Take me away!';
})

//-------------------------------------------------------------------------
// 9. Changes footer text to blue when you hover
const footerText = document.querySelector('.footer');
footerText.addEventListener('mouseover', function(event) {
    console.log('Copyright');
    event.target.style.color = "#17A2B8";
})
//-------------------------------------------------------------------------
// 10. Logs 'Ashley used escape rope' to console when you press the esc key
function escKey(event) {
    if (event.keyCode === 27) { // Escape key
        console.log('Ashley used Escape Rope');
    }
}
document.addEventListener('keydown', escKey);

//-------------------------------------------------------------------------
// Stop propagation