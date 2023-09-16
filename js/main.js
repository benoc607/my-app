// Once user scrolls past header, display nav at top of screen, 1s transition
window.addEventListener('scroll', navTransition);
function navTransition(){
    var header = document.querySelector('header');
    var nav = document.querySelector('nav');
    var headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight){      
        nav.style.opacity = 1;                     
        nav.style.transition = "opacity 1s";        
    } else {    
        nav.style.opacity = 0;       
    }
}



// Set first slide img as default on load (not working)
let imgNum = 1;
showSlides(imgNum);

// User selection of picture slide
function currentSlide(n) {
showSlides(imgNum = n);
}

// show selected img and hide the rest, repurposed so works for two different sections
function showSlides(n) {
    let i;
    let main = document.getElementsByClassName("imgMain");
    let preview = document.getElementsByClassName("imgPreview");

    // ensures n is within scope of imgMain array
    if (n > main.length) {imgNum = 1}
    if (n < 1) {imgNum = main.length}

    // hides all imgMain
    for (i = 0; i < main.length; i++) {
        main[i].style.display = "none";
    }
    // resets all imgPreview to low opacity
    for (i = 0; i < preview.length; i++) {
        preview[i].className = preview[i].className.replace(" imgActive", "");
    }

    // display selected imgMain and increase opacity of corresponding preview
    main[imgNum-1].style.display = "block";
    preview[imgNum-1].className += " imgActive";
}

// Beginner trial signup, grab user email so further information can be sent re: what to expect
function beginnerTrial() {
    let beginnerApplication = prompt("Please enter your email address to apply for our beginner session so we can confirm numbers and send you additional information. Come join us this Friday at 4:00pm!", "john.doe@email.com");
}

// Display Terms and Conditions
function termsAndCond() {
    window.confirm("Terms and Condions:\nLorem ipsum");
}

// Display Privacy Statement
function privacyState() {
    window.confirm("Privacy Statement:\nLorem ipsum");
}
