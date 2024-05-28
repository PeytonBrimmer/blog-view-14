async function blogpostHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#blogpost-title').value.trim();
    const body = document.querySelector('#blogpost-body').value.trim();
    if (title && body) {
        const response = await fetch(`/api/blogpost`, {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blogpost');
        }
    }
}

document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', blogpostHandler);

const blogpostForm = document.querySelector('.new-blogpost-form');
const title = document.querySelector('#blogpost-title');
blogpostForm.addEventListener('submit', post );