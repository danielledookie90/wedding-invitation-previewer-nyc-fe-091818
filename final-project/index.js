const firstNameDiv = document.getElementById('first-name-invite')
const inputBride = document.getElementById('first-name')

inputBride.addEventListener('keyup',(event) => {
  let whatTheyveTyped = inputBride.value
  firstNameDiv.innerText = whatTheyveTyped
})

const secondNameDiv = document.getElementById('second-name-invite')
const inputGroom = document.getElementById('second-name')
inputGroom.addEventListener('keyup',(event) => {
  let whatTheyveTyped = inputGroom.value
  secondNameDiv.innerText = whatTheyveTyped
})

const lastNameDiv = document.getElementById('last-name-invite')
const inputLast = document.getElementById('last-name')
inputLast.addEventListener('keyup',(event) => {
  let whatTheyveTyped = inputLast.value
  lastNameDiv.innerText = whatTheyveTyped
})

const dateDiv = document.getElementById('date-invite')
const inputDate = document.getElementById('date')
inputDate.onchange = (event) => {
 console.log (inputDate.value)
  let dateTheyChose = inputDate.value
  dateDiv.innerText = dateTheyChose
}

const locationDiv = document.getElementById('wedding-location-invite')
const inputLocation = document.getElementById('wedding-location')
inputLocation.addEventListener('keyup',(event) => {
  let whatTheyveTyped = inputLocation.value
  locationDiv.innerText = whatTheyveTyped
})

const formalDiv = document.getElementById('formal-background-image')
const inputFormal = document.getElementById(formal-background)
formalDiv.addEventListener('click',(event) => {
})

const springDiv = document.getElementById('spring-background-image')
const inputSpring = document.getElementById(spring-background)
springDiv.addEventListener('click',(event) => {
})

const artDiv = document.getElementById('art-deco-background-image')
const inputArt = document.getElementById(art-background)
artDiv.addEventListener('click',(event) => {
})

function img(x)
{
if (x===0)
document.getElementById(formal-background).style.display='block'
else 
document.getElementById('formal-background-image').style.display='none'
}