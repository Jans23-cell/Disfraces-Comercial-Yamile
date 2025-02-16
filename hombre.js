// Función para actualizar el precio dependiendo de la talla y la cantidad seleccionadas
function updatePrice() {
    // Precios base por talla
    const preciosPorTalla = {
        4: 25,
        6: 27,
        8: 29,
        10: 31,
        12: 33
    };

    // Obtenemos la talla seleccionada y la cantidad
    const tallaSeleccionada = document.getElementById('talla-wolverine').value;
    const cantidadSeleccionada = document.getElementById('cantidad-wolverine').value;

    // Precio base de la talla seleccionada
    let precioUnitario = preciosPorTalla[tallaSeleccionada];

    // Aplicar descuento progresivo por cantidad
    if (cantidadSeleccionada >= 5 && cantidadSeleccionada <= 9) {
        // 5% de descuento
        precioUnitario *= 0.95;
    } else if (cantidadSeleccionada >= 10 && cantidadSeleccionada <= 19) {
        // 10% de descuento
        precioUnitario *= 0.90;
    } else if (cantidadSeleccionada >= 20) {
        // 15% de descuento
        precioUnitario *= 0.85;
    }

    // Calcular el total
    const total = precioUnitario * cantidadSeleccionada;
    
    // Actualizar el precio mostrado
    document.getElementById('precio-wolverine').innerText = `Total: $${total.toFixed(2)}`;
}

// Actualizar el precio cada vez que cambie la talla o la cantidad
document.getElementById('talla-wolverine').addEventListener('change', updatePrice);
document.getElementById('cantidad-wolverine').addEventListener('input', updatePrice);

// Llamar a la función para la carga inicial
updatePrice();
