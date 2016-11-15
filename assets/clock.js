function convertToHex(n){
    var rem = n % 16
    var hex = `0123456789ABCDEF`

    if (n - rem == 0){
        var y = hex[n]
        return `0${y}`

    } else {
        var sec = (n - rem) / 16
        var x = hex[sec]
        var y = hex[rem]
        return `${x}${y}`
    }
}

// function


document.head.innerHTML += `<style>

body { color: white; }
.clock { width: 500px; height: 500px }

</style>`

document.body.innerHTML += `
<div class="clock">
    <h1>hi there</h1>
</div>
`

// setTimeout(() => log(new Date), 5000)
var h1 = document.querySelector('.clock h1')
var clockBox = document.querySelector('.clock')

setInterval(() => {
    const d = new Date(),
          h = d.getHours(),
          m = d.getMinutes(),
          s = d.getSeconds()

    h1.innerText = `${h}:${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`

    var printHex = function() {
      h1.innerText = `${convertToHex(h)}:${convertToHex(m)}:${convertToHex(s)}`
    }

    h1.addEventListener('mouseover', printHex)

    var bgcolor = `#${convertToHex(h)}${convertToHex(m)}${convertToHex(s)}`

    clockBox.style.backgroundColor = bgcolor

}, 1000)
