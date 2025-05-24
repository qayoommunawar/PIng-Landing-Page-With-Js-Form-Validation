const form = document.querySelector('form');
const errorText = document.querySelector('.error');
const input = document.querySelector("input[type='email']");
const emptyInput = document.querySelector(".empty-input");
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email){
        emptyInput.classList.remove('hidden');
        errorText.classList.add('hidden');
    }else{
        if (regex.test(email)){
            input.style.borderColor = 'var(--clor-primary-blue)';
            errorText.classList.add('hidden');
            form.reset();
        }else{
            errorText.classList.remove('hidden');
            emptyInput.classList.add('hidden');
            input.style.borderColor = 'var(--clr-light-red)';
        }
    }
})