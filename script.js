const btn = document.getElementById("btn")
const color = document.getElementById("color")
const rst = document.getElementById("rst")

const hexC = "0123456789ABCDEF"

btn.addEventListener("click", function(){
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        const rnum = Math.floor(Math.random() * hexC.length)
        hexColor += hexC[rnum]
    }
    document.body.style.backgroundColor = hexColor
    color.innerText = hexColor
    localStorage.setItem('hex', hexColor)
})

const hex = localStorage.getItem('hex')
if (hex) {
    document.body.style.backgroundColor = hex
    color.innerText = hex
}

rst.addEventListener("click", function(){
    localStorage.removeItem('hex')
    document.body.style.backgroundColor = '#ADD8E6'
    color.innerText = '#ADD8E6'
})