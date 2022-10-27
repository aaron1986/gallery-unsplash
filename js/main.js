
let imageElement = document.querySelector('.image-box');
function loadImg(url) {
    let col = url.value;
    imageElement.innerHTML='';
    for(let i=1; i < 10; i++) {
        let rand = Math.ceil(Math.random() * 8) * i
        let url = `<img src="https://source.unsplash.com/weekly?${col}%20${rand}">`  
        imageElement.insertAdjacentHTML('beforeend', url);
    }    
}

/*------ CONTACT FORM --------*/
const emailError = document.getElementById('email-error');


function validateEmail() {
    const email = document.getElementById('email').value;
  
    if(email.length == 0) {
        emailError.innerHTML = 'Email is Required';
        return false;
    }
  
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'email is invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color:green"></i>';
  return true;
  }

  function validateform() {
    if(!validateEmail()) {
      submitError.innerHTML = 'Please enter correct values';
      return false;
    }
}


const images = [...document.querySelectorAll('.image-box')];

// popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');


images.forEach((item, i) => {
    item.addEventListener('click', () => {
      const imageSource = event.target.src
        updateImage(i, imageSource);
        popup.classList.toggle('active');
    })
})

const updateImage = (i, src) => {
    let path = ``;
    largeImage.src = src;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})



