let sec = document.querySelectorAll('.sec')
function pageChange(page){
    sec.forEach((sec)=>{
        sec.classList.add('hidden')
    })

    document.querySelector(`.${page}`).classList.remove('hidden')
    document.querySelectorAll('.nav a').forEach((c)=>{
        c.classList.remove('active')
    })
    document.getElementById(page).classList.add('active')
}
// function pageChange(page) {
//     document.querySelectorAll('.sec').forEach(sec => {
//         sec.classList.add('hidden');
//     });

//     document.querySelector('.' + page.toLowerCase()).classList.remove('hidden');
// }