document.addEventListener('DOMContentLoaded', () => {
    // SELEÇAO DE ELEMETOS
    const multiplicationForm = document.querySelector('#multiplication-form')
    const numberInput = document.querySelector('#number') // TABUADA
    const multiplicationInput = document.querySelector('#multiplicator') // LOOP 
    const multiplicationTable = document.querySelector('#multiplication-operations')
    const multiplicationTitle = document.querySelector('#multiplication-tile span')

    //  FUNÇOES
    const createTable = (number,multiplicatorNumber) => {
        multiplicationTable.innerHTML = '';
        multiplicationTitle.textContent = number;

        for(i=1; i<=multiplicatorNumber;i++){
            const result = number*i

            const template = `
            <div class="row">
                <div class="operation">${number} x ${i} =</div>
                <div class="result">${result}</div>
            </div>
            `;

            const parser = new DOMParser();

            const htmlTemplate = parser.parseFromString(template, "text/html");

            const row = htmlTemplate.querySelector('.row');

            multiplicationTable.appendChild(row);
        }
    }

    // EVENTOS
    multiplicationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const multiplicationNumber = +numberInput.value; 
        const multiplicatorNumber = +multiplicationInput.value;
        
        if (!multiplicationNumber || !multiplicatorNumber) return;

        createTable(multiplicationNumber,multiplicatorNumber);
    })
});