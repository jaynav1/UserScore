var userscore = '69%'
var usersite = 'Fresh Carrots'
var reviews = document.querySelectorAll('a.NY3LVe')
console.log(reviews)
reviews.forEach(element => {
    if (element.lastChild.title == 'Rotten Tomatoes') {
        element.innerHTML= `<span class="gsrt IZACzd">${userscore}</span> <span class="wDgjf">${usersite}</span>`
    }
})
console.log(reviews)