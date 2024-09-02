import { getOlympicData } from "./olympicData.js";

// ex 1
console.log(getParticipatingCountries());

function getParticipatingCountries() {
  const arr = getOlympicData();
  return arr.map(item => item.Nation);
}

//ex 2

function sortCountriesByPopulation(){
    const arr = getOlympicData();
    return arr.sort( (a, b) => b.Population - a.Population);
}

function getTop5(arr){
    return arr.slice(0, 5)
}

console.log(getTop5(sortCountriesByPopulation()));


//ex 3

function getCountriesByStartingLetter(letter){
    const arr = getOlympicData();
    return arr.filter(item => (letter === Array.from(item.Nation)[0]) && item.Exists === 'YES');
}

console.log(getCountriesByStartingLetter('A'));


//ex 4

function calculateTotalPopulation(){
    const arr = getOlympicData().map(item => item.Population);
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(calculateTotalPopulation());

//ex 5 

function sortCountriesByFirstAppearance(){
    const arr = getOlympicData();
    return arr.sort((a, b) => a.First_App - b.First_App);
}

console.log(getTop5(sortCountriesByFirstAppearance()));

//ex 6

function createCountryObjects(){
    const arr = getOlympicData();
    return arr.map(item => {return {
         nation: item.Nation,
          code: item.Code
        }});
}

console.log(createCountryObjects());

//ex 7

function getCountryWithMostAppearances(){
    const arr = getOlympicData();
    return arr.map(item => item).sort((a, b) => b.Apps - a.Apps)[0];
}

console.log(getCountryWithMostAppearances());


//ex 8

function findMostSuccessfulSport(sport){
    const arr = getOlympicData();
    return arr.filter(item => item.MostSuccessfulSport === sport);
}

console.log(findMostSuccessfulSport('Athletics'));

//ex 8

function findSmallestWinningCountry(){
    const arr = getOlympicData();
    return arr.filter(item => item.Medal > 0).sort((a,b) => a.Population - b.Population)[0];
}

console.log(findSmallestWinningCountry());


//ex 9

function createCountryPopulationObject(){
    const arr = getOlympicData();
    const newObj = {};
    arr.forEach(element => {
        newObj[element.Nation] = element.Population;
    });

    return newObj;
}

console.log(createCountryPopulationObject());

//Ex 10

function groupCountriesByFirstLetter(){
    const arr = getOlympicData();
    const newObj = {};
    arr.forEach(country =>{
        if(!newObj[Array.from(country.Nation)[0]]){
            newObj[Array.from(country.Nation)[0]] = [];
        }

        newObj[Array.from(country.Nation)[0]].push(country);
        
    });

    return newObj;
}

console.log(groupCountriesByFirstLetter());


//ex 11

function getRandomCountryInfo(){
    const arr = getOlympicData();
    const rd = Math.floor(Math.random() *  (arr.length - 0) + 0)
    const randomObject = arr[rd];
    return {Nation: randomObject.Nation,
        Population: randomObject.Population
    };
}

console.log(getRandomCountryInfo());


//ex 12

function getCountriesAbovePopulation(minimum){
    const arr = getOlympicData();
    return arr.filter(item => item.Population > minimum);
}

function filterCountriesWithMoreWinterMedals(arr){
    return arr.filter(item => item.WO_Medal > item.SO_Medal);
}

console.log(filterCountriesWithMoreWinterMedals(getCountriesAbovePopulation(1000000)));


//ex 13

function calculateAverageMedalsWon(){
    const arr = getOlympicData().map(item => item.Medal);
    return arr.reduce((a, b) => a +b) / arr.length;
}

function filterCountriesBelowPopulation(maximum){
    const arr = getCountriesAboveMedalAverage(calculateAverageMedalsWon());
    return arr.filter(item => item.Population < maximum);
}

function getCountriesAboveMedalAverage(min){
    const arr = getOlympicData();
    return arr.filter(item => item.Medal > min);
}

console.log(getCountriesAboveMedalAverage(calculateAverageMedalsWon()));
console.log(calculateAverageMedalsWon());
console.log(filterCountriesBelowPopulation(5000000));


//ex 14

function getMostRecentFirstAppearance(){
    const arr = getOlympicData();
    return arr.sort((a, b) => b.First_App - a.First_App)[0];
}

console.log(getMostRecentFirstAppearance());


//ex 15

function getOldestFirstAppearanceStillCompeting(){
    const arr = getOlympicData().filter(item => item.Exists === 'YES');
    return arr.sort((a, b) => a.First_App - b.First_App)[0];
}

console.log(getOldestFirstAppearanceStillCompeting());



