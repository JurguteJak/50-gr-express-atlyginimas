const formDOM = document.forms[0];
const inputDOMs = formDOM.querySelectorAll('input');
const nameDOM = inputDOMs[0];
const dateDOM = inputDOMs[1];
const rateDOM = inputDOMs[2];

formDOM.addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        name: nameDOM.value,
        date: dateDOM.value,
        rate: rateDOM.value,
    };

    fetch('http://localhost:5036/api/account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
});
