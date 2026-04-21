/**
 * بيانات المنتجات 
 */

const products = [
    { id: 1, name: "سرير ملكي فاخر", price: 4500, category: "أسرة", rating: 4.9, image: "images/beds/bed_1.jpg", description: "سرير ملكي بتصميم كلاسيكي مريح." },
    { id: 2, name: "سرير مودرن رمادي", price: 3200, category: "أسرة", rating: 4.7, image: "images/beds/bed_2.jpg", description: "سرير عصري يناسب الغرف الضيقة." },
    { id: 3, name: "سرير خشبي طبيعي", price: 2800, category: "أسرة", rating: 4.5, image: "images/beds/bed_3.jpg", description: "سرير مصنوع من خشب الزان الطبيعي." },
    { id: 4, name: "سرير أطفال دورين", price: 2500, category: "أسرة", rating: 4.6, image: "images/beds/bed_4.jpg", description: "سرير عملي وموفر للمساحة للأطفال." },
    { id: 5, name: "سرير مخملي أزرق", price: 3800, category: "أسرة", rating: 4.8, image: "images/beds/bed_5.jpg", description: "سرير فخم مغطى بالمخمل الناعم." },
    { id: 6, name: "سرير ذكي متطور", price: 5500, category: "أسرة", rating: 5.0, image: "images/beds/bed_6.jpg", description: "سرير مزود بمنافذ شحن وإضاءة مدمجة." },
    { id: 7, name: "كرسي مكتب مريح", price: 850, category: "كراسي", rating: 4.6, image: "images/chairs/chair_1.jpg", description: "كرسي يدعم الظهر لساعات العمل الطويلة." },
    { id: 8, name: "كرسي طعام مخملي", price: 450, category: "كراسي", rating: 4.4, image: "images/chairs/chair_2.jpg", description: "كرسي طعام أنيق ومريح." },
    { id: 9, name: "كرسي هزاز خشبي", price: 600, category: "كراسي", rating: 4.5, image: "images/chairs/chair_3.jpg", description: "كرسي هزاز للاسترخاء في الحديقة أو المنزل." },
    { id: 10, name: "كرسي استرخاء جلدي", price: 1200, category: "كراسي", rating: 4.8, image: "images/chairs/chair_4.jpg", description: "كرسي استرخاء فاخر من الجلد الطبيعي." },
    { id: 11, name: "كرسي بار معدني", price: 350, category: "كراسي", rating: 4.2, image: "images/chairs/chair_5.jpg", description: "كرسي بار بتصميم صناعي عصري." },
    { id: 12, name: "كرسي بذراعين كلاسيك", price: 950, category: "كراسي", rating: 4.7, image: "images/chairs/chair_6.jpg", description: "كرسي بذراعين مريح للقراءة." },
    { id: 13, name: "كنبة زاوية رمادية", price: 3500, category: "كنب", rating: 4.8, image: "images/decor/decor_1.jpg", description: "كنبة زاوية واسعة تناسب العائلات." },
    { id: 14, name: "كنبة مخملية خضراء", price: 2800, category: "كنب", rating: 4.6, image: "images/decor/decor_2.jpg", description: "كنبة أنيقة بلون أخضر زمردي." },
    { id: 15, name: "كنبة جلدية بنية", price: 4200, category: "كنب", rating: 4.9, image: "images/decor/decor_3.jpg", description: "كنبة جلدية كلاسيكية متينة." },
    { id: 16, name: "كنبة سرير عملية", price: 1800, category: "كنب", rating: 4.3, image: "images/decor/decor_4.jpg", description: "كنبة تتحول لسرير بسهولة للضيوف." },
    { id: 17, name: "كنبة مودرن بيضاء", price: 3100, category: "كنب", rating: 4.5, image: "images/decor/decor_5.jpg", description: "كنبة بيضاء بتصميم بسيط وجذاب." },
    { id: 18, name: "طقم كنب ملكي", price: 8500, category: "كنب", rating: 5.0, image: "images/decor/decor_6.png", description: "طقم كنب كامل لغرف الاستقبال الفاخرة." },
    { id: 19, name: "مصباح أرضي ذهبي", price: 450, category: "إضاءة", rating: 4.4, image: "images/lighting/lamp_1.jpg", description: "مصباح أرضي يضيف لمسة دافئة." },
    { id: 20, name: "نجفة كريستال", price: 1500, category: "إضاءة", rating: 4.9, image: "images/lighting/lamp_2.jpg", description: "نجفة كريستال فاخرة للصالات." },
    { id: 21, name: "مصباح مكتب LED", price: 150, category: "إضاءة", rating: 4.5, image: "images/lighting/lamp_3.jpg", description: "مصباح مكتب قابل للتعديل." },
    { id: 22, name: "طاولة جانبية مودرن", price: 350, category: "طاولات", rating: 4.3, image: "images/sofas/sofa_1.jpg", description: "طاولة جانبية صغيرة للسرير." },
    { id: 23, name: "مكتب دراسة خشبي", price: 1100, category: "طاولات", rating: 4.5, image: "images/sofas/sofa_2.jpg", description: "مكتب دراسة واسع ومنظم." },
    { id: 24, name: "طاولة تلفاز مودرن", price: 1400, category: "طاولات", rating: 4.7, image: "images/sofas/sofa_3.jpg", description: "طاولة تلفاز مع أرفف تخزين." },
    { id: 25, name: "طاولة قهوة رخام", price: 1200, category: "طاولات", rating: 4.8, image: "images/sofas/sofa_4.jpg", description: "طاولة قهوة بسطح رخامي فاخر." },
    { id: 26, name: "طاولة طعام خشبية", price: 2500, category: "طاولات", rating: 4.7, image: "images/sofas/sofa_5.jpg", description: "طاولة طعام تتسع لـ 8 أشخاص." },
    { id: 27, name: "طاولة جانبية مودرن", price: 350, category: "طاولات", rating: 4.3, image: "images/sofas/sofa_6.jpg", description: "طاولة جانبية صغيرة للسرير." },
];

window.productsData = products;
