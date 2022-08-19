/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const userCard = (cardData) => {
    const output = document.getElementById('output');
    let outputInnerHtml = '';
    cardData.forEach(el => {
        outputInnerHtml += `<div class='outputCard'>
        <img class='cardImage' src="${el.avatar_url}" alt="github user image">
        <h2 class='cardTitle'>${el.login}</h2>
        </div>`
    });
    output.innerHTML = outputInnerHtml;
}

const fetchGitHubUsers = () => {
    fetch(ENDPOINT)
        .then(response => {
            if (response.ok) {
                document.getElementById('btn').style.display = 'none';
                return response.json();
            } else {
                throw new Error('Can\'t get user data');
            }
        })
        .then(data => {
            console.log(data);
            userCard(data)
        })
        .catch(err => console.log(err));
}

document.getElementById('btn').addEventListener('click', fetchGitHubUsers);
