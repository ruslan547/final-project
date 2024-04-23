const popupForm = document.querySelector('.popap-form');

popupForm.addEventListener('submit', handleDonateClick);

function handleDonateClick (e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  for (const pair of formData.entries()) {
    console.log(pair[0], pair[1]);
    localStorage.setItem(pair[0], pair[1]);
  }

  window.open('/pages/landing/landing.html', '_self');
}
