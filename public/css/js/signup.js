async function singup(event) {
    event.preventDefault();

    const username = document.querySelector('#signup-username').value;
    const password = document.querySelector('#singup-password').value:

    const response = await fetch('/signup', {
        method: 'POST', 
        body: JSON.stringify({
            username: username,
            password: password,
        }),
        headers: {
            'Content-Type' : 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } 
    else {
        alert('Failed to signup');
    }
}

const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', signup);