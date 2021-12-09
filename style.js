var numberOfButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<numberOfButtons ; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML)
    })
}

document.addEventListener("keydown", function (event){
    var sound=event.innerHTML
makeSound(event.key)

})
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "z":
            var stefan = new Audio("sounds/stefan.m4a")
           stefan.play();
            break;
            case "x":
            var e = new Audio("sounds/e.m4a")
            e.play();
            break;
            case "c":
            var peder = new Audio("sounds/peder.m4a")
            peder.play();
            break;
        case "y":
            var nikoj = new Audio("sounds/nikojj.m4a")
            nikoj.play();
            break;
        case "u":
            var nisto = new Audio("sounds/nisto.m4a")
            nisto.play();
            break;
        case "i":
            var peder = new Audio("sounds/neti.m4a")
            peder.play();
            break;
        case "o":
            var peder = new Audio("sounds/moze.m4a")
            peder.play();
            break;
        case "p":
            var pet = new Audio("sounds/nikola.m4a")
            pet.play();
            break;
    }
}
