/**
 * المنطق البرمجي الرئيسي - متجر الأثاث الفاخر
 * يحتوي على إدارة سلة التسوق، البحث الذكي، والـ 3D
 */

document.addEventListener('DOMContentLoaded', () => {
    initCart();
    updateCartCount();
    initBackToTop();
    init3DEffects();
});

// --- إدارة سلة التسوق (Cart Management) ---
function initCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId) {
    const cart = getCart();
    const product = window.productsData.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    showToast(`تم إضافة "${product.name}" إلى السلة`);
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) cartCountElement.textContent = count;
}

// --- نظام التنبيهات (Toast Notifications) ---
function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- زر العودة للأعلى (Back to Top) ---
function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '↑';
    btn.id = 'backToTop';
    btn.className = 'back-to-top-btn';
    document.body.appendChild(btn);

    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    };
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- نظام البحث والفلترة الذكي (Smart Search & Filter) ---
// خوارزمية بحث سريعة وفعالة تعتمد على الترتيب حسب الصلة
function smartSearch(query, data) {
    if (!query) return data;
    const normalizedQuery = query.trim().toLowerCase();
    
    // استخدام Map لتسريع الوصول إذا كانت البيانات ضخمة (هنا البيانات صغيرة ولكن نطبق المبدأ)
    const results = data.reduce((acc, item) => {
        let score = 0;
        const name = item.name.toLowerCase();
        const desc = item.description.toLowerCase();
        const cat = item.category.toLowerCase();

        // تطابق كامل (أعلى أولوية)
        if (name === normalizedQuery) score += 100;
        // يبدأ بالكلمة
        else if (name.startsWith(normalizedQuery)) score += 70;
        // يحتوي على الكلمة
        else if (name.includes(normalizedQuery)) score += 40;
        
        // البحث في الفئة والوصف
        if (cat.includes(normalizedQuery)) score += 30;
        if (desc.includes(normalizedQuery)) score += 10;

        if (score > 0) {
            acc.push({ ...item, searchScore: score });
        }
        return acc;
    }, []);

    // ترتيب النتائج حسب الأهمية
    return results.sort((a, b) => b.searchScore - a.searchScore);
}

// --- تأثيرات الـ 3D المميزة (3D Effects) ---
function init3DEffects() {
    const hero = document.getElementById('heroSection');
    if (!hero) return;

    hero.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const { width, height } = hero.getBoundingClientRect();
        
        // حساب الإزاحة من المركز بنسبة مئوية
        const mouseX = (e.clientX - (hero.offsetLeft + width / 2)) / (width / 2);
        const mouseY = (e.clientY - (hero.offsetTop + height / 2)) / (height / 2);

        shapes.forEach((shape, index) => {
            const factor = (index + 1) * 20;
            const rotateX = mouseY * -15; // تدوير حول المحور السيني
            const rotateY = mouseX * 15;  // تدوير حول المحور الصادي
            const moveX = mouseX * factor;
            const moveY = mouseY * factor;
            
            shape.style.transform = `translate3d(${moveX}px, ${moveY}px, ${factor * 2}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        const content = document.querySelector('.hero-content');
        if (content) {
            content.style.transform = `translate3d(${mouseX * -10}px, ${mouseY * -10}px, 100px) rotateX(${mouseY * -5}deg) rotateY(${mouseX * 5}deg)`;
        }
    });

    // إعادة العناصر لوضعها الطبيعي عند خروج الماوس
    hero.addEventListener('mouseleave', () => {
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape) => {
            shape.style.transform = `translate3d(0, 0, 0) rotateX(0) rotateY(0)`;
        });
        const content = document.querySelector('.hero-content');
        if (content) content.style.transform = `translate3d(0, 0, 80px)`;
    });
}
