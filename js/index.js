
// 1 Resize Event
fancyDiv = document.createElement("div");
fancyDiv.style.width = '200px';
fancyDiv.style.height = '200px';
fancyDiv.textContent = 'Fancy Text in my Fancy Div';
document.body.appendChild(fancyDiv);

function reportWindowSize() {
  fancyDiv.textContent = window.innerHeight;

}

window.onresize = reportWindowSize;

// 2 DBL event
const card = document.querySelector('.intro img');

card.addEventListener('dblclick', function (e) {
    card.toggleAttribute('hidden');
});

// 3 Window size
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  console.log(scrollPos)
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    } );

    ticking = true;
  }
}, {once:true});

// 4  Load Event
window.addEventListener('load', (event) => {
    console.log('Ready to go, page is loaded.');
  });

// 5-7. Opt In Form

let signUp = document.createElement("p");
signUp.style.marginLeft = '15px';
signUp.style.marginTop = '15px';
signUp.textContent = "Login to your account:";

const mailForm = document.querySelector('.content-destination');
mailForm.appendChild(signUp);

signUp.addEventListener('mouseover', function(event) {


// Create the Form
let form = document.createElement("form");
form.setAttribute("method","post");
form.setAttribute("action","submit.php");
form.style.marginTop = '15px';
form.style.marginLeft = '15px';

let ID = document.createElement("input");
ID.setAttribute("type", "text");
ID.setAttribute("name", "emailID");
ID.setAttribute("placeholder", "E-Mail");
  
// Create an input element for password
let PWD = document.createElement("input");
PWD.setAttribute("type", "password");
PWD.setAttribute("name", "password");
PWD.setAttribute("placeholder", "Password");
PWD.addEventListener('blur' , (event) => {
    event.target.style.background = "";
})
PWD.addEventListener('focus' , (event) => {
    event.target.style.background = "gray";
})
  
// Create a submit button
let s = document.createElement("input");
s.setAttribute("type", "submit");
s.setAttribute("value", "Submit");
  
// Append the email_ID input to the form
form.append(ID); 
                
// Append the password to the form
form.append(PWD); 
                
// Append the button to the form
form.append(s); 

const headerForm = document.querySelector('.content-destination');
headerForm.appendChild(form);

}, { once: true })
               
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