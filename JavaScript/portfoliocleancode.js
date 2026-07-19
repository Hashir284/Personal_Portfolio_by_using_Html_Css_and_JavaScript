class Project {
    constructor(img, title, live, git) {
        this.img = img
        this.title = title
        this.live = live
        this.git = git
    }
}

let react = [
    // new Project(
    //     'reacttodo.png',
    //     'Fire',
    //     'https://todo-list-app-by-react.surge.sh/',
    //     'https://github.com/Hashir284/todo-list-app-react'
    // ),
    new Project(
    'expense-tracker.png',
    'React Expense Tracker',
    'https://react-expense-tracker-app-chi.vercel.app/',
    'https://github.com/Hashir284/react-expense-tracker-app'
    ),
    new Project(
    'notes-app.png',
    'Notes App',
    'https://notes-app-react-gules.vercel.app/',
    'https://github.com/Hashir284/notes-app-react'
    ),
    new Project(
        'firebaseauthentication.png',
        'React Firebase Auth & Firestore CRUD',
        'https://login-signup-24a03.web.app/',
        'https://github.com/Hashir284/login-signup-by-firebase'
    ),
    new Project(
    'contextapi-login.png',
    'React Auth with Context API & DummyJSON',
    'https://contextapi-login.vercel.app/',
    'https://github.com/Hashir284/contextapi-login'
    ),
    new Project(
        'reacttodo.png',
        'React Todo List App',
        'https://todo-list-app-by-react.surge.sh/',
        'https://github.com/Hashir284/todo-list-app-react'
    ),

    new Project(
        'apiaxiosproject1.png',
        'Product Listing (Axios API)',
        'https://react-api-axios-ten.vercel.app/',
        'https://github.com/Hashir284/react-api-axios'
    ),
    new Project(
        'apiaxiosproject2.png',
        'Recipe Listing (Axios API)',
        'https://react-recipe-api.surge.sh/',
        'https://github.com/Hashir284/react-recipe-api'
    ),
    new Project(
        'fb.png',
        'Facebook Home Page UI Clone',
        'https://react-first-ui-facebook-home-page.vercel.app/',
        'https://github.com/Hashir284/react-first-ui-facebook-home-page'
    ),
];

let jsProjects = [
    new Project(
    'calculator.png',
    'Calculator with Keyboard Support',
    'https://hashir284.github.io/calculator-by-simple-javascript/',
    'https://github.com/Hashir284/YOUR_REPO'
    ),
        new Project(
        'profitapp.png',
        'Profit App by using local storage',
        'https://profit-loss-local-storage-app.vercel.app',
        'https://github.com/Hashir284/Simple-Profit-App'
    ),
    new Project(
        'loginsignup.png',
        'Login Signup by using local storage',
        'https://login-sign-up-by-local-storage.vercel.app',
        'https://github.com/Hashir284/Login-SignUp-by-Local-Storage'
    ),
    new Project(
        'namaztimeapp.png',
        'Namaz Time App by Api integration',
        'https://find-namaz-time.vercel.app/',
        'https://github.com/Hashir284/Find-Namaz-Time'
    ),
    new Project(
        'weatherapp.png',
        'Weather App by Api integration',
        'https://login-sign-up-by-local-storage.vercel.app',
        'https://github.com/Simple-Weather-App'
    ),
    new Project(
        'enentapp.png',
        'Event App',
        'https://event-practice-nu.vercel.app',
        'https://github.com/Hashir284/JavaScript-Chapter-43-to-48-Assignment'
    ),
    new Project(
        'birthday.png',
        'Birthday Calculator',
        'https://js-assignment-birthday-calculator.vercel.app/',
        'https://github.com/Hashir284/Js-Assignment-Birthday-Calculator'
    )
]
let cssResponsive = [
    new Project(
        'air-bnb.png', 'Airbnb Home Page Clone',
        'https://air-bnb-clone-e321.netlify.app/',
        'https://github.com/Hashir284/project-6-Airbnb-clone'
    ),
    new Project(
        'mini-hachackathon.png', 'SMIT CSS Mini Hackathon Project',
        'https://mini-hackachaton-css.netlify.app/',
        'https://github.com/Hashir284/minihackathon'
    )
]
let cssStatic = [
new Project(
        'ecomerce.png', 'Ecommerce Website',
        'https://air-bnb-clone-e321.netlify.app/',
        'https://github.com/Hashir284/project-6-Airbnb-clone'
    ),
    new Project(
        'nexcent.png', 'Nexcent Website',
        'https://mini-hackachaton-css.netlify.app/',
        'https://github.com/Hashir284/minihackathon'
    ),
    new Project(
        'flex-practice.png', 'Flexbox Practice',
        'https://mini-hackachaton-css.netlify.app/',
        'https://github.com/Hashir284/minihackathon'
    )]
function renderProjects(data, containerId) {
    let container = document.getElementById(containerId)
    let html = ''
    data.forEach((e) => {
        html += `
        <div class="portfolio-item padd-15">
            <div class="portfolio-item-inner shadow-dark">
                <div class="portfolio-img">
                    <img src="Portfolio img/${e.img}" alt="${e.title}">
                </div>
                <div class="p-detail">
                    <div class="p-title">${e.title}</div>
                    <div class="p-project-link">
                        <a class="p-demo" href="${e.live}" target="_blank">Live</a>
                        <a class="p-demo" href="${e.git}" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </div>`
    })
    container.innerHTML = html
}
renderProjects(jsProjects, 'portfolio-project')
renderProjects(cssResponsive, 'portfolio-project-css')
renderProjects(cssStatic, 'portfolio-project-css2')
renderProjects(react, 'portfolio-react')