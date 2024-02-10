const inputField = document.getElementById('input-field');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('list');

function addItem() {
    const newItemText = inputField.value.trim();

    if (newItemText !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeItem(newItem);

        newItem.appendChild(removeBtn);
        list.appendChild(newItem);
        inputField.value = '';
    }
}

function removeItem(itemToRemove) {
    list.removeChild(itemToRemove);
}
