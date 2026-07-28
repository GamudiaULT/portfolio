// Typing Effect

const words = [

    "Aspiring Web Developer",

    "Front-End Developer",

    "HTML • CSS • JavaScript",

    "Lifelong Learner"

];

let word = 0;
let letter = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type(){

    let current = words[word];

    if(!deleting){

        typing.textContent =
            current.substring(0,letter++);

        if(letter > current.length){

            deleting = true;

            setTimeout(type,1200);

            return;
        }

    }else{

        typing.textContent =
            current.substring(0,--letter);

        if(letter===0){

            deleting=false;

            word=(word+1)%words.length;
        }
    }

    setTimeout(type,deleting?60:120);
}

type();


// Dark Mode

const themeBtn =
document.getElementById("themeBtn");

themeBtn.onclick = ()=>{

    document.body.classList.toggle("dark");

};


// Back To Top

const topBtn =
document.getElementById("topBtn");

window.onscroll = ()=>{

    topBtn.style.display =
        window.scrollY>300
        ?"block"
        :"none";

};

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// Scroll Reveal

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

emailjs.init("mHBY4xCbsEZBxvfX_");

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const data = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        message: document.getElementById("message").value

    };

    emailjs.send(

        "service_461wa4k",

        "template_alnxdf8",

        data

    ).then(function(){

        return emailjs.send(

            "service_461wa4k",

            "template_cwhdszs",

            data

        );

    }).then(function(){

        document.getElementById("status").innerHTML =
        "Message sent successfully!";

        form.reset();

    }).catch(function(error){

        document.getElementById("status").innerHTML =
        "Failed to send message.";

        console.error(error);

    });

});