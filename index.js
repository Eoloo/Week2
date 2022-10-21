
//const weekDays = (( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
//const weekDay = 

//TO DO
//create date and month variables
//create a function and pass an arguement

//document.getElementById("count-el").innerText = 5
//let countEl = document.getElementById("count-el")
// 

const myBirthday = () => {
const dateElement = document.getElementById("date")
const monthElement= document.getElementById("month")
const genderElement = document.getElementById("gender")




const date = dateElement.value;
const month = monthElement.value;
const gender = genderElement.value;
const myBirthday = [date,month,gender];



   //do some checks on the inputs to ensure user enters all required data

if (date == '') {
    alert('Please enter your date of birth')
}

if (month == '') {
    alert('Please enter your Month and Year of birth')
}

if (gender == '') {
    alert('Please enter your Gender')
}
else {

    alert('Congratulations, you are Akan')

}  
console.log(myBirthday) 
}