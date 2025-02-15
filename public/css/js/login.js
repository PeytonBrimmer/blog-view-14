async function login(event) {
    event.preventDefault();
    const username = document.querySelector('#login-username').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login',{
            method: 'POST',
            body: JSON.stringify({ 
                username: username,
                password: password,
            }),
            headers: {
                 'Content-Type': 'application/json', 
                },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert('Failed to login');
        }
    }
}

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', login);