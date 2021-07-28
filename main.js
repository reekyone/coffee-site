window.onscroll = function() {scrollFunction()}  // Calls function on scroll

// If page is at the top, nav background is transparent
// If page is scrolled, nav background turns black
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "rgb(48, 33, 0)";
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
}