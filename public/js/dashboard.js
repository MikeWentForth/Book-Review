const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#book-name').value.trim();
    const description = document.querySelector('#review-desc').value.trim();

    if (title && description) {
        const response = await fetch(`/api/dashboard`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/userHome');
        } else {
            alert('Failed to create project');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/dashboard/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/userHome');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.review-list')
    .addEventListener('click', delButtonHandler);