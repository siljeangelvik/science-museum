let accessibility = document.getElementById("accessibility"),
    hours = document.getElementById("hours"),
    kids = document.getElementById("for-kids"),
    teachers = document.getElementById("for-teachers"),
    support = document.getElementById("support"),
    prices = document.getElementById("prices"),
    location = document.getElementById("museum-location"),
    events = document.getElementById("events")

function scrollToElement(element, offset = -5) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
        behavior: 'smooth',
        top: y,
    });
}