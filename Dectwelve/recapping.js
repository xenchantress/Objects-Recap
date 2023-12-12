const persons= [ {
    name: "Yousef",
    language:"French",hobbies:["Fishing","Art"]
},
{ name:"Ahmad",
language:"English"},
{
    name:"Hajjar", language:"Spanish",
}]

//console.log(persons[0].name);
//console.log(persons[0].hobbies);
//console.log(persons)
//persons.forEach( (x) => {console.log(x)});
//persons.forEach((x) => {console.log(x.name)});
//----.forEach---------------------------------------
// const names = persons.forEach((x) => {
//     console.log(x.name);
//     return x.name;
// });

//const names = perosns.map((x)=> {})

//------------------------------------------------------------
//-------------filter returns back array---------------------------------
//const budgets = [ 10,2,4,6,12,14 ];
// (x) => x < 10
// function fn(x){
//     return x < 10;
// }
//--Or-----------------------------------------------------
 //console.log(budgets.filter((x) => x < 10)); //[2,4,6]

 const budgets = [{
    department:" Marketing ",
    budget:10000
 },{
    department:" Development",
    budget:3000
 },{
    department:"HR",
    budget:30000
 },{
    department:"Oerations",
    budget:25000 
 },
 ];
 //const highBudgets = budgets.filter( (x)=> x.budget > 10000);
 //console.log(highBudgets);

//  const highBudgetsDepartments = highBudgets.map((x) => x.department);
//  console.log(highBudgetsDepartments);

// 

let highestBudget = budgets[0].budget;
budgets.forEach((x) => {
    if (x.budget > highestBudget){
        highestBudget = x;
    }
});
console.log(highestBudget);