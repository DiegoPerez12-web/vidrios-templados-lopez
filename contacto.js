// JavaScript específico para la página de contacto simple (solo 3 elementos)

// Funciones para mejorar la experiencia del usuario
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar funciones específicas de contacto
    initContactInteractions();
    showBusinessHours();
    addClickToCall();
    
    // Mensaje de bienvenida específico para contacto
    setTimeout(() => {
        showAlert('📞 ¡Contáctanos! Estamos aquí para ayudarte', 'info');
    }, 1000);
});

// Función para inicializar interacciones de contacto
function initContactInteractions() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        // Agregar efectos de sonido visual al hover
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.animation = 'bounce 0.6s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.animation = '';
            }
        });
        
        // Agregar funcionalidad de clic específica para cada elemento
        addContactItemClick(item, index);
    });
}

// Función para agregar funcionalidad de clic a cada elemento de contacto
function addContactItemClick(item, index) {
    const contactDetail = item.querySelector('.contact-detail');
    
    if (contactDetail) {
        contactDetail.addEventListener('click', function() {
            const text = this.textContent;
            
            switch(index) {
                case 0: // Teléfono
                    handlePhoneClick(text);
                    break;
                case 1: // Dirección
                    handleAddressClick(text);
                    break;
                case 2: // Email
                    handleEmailClick(text);
                    break;
            }
        });
        
        // Agregar cursor pointer y tooltip
        contactDetail.style.cursor = 'pointer';
        contactDetail.title = getClickTooltip(index);
    }
}

// Función para manejar clic en teléfono
function handlePhoneClick(phoneText) {
    const cleanPhone = phoneText.replace(/\s/g, '');
    
    // Copiar al clipboard
    copyToClipboard(cleanPhone).then(() => {
        showAlert('📞 Número copiado al portapapeles', 'success');
        
        // Opción de llamar directamente (en móvil)
        if (isMobile()) {
            setTimeout(() => {
                const shouldCall = confirm('¿Quieres llamar ahora?');
                if (shouldCall) {
                    window.location.href = `tel:${cleanPhone}`;
                }
            }, 1500);
        }
    }).catch(() => {
        showAlert('No se pudo copiar el número', 'error');
    });
}

// Función para manejar clic en dirección
function handleAddressClick(addressText) {
    // Copiar al clipboard
    copyToClipboard(addressText).then(() => {
        showAlert('📍 Dirección copiada al portapapeles', 'success');
        
        // Preguntar si quiere abrir en mapas
        setTimeout(() => {
            const shouldOpenMap = confirm('¿Quieres abrir la dirección en Google Maps?');
            if (shouldOpenMap) {
                openInGoogleMaps(addressText);
            }
        }, 1500);
    }).catch(() => {
        showAlert('No se pudo copiar la dirección', 'error');
    });
}

// Función para manejar clic en email
function handleEmailClick(emailText) {
    // Copiar al clipboard
    copyToClipboard(emailText).then(() => {
        showAlert('✉️ Email copiado al portapapeles', 'success');
        
        // Preguntar si quiere abrir cliente de email
        setTimeout(() => {
            const shouldOpenEmail = confirm('¿Quieres abrir tu cliente de email?');
            if (shouldOpenEmail) {
                window.location.href = `mailto:${emailText}?subject=Consulta sobre vidrios&body=Hola, me interesa obtener información sobre sus servicios de vidrios.`;
            }
        }, 1500);
    }).catch(() => {
        showAlert('No se pudo copiar el email', 'error');
    });
}

// Función para obtener tooltip según el índice
function getClickTooltip(index) {
    const tooltips = [
        'Click para copiar el número y llamar',
        'Click para copiar dirección y abrir en mapas',
        'Click para copiar email y enviar mensaje'
    ];
    return tooltips[index] || 'Click para interactuar';
}

// Función para copiar al clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback para navegadores más antiguos
        return new Promise((resolve, reject) => {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                document.body.removeChild(textArea);
                resolve();
            } catch (err) {
                document.body.removeChild(textArea);
                reject(err);
            }
        });
    }
}

// Función para abrir en Google Maps
function openInGoogleMaps(address) {
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapsUrl, '_blank');
}

// Función para obtener direcciones
function getDirections() {
    const address = "Av. Aguascalientes 3234, Aguascalientes, Ags";
    const encodedAddress = encodeURIComponent(address);
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const directionsUrl = `https://www.google.com/maps/dir/${lat},${lng}/${encodedAddress}`;
            window.open(directionsUrl, '_blank');
        }, function() {
            // Si no se puede obtener la ubicación, abrir Google Maps normal
            const directionsUrl = `https://www.google.com/maps/dir//${encodedAddress}`;
            window.open(directionsUrl, '_blank');
        });
    } else {
        // Fallback si no hay geolocalización
        const directionsUrl = `https://www.google.com/maps/dir//${encodedAddress}`;
        window.open(directionsUrl, '_blank');
    }
}

// Función para detectar si es móvil
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Función para mostrar horarios de negocio con estado actual
function showBusinessHours() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Domingo, 1 = Lunes, etc.
    
    let status = '';
    let statusClass = '';
    let nextOpen = '';
    
    if (currentDay >= 1 && currentDay <= 5) { // Lunes a Viernes
        if (currentHour >= 8 && currentHour < 18) {
            status = '🟢 Abierto ahora';
            statusClass = 'open';
        } else if (currentHour < 8) {
            status = '🔴 Cerrado - Abre a las 8:00 AM';
            statusClass = 'closed';
            nextOpen = 'hoy';
        } else {
            status = '🔴 Cerrado - Abre mañana a las 8:00 AM';
            statusClass = 'closed';
            nextOpen = 'mañana';
        }
    } else if (currentDay === 6) { // Sábado
        if (currentHour >= 9 && currentHour < 14) {
            status = '🟢 Abierto ahora';
            statusClass = 'open';
        } else if (currentHour < 9) {
            status = '🔴 Cerrado - Abre a las 9:00 AM';
            statusClass = 'closed';
            nextOpen = 'hoy';
        } else {
            status = '🔴 Cerrado - Abre lunes a las 8:00 AM';
            statusClass = 'closed';
            nextOpen = 'el lunes';
        }
    } else { // Domingo
        status = '🔴 Cerrado - Abre lunes a las 8:00 AM';
        statusClass = 'closed';
        nextOpen = 'mañana';
    }
    
    // Agregar estado a la primera tarjeta (teléfono)
    const phoneItem = document.querySelector('.contact-item');
    if (phoneItem) {
        // Remover estado anterior si existe
        const existingStatus = phoneItem.querySelector('.business-status');
        if (existingStatus) {
            phoneItem.removeChild(existingStatus);
        }
        
        const statusDiv = document.createElement('div');
        statusDiv.className = `business-status ${statusClass}`;
        statusDiv.textContent = status;
        phoneItem.appendChild(statusDiv);
    }
}

// Función para agregar funcionalidad click-to-call en móviles
function addClickToCall() {
    if (isMobile()) {
        const phoneItem = document.querySelector('.contact-item .contact-detail');
        if (phoneItem) {
            // Agregar ícono de teléfono en móviles
            const callButton = document.createElement('div');
            callButton.innerHTML = '📱 Tocar para llamar';
            callButton.style.cssText = `
                margin-top: 10px;
                padding: 8px;
                background-color: rgba(52, 152, 219, 0.1);
                border-radius: 5px;
                font-size: 0.9rem;
                color: #3498db;
                cursor: pointer;
            `;
            
            callButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const phoneText = phoneItem.textContent.replace(/\s/g, '');
                window.location.href = `tel:${phoneText}`;
            });
            
            phoneItem.parentNode.appendChild(callButton);
        }
    }
}

// Función para actualizar horarios cada minuto
setInterval(showBusinessHours, 60000);

// Agregar estilos CSS para las animaciones si no existen
if (!document.querySelector('#contact-animations-style')) {
    const style = document.createElement('style');
    style.id = 'contact-animations-style';
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 60%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-20px);
            }
            80% {
                transform: translateY(-10px);
            }
        }
        
        .contact-detail {
            transition: all 0.3s ease;
        }
        
        .contact-detail:hover {
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);
}