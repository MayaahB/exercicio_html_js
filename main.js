document.addEventListener('DOMContentLoaded' , function() {
const form = document.getElementById('valid-form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validarFormulario();

    function validarFormulario() {
        const valorCampoA = parseFloat(campoA.value);
        const valorCampoB = parseFloat(campoB.value);
        const errorMessage = document.querySelector('.error-message');
        const successMessage = document.querySelector('.success-message');

        if (valorCampoB > valorCampoA) {
            errorMessage.style.display = 'none';
            successMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        }
    }

})

})
