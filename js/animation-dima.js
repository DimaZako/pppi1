function onEntry7(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}


const observer8 = new IntersectionObserver(onEntry7, options);

const elements8 = document.querySelectorAll('.content-dima');
for (let elm of elements8) {
    observer.observe(elm);
}