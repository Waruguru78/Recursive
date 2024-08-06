let age = prompt("Please enter your age:");
age = Number(age);

if (age <= 12){
    console.log('the price is $10');
}
else if (age >= 13 && age <= 17){
    console.log('the price is $15');
}
else if (age >= 18){
    console.log('the price is $20');
}
else {
    console.log('Invalid age entered');
}