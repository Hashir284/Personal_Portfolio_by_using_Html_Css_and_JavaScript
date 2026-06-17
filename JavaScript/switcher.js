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
