var myForm = document.querySelector('#myForm')
myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var userName = e.target.elements.userName.value
    var userEmail = e.target.elements.userEmail.value
    var div = document.createElement('div')
    var h3 = document.createElement('h3')
    var h4 = document.createElement('h4')
    h3.innerText = userName
    h4.innerText = userEmail
    div.appendChild(h3)
    div.appendChild(h4)
    var divContainer = document.getElementById('divContainer')
    divContainer.appendChild(div)
    console.log(div)
    console.log(h3)
    console.log(h4)

})