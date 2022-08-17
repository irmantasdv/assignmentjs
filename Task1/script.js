/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
function calculate(e) {
    e.preventDefault();
    const inputValue = document.getElementById('search').value;
    const output = document.getElementById('output');
    if (isNaN(inputValue)) {
        output.innerHTML = `<p class='notification alert'>Please enter valid number</p>`
    } else {
        const resultSv = roundToTwo(inputValue * 2.2046, 2);
        const resultGr = roundToTwo(inputValue / 0.0010000);
        const resultOz = roundToTwo(inputValue * 35.274);
        output.innerHTML = `<div class='notificationContainer'>
        <h2>Svarai: </h2>
        <p class='notification'>${resultSv}</p>
        </div>
        <div class='notificationContainer'>
        <h2>Gramai: </h2>
        <p class='notification'>${resultGr}</p>
        </div>
        <div class='notificationContainer'>
        <h2>Uncijos: </h2>
        <p class='notification'>${resultOz}</p>
        </div>
        `;
    }
}
document.getElementById('submit-btn').addEventListener('click', calculate);
