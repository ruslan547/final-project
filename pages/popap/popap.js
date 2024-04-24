const popupForm = document.querySelector('.popap-form');

popupForm.addEventListener('submit', handleDonateClick);

function handleDonateClick (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  })

  localStorage.setItem('donate', JSON.stringify(data));

  window.open('/pages/landing/landing.html', '_self');
}
