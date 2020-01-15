// Your code goes here


//nav events mouseover
const navEvents = document.querySelectorAll('.nav-link');

navEvents.forEach( element => {
    element.addEventListener('mouseenter',() =>{
        element.style.color = 'blue';
        
    })
});
//nav event mouseleave
navEvents.forEach( element => {
    element.addEventListener('mouseleave',() =>{
        
        element.style.color = 'black';
    })
});


//img resize

const newHeadImg = document.querySelector('.intro img');

window.addEventListener('resize', () => {
    newHeadImg.src = 'https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
});

// img dblclick

const newImgLetsGo = document.querySelector('.img-content img');

newImgLetsGo.addEventListener('dblclick',   () => {
    newImgLetsGo.src = 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});


// event wheel intro img

const message = document.querySelector('body');

message.addEventListener('wheel',() => {
    alert('this alert is extremely annoying and no one should ever use an alert in this manner, there is probably a way to get it to toggle off on the next scroll but i dont really have time to figure it out right now, so you will need to use the scroll bar or arrow keys if you want to actually scroll')
})


 //mousedown

 const changePicMouseD = document.querySelector('.img-content img');
 changePicMouseD.addEventListener('mousedown',() => {
        changePicMouseD.src = 'https://images.pexels.com/photos/40023/aurora-northern-lights-aurora-borealis-borealis-40023.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    })


//  const changePicMouseD = document.querySelectorAll('.img-content')
//  console.log(changePicMouseD[1]);

//  changePicMouseD[1].addEventListener('mousedown',() => {
//     changePicMouseD.src = 'https://images.pexels.com/photos/40023/aurora-northern-lights-aurora-borealis-borealis-40023.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
//  });figure out why this doesnt work************************************************

 //mouseup

//  const changePicMouseD

const changePicMouseUp = document.querySelector('.img-content img');
changePicMouseUp.addEventListener('mouseup',() => {
       changePicMouseUp.src = 'https://images.pexels.com/photos/1940036/pexels-photo-1940036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
   })