async function updatePost(event) {  
    event.preventDefault();
    const title = document.querySelector('#post-title').value;
    const blogpostId = document.querySelector('#post-blogpostId').value;
    const body = event.target.getAttribute('data-id');
    if (title && content) {
        const response = await fetch(`/api/blogpost/${body}`, {
            method: 'PUT',
            body: JSON.stringify({ title: title, content: content, }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update blogpost');
        }
    }
}

const blogpostForm = document.querySelector('#blogpost-form');
blogpostFirn.addEventListener('submit', updatePost);