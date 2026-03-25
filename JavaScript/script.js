// function pageChange(Home, About, Services, Portfolio){
//     if(Home === 'Home'){
//         document.getElementsByClassName('home').className = 'home sec'
//         document.getElementsByClassName('service').className = 'service sec hidden'
//         document.getElementsByClassName('portfolio').className = 'portfolio sec hidden'
//         document.getElementsByClassName('about').className = 'about sec hidden'
//     }
//     if(Services === 'Services'){
//         document.getElementsByClassName('home').className = 'home sec hidden'
//         document.getElementsByClassName('service').className = 'service sec'
//         document.getElementsByClassName('portfolio').className = 'portfolio sec hidden'
//         document.getElementsByClassName('about').className = 'about sec hidden'
//     }
//     if(About === 'About'){
//         document.getElementsByClassName('home').className = 'home sec hidden'
//         document.getElementsByClassName('service').className = 'service sec hidden'
//         document.getElementsByClassName('portfolio').className = 'portfolio sec hidden'
//         document.getElementsByClassName('about').className = 'about sec'
//     }
//     if(Portfolio === 'Portfolio'){
//         document.getElementsByClassName('home').className = 'home sec hidden'
//         document.getElementsByClassName('service').className = 'service sec hidden'
//         document.getElementsByClassName('portfolio').className = 'portfolio sec'
//         document.getElementsByClassName('about').className = 'about sec hidden'
//     }
// }
function pageChange(page) {
    document.querySelectorAll('.sec').forEach(sec => {
        sec.classList.add('hidden');
    });

    document.querySelector('.' + page.toLowerCase()).classList.remove('hidden');
}