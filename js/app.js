document.addEventListener('DOMContentLoaded', startApp);

// Location
const btnStart = document.querySelector('#btnStart');
const result = document.querySelector('#results');

function startApp() {
    btnStart.addEventListener('click', eventModal);
}

function eventModal() {
    const positionDiv = document.createElement('DIV');
    positionDiv.classList.add('positionDiv');

    const divMsj = document.createElement('DIV');
    divMsj.classList.add('designModal');

    const par = document.createElement('P');
    par.classList.add('changesPar');
    par.textContent = `Bienvenidos a RESAMPLIO`;

    const call = document.createElement('a');
    call.classList.add('callChange');
    call.href = 'tel:+1122223333';
    call.textContent = '+54 11 2222-3333'

    const btnCancel = document.createElement('BUTTON');
    btnCancel.classList.add('btnCancel');
    btnCancel.textContent = 'Cancelar'
    btnCancel.onclick = () =>{
        positionDiv.remove();
    }

    // Concat
    positionDiv.appendChild(divMsj);
    par.appendChild(call);
    divMsj.appendChild(par);
    divMsj.appendChild(btnCancel);

    result.appendChild(positionDiv);
}