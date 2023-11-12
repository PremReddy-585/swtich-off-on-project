function switchOff() {
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimg").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchstatus").textContent = "switchOff";
    document.getElementById("switch-On").style.backgroundColor = "#22c55e";
    document.getElementById("switch-Off").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimg").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent = "switchOn";
    document.getElementById("switch-On").style.backgroundColor = "#cbd2d9";
    document.getElementById("switch-Off").style.backgroundColor = "#e12d39";
}
