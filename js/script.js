const emailForm = document.querySelector('.form');
const emailInput = document.querySelector('.form__email-input')


emailForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  const email = emailInput.value;
  const valid = reg.test(email);
  if (valid) {
  emailInput.classList.remove('form__email-input--invalid')
  emailForm.classList.remove('form--invalid');
  } else {
    emailInput.classList.add('form__email-input--invalid')
    emailForm.classList.add('form--invalid');
  }
});
  


// const validEmail = () => {
//   const email = emailInput.value;
//   console.log(email);

//   emailInput.reportValidity();
// };

// emailSubscription.addEventListener('input', () => {
//   const valueLength = emailSubscription.value.length;

//   if ( valueLength < MIN_EMAIL_LENGTH) {
//     emailSubscription.setCustomValidity('Check if the email is correct');
//   } else {
//     emailSubscription.setCustomValidity('');
//   }
//   emailSubscription.reportValidity();
// });

// const submitEmail = (emailInput) => {
//   emailInput.addEventListener('input', (evt) => {
//     console.log(emailInput.value)
//   })
// };


