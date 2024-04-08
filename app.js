const div = document.querySelector('div');
const h1 = document.createElement('h1');
h1.textContent = '0';
div.appendChild(h1);

const buttonDecrease = document.createElement('button');
buttonDecrease.textContent = '-';
div.appendChild(buttonDecrease);

buttonDecrease.style.color = 'black';
buttonDecrease.style.backgroundColor = 'trasparent';
buttonDecrease.style.padding = '0.375rem 0.75rem';
buttonDecrease.style.boxShadow = '0 1px 3px rgb(0,0,0,0.2)';
buttonDecrease.style.margin = '0.5rem';

const buttonReset = document.createElement('button');
buttonReset.textContent = 'Resetta';
div.appendChild(buttonReset);

buttonReset.style.color = 'black';
buttonReset.style.backgroundColor = 'trasparent';
buttonReset.style.padding = '0.375rem 0.75rem';
buttonReset.style.boxShadow = '0 1px 3px rgb(0,0,0,0.2)';
buttonReset.style.margin = '0.5rem';

const buttonIncrease = document.createElement('button');
buttonIncrease.textContent = '+';
div.appendChild(buttonIncrease);

buttonIncrease.style.color = 'black';
buttonIncrease.style.backgroundColor = 'trasparent';
buttonIncrease.style.padding = '0.375rem 0.75rem';
buttonIncrease.style.boxShadow = '0 1px 3px rgb(0,0,0,0.2)';
buttonIncrease.style.margin = '0.5rem';

let value = 0;

buttonIncrease.addEventListener('click', function(add){
    value++;
    h1.innerHTML = value;
    h1.style.color = 'green';
});

buttonDecrease.addEventListener('click', function(add){
    value--;
    h1.innerHTML = value;
    h1.style.color = 'red';
});

buttonReset.addEventListener('click', function(add){
    value = 0;
    h1.innerHTML = value;
    h1.style.color = 'black';
});
