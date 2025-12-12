// ========================================
// 후쿠오카 가족여행 가이드 - JavaScript
// ========================================

// DOM Elements
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');
const expandBtns = document.querySelectorAll('.expand-btn');
const darkModeToggle = document.getElementById('darkModeToggle');
const fontSizeToggle = document.getElementById('fontSizeToggle');
const budgetFab = document.getElementById('budgetFab');
const budgetModal = document.getElementById('budgetModal');
const closeBudgetModal = document.getElementById('closeBudgetModal');
const scrollTopBtn = document.getElementById('scrollTop');
const checkboxes = document.querySelectorAll('.checkbox-input');

// ========================================
// Navigation
// ========================================
function switchSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update nav items
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === sectionId) {
            item.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Save current section to localStorage
    localStorage.setItem('currentSection', sectionId);
}

// Navigation event listeners
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const sectionId = item.dataset.section;
        switchSection(sectionId);
    });
});

// ========================================
// Expandable Content
// ========================================
function toggleExpand(btn) {
    const timelineItem = btn.closest('.timeline-item');
    const expandableContent = timelineItem.querySelector('.expandable-content');
    const arrow = btn.querySelector('.arrow');
    
    if (expandableContent) {
        const isActive = expandableContent.classList.contains('active');
        
        if (isActive) {
            expandableContent.classList.remove('active');
            btn.classList.remove('active');
            btn.innerHTML = '상세보기 <span class="arrow">▼</span>';
        } else {
            expandableContent.classList.add('active');
            btn.classList.add('active');
            btn.innerHTML = '접기 <span class="arrow">▼</span>';
        }
    }
}

// Make toggleExpand globally accessible
window.toggleExpand = toggleExpand;

// ========================================
// Dark Mode
// ========================================
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = darkModeToggle.querySelector('.icon');
    if (newTheme === 'dark') {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

darkModeToggle.addEventListener('click', toggleDarkMode);

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const icon = darkModeToggle.querySelector('.icon');
    if (savedTheme === 'dark') {
        icon.textContent = '☀️';
    } else {
        icon.textContent = '🌙';
    }
}

// ========================================
// Font Size Toggle
// ========================================
function toggleFontSize() {
    document.body.classList.toggle('large-font');
    const isLarge = document.body.classList.contains('large-font');
    localStorage.setItem('largeFont', isLarge);
}

fontSizeToggle.addEventListener('click', toggleFontSize);

// Load saved font size
function loadFontSize() {
    const savedFontSize = localStorage.getItem('largeFont') === 'true';
    if (savedFontSize) {
        document.body.classList.add('large-font');
    }
}

// ========================================
// Budget Modal
// ========================================
function openBudgetModal() {
    budgetModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBudgetModalFunc() {
    budgetModal.classList.remove('active');
    document.body.style.overflow = '';
}

budgetFab.addEventListener('click', openBudgetModal);
closeBudgetModal.addEventListener('click', closeBudgetModalFunc);

// Close modal on backdrop click
budgetModal.addEventListener('click', (e) => {
    if (e.target === budgetModal) {
        closeBudgetModalFunc();
    }
});

// ========================================
// Checklist with localStorage
// ========================================
function saveChecklistState() {
    const checklistState = {};
    
    checkboxes.forEach((checkbox, index) => {
        checklistState[index] = checkbox.checked;
    });
    
    localStorage.setItem('checklistState', JSON.stringify(checklistState));
}

function loadChecklistState() {
    const savedState = localStorage.getItem('checklistState');
    
    if (savedState) {
        const checklistState = JSON.parse(savedState);
        
        checkboxes.forEach((checkbox, index) => {
            if (checklistState[index] !== undefined) {
                checkbox.checked = checklistState[index];
            }
        });
    }
}

// Checkbox event listeners
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', saveChecklistState);
});

// ========================================
// Scroll to Top Button
// ========================================
function toggleScrollTopBtn() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', toggleScrollTopBtn);

// ========================================
// Swipe Gestures for Mobile
// ========================================
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchEndX - touchStartX;
    
    if (Math.abs(diff) < swipeThreshold) return;
    
    const currentSection = document.querySelector('.section.active');
    const currentIndex = Array.from(sections).indexOf(currentSection);
    
    let nextIndex;
    
    if (diff > 0) {
        // Swipe right - go to previous section
        nextIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    } else {
        // Swipe left - go to next section
        nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : currentIndex;
    }
    
    const nextSection = sections[nextIndex];
    if (nextSection) {
        switchSection(nextSection.id);
    }
}

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

// ========================================
// Keyboard Navigation
// ========================================
document.addEventListener('keydown', (e) => {
    // Arrow keys for section navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const currentSection = document.querySelector('.section.active');
        const currentIndex = Array.from(sections).indexOf(currentSection);
        
        let nextIndex;
        
        if (e.key === 'ArrowLeft') {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
        } else {
            nextIndex = currentIndex < sections.length - 1 ? currentIndex + 1 : currentIndex;
        }
        
        const nextSection = sections[nextIndex];
        if (nextSection) {
            switchSection(nextSection.id);
        }
    }
    
    // Escape key to close modal
    if (e.key === 'Escape') {
        closeBudgetModalFunc();
    }
});

// ========================================
// Service Worker for Offline Support
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registered:', registration);
        }).catch(error => {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}

// ========================================
// Performance: Lazy Loading Images
// ========================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// Print Function
// ========================================
function printGuide() {
    // Show all sections for printing
    sections.forEach(section => {
        section.style.display = 'block';
    });
    
    // Expand all collapsible content
    document.querySelectorAll('.expandable-content').forEach(content => {
        content.style.display = 'block';
    });
    
    window.print();
    
    // Restore original state
    sections.forEach(section => {
        section.style.display = '';
    });
    
    const currentSection = localStorage.getItem('currentSection') || 'overview';
    switchSection(currentSection);
}

// ========================================
// PWA: Add to Home Screen
// ========================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show custom install button (if you want)
    // For now, we'll just store the prompt
});

// ========================================
// Online/Offline Status
// ========================================
function updateOnlineStatus() {
    if (navigator.onLine) {
        console.log('온라인 모드');
    } else {
        console.log('오프라인 모드 - 저장된 데이터 사용 중');
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// ========================================
// Initialize App
// ========================================
function initApp() {
    // Load saved preferences
    loadTheme();
    loadFontSize();
    loadChecklistState();
    
    // Load saved section
    const savedSection = localStorage.getItem('currentSection') || 'overview';
    switchSection(savedSection);
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Check online status
    updateOnlineStatus();
    
    console.log('✅ 후쿠오카 여행 가이드 로드 완료!');
}

// Start the app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ========================================
// Analytics (Optional)
// ========================================
function trackEvent(category, action, label) {
    // Add your analytics code here
    console.log(`Event: ${category} - ${action} - ${label}`);
}

// Track section views
navItems.forEach(item => {
    item.addEventListener('click', () => {
        trackEvent('Navigation', 'Section View', item.dataset.section);
    });
});

// ========================================
// Tips & Hints Animation
// ========================================
function animateTips() {
    const tips = document.querySelectorAll('.timeline-tips');
    
    const tipObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease';
            }
        });
    }, {
        threshold: 0.1
    });
    
    tips.forEach(tip => tipObserver.observe(tip));
}

// Run on load
animateTips();

// ========================================
// Error Handling
// ========================================
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ========================================
// Utility Functions
// ========================================

// Format currency
function formatCurrency(amount, currency = 'JPY') {
    return new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }).format(date);
}

// Copy to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('클립보드에 복사되었습니다!');
        }).catch(err => {
            console.error('복사 실패:', err);
        });
    }
}

// Share function (Web Share API)
async function shareGuide() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: '후쿠오카 가족여행 가이드',
                text: '후쿠오카 2박3일 가족여행 완벽 가이드',
                url: window.location.href
            });
        } catch (err) {
            console.log('공유 취소 또는 실패:', err);
        }
    } else {
        alert('이 브라우저는 공유 기능을 지원하지 않습니다.');
    }
}

// ========================================
// Accessibility Improvements
// ========================================

// Skip to main content
function skipToContent() {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
    }
}

// Announce section changes to screen readers
function announceSection(sectionName) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `${sectionName} 섹션으로 이동했습니다.`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Update switchSection to include announcement
const originalSwitchSection = switchSection;
switchSection = function(sectionId) {
    originalSwitchSection(sectionId);
    
    const sectionNames = {
        'overview': '개요',
        'day1': 'Day 1 캐널시티',
        'day2': 'Day 2 마린월드',
        'day3': 'Day 3 다자이후',
        'more': '추가 정보'
    };
    
    if (sectionNames[sectionId]) {
        announceSection(sectionNames[sectionId]);
    }
};

// ========================================
// Debug Mode (Development)
// ========================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🚀 개발 모드');
    
    // Add debug info
    window.debugInfo = {
        version: '1.0.0',
        sections: sections.length,
        checkboxes: checkboxes.length,
        navItems: navItems.length
    };
    
    console.table(window.debugInfo);
}

// ========================================
// Export functions for testing
// ========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchSection,
        toggleExpand,
        toggleDarkMode,
        toggleFontSize,
        formatCurrency,
        formatDate
    };
}