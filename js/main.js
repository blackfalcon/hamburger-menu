// Sandbox JavaScript put here

// Jquery toggle
// ========================
// $(document).ready(function(){
//   $('#hamburger-menu').click(function(){
//     $(this).toggleClass('menu__open');
//   });
// });


// Standard JavaScript toggle
// ========================
var trigger = document.getElementById('hamburger-menu');
trigger.addEventListener('click', function(e) {
    e.preventDefault();
    trigger.classList.toggle('menu__open');
});
