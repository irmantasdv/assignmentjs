/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};
function showObjectKeys(car){
  keyArray = [];
  for(let key in car){
    keyArray.push(key);
  }
  console.log('array of key: ',keyArray);
  return keyArray;
}
showObjectKeys(audi);