// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class "box"
    const boxes = document.querySelectorAll('.box');
    
    // Add click event to each box
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });
    
    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close');
    
    // Add click event to each close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = "none";
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.className === 'modal') {
            event.target.style.display = "none";
        }
    });
    
    // Scroll animations
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});