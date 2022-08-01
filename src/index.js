// write your code here
let ramenData;
let ramen;

function getRamens(){
fetch('http://localhost:3000/ramens/')
  .then(resp => resp.json())
  .then(ramenData => ramenData.forEach(ramen => renderRamenImage(ramen)
  ))
}

function renderRamenImage(ramen) {
  const ramenImg = document.createElement('img');
  ramenImg.src = ramen.image
  ramenImg.addEventListener('click', displayRamenDetails(ramen)
  )
  document.querySelector('#ramen-menu').append(ramenImg)
}

function displayRamenDetails(ramen) {
  // add link on each image to show that ramen's details
  // click to show #ramen-detail div
  // FIX: make it grab multiple ramens / display with an <a href>
  console.log(ramen)
  document.querySelector('.detail-image').src = ramen.image
  document.querySelector('.name').innerText = ramen.name
  document.querySelector('.restaurant').innerText = ramen.restaurant
}

function handleNewRamen(name, restaurant, image, rating, comment) {
  // get form input
  // render ramen to #ramen-menu div
  // console.log(name, restaurant, image, rating, comment)
  const newRamen = {
    'name' : name,
    'restaurant' : restaurant,
    'image': image,
    'rating': rating,
    'comment': comment
  }
  renderRamenImage(newRamen)
  displayRamenDetails(newRamen)
  // displayRamenDetails(name, restaurant, image, rating, comment)
}

document.addEventListener('DOMContentLoaded', () => {
  getRamens(ramenData)
  document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  handleNewRamen(e.target.name.value, e.target.restaurant.value, e.target.image.value, e.target.rating.value, e.target.comment.value)
  })
})