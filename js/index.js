// Your code goes here


//nav events mouseover
const navEvents = document.querySelectorAll('.nav-link');

navEvents.forEach( element => {
    element.addEventListener('mouseenter',() =>{
        element.style.color = 'blue';
        
    })
});

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





 