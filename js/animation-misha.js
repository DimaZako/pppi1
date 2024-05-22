function onEntry1(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}


const observer1 = new IntersectionObserver(onEntry1, options);

const elements2 = document.querySelectorAll('.content-misha');
for (let elm of elements2) {
    observer.observe(elm);
}