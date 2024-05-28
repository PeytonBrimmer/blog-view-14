async function comment(event) {
    event.preventDefault();
    const comment = document.querySelector('#comment').value.trim();
    if (comment) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment: comment, }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create comment');
        }
    }
}

const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', comment);