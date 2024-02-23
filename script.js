const togglebtn = document.querySelector('.toggle_btn')
const dropdown_menu=document.querySelector('.dropdown')

togglebtn.onclick= function()
{
    dropdown_menu.classList.toggle('open')
    console.log("HELLO")
}