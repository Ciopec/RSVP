const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLi(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);

    const button = document.createElement('button');
    button.textContent = 'remove';
    li.appendChild(button);
    
    return li;
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const text = input.value;
    input.value = '';
    const li = createLi(text);
    ul.appendChild(li);
});

ul.addEventListener('change', (e) => {
    const checkbox = e.target;
    const listItem = checkbox.parentNode.parentNode;
    if(checkbox.checked)
        listItem.className = 'responded';
        else listItem.className = '';

});

ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON')
    e.target.parentNode.remove();
});