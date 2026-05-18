const commentInput = document.getElementById('commentInput');
const comments = document.getElementById('comments');

commentInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && commentInput.value.trim() !== '') {
        const newComment = document.createElement('div');
        newComment.textContent = "> " + commentInput.value;
        comments.appendChild(newComment);
        commentInput.value = '';
        comments.scrollTop = comments.scrollHeight;
    }
});