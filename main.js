// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMessage = document.querySelector("#modal");
errorMessage.setAttribute("class", "hidden");
function hidError(){
  errorMessage.setAttribute("class", "hidden");
}

const hearts = document.querySelectorAll(".like-glyph");
function like(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      if (heart.innerHTML == EMPTY_HEART){
        heart.innerHTML = FULL_HEART;
        heart.setAttribute('class','activated-heart')
      }
      else if (heart.innerHTML == FULL_HEART){
        heart.innerHTML = EMPTY_HEART;
        heart.removeAttribute('class','like-glyph')
      }
    })
    .catch(function(error) {
      errorMessage.removeAttribute("class");
      setTimeout(hidError(),3000)
    });
}

for (const glyph of hearts) {
  
  glyph.addEventListener("click", like);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
