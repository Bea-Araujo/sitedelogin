const submitBtn = document.querySelector('#submit-btn')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // verificação de usuario

    window.location.href = './pages/inicial.html'
})