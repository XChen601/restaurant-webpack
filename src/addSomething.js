
function addContent() {
    const contentDiv = document.getElementById('content');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the content of the page.';
    contentDiv.appendChild(content);
}

export default addContent;