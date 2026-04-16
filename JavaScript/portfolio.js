let arr = []
class data {
    constructor(img, title, live, git) {
        this.img = img
        this.title = title
        this.live = live
        this.git = git
        arr.push({ img: this.img, title: this.title, live: this.live, git: this.git })
    }
}
let profitapp = [
    new data(
        'profitapp.png',
        'Profit App by using local storage',
        'https://profit-loss-local-storage-app.vercel.app',
        'https://github.com/Hashir284/Simple-Profit-App'
    ),
    new data(
        'loginsignup.png',
        'Login Signup by using local storage',
        'https://login-sign-up-by-local-storage.vercel.app',
        'https://login-sign-up-by-local-storage.vercel.app'
    ),
    new data(
        'namaztimeapp.png',
        'Namaz Time App by Api integration',
        'https://find-namaz-time.vercel.app/',
        'https://github.com/Hashir284/Find-Namaz-Time'
    ),
    new data(
        'weatherapp .png',
        'Weather App by Api integration',
        'https://login-sign-up-by-local-storage.vercel.app',
        'https://login-sign-up-by-local-storage.vercel.app'
    ),
    new data(
        'enentapp.png',
        'Event App',
        'https://event-practice-nu.vercel.app',
        'https://github.com/Hashir284/JavaScript-Chapter-43-to-48-Assignment'
    ),
    new data(
        'birthday.png',
        'Birthday Calculator',
        'https://js-assignment-birthday-calculator.vercel.app/',
        'https://github.com/Hashir284/Js-Assignment-Birthday-Calculator'
    )
]
let portfolio = document.getElementById('portfolio-project')
portfolio.innerHTML = ''
console.log(portfolio);
arr.forEach((e) => {
    portfolio.innerHTML += `
    <div class="portfolio-item padd-15">
        <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
                <img src="Portfolio img/${e.img}" alt="${e.title}">
            </div>
            <div class="p-detail">
                <div class="p-title">${e.title}</div>
                <div class="p-project-link">
                    <a class="p-demo" href="${e.live}" target="_blank">
                        Live Demo
                    </a>
                    <a class="p-demo" href="${e.git}" target="_blank">
                        GitHub 
                    </a>
                </div>
            </div>
        </div>
    </div>`
})

// for css projects
let arrcss = []
class datacss {
    constructor(img, title, live, git) {
        this.img = img
        this.title = title
        this.live = live
        this.git = git
        arrcss.push({ img: this.img, title: this.title, live: this.live, git: this.git })
    }
}
let cssobj = [
    new datacss(
        'air-bnb.png', 'Airbnb Home Page Clone',
        'https://air-bnb-clone-e321.netlify.app/',
        'https://github.com/Hashir284/project-6-Airbnb-clone'
    ),
    new datacss(
        'mini-hachackathon.png', 'SMIT CSS Mini Hackathon Project',
        'https://mini-hackachaton-css.netlify.app/',
        'https://github.com/Hashir284/minihackathon'
    )
]
portfolio = document.getElementById('portfolio-project-css')
portfolio.innerHTML = ''
arrcss.forEach((e) => {
    portfolio.innerHTML += `
    <div class="portfolio-item padd-15">
        <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
                <img src="Portfolio img/${e.img}" alt="${e.title}">
            </div>
            <div class="p-detail">
                <div class="p-title">${e.title}</div>
                <div class="p-project-link">
                    <a class="p-demo" href="${e.live}" target="_blank">
                        Live Demo
                    </a>
                    <a class="p-demo" href="${e.git}" target="_blank">
                        GitHub 
                    </a>
                </div>
            </div>
        </div>
    </div>`
})
arrcss = []
class datacss2 {
    constructor(img, title, live, git) {
        this.img = img
        this.title = title
        this.live = live
        this.git = git
        arrcss.push({ img: this.img, title: this.title, live: this.live, git: this.git })
    }
}
   cssobj = [
    new datacss2(
        'ecomerce.png', 'Ecommerce Website',
        'https://air-bnb-clone-e321.netlify.app/',
        'https://github.com/Hashir284/project-6-Airbnb-clone'
    ),
    new datacss2(
        'nexcent.png', 'Nexcent Website',
        'https://mini-hackachaton-css.netlify.app/',
        'https://github.com/Hashir284/minihackathon'
    ),
    new datacss2(
        'flex-practice.png', 'Flexbox Practice',
        'https://mini-hackachaton-css.netlify.app/',
        'https://github.com/Hashir284/minihackathon'
    )
]
portfolio = document.getElementById('portfolio-project-css2')
portfolio.innerHTML = ''
arrcss.forEach((e) => {
    portfolio.innerHTML += `
    <div class="portfolio-item padd-15">
        <div class="portfolio-item-inner shadow-dark">
            <div class="portfolio-img">
                <img src="Portfolio img/${e.img}" alt="${e.title}">
            </div>
            <div class="p-detail">
                <div class="p-title">${e.title}</div>
                <div class="p-project-link">
                    <a class="p-demo" href="${e.live}" target="_blank">
                        Live Demo
                    </a>
                    <a class="p-demo" href="${e.git}" target="_blank">
                        GitHub 
                    </a>
                </div>
            </div>
        </div>
    </div>`
})