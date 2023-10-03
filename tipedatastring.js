const kalimat = document.querySelector('#kalimat');
const userInput = document.querySelector('#user-input');
const role  = document.querySelector('#role');
const roleInput = document.querySelector('#role-input');
const availability  = document.querySelector('#availability');
const availabilityInput = document.querySelector('#availability-input');
const usia  = document.querySelector('#usia');
const usiaInput = document.querySelector('#usia-input');
const lokasi  = document.querySelector('#lokasi');
const lokasiInput = document.querySelector('#lokasi-input');
const years = document.querySelector('#years');
const yearsInput = document.querySelector('#years-input');
const email  = document.querySelector('#email');
const emailInput = document.querySelector('#email-input');

userInput.addEventListener('keyup', (e) => {
  kalimat.innerText = e.target.value;
});
roleInput.addEventListener('keyup', (e) => {
    role.innerText = e.target.value;
  });
  availabilityInput.addEventListener('keyup', (e) => {
    availability.innerText = e.target.value;
  });
  usiaInput.addEventListener('keyup', (e) => {
    usia.innerText = e.target.value;
  });
  lokasiInput.addEventListener('keyup', (e) => {
    lokasi.innerText = e.target.value;
  });
  yearsInput.addEventListener('keyup', (e) => {
    years.innerText = e.target.value;
  });
  emailInput.addEventListener('keyup', (e) => {
    email.innerText = e.target.value;
  });