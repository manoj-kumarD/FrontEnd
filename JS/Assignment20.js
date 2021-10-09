let dob=new Date("05/22/1999");
let current_date=new Date();
let age=current_date.getFullYear()-dob.getFullYear();
if(age>18){
    console.log("Candidate is eligible for voting");
    document.write("Candidate is eligible for voting");
}
else{
    console.log("Candidate is not eligible for voting");
    document.write("Candidate is not eligible for voting")
}