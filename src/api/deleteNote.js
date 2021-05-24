export default function deleteNote(index) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://localhost:8000/data', index);
    xhr.send()
}