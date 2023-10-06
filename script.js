const changeButton = document.querySelector('#btn')
const colorArray = ['red','blue','violet','indigo','green','yellow','orange','white','black','golden','silver','aqua','skyblue','tomato','brown']

function changeBackgrounColor(){
    let ranomColor = Math.floor(Math.random()*colorArray.length)
    document.querySelector('body').style.backgroundColor =colorArray[ranomColor]
}

changeButton.addEventListener('click',function(){
    changeBackgrounColor()
})

changeButton.addEventListener('dblclick',function(){
    changeColorOnblclick()
})

function changeColorOnblclick() {
    let ranomColor = Math.floor(Math.random()*colorArray.length)
    document.querySelector('body').style.backgroundColor =colorArray[ranomColor]
    setTimeout(()=>{
        changeColorOnblclick()
    },1000)
}