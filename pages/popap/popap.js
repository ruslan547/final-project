const popupForm = document.querySelector('.popap-form');

popupForm.addEventListener('submit', handleDonateClick);

function handleDonateClick (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.get('toDonate'));
  console.log(formData.get('animal'));
  console.log(formData.get('name'));
  console.log(formData.get('email'));
  console.log(formData.get('numberCode'));
}
