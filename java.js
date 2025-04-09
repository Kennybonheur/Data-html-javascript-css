document.addEventListener('DOMContentLoaded', () => {
    const wrapple = document.querySelector('.wrapple');
    const loginlink = document.querySelector('.login-link');
    const registerlink = document.querySelector('.register-link');

    registerlink.addEventListener('click', () => {
        wrapple.classList.add('active');
    });

    loginlink.addEventListener('click', () => {
        wrapple.classList.remove('active');
    });
});


