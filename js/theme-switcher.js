const themes = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        document
            .querySelector("body")
            .setAttribute("data-theme", e.target.dataset.theme);
        localStorage.setItem("theme", e.target.dataset.theme);
    });
});

function getThemeOnLoad() {
    const theme = localStorage.getItem("theme");

    if (theme) {
        document.querySelector("body").setAttribute("data-theme", theme);
    }
}

getThemeOnLoad();
let currentProject = 0;
const projects = document.querySelectorAll(".project-slide");

function showProject(index) {
    projects.forEach((project, i) => {
        project.classList.remove("active");
        if (i === index) {
            project.classList.add("active");
        }
    });
}

function nextProject() {
    currentProject = (currentProject + 1) % projects.length;
    showProject(currentProject);
}

function prevProject() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showProject(currentProject);
}

// Auto-slide projects every 5 seconds
setInterval(nextProject, 5000);

showProject(currentProject);

