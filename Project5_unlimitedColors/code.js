//generate a random colour

const randomColor= function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0;i<6;i++){
        const rand =Math.floor(Math.random() * 16)
        color+=hex[rand];
    }
    return color;
}

let interval = 0

function changecolor(){
    const color=randomColor()
    document.body.style.backgroundColor = color;
}
document.querySelector('#start').addEventListener('click',function(){
    interval = setInterval(changecolor,1000);
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(interval)
})