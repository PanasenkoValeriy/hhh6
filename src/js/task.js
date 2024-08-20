import { formData } from './formData';

const form = document.getElementById('feedback-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  formData.name = event.target.name.value;
  formData.email = event.target.email.value;
  formData.message = event.target.message.value;

  console.log('formData', formData);
  alert('Форма успішно відправлена!');
}
