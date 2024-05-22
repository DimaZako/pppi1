function onEntry2(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}


const observer2 = new IntersectionObserver(onEntry2, options);

const elements3 = document.querySelectorAll('.content-denis');
for (let elm of elements3) {
    observer.observe(elm);
}