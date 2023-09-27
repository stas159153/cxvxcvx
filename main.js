const gallery = document.querySelector('.gallery')
const sa = document.querySelector('.div')
const input = document.querySelector('.number')
const button = document.querySelector('#button')
const boxes = document.querySelector('#boxes')
const clbutton = document.querySelector('.button')
let chot = 0

document.addEventListener('keydown', event =>{
    if(event.code == 'KeyD'){
      chot -=20
        sa.style.left = chot + 'px'
        
        
    }
    if(chot >= 1580){
      
    }
    console.log(chot);
})
document.addEventListener('keydown', event =>{
    if(event.code == 'KeyA'){
      chot +=20
        sa.style.left = chot + 'px'  
    }
    if(chot >= 0){
        chot = 0
    }
})
console.log(gallery);
if(chot >= 1580){
    
}
let chet = 30
 function createBox(amout){
  for (let index = 0; index < amout; index++) {
    let random = Math.floor(Math.random() * 3665)
  let y = document.createElement('div')
  chet += 10
 y.style.backgroundColor = "#" + random
 y.style.width = chet + 'px'
 y.style.height = chet + 'px'
boxes.append(y)
console.log(random);
  }
 }
 button.addEventListener('click', event =>{
  createBox(+input.value)
  })
  clbutton.addEventListener('click',event =>{
    boxes.innerHTML =''
      chet = 30
    
  })