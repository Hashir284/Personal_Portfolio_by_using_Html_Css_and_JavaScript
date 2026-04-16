class Project {
    constructor(img, title, live, git) {
        this.img = img
        this.title = title
        this.live = live
        this.git = git
    }
}
let jsProjects = [
    new Project('profitapp.png','Profit App','https://profit-loss-local-storage-app.vercel.app','https://github.com/Hashir284/Simple-Profit-App'),
    new Project('loginsignup.png','Login Signup','https://login-sign-up-by-local-storage.vercel.app','https://login-sign-up-by-local-storage.vercel.app'),
    new Project('namaztimeapp.png','Namaz Time App','https://find-namaz-time.vercel.app/','https://github.com/Hashir284/Find-Namaz-Time')
]
let cssResponsive = [
    new Project('site1.png','Responsive Site','https://yourlink.com','#')
]
let cssStatic = [
    new Project('static1.png','Static Page','https://yourlink.com','#')
]
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