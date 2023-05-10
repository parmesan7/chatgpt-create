const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (nameInput.value === '') {
    showError(nameInput, 'お名前を入力してください');
  } else {
    hideError(nameInput);
  }
  
  if (emailInput.value === '') {
    showError(emailInput, 'メールアドレスを入力してください');
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, '正しいメールアドレスを入力してください');
  } else {
    hideError(emailInput);
  }
  
  if (messageInput.value === '') {
    showError(messageInput, 'お問い合わせ内容を入力してください');
  } else {
    hideError(messageInput);
  }
});

function showError(input, message) {
  const error = document.createElement('div');
  error.classList.add('error');
  error.innerText = message;
  input.parentElement.appendChild(error);
}

function hideError(input) {
  const error = input.parentElement.querySelector('.error');
  if (error) {
    error.remove();
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}