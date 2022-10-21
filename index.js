
//const weekDays = (( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//const weekDay = 

//TO DO
//create date and month variables
//create a function and pass an arguement

//document.getElementById("count-el").innerText = 5
//let countEl = document.getElementById("count-el")
// 

const birthday = () => {
const dateElement = document.getElementById("Date")
const monthElement= document.getElementById("Month")
const genderElement = document.getElementById("Gender")

const Date = fNameElement.value;
const Month = lNameElement.value;
const Gender = emailElement.value;
const Birthday = [Date,Month,Gender];

   //do some checks on the inputs to ensure user enters all required data

if (Date == '') {
    alert('Please enter your date of birth')
}

if (Month == '') {
    alert('Please enter your Month and Year of birth')
}

if (Gender == '') {
    alert('Please enter your Gender')
}
    else {

    alert('Congratulations, you are Akan')

}   

console.log(birthday)

}