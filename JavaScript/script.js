var typed = new Typed('.typing',
    {
        strings: ['Web Developer', 'Front-End Developer', 'Web designer'],
        typeSpeed: 100,
        BackSpeed: 60,
        loop: true
    }
)

function locate(page, id) {

    backSec()

    document.querySelectorAll('ul.nav a').forEach(e => {
        e.classList.remove('active')
    })
    document.getElementById(id).classList.add('active')
    document.querySelectorAll('.sec').forEach(e => {
        if (page === e.id) {
            e.classList.remove('hidden')
        } else {
            e.classList.add('hidden')
        }
    })

    if(window.innerWidth < 1307){
        asideSectionToggler()
    }


    let allSec = document.querySelectorAll('.sec')
    for (let i = 0; i < allSec.length; i++) {
        let sec = allSec[i];
        // remove active from all first
        if (!sec.classList.contains(id.slice(0, -4))) {
            sec.classList.remove('active');
        } else {
            sec.classList.add('active');
        }
    }
}

function backSec() {
    // let backSec = document.querySelector('.sec.active')
    //     backSec.classList.add('back-section')
    //     document.querySelectorAll('.sec').forEach(e=>{
    //     if(!e.classList.contains('active')){
    //         e.classList.remove('back-section')
    //         console.log(e);
    //     }
    // })

    // or 

    document.querySelectorAll('.sec').forEach(e => {
        e.classList.remove('back-section');
    });

    let activeSec = document.querySelector('.sec.active');

    if (activeSec) {
        activeSec.classList.add('back-section');
    }
}

const navToggleBtn = document.querySelector('.responsivenav'),
    aside = document.querySelector('.aside')

navToggleBtn.addEventListener('click', () => {
    asideSectionToggler()
})

let flagVar = false
const asideSectionToggler = () => {
    aside.classList.toggle('open')
    navToggleBtn.classList.toggle('open')
let allSec = document.querySelectorAll('.sec')
    for (let i = 0; i < allSec.length; i++) {
        allSec[i].classList.toggle('open')
    }

}

// document.querySelector('.hire-me').addEventListener('click',function(){
//     console.log(this);
//     locate(this, '#contactLink')
// })
