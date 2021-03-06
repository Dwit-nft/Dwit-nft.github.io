// Initialize Firebase(2)
var config = {
    apiKey: "AIzaSyCSHjjkLTpGzWnMfpBIJiI0KQqSPhOHmk8",
    authDomain: "dwit-64f7b.firebaseapp.com",
    databaseURL: "https://dwit-64f7b-default-rtdb.firebaseio.com",
    projectId: "dwit-64f7b",
    storageBucket: "dwit-64f7b.appspot.com",
    messagingSenderId: "438898098924",
    appId: "1:438898098924:web:25865f9f0b48c026b81bc9",
    measurementId: "G-Q9MEE9FVZV"
  };
firebase.initializeApp(config);

//Reference for form collection(3)
let formMessage = firebase.database().ref('detail');

//listen for submit event//(1)
document
  .getElementById('contactForm')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#message').value;
  
  //send message values
  sendMessage(name, email,message);

  if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
  {
    alert("You have entered an invalid email address!");
    return (false);
  }
  else
  {
    //send message values
    sendMessage(name, email,message);

    //Show Alert Message(5)
    alert("Thanks "+ name +". Your query has been submitted");
    
  }
    document.getElementById("contactForm").reset();
}

//Send Message to Firebase(4)

function sendMessage(name, email,message) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    message:message
  });
}