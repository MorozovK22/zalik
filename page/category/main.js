// !Form support
const supportBtn = document.getElementById('supportBtn');
const formContainer = document.getElementById('formContainer');
const closeForm = document.getElementById('closeForm');

supportBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex';
});

closeForm.addEventListener('click', () => {
    formContainer.style.display = 'none';
});

document.getElementById('supportForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ваше сообщение отправлено!');
    formContainer.style.display = 'none';
    document.getElementById('supportForm').reset();
});

// !Modal buy product
function openModal(productName, price) {
    document.getElementById('modal-title').innerText = productName;
    document.getElementById('modal-price').innerText = `Price: ${price}$`;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

document.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    
    if (modal.style.display === 'flex' && !modalContent.contains(event.target) && !event.target.closest('.product')) {
        closeModal();
    }
});

// !Pages category
document.getElementById('tinctures').addEventListener('click', function() {
    window.location.href = 'more/Tinctures/index.html';
});
document.getElementById('liqueurs').addEventListener('click', function() {
    window.location.href = 'more/Liqueurs';
});
document.getElementById('appetizers').addEventListener('click', function() {
    window.location.href = 'more/Appetizers';
});

