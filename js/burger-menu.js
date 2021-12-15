const toggleableElement = document.getElementById("toggle-element");
const toggleButton = document.getElementById("toggle-button");
let toggle = true;

toggleButton.addEventListener("click", () => {
    toggle = !toggle;
    toggleableElement.style.display = toggle ? "none" : "block";

});
let target = window.location.hash

target = target.replace("#", "");

window.location.hash = "";

$(window).on("load", function () {
    if (target) {
        $("html, body").animate({
            scrollTop: $("#" + target).offset().top
        }, 700, "swing", function () {

        });
    }
});