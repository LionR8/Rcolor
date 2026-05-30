const btn = document.getElementById("btn")
const color = document.getElementById("color")

const hexC = "0123456789ABCDEF"

btn.addEventListener("click", function(){
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        const rnum = Math.floor(Math.random() * hexC.length)
        hexColor += hexC[rnum]
    }
    document.body.style.backgroundColor = hexColor
    color.innerText = hexColor
})