
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);

// Для першої секції
let elements1 = document.querySelectorAll('.content-artem');
for (let elm of elements1) {
    observer.observe(elm);
}
