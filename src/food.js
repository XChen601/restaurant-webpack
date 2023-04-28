function Food() {
    const contentDiv = document.getElementById('content');
    const title = document.createElement('h1');
    title.textContent = 'This page displays food';
    contentDiv.appendChild(title);
}

export default Food;