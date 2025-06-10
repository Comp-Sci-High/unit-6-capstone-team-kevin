async function deletePost(id) {
 await fetch('/delete/' + id, {method: 'DELETE'});
 window.location.href = "/post"
}
