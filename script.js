function validarCedula() {
    const cedulaInput = document.getElementById('cedulaInput');
    const resultado = document.getElementById('resultado');

    // Obtener el valor de la cédula y limpiar espacios
    const cedula = cedulaInput.value.replace(/\s/g, '');

    // Verificar si la cédula tiene 10 dígitos numéricos
    if (/^\d{10}$/.test(cedula)) {
        // Aplicar algoritmo del módulo 10
        let total = 0;
        for (let i = 0; i < 9; i++) {
            let mult = (i % 2 === 0) ? 1 : 2;
            let temp = parseInt(cedula.charAt(i)) * mult;
            total += (temp > 9) ? temp - 9 : temp;
        }

        // Verificar el último dígito
        if (total % 10 === parseInt(cedula.charAt(9))) {
            resultado.innerText = 'Cédula válida';
            resultado.style.color = 'green';
        } else {
            resultado.innerText = 'Cédula inválida';
            resultado.style.color = 'red';
        }
    } else {
        resultado.innerText = 'Formato de cédula incorrecto';
        resultado.style.color = 'red';
    }
}
