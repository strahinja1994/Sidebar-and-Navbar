const toggleBtn = document.querySelector('.toggle');
const closeBtn = document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar-all');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    toggleBtn.classList.add('rotate');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-active');
    toggleBtn.classList.remove('rotate');
});