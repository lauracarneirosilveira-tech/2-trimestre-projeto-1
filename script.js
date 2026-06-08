document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // MENU RESPONSIVO (HAMBÚRGUER)
    // ==========================================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Abre e fecha o menu ao clicar no botão hambúrguer
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha o menu automaticamente quando o utilizador clica em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ==========================================================================
    // DESTAQUE AUTOMÁTICO DO MENU CONFORME O SCROLL (SPY SCROLL)
    // ==========================================================================
    const sections = document.querySelectorAll('section, header');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Verifica se a janela de visualização está sobre a seção atual
            if (window.pageYOffset >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        // Remove a classe active de todos os links e adiciona na seção atual
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });
});