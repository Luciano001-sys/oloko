
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-list ul');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
