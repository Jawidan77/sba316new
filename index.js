document.addEventListener('DOMContentLoaded', () => {
    // Cache elements
    const changeTextBtn = document.getElementById('changeTextBtn');
    const addItemBtn = document.getElementById('addItemBtn');
    const introParagraph = document.querySelector('#intro');
    const sampleForm = document.getElementById('sampleForm');
    const outputDiv = document.getElementById('output');
    const itemList = document.getElementById('itemList');

    // Event listener for button click to change text
    changeTextBtn.addEventListener('click', () => {
        introParagraph.textContent = 'The text has been changed!';
    });

    // Event listener for button click to add item
    addItemBtn.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item';
        itemList.appendChild(newItem);
    });

    // Form validation and submission
    sampleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameInput = document.querySelector('#name');
        if (nameInput.value.trim() === '') {
            alert('Name is required!');
        } else {
            outputDiv.textContent = `Hello, ${nameInput.value}!`;
        }
    });

    // Example of navigating DOM elements
    const header = document.querySelector('header');
    const main = header.nextElementSibling;
    console.log(main); // Logs the main element

    // Iterate over a collection of elements
    const listItems = document.querySelectorAll('li');
    listItems.forEach((item, index) => {
        item.textContent = `Item ${index + 1}`;
    });

    // Modify style and class of an element
    changeTextBtn.addEventListener('mouseover', () => {
        changeTextBtn.style.backgroundColor = '#45a049';
    });

    changeTextBtn.addEventListener('mouseout', () => {
        changeTextBtn.style.backgroundColor = '#4CAF50';
    });

    // Modify an attribute of an element
    addItemBtn.addEventListener('click', () => {
        addItemBtn.setAttribute('disabled', 'true');
        setTimeout(() => {
            addItemBtn.removeAttribute('disabled');
        }, 2000);
    });

    // Use BOM properties or methods
    console.log(window.innerWidth);
    console.log(navigator.userAgent);

    // Use DocumentFragment to create templated content
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 3; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Fragment Item ${i + 1}`;
        fragment.appendChild(listItem);
    }
    itemList.appendChild(fragment);
});
