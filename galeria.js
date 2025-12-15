// JavaScript específico para la galería

// Datos de características de los vidrios
const caracteristicasData = {
    templado: {
        title: "Vidrio Templado",
        content: `
            <ul>
                <li><strong>Resistencia:</strong> 5 veces más resistente que el vidrio común</li>
                <li><strong>Seguridad:</strong> Se fragmenta en pequeños trozos redondeados</li>
                <li><strong>Temperatura:</strong> Resiste cambios térmicos hasta 700°C</li>
                <li><strong>Grosor:</strong> Disponible de 4mm a 19mm</li>
                <li><strong>Usos:</strong> Puertas, ventanas,fachadas</li>
                <li><strong>Certificación:</strong> Cumple normas NOM-146-SCFI</li>
            </ul>
        `
    },
    canceles: {
        title: "Canceles",
        content: `
            <ul>
                <li><strong>Versatilidad de uso:</strong> Ideales para baños, oficinas, locales comerciales, exteriores o divisiones interiores, adaptándose a diferentes necesidades.</li>
                <li><strong>Diseño moderno y estético:</strong> Aportan un acabado elegante y minimalista que realza cualquier espacio.</li>
                <li><strong>Durabilidad y resistencia:</strong> Fabricados con vidrio templado y aluminio de alta calidad, soportan el uso constante y las condiciones del ambiente.</li>
                <li><strong>Seguridad confiable:</strong> Vidrios templados de alta resistencia que minimizan riesgos en caso de impacto.</li>
                <li><strong>Fácil limpieza y mantenimiento:</strong> Superficies lisas que evitan acumulación de polvo, humedad o sarro.</li>
                <li><strong>Opciones personalizadas:</strong> Gran variedad de estilos, acabados y sistemas (corredizos, abatibles o fijos) que se ajustan a cada proyecto.</li>
            </ul>
        `
    },
    esmerilado: {
        title: "Vidrio Esmerialado",
        content: `
            <ul>
                <li><strong>Privacidad con estilo:</strong> Permiten el paso de la luz natural sin comprometer la intimidad, ideales para baños, oficinas y divisiones interiores.</li>
                <li><strong>Diseño elegante y sofisticado:</strong> Acabado satinado que aporta un toque moderno y distintivo a cualquier espacio.</li>
                <li><strong>Versatilidad de aplicación:</strong> Se utilizan en canceles, puertas, ventanas, fachadas, mobiliario y áreas corporativas.</li>
                <li><strong>Durabilidad y resistencia:</strong> Fabricados en vidrio de alta calidad que soporta el uso diario y conserva su apariencia con el tiempo.</li>
                <li><strong>Fácil mantenimiento:</strong> Superficie tratada que se limpia con facilidad y mantiene un aspecto impecable.</li>
                <li><strong>Opciones personalizadas:</strong> Disponibles en distintos espesores, tonos y diseños decorativos, adaptándose al estilo de cada proyecto.</li>
            </ul>
        `
    },
    espejo: {
        title: "Espejo",
        content: `
            <ul>
                <li><strong>Variedad de diseños:</strong> Disponibles en estilos clásicos, modernos o con acabados esmerilados decorativos que realzan la elegancia de cualquier espacio.</li>
                <li><strong>Funcionalidad y estética:</strong> Además de ser prácticos, amplían visualmente los espacios y aportan luminosidad.</li>
                <li><strong>Personalización a medida:</strong> Se fabrican en diferentes formas, tamaños y acabados según las necesidades de cada proyecto.</li>
                <li><strong>Durabilidad y resistencia:</strong> Elaborados con materiales de alta calidad que aseguran larga vida útil y mantienen el brillo intacto.</li>
                <li><strong>Fácil instalación y mantenimiento:</strong> Se adaptan a muros, muebles o canceles y requieren cuidados mínimos para conservar su apariencia.</li>
                <li><strong>Aplicaciones versátiles:</strong> Ideales para baños, recámaras, salas, vestidores, oficinas y comercios, aportando estilo y funcionalidad en cualquier lugar.</li>
            </ul>
        `
    },
    Fachada: {
        title: "Fachada",
        content: `
            <ul>
                <li><strong>Acabado elegante y distintivo:</strong> El borde biselado crea un efecto brillante y decorativo que realza cualquier diseño.</li>
                <li><strong>Variedad de estilos:</strong> Disponibles en diferentes grosores, colores y combinaciones, incluyendo diseños con esmerilado o figuras personalizadas.</li>
                <li><strong>Versatilidad de uso:</strong> Se aplican en espejos, puertas, ventanas, mesas, canceles y elementos decorativos.</li>
                <li><strong>Aporta amplitud y luz:</strong> El bisel genera reflejos que iluminan el espacio y aportan sensación de mayor amplitud.</li>
                <li><strong>Durabilidad y resistencia:</strong> Fabricados en vidrio de alta calidad, manteniendo su forma y brillo por muchos años.</li>
                <li><strong>Toque decorativo exclusivo:</strong> Cada pieza puede personalizarse, convirtiéndose en un detalle único para interiores y proyectos arquitectónicos.</li>
            </ul>
        `
    },
    pasamanos: {
        title: "Pasamanos y Fachadas",
        content: `
            <ul>
                <li><strong>Diseño moderno y elegante:</strong> Aportan un estilo minimalista y vanguardista que realza cualquier espacio o edificio.</li>
                <li><strong>Seguridad y resistencia:</strong> Fabricados con vidrio templado o laminado, soportan impactos, cambios de temperatura y condiciones climáticas extremas.</li>
                <li><strong>Versatilidad de instalación:</strong> Adaptables a escaleras, balcones, terrazas, oficinas, comercios y fachadas arquitectónicas.</li>
                <li><strong>Aprovechamiento de luz y visibilidad:</strong> Permiten iluminación natural, vistas claras y sensación de amplitud sin sacrificar protección.Permiten iluminación natural, vistas claras y sensación de amplitud sin sacrificar protección.</li>
                <li><strong>Fácil mantenimiento:</strong> Superficies lisas que se limpian fácilmente, conservando brillo y estética por mucho tiempo.</li>
                <li><strong>Valor estético y funciona:</strong> Combinan seguridad, funcionalidad y estilo, aumentando el atractivo y la imagen de cualquier proyecto.</li>
            </ul>
        `
    }
};

// Datos de trabajos realizados (simulando imágenes de proyectos)
const trabajosData = {
    templado: [
        // La ruta corregida de la imagen
        "Imagenes nuevas/Cocina 2.png",
        "Imagenes nuevas/Repisas de copas 1.png",
        "Imagenes nuevas/Cocina.png",
        "Imagenes nuevas/Domo .png",
        "Imagenes nuevas/Repisas 3.png",
        "Imagenes nuevas/Cama.png",
        "Imagenes nuevas/Domo 3.png",
        "Imagenes nuevas/Domo 4.png",
        "Imagenes nuevas/Fachada 5.png",
        "Imagenes nuevas/Fachada 6.png",
        "Imagenes nuevas/Repisas 4.png",
        "Imagenes nuevas/Lavabo 1.png",
        "Imagenes nuevas/Barril.png",
        "Imagenes nuevas/Locales 1.png",
        "Imagenes nuevas/Repisas De Esquineros 2.png"

    ],
    canceles: [
        "Imagenes nuevas/Cancel Con Lineas curveadas.png",
        "Imagenes nuevas/Cancel De Bambu.png",
        "Imagenes nuevas/Cancel De Baño 1.png",
        "Imagenes nuevas/Cancel Normal 1.png",
        "Imagenes nuevas/Cancel De Baño 2.png",
        "Imagenes nuevas/Cancel De Baño 3.png",
        "Imagenes nuevas/Cancel Normal 4.png",
        "Imagenes nuevas/Cancel De Baño 4.png",
        "Imagenes nuevas/Cancel De Baño 5.png",
        "Imagenes nuevas/Cancel Normal Satinado 3.png"

    ],
    esmerilado: [
        "Imagenes nuevas/Grabado Esmerilado 8.png",
        "Imagenes nuevas/Cancel De Baño Esmerilado 6.png",
        "Imagenes nuevas/Grabado Esmerilado 1.png",
        "Imagenes nuevas/Cancel De Baño Esmerilado 7.png",
        "Imagenes nuevas/Reconocimento 1.png",
        "Imagenes nuevas/Grabado Esmerilado 2.png",
        "Imagenes nuevas/Cancel De Baño Esmerilado 8.png",
        "Imagenes nuevas/Grabado Esmerilado 3.png",
        "Imagenes nuevas/Reconocimiento 2.png",
        "Imagenes nuevas/Cancel De Baño Esmerilado 9.png",
        "Imagenes nuevas/Grabado Esmerilado 4.png",
        "Imagenes nuevas/Cancel De Baño Esmerilado 10.png",
        "Imagenes nuevas/Grabado Esmerilado 5.png",
        "Imagenes nuevas/Reconocimiento 3.png",
        "Imagenes nuevas/Cancel Normal Esmerilado 2.png",
        "Imagenes nuevas/Grabado Esmerilado 6.png",
        "Imagenes nuevas/Domo 2.png",
        "Imagenes nuevas/Grabado Esmerilado 7.png",
        "Imagenes nuevas/Grabado Esmerilado 9.png",
        "Imagenes nuevas/Reconocimiento 4.png",
        "Imagenes nuevas/Grabado Esmerilado 10.png"
    ],
    espejo: [
        "Imagenes nuevas/Espejo Con Luces 2.png",
        "Imagenes nuevas/Espejo Con Luces Led 3.png",
        "Imagenes nuevas/Espejo Con luces.png"
    ],
    Fachada: [
        "Imagenes nuevas/Fachada 7.png",
        "Imagenes nuevas/Fachada 1.png",
        "Imagenes nuevas/Fachada 8.png",
        "Imagenes nuevas/Fachada 2.png",
        "Imagenes nuevas/Fachada 3.png",
        "Imagenes nuevas/Fachada 4.png",
    ],
    pasamanos: [
        "Imagenes nuevas/Pasamanos 1.png",
        "Imagenes nuevas/Pasamanos 2.png",
        "Imagenes nuevas/Pasamanos 3.png",
        "Imagenes nuevas/Pasamanos 4.png",
        "Imagenes nuevas/Pasamanos Con Pecera 5.png"
    ]
};

// Función para mostrar características
function showCaracteristicas(tipo) {
    const modal = document.getElementById('modal-caracteristicas');
    const title = document.getElementById('modal-title-caracteristicas');
    const body = document.getElementById('modal-body-caracteristicas');
    
    if (caracteristicasData[tipo]) {
        title.textContent = caracteristicasData[tipo].title;
        body.innerHTML = caracteristicasData[tipo].content;
        modal.style.display = 'block';
        
        // Agregar animación de entrada
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

// Función para mostrar trabajos realizados
function showTrabajos(tipo) {
    const modal = document.getElementById('modal-trabajos');
    const title = document.getElementById('modal-title-trabajos');
    const body = document.getElementById('modal-body-trabajos');
    
    if (trabajosData[tipo]) {
        title.textContent = `Trabajos Realizados - ${caracteristicasData[tipo].title}`;
        
        // Crear grid de imágenes
        body.innerHTML = '';
        trabajosData[tipo].forEach((imageSrc, index) => {
            const trabajoItem = document.createElement('div');
            trabajoItem.className = 'trabajo-item';
            trabajoItem.innerHTML = `
                <img src="${imageSrc}" alt="Trabajo ${index + 1}" onclick="openImageModal('${imageSrc}')">
            `;
            body.appendChild(trabajoItem);
        });
        
        modal.style.display = 'block';
        
        // Agregar animación de entrada
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

// Función para cerrar modales
function closeModal(tipo) {
    const modal = document.getElementById(`modal-${tipo}`);
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Función para abrir imagen en modal (opcional)
function openImageModal(imageSrc) {
    const imageModal = document.createElement('div');
    imageModal.className = 'image-modal';
    imageModal.style.cssText = `
        position: fixed;
        inset: 0;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        position: relative;
    `;

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: -15px;
        right: -15px;
        font-size: 32px;
        color: white;
        cursor: pointer;
        background: rgba(0,0,0,0.7);
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    closeBtn.onclick = () => {
        document.body.removeChild(imageModal);
    };

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90vw;
        max-height: 90vh;
        width: auto;
        height: auto;
        object-fit: contain;
        display: block;
        border-radius: 10px;
    `;

    imageContainer.appendChild(closeBtn);
    imageContainer.appendChild(img);
    imageModal.appendChild(imageContainer);
    document.body.appendChild(imageModal);

    // Cerrar con Escape
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            if (imageModal.parentNode) {
                document.body.removeChild(imageModal);
            }
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}


// Cerrar modales al hacer click fuera de ellos
window.addEventListener('click', function(event) {
    const modalCaracteristicas = document.getElementById('modal-caracteristicas');
    const modalTrabajos = document.getElementById('modal-trabajos');
    
    if (event.target === modalCaracteristicas) {
        closeModal('caracteristicas');
    }
    
    if (event.target === modalTrabajos) {
        closeModal('trabajos');
    }
});

// Cerrar modales con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modalCaracteristicas = document.getElementById('modal-caracteristicas');
        const modalTrabajos = document.getElementById('modal-trabajos');
        
        if (modalCaracteristicas.style.display === 'block') {
            closeModal('caracteristicas');
        }
        
        if (modalTrabajos.style.display === 'block') {
            closeModal('trabajos');
        }
    }

});
