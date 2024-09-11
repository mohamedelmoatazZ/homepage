document.querySelector('form').addEventListener('submit', function(e) {
    var emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.value.includes('@')) {
        alert('يرجى إدخال بريد إلكتروني صالح.');
        e.preventDefault();
    }
});
