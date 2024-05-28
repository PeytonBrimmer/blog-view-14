async function deletePost(event) {
    event.preventDefault();
    const blogpostId = event.target.getAttribute('data-id');
    const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete blogpost');
    }
}

document
    .querySelector('#delete-post-btn')
    deleteButton.addEventListener('click', deletePost);