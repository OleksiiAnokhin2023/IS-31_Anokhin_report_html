function loadLab(labNumber) {
    const script = document.createElement('script');
    script.src = `lab${labNumber}.js`;
    document.body.appendChild(script);
}


const labButtons = document.querySelectorAll('.all_labs button');
labButtons.forEach(button => {
    button.addEventListener('click', function() {
        labButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});
