/* =====================================
   3D HERO CARD EFFECT
===================================== */

const heroCard = document.getElementById("heroCard");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 25;

    const y =
        (window.innerHeight / 2 - e.clientY) / 25;

    heroCard.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave", () => {

    heroCard.style.transform =
        "rotateY(0deg) rotateX(0deg)";

});

/* =====================================
   TYPING ANIMATION
===================================== */

const typingElement =
    document.getElementById("typing");

const words = [
    "Computer Scientist",
    "Information Systems Analyst",
    "Web Developer",
    "React Developer",
    "Technology Professional"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord =
        words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex++
            );

        if (charIndex >
            currentWord.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex--
            );

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >= words.length
            ) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

/* =====================================
   DARK / LIGHT MODE
===================================== */

const themeBtn =
    document.getElementById(
        "themeToggle"
    );

const storedTheme =
    localStorage.getItem("theme");

if (storedTheme === "light") {

    document.body.classList.add(
        "light"
    );

    themeBtn.innerHTML = "☀️";
}

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

        if (
            document.body.classList.contains(
                "light"
            )
        ) {

            localStorage.setItem(
                "theme",
                "light"
            );

            themeBtn.innerHTML =
                "☀️";

        } else {

            localStorage.setItem(
                "theme",
                "dark"
            );

            themeBtn.innerHTML =
                "🌙";
        }
    }
);

/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );

function revealSections() {

    revealElements.forEach(
        section => {

            const top =
                section.getBoundingClientRect()
                    .top;

            const trigger =
                window.innerHeight - 100;

            if (top < trigger) {

                section.classList.add(
                    "active"
                );
            }
        }
    );
}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
    document.querySelectorAll(
        ".counter"
    );

let counterStarted = false;

function animateCounters() {

    const statsSection =
        document.getElementById(
            "stats"
        );

    const sectionTop =
        statsSection.getBoundingClientRect()
            .top;

    if (
        sectionTop <
            window.innerHeight - 100 &&
        !counterStarted
    ) {

        counterStarted = true;

        counters.forEach(
            counter => {

                const target =
                    +counter.dataset.target;

                let count = 0;

                const speed =
                    target / 100;

                const updateCounter =
                    () => {

                        count += speed;

                        if (
                            count < target
                        ) {

                            counter.textContent =
                                Math.ceil(
                                    count
                                );

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target;
                        }
                    };

                updateCounter();
            }
        );
    }
}

window.addEventListener(
    "scroll",
    animateCounters
);

animateCounters();

/* =====================================
   SKILL BAR ANIMATION
===================================== */

const skillSection =
    document.getElementById(
        "skills"
    );

let skillAnimated = false;

function animateSkills() {

    const top =
        skillSection
            .getBoundingClientRect()
            .top;

    if (
        top <
            window.innerHeight - 100 &&
        !skillAnimated
    ) {

        skillAnimated = true;

        document.querySelector(
            ".html"
        ).style.width = "95%";

        document.querySelector(
            ".js"
        ).style.width = "90%";

        document.querySelector(
            ".react"
        ).style.width = "85%";

        document.querySelector(
            ".node"
        ).style.width = "80%";
    }
}

window.addEventListener(
    "scroll",
    animateSkills
);

animateSkills();

/* =====================================
   ACTIVE NAVIGATION LINKS
===================================== */

const sections =
    document.querySelectorAll(
        "section"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 150;

                if (
                    pageYOffset >=
                    sectionTop
                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );
                }
            }
        );

        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link
                        .getAttribute(
                            "href"
                        )
                        .includes(
                            current
                        )
                ) {

                    link.classList.add(
                        "active"
                    );
                }
            }
        );
    }
);

/* =====================================
   SMOOTH NAVIGATION
===================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );

                target.scrollIntoView({
                    behavior:
                        "smooth"
                });
            }
        );
    });

/* =====================================
   CONTACT FORM
===================================== */

const form =
    document.querySelector("form");

form.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        alert(
            "Thank you for your message. I will get back to you shortly."
        );

        form.reset();
    }
);

/* =====================================
   PARTICLE BACKGROUND
===================================== */

const canvas =
    document.getElementById(
        "particles"
    );

const ctx =
    canvas.getContext("2d");

canvas.width =
    window.innerWidth;

canvas.height =
    window.innerHeight;

let particles = [];

class Particle {

    constructor() {

        this.x =
            Math.random() *
            canvas.width;

        this.y =
            Math.random() *
            canvas.height;

        this.size =
            Math.random() * 3 + 1;

        this.speedX =
            Math.random() * 1 - 0.5;

        this.speedY =
            Math.random() * 1 - 0.5;
    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (
            this.x > canvas.width
        ) this.x = 0;

        if (
            this.x < 0
        ) this.x = canvas.width;

        if (
            this.y > canvas.height
        ) this.y = 0;

        if (
            this.y < 0
        ) this.y = canvas.height;
    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(96,165,250,.7)";

        ctx.fill();
    }
}

function initParticles() {

    particles = [];

    for (
        let i = 0;
        i < 120;
        i++
    ) {

        particles.push(
            new Particle()
        );
    }
}

function connectParticles() {

    for (
        let a = 0;
        a < particles.length;
        a++
    ) {

        for (
            let b = a;
            b < particles.length;
            b++
        ) {

            const dx =
                particles[a].x -
                particles[b].x;

            const dy =
                particles[a].y -
                particles[b].y;

            const distance =
                dx * dx + dy * dy;

            if (
                distance <
                10000
            ) {

                ctx.strokeStyle =
                    "rgba(96,165,250,.08)";

                ctx.lineWidth = 1;

                ctx.beginPath();

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();
            }
        }
    }
}

function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(
        particle => {

            particle.update();

            particle.draw();
        }
    );

    connectParticles();

    requestAnimationFrame(
        animateParticles
    );
}

initParticles();

animateParticles();

/* =====================================
   RESIZE CANVAS
===================================== */

window.addEventListener(
    "resize",
    () => {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

        initParticles();
    }
);