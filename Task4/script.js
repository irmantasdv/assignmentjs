/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const carBrandCard = (data) => {
    const sortedData = data.sort((a, b) => b.models.length - a.models.length);
    console.log(sortedData);
    sortedData.forEach(car => {
        const cardDiv = document.createElement('div');
        const cardModelTitleDiv = document.createElement('div');
        cardModelTitleDiv.classList.add('modelContainer')
        const carBrandTitle = document.createElement('h2');
        carBrandTitle.innerText = car.brand;
        cardDiv.classList.add('card');
        cardDiv.append(carBrandTitle);
        car.models.forEach(model => {
            console.log(model);
            const carModelTitle = document.createElement('p');
            carModelTitle.innerText = model;
            cardModelTitleDiv.append(carModelTitle);
        })
        cardDiv.append(cardModelTitleDiv);
        document.getElementById('output').append(cardDiv);
    })

}

function getDataFromJson() {
    fetch(ENDPOINT)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Can\'t fetch json');
            }
        })
        .then(data => {
            carBrandCard(data);
        })
        .catch(err => console.log(err))
}
getDataFromJson();

