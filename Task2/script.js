/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const counter = () => {
    let counter = document.getElementById('btn__state');
    let counterState = Number(counter.innerText);
    document.getElementById('btn__state').innerText += 1;
    counter.innerText = counterState += 1;
}
document.getElementById('btn__element').addEventListener('click', counter);