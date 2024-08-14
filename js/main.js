const btn  = document.getElementById('menue-btn');
const nav  = document.getElementById('menue');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
});