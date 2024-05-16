//hamburger

const hamburgerMenu = document.getElementById('hamburgerMenu');
const menu = document.getElementById('menu');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Function to display text with typewriter effect
function typewriter(text, speed, id) {
    var i = 0;
    var output = '';
    var textLength = text.length;
    var interval = setInterval(function () {
        output += text[i];
        document.getElementById(id).innerHTML = output;
        i++;
        if (i > textLength - 1) {
            clearInterval(interval);
        }
    }, speed);
}

//motion animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        // else {
        //     // entry.target.classList.remove('show')
        // }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))


//copyright year
let today = new Date()
let year = document.getElementById("year")
let presentYear = today.getFullYear()
year.innerHTML = presentYear




//learn page
//full screen button
let full_scr = () => {
    let target = document.getElementById("screen")
    let button = document.getElementById('full-scr')
    const close = document.getElementById('close-scr');

    target.classList.add('full-screen')
    target.classList.remove('monitor')
    button.classList.add('hide-btn')
    close.classList.remove('hide-btn')
}
//clear screen
const clear_screen = () => {
    const editor = document.getElementById('editor');

    editor.value = ""
    updatePreview()
}
//close btn
const close_screen = () => {
    let target = document.getElementById("screen")
    target.classList.add('monitor')
    let button = document.getElementById('full-scr')
    const close = document.getElementById('close-scr');

    target.classList.remove('full-screen')
    button.classList.remove('hide-btn')
    close.classList.add('hide-btn')
}

// change the monitor screen content
const change = () => {
    let t1 = document.getElementById('start-area')
    let t2 = document.getElementById('text-area')
    let t3 = document.getElementById('clear-btn')
    let t4 = document.getElementById('full-scr')

    t1.classList.add('hide-btn')
    t1.classList.remove('start-text')
    t2.classList.remove('hide-btn')
    t3.classList.remove('hide-btn')
    t4.classList.remove('hide-btn')
}
//remove hidden class
function remove_hidden(id) {
    let t5 = document.getElementById(id)
    t5.classList.remove('hidden')
    t5.style.transitionDelay = '0s'
}


//print the motivation quart
function quart() {
    let quarts = [
        "The journey of learning never ends; embrace it, and you'll uncover endless possibilities."
        , "Knowledge is the key to unlocking doors you never knew existed."
        , "Each lesson learned is a bridge to a brighter future."
        , "Learning today prepares you for the challenges of tomorrow."
        , "Dive into the world of knowledge; the deeper you go, the more treasures you'll find."
        , "Expand your horizons with every lesson learned."
        , "Education is the passport to the future; invest in it wisely."
        , "The more you learn, the more you empower yourself."
        , "With every new skill acquired, you add a new dimension to your life."
        , "Celebrate every learning moment; they shape who you are and who you'll become."
        , "Every new skill you learn is a stepping stone towards your dreams. Invest in yourself, cultivate a growth mindset, and watch as you transform into the best version of yourself."
        , "Learning is the key to unlocking endless possibilities. Embrace curiosity, challenge yourself, and let knowledge be your guide on the path to success."
    ]
    let quartToPrint = Math.floor(Math.random() * quarts.length)
    let target = document.getElementById('motivation')
    target.innerText = quarts[quartToPrint]
}


let changer = document.querySelectorAll('.navbar-selector')
let target_loader = document.getElementById('loader_place')
changer.forEach(ele => {
    ele.addEventListener('click', function () {
        target_loader.classList.toggle('loader-hide')
        target_loader.classList.add('loader-show')
    })
})
