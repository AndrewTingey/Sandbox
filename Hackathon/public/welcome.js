var buttons = document.querySelectorAll('.continue');
var questionairre = document.querySelector('.questionairre');
var shiftAmount = 0;

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        shiftAmount -= 100;
        questionairre.style.transform = 'translateX(' + shiftAmount + 'vw)';
    });
});

var backButton = document.querySelector('.back-button');
backButton.addEventListener('click', function() {
    shiftAmount += 100;
    questionairre.style.transform = 'translateX(' + shiftAmount + 'vw)';
});
