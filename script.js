document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});