const contactForm = document.querySelector('.contact-form');
const clearBtn = document.querySelector('.contact-form__clear');

contactForm.addEventListener('submit', handleSendClick);
clearBtn.addEventListener('click', handleClear);

function handleSendClick (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};

  formData.forEach(function(value, key){
    data[key] = value;
  });

  localStorage.setItem('contact-us', JSON.stringify(data));
  contactForm.reset();
}

function handleClear () {
  contactForm.reset();
}
