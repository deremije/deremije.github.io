window.onload = function() {
    setChildHeight("gray", "welcome-section");
    blinkOut();
    let currentPosition = document.body.scrollTop;
    
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > currentPosition && window.pageYOffset > 100) {
            navHide();
        } else {
            navAppear();
        }
        if (window.pageYOffset >= document.body.scrollHeight - window.innerHeight) {
            navAppear();
        }
        currentPosition = window.pageYOffset;
    });
}

function setChildHeight(child, parent = "body") {
    if (parent == "body") {
        let parentDiv = window.innerHeight;
    } else {
        parentDiv = document.getElementById(parent).offsetHeight;
    }
    let childDiv = document.getElementById(child).offsetHeight;
    let childPadding = ((parentDiv - childDiv) / 2) + "px";
    document.getElementById(parent).style.paddingTop = childPadding;
}

function navHide() {
    let nav = document.getElementById("navbar");
    nav.classList.add("navHide");
}

function navAppear() {
    let nav = document.getElementById("navbar");
    nav.classList.remove("navHide");
}

function blinkOut() {
    let scroll = document.getElementById("scroll");
    let timer = setTimeout(function() {
        scroll.classList.add("blinkOut");
        blinkIn();
    }, 1500);
    
}

function blinkIn() {
    let scroll = document.getElementById("scroll");
    let timer = setTimeout(function() {
        scroll.classList.remove("blinkOut");
        blinkOut();
    }, 750);
}

function goThere() {
    let welcome = document.getElementById("welcome-section");
    let distance = welcome.offsetHeight;
    console.log(distance);
    window.scrollTo({
        top: distance,
        behavior: "smooth"
    })
}