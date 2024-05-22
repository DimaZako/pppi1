function onEntry3(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}


const observer3 = new IntersectionObserver(onEntry3, options);

const elements4 = document.querySelectorAll('.content-illya');
for (let elm of elements4) {
    observer.observe(elm);
}