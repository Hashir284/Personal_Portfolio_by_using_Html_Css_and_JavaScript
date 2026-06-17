var typed = new Typed('.typing',
    {
        strings: ['Web Developer', 'Front-End Developer', 'Web designer'],
        typeSpeed: 100,
        BackSpeed: 60,
        loop: true
    }
)

function locate(page, id) {
    document.querySelectorAll('ul.nav a').forEach(e=>{
        e.classList.remove('active')
    })
    document.getElementById(id).classList.add('active')
    document.querySelectorAll('.sec').forEach(e => {
        if (page === e.id) {
            console.log(e.id);
            console.log(page);
            console.log(id);
            
            e.classList.remove('hidden')
        } else {
            e.classList.add('hidden')
        }
    })
}