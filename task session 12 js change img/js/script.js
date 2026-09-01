var btn = document.getElementById('changeImg')

btn.addEventListener('click', (e) => {

    console.log(e.target.previousElementSibling.src)
    console.log(btn.previousElementSibling)

    if (btn.previousElementSibling.src.includes('1.jpg')) {

        btn.previousElementSibling.src = "images/2.jpg"

    } else {

        btn.previousElementSibling.src = "images/1.jpg"

    }

})