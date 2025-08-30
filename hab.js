// Hotel Rooms Showcase JavaScript

// Room data
const roomsData = {
    "superior-matrimonial": {
        id: "superior-matrimonial",
        title: "Superior Matrimonial",
        subtitle: "Romantismo y confort",
        description: "Habitación romántica perfecta para parejas que buscan intimidad y confort. La chimenea crea un ambiente acogedor mientras disfrutas de las vistas espectaculares del Valle Sagrado.",
        capacity: 2,
        amenities: ["Chimenea", "Smart TV", "Bañera", "Frigobar", "WiFi Gratis"],
        images: [
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617052_614080125d79f__mg_8299_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617056_614080125e04d__mg_8111_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617059_614080125eac3__mg_8099_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617062_614080125f586__mg_8091_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617045_614080125bec1__mg_8336_d_r.jpg.jpg"
        ]
    },

    "deluxe-matrimonial": {
        id: "deluxe-matrimonial",
        title: "Deluxe Matrimonial",
        subtitle: "Romantismo y confort",
        description: "Habitación romántica perfecta para parejas que buscan intimidad y confort. La chimenea crea un ambiente acogedor mientras disfrutas de las vistas espectaculares del Valle Sagrado.",
        capacity: 2,
        amenities: ["Chimenea", "Smart TV", "Bañera", "Frigobar", "WiFi Gratis"],
        images: [
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617410_6140817bc98ee_cocina.png.png",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617423_6140817bcc58a__mg_6096_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617406_6140817bc87ad_hab-matrimonial.png.png",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617413_6140817bca7e3_captura-de-pantalla-2019-10-31-a-la-s-17.png.png",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617420_6140817bcbc2d__mg_6124_r.jpg.jpg"

        ]
    },


    "duplex-familiar": {
        id: "duplex-familiar",
        title: "Dúplex Familiar",
        subtitle: "Comodidad para toda la familia",
        description: "Espaciosa habitación dúplex ideal para familias que desean compartir momentos especiales sin perder privacidad. Cuenta con dos niveles, área de estar y vistas encantadoras al Valle Sagrado.",
        capacity: 1,
        amenities: ["Camas múltiples", "Smart TV", "Kitchenette", "Frigobar", "WiFi Gratis"],
        images: [
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617871_61408339663e5__mg_6202_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617856_614083396411e__mg_8212_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617859_6140833964cf2__mg_8152_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617852_61408339639bd_img_4316.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617867_6140833965876__mg_8136_d_r.jpg.jpg"
        ]
    },





    "superior-doble": {
        id: "superior-doble",
        title: "Superior Doble",
        subtitle: "Confort y estilo para dos",
        description: "Habitación amplia y luminosa con dos camas individuales o una cama doble, perfecta para amigos o parejas. Disfruta de una decoración cálida, vistas al jardín y todas las comodidades modernas.",
        capacity: 2,
        amenities: ["Camas dobles o twin", "Smart TV", "Ducha caliente", "Frigobar", "WiFi Gratis"],
        images: [
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618101_6140842a90c94__mg_8231_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618097_6140842a9003c__mg_8237_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618109_6140842a9183a__mg_6922_r_1.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618093_6140842a8f178__mg_8249_d_r.jpg.jpg"

        ]
    },





    "superior-triple": {
        id: "superior-triple",
        title: "Superior Triple",
        subtitle: "Espacio y confort para tres",
        description: "Ideal para familias pequeñas o grupos de amigos, esta habitación ofrece tres camas cómodas, decoración cálida y vistas al jardín. Disfruta de todas las comodidades modernas en un ambiente acogedor.",
        capacity: 3,
        amenities: ["3 camas individuales", "Smart TV", "Ducha caliente", "Frigobar", "WiFi Gratis"],
        images: [
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1633375316_615b545122e37_img_8320.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1633375320_615b545123b43_img_8430.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631619923_61408b501f9a7__mg_8082_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631619938_61408b502ca88__mg_6823_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631619927_61408b5021a7e__mg_8060_d_r.jpg.jpg"
        ]
    },







    "king-castle": {
        id: "king-castle",
        title: "King Castle con Jacuzzi",
        subtitle: "La experiencia más premium",
        description: "Nuestra suite más exclusiva, diseñada como un apartamento de lujo. Ideal para grupos grandes o familias que desean la experiencia más premium del Valle Sagrado.",
        capacity: 5,
        amenities: ["Jacuzzi", "3 Camas", "Cocina Full", "Sala & Comedor", "2 Smart TV"],
        images: [
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618277_614084e1db1c7__mg_8395_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618295_614084e1dec76__mg_8352_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618281_614084e1dc37b__mg_8380_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618291_614084e1ddd12__mg_8356_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618298_614084e1df861__mg_6021_d_r_ok.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631618285_614084e1dd1d5__mg_8378_d_r.jpg.jpg"
        ]
    },
    "suite-premium": {
        id: "suite-premium",
        title: "Suite Premium con Jacuzzi",
        subtitle: "Lujo y relajación",
        description: "La experiencia de lujo definitiva con jacuzzi privado y espacios amplios. Perfecta para familias o grupos que buscan el máximo confort y privacidad.",
        capacity: 3,
        amenities: ["Jacuzzi", "Smart TV", "2 Dormitorios", "Balcón", "Frigobar"],
        images: [
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1633369971_615b3f5f096e9_suite-primium.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1633369954_615b3f5f071a3__mg_8009_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1633369958_615b3f5f07bc3_img_8415.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1633369961_615b3f5f07fe9_img_8419.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1633369954_615b3f5f071a3__mg_8009_d_r.jpg.jpg"
        ]
    },


    "suite-matrimonial": {
        id: "suite-matrimonial",
        title: "Suite Matrimonial",
        subtitle: "Lujo y romance en el Valle",
        description: "Nuestra Suite Matrimonial ofrece una experiencia de lujo para parejas que desean relajarse en un entorno íntimo y elegante. Disfruta de una amplia sala, chimenea, bañera y vistas espectaculares desde tu balcón privado.",
        capacity: 2,
        amenities: ["Chimenea", "Smart TV", "Bañera", "Balcón con vista", "WiFi Gratis"],
        images: [
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617236_614080c5f1b45__mg_8007_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617239_614080c5f27d8__mg_8003_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617225_614080c5eba4b__mg_8037_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617232_614080c5f09f3__mg_8015_d_r.jpg.jpg",
            "https://recursos.fnsbooking.com/alojamientos/8209/big/8209-1631617243_614080c5f3a42__mg_8001_d_r.jpg.jpg"
        ]
    }
};

// Global variables
let currentRoomId = null;
let currentSlideIndex = 0;
let isModalOpen = false;
let favoriteRooms = new Set();
let touchStartX = 0;
let touchEndX = 0;

// DOM elements
let modal, modalBackdrop, modalClose, modalTitle, modalSubtitle, modalDescription;
let carouselTrack, carouselDots, prevBtn, nextBtn;

// Initialize application
document.addEventListener('DOMContentLoaded', function () {
    initializeDOM();
    initializeEventListeners();
    loadFavorites();
    setupTouchEvents();
    setupScrollAnimations();
    setupLazyLoading();
});

// Initialize DOM references
function initializeDOM() {
    modal = document.getElementById('roomModal');
    modalBackdrop = modal.querySelector('.modal-backdrop');
    modalClose = modal.querySelector('.modal-close');
    modalTitle = modal.querySelector('.modal-title');
    modalSubtitle = modal.querySelector('.modal-subtitle');
    modalDescription = modal.querySelector('.modal-description');
    carouselTrack = modal.querySelector('.carousel-track');
    carouselDots = modal.querySelector('.carousel-dots');
    prevBtn = modal.querySelector('.carousel-btn-prev');
    nextBtn = modal.querySelector('.carousel-btn-next');
}

// Initialize all event listeners
function initializeEventListeners() {
    // Modal close events
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);

    // Carousel navigation
    prevBtn.addEventListener('click', () => navigateCarousel(-1));
    nextBtn.addEventListener('click', () => navigateCarousel(1));

    // Favorite buttons
    document.querySelectorAll('.fav_btn_99').forEach(btn => {
        btn.addEventListener('click', handleFavoriteClick);
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);

    // Prevent link navigation when modal should open
    document.querySelectorAll('.lnk_88').forEach(link => {
        link.addEventListener('click', handleImageClick);
    });

    // Window resize handler
    window.addEventListener('resize', debounce(handleResize, 250));
}

// Handle image click to open modal instead of navigating
function handleImageClick(e) {
    e.preventDefault();
    const card = e.currentTarget.closest('.crd_v1');
    const roomId = card.querySelector('.fav_btn_99').dataset.service;
    showRoomDetails(roomId);
}

// Main function to show room details modal
function showRoomDetails(roomId) {
    console.log('Opening modal for room:', roomId); // Debug log

    const room = roomsData[roomId];
    if (!room) {
        console.error('Room not found:', roomId, 'Available rooms:', Object.keys(roomsData));
        return;
    }

    currentRoomId = roomId;
    currentSlideIndex = 0;

    // Populate modal content
    modalTitle.textContent = room.title;
    modalSubtitle.textContent = room.subtitle;
    modalDescription.textContent = room.description;

    // Create carousel slides
    createCarouselSlides(room.images);
    createCarouselDots(room.images.length);

    // Show modal
    openModal();
}

// Create carousel slides
function createCarouselSlides(images) {
    carouselTrack.innerHTML = '';

    images.forEach((imageSrc, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `${roomsData[currentRoomId].title} - Imagen ${index + 1}`;
        img.loading = index === 0 ? 'eager' : 'lazy';

        // Add loading state
        slide.classList.add('loading');

        img.addEventListener('load', () => {
            slide.classList.remove('loading');
        });

        img.addEventListener('error', () => {
            slide.classList.remove('loading');
            // Fallback to a different image
            if (img.src !== 'https://www.intiterra.com/img/tags/comunes/logoEmpresa.png') {
                img.src = 'https://www.intiterra.com/img/tags/comunes/logoEmpresa.png';
            }
        });

        slide.appendChild(img);
        carouselTrack.appendChild(slide);
    });

    updateCarouselPosition();
}

// Create carousel dots
function createCarouselDots(count) {
    carouselDots.innerHTML = '';

    for (let i = 0; i < count; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Ver imagen ${i + 1}`);

        if (i === 0) {
            dot.classList.add('active');
        }

        dot.addEventListener('click', () => {
            currentSlideIndex = i;
            updateCarousel();
        });

        carouselDots.appendChild(dot);
    }
}

// Navigate carousel
function navigateCarousel(direction) {
    if (!currentRoomId || !roomsData[currentRoomId]) return;

    const totalSlides = roomsData[currentRoomId].images.length;
    currentSlideIndex += direction;

    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }

    updateCarousel();
    preloadNextImages();
}

// Update carousel position and active states
function updateCarousel() {
    updateCarouselPosition();
    updateCarouselDots();
}

function updateCarouselPosition() {
    const translateX = -currentSlideIndex * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;
}

function updateCarouselDots() {
    const dots = carouselDots.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// Modal functions
function openModal() {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    isModalOpen = true;

    // Trigger animation
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });

    // Focus management
    modalClose.focus();
}

function closeModal() {
    modal.classList.remove('show');
    isModalOpen = false;
    document.body.style.overflow = '';

    setTimeout(() => {
        modal.classList.add('hidden');
        currentRoomId = null;
        currentSlideIndex = 0;
    }, 250);
}

// Favorite functionality
function handleFavoriteClick(e) {
    e.stopPropagation();
    const btn = e.currentTarget;
    const roomId = btn.dataset.service;
    const heartIcon = btn.querySelector('i');

    if (favoriteRooms.has(roomId)) {
        favoriteRooms.delete(roomId);
        heartIcon.className = 'far fa-heart';
        btn.classList.remove('favorited');
    } else {
        favoriteRooms.add(roomId);
        heartIcon.className = 'fas fa-heart';
        btn.classList.add('favorited');
    }

    saveFavorites();
}

function saveFavorites() {
    try {
        // Since we can't use localStorage, we'll just keep it in memory
        console.log('Favorites updated:', Array.from(favoriteRooms));
    } catch (error) {
        console.warn('Could not save favorites:', error);
    }
}

function loadFavorites() {
    try {
        // Since we can't use localStorage, we'll start with empty favorites
        favoriteRooms = new Set();

        // Apply favorite states to UI
        document.querySelectorAll('.fav_btn_99').forEach(btn => {
            const roomId = btn.dataset.service;
            const heartIcon = btn.querySelector('i');

            if (favoriteRooms.has(roomId)) {
                heartIcon.className = 'fas fa-heart';
                btn.classList.add('favorited');
            }
        });
    } catch (error) {
        console.warn('Could not load favorites:', error);
        favoriteRooms = new Set();
    }
}

// Keyboard navigation
function handleKeyboardNavigation(e) {
    if (!isModalOpen) return;

    switch (e.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            navigateCarousel(-1);
            break;
        case 'ArrowRight':
            e.preventDefault();
            navigateCarousel(1);
            break;
    }
}

// Touch events for swipe navigation
function setupTouchEvents() {
    const carousel = modal.querySelector('.carousel');

    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
    if (!isModalOpen) return;

    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
}

function handleSwipeGesture() {
    const swipeThreshold = 50;
    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe left - next slide
            navigateCarousel(1);
        } else {
            // Swipe right - previous slide
            navigateCarousel(-1);
        }
    }
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const cards = document.querySelectorAll('.crd_v1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    cards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
}

// Performance optimization: Lazy load images
function setupLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading is supported
        return;
    }

    // Fallback for browsers without native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
function handleResize() {
    if (isModalOpen) {
        updateCarouselPosition();
    }
}

// Preload next images for better UX
function preloadNextImages() {
    if (!isModalOpen || !roomsData[currentRoomId]) return;

    const images = roomsData[currentRoomId].images;
    const nextIndex = (currentSlideIndex + 1) % images.length;
    const prevIndex = currentSlideIndex === 0 ? images.length - 1 : currentSlideIndex - 1;

    [nextIndex, prevIndex].forEach(index => {
        const img = new Image();
        img.src = images[index];
    });
}

// Error handling for failed image loads
function handleImageError(img, fallbackSrc) {
    img.onerror = () => {
        if (img.src !== fallbackSrc) {
            img.src = fallbackSrc;
        }
    };
}

// Export functions for global access
window.showRoomDetails = showRoomDetails;