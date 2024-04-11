// Definizione di una funzione per creare e aggiungere un elemento HTML
function createAndAppendElement(tagName, className, innerHTML, parentElement) {
    const element = document.createElement(tagName); // Crea un nuovo elemento con il tagName specificato
    element.className = className; // Aggiunge la classe specificata all'elemento
    element.innerHTML = innerHTML;
    parentElement.appendChild(element); // Aggiunge l'elemento come figlio del parentElement specificato
    return element;
};


const div = document.querySelector('div'); // Seleziona un elemento div esistente nella pagina
const h1 = createAndAppendElement('h1', '', '0', div); // Crea un elemento h1, lo aggiunge al div e lo memorizza nella variabile h1

// Crea e aggiunge tre bottoni al div
const buttonDecrease = createAndAppendElement('button', '', '-', div);
buttonDecrease.style.color = 'black';
buttonDecrease.style.backgroundColor = 'transparent';
buttonDecrease.style.padding = '0.375rem 0.75rem';
buttonDecrease.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
buttonDecrease.style.margin = '0.5rem';

const buttonReset = createAndAppendElement('button', '', 'Resetta', div);
buttonReset.style.color = 'black';
buttonReset.style.backgroundColor = 'transparent';
buttonReset.style.padding = '0.375rem 0.75rem';
buttonReset.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
buttonReset.style.margin = '0.5rem';

const buttonIncrease = createAndAppendElement('button', '', '+', div);
buttonIncrease.style.color = 'black';
buttonIncrease.style.backgroundColor = 'transparent';
buttonIncrease.style.padding = '0.375rem 0.75rem';
buttonIncrease.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.2)';
buttonIncrease.style.margin = '0.5rem';

// Funzione per aggiornare il colore dell'h1 in base al valore
function updateColor() {
    if (value > 0) {
        h1.style.color = 'green';
    } else if (value < 0) {
        h1.style.color = 'red';
    } else {
        h1.style.color = 'black';
    }
}

let value = 0;
const buttonWrapper = div.querySelectorAll('button');

const buttons = div.querySelectorAll('button');

// Aggiunto un event listener a ciascun pulsante
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        const action = this.textContent;

        if (action === '-') {
            value--;
        } else if (action === 'Resetta') {
            value = 0;
        } else {
            value++;
        }

        h1.textContent = value;
        updateColor();
    });
});

// Aggiunta dei media query per gli stili responsive
var mq = window.matchMedia('(max-width: 414px)');
if (mq.matches) {
    // Stili per dispositivi con larghezza massima di 414px
    buttonDecrease.style.fontSize = '14px';
    buttonReset.style.fontSize = '14px';
    buttonIncrease.style.fontSize = '14px';
    buttonIncrease.style.width = '100%';
    buttonDecrease.style.width = '100%';
    buttonReset.style.width = '100%';
} else {
    // Stili per dispositivi con larghezza superiore a 414px
    buttonDecrease.style.fontSize = '16px';
    buttonReset.style.fontSize = '16px';
    buttonIncrease.style.fontSize = '16px';
    buttonDecrease.style.padding = '0.375rem 0.75rem';
    buttonIncrease.style.padding = '0.375rem 0.75rem';
    buttonReset.style.padding = '0.375rem 0.75rem';
}

// Aggiungi un listener per rilevare cambiamenti nella larghezza dello schermo
window.addEventListener('resize', function() {
    if (mq.matches) {
        // Stili per dispositivi con larghezza massima di 414px
        buttonDecrease.style.fontSize = '14px';
        buttonReset.style.fontSize = '14px';
        buttonIncrease.style.fontSize = '14px';
        buttonIncrease.style.width = '100%';
        buttonDecrease.style.width = '100%';
        buttonReset.style.width = '100%';
    } else {
        // Stili per dispositivi con larghezza superiore a 414px
        buttonDecrease.style.fontSize = '16px';
        buttonReset.style.fontSize = '16px';
        buttonIncrease.style.fontSize = '16px';
        buttonDecrease.style.padding = '0.375rem 0.75rem';
        buttonIncrease.style.padding = '0.375rem 0.75rem';
        buttonReset.style.padding = '0.375rem 0.75rem';
    }
});