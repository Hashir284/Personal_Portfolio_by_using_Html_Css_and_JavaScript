const styleSwitchToggle = document.querySelector('.style-switcher-toggler');
styleSwitchToggle.addEventListener('click', ()=>{
     document.querySelector('.style-switcher').classList.toggle('open')
})
// hide style - switcher on scroll 
window.addEventListener('scroll', ()=>{
    if(document.querySelector('.style-switcher').classList.contains('open')){
         document.querySelector('.style-switcher').classList.remove('open')
    }

})

// theme change 
const alternateStyles = document.querySelectorAll('.alternate-style')
function setActiveStyle(color) {
    {
        alternateStyles.forEach(e=>{
            if(color === e.getAttribute('title')){
                e.removeAttribute('disabled')
            }else{
                e.setAttribute('disabled', 'true')
            }
        })
    }
}

// dark/light mode 
const  dayNight = document.querySelector('.day-night')
dayNight.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    dayNight.querySelector('i').classList.toggle('fa-sun')   
    dayNight.querySelector('i').classList.toggle('fa-moon')   
})
window.addEventListener('load', ()=>{
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun')   
    }
    else{
        dayNight.querySelector('i').classList.add('fa-moon')
    }
})