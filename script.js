const togglebtn = document.querySelector('.toggle_btn')
const toggleIcon = document.querySelector('.toggle_btn i')
const dropdown_menu = document.querySelector('.dropdown')

togglebtn.onclick = function () {
    dropdown_menu.classList.toggle('open');
    const isopen = dropdown_menu.classList.contains('open')
    toggleIcon.classList = isopen
        ? 'ri-close-line'
        : 'ri-menu-2-line'
}