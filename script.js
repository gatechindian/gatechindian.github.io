
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('#main-nav a');
    const logoLink = document.querySelector('.logo-link');
    
    // Add logo link to the smooth scrolling
    const allNavLinks = [...navLinks, logoLink];
    
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const mobileNav = document.getElementById('main-nav');
                const mobileMenuBtn = document.getElementById('mobile-menu-btn');
                
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
                
                // Calculate scroll position
                const headerOffset = document.getElementById('main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const currentlyActive = document.querySelector('.faq-item.active');
            
            // Close currently active item if it's different from clicked item
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
    
    // Header scroll effect
    const header = document.getElementById('main-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--color-light)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Scroll animations for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.stat-item, .payment-method, .job-feature, .meetup-card, .resource-list, .resource-qa');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Form validation for external links (add loading states)
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add a brief loading state
            const originalText = this.textContent;
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 1000);
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            const mobileNav = document.getElementById('main-nav');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        }
        
        // Close active FAQ with Escape key
        if (e.key === 'Escape') {
            const activeFaq = document.querySelector('.faq-item.active');
            if (activeFaq) {
                activeFaq.classList.remove('active');
            }
        }
    });
    
    // Performance optimization: lazy load images
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
    
    // Add smooth hover effects for buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
