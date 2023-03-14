import throttle from 'lodash.throttle';
//"Throttle" - це функція вищого порядку, яка дозволяє обмежити частоту викликів функції-обработчика за допомогою встановленого інтервалу часу. 
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[name="email"]');
const textareaEl = document.querySelector('textarea[name="message"]');

const LOCAL_KEY = 'feedback-form-state';
console.log(LOCAL_KEY); //значення полів "email" і "message" зберігаються в об'єкті, який потім зберігається в локальному сховищі за ключем "feedback-form-state".
const formData = {}; //пустий об'єкт для збережання даних форми, що надходять з input

formEl.addEventListener('input', throttle(handleInputOfForm, 500));
formEl.addEventListener('submit', handleSubmitOfForm);

function handleInputOfForm(event) { //тут event.target.name використовується, щоб зберегти значення введеного користувачем в об'єкт formData за ключем, який відповідає значенню атрибуту name поля форми. 
    formData[event.target.name] = event.target.value.trim();
    // console.log(event.target.name);
    // console.log(event.target.value);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData)); //в сховище setItem(додаю) значення ключа
    console.log(localStorage);
}

function handleSubmitOfForm(event) {
    event.preventDefault();//заборона перезагрузки сторінки
    formEl.reset(); //очищаю дані з форми 
    localStorage.removeItem(LOCAL_KEY); //очищаю локальні дані
    console.log(formData); //об'єкт з полями email, message та їхніми поточними значеннями.
}

// function addDataToForm() {
//     if (formData) {
//         let { email, message } = form.elements;
//         email.value = formData.email || '';
//         message.value = formData.message || '';
//     }
// }

// addDataToForm();


