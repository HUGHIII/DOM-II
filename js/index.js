// Your code goes here
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



 