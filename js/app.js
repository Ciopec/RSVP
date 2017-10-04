const form = document.getElementById('registrar');
const input = form.querySelector('input');

form.addEventListener('submit',(e) => {
    console.log(input.value);
});