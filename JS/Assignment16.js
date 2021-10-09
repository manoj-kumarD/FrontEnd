let date1=new Date("08/14/2021");
let date2=new Date("09/14/2021");
let diff=date2.getTime()-date1.getTime();
let daydiff=diff/(1000*60*60*24);
console.log(`The day difference between ${date1} and ${date2} is ${daydiff} `);
document.write(`The day difference between ${date1} and ${date2} is ${daydiff} days`);