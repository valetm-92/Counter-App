


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

const value = document.querySelector("h1");
const btns = document.querySelectorAll("button");

const btn = document.querySelector('button');

btns.forEach(function() {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")) {
            count++;
        }else{
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        }else if(count < 0) {
            value.style.color = "red";
        }else if(count == 0){
            value.style.color = "#000";
        }
        value.textContent = count;
    });
});
