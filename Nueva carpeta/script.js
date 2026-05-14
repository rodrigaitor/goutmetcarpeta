
// Función para generar las tarjetas en el grid
function cargarRecetas() {
    const grid = document.getElementById('grid-recetas');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    recetas.forEach(receta => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        tarjeta.innerHTML = `
            <img src="${receta.imagen}" alt="${receta.titulo}">
            <h3>${receta.titulo}</h3>
            <p>${receta.descripcion}</p>
            <a href="#" class="btn-receta">Ver receta completa →</a>
        `;
        grid.appendChild(tarjeta);
    });
}

// Newsletter con mensaje de confirmación
function initNewsletter() {
    const form = document.getElementById('formNewsletter');
    const mensaje = document.getElementById('mensajeNewsletter');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            mensaje.innerHTML = `✅ ¡Gracias! Enviaremos las recetas a ${email}`;
            mensaje.style.color = 'green';
            form.reset();
            
            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                mensaje.innerHTML = '';
            }, 3000);
        });
    }
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', () => {
    cargarRecetas();
    initNewsletter();
});