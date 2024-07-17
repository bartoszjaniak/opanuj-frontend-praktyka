// Funkcja do ustawiania lokalizacji na podstawie typu znacznika i indeksu
function setScrollPosition(tag, index) {
    const headers = document.querySelectorAll(tag);
    if (headers[index]) {
        headers[index].scrollIntoView({ behavior: 'smooth' });
    }
}

// Funkcja do zapisywania typu znacznika i indeksu w local storage
function saveScrollPosition(tag, index) {
	  console.log('saving position:', tag, index);
    const url = window.location.href;
    localStorage.setItem(`scrollPosition_${url}`, JSON.stringify({ tag, index }));
}

// Funkcja do odczytywania typu znacznika i indeksu z local storage
function getSavedScrollPosition() {
    const url = window.location.href;
    const savedData = localStorage.getItem(`scrollPosition_${url}`);
    return savedData ? JSON.parse(savedData) : null;
}

// Funkcja nasłuchująca na scroll i zapisująca pozycję
function onScroll() {
	console.log('on scroll');
    const headerTags = ['p'];
    let lastVisibleHeader = { tag: null, index: -1 };

    headerTags.forEach(tag => {
        const headers = document.querySelectorAll(tag);
        headers.forEach((header, index) => {
            const rect = header.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                lastVisibleHeader = { tag, index };
            }
        });
    });

    if (lastVisibleHeader.index !== -1) {
        saveScrollPosition(lastVisibleHeader.tag, lastVisibleHeader.index);
    }
}

// Funkcja debouncing
function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    };
}

// Funkcja inicjalizująca po opóźnieniu
function init() {
	console.log('Super script loaded!')
	const body = document.getElementsByTagName('main') ? document.getElementsByTagName('main')[1] : null;
	  
	  if(!body) return;
	  
    const savedPosition = getSavedScrollPosition();
    if (savedPosition) {
        setScrollPosition(savedPosition.tag, savedPosition.index);
    }

    // Dodanie nasłuchiwania na scroll z debouncingiem
    body.addEventListener('scroll', debounce(onScroll, 100));
}

// Inicjalizacja po opóźnieniu jednej sekundy
setTimeout(init, 2000);
