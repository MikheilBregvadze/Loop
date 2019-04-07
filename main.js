const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Finance", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Finance", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Retail", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Finance", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Finance", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// --------  Foreach  --------//

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// } 

// companies.forEach(company => {
//     console.log(company.name)
// })


// --------  Filter ----------//

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(age => {
//     if(age >= 21) {
//         return true
//     }
// })
// console.log(canDrink);


// const canDrink = ages.filter(age => age >= 21 )
// console.log(canDrink);

// --------  Filter retail companies--------//

// const retailCompany = companies.filter(function(company) {
//     if(company.category === "Retail")
//     return true
// })

// const retailCompany = companies.filter(company => company.category === "Retail")

//Get 80s Companies

// const eightCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990 && company.category === "Retail"))

// console.log(eightCompanies);


// -------- Map ---------//

// const companiesName = companies.map(function(company) {
//     return company.name
// })

// const companiesName = companies.map(company => `[${company.start} - ${company.end}]`)
// console.log(companiesName);

// const agesSquare = ages.map(age => Math.sqrt(age))
// const agesMult = ages.map(age => age * 2)
// console.log(agesMult);

// const ageMap = ages 
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2)

//     console.log(ageMap);


// -------- Sort ---------//

// const sortedCompanies = companies.sort(function(c1, c2) {
//     if(c1.start > c2.start) {
//         return 1
//     }else {
//         return -1
//     }
// })

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => a - b)

// console.log(sortAges);

// -------- Reduce ---------//

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//     ageSum += ages[i]
// }

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0)

// const ageSum = ages.reduce((total, age) => total + age , 0)

const totalYearsCompanies = companies.reduce((total, age) => (age.end - age,start), 0 )
console.log(totalYearsCompanies);