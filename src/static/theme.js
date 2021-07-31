console.log("file location: static/theme.js")

// Options docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
const options = {
    root: null, // use the document's viewport as the container
    rootMargin: '0px', // % or px - offsets added to each side of the intersection 
    threshold: 0.5 // percentage of the target element which is visible
}
// Callback docs: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Targeting_an_element_to_be_observed
let callback = (entries) => {
    entries.forEach(entry => {
        // If entry (interceptor) is visible - according with the params set in `options`
        // then adds `intercepted` class to interceptor
        // otherwise removes `intercepted` class
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
        } else {
            entry.target.classList.remove('fadeIn');
        }
    });
}
// Create the intersection observer instance by calling its constructor and passing it a
// callback function to be run whenever a threshold is crossed in one direction or the other:
let observer = new IntersectionObserver(callback, options);
// Get all the `.interceptor` from DOM and attach the observer to these
document.querySelectorAll('.onscroll').forEach(interceptor => {
    observer.observe(interceptor)
});

// LAZYLOAD
document.addEventListener("DOMContentLoaded", function () {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                lazyImage.src = lazyImage.dataset.src
                lazyImage.classList.remove("image_lazy");
                lazyImage.classList.add("image_lazyblur");
                imgObserver.unobserve(lazyImage);
            }
        })
    });
    const arr = document.querySelectorAll('img.image_lazy')
    arr.forEach((v) => {
        imageObserver.observe(v);
    })
})


// NAV

// const pageId = document.querySelectorAll('header nav ul li a');
// Array.from(navbarlinks).forEach(function (navbarlink, i) {
// 	navbarlink.setAttribute("aria-current", 'current' + (i + 1));
// });