function Contact() {
    const contentDiv = document.getElementById('content');
    const title = document.createElement('h1');
    title.textContent = 'This page displays Contact';
    contentDiv.appendChild(title);
}

export default Contact;