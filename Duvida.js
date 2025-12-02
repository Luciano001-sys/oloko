document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.accordion-item');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show-item');
    }, index * 300);
  });
});


    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-list ul');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
