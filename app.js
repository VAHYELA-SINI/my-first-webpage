function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event){
    console.log(event.target);
    if(!event.target.matches('.dropbtn')){
        var dropddowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropddowns.length; i++){
            var openDropdown = dropddowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

const faBars = document.querySelector('.fa-bars')
const faTimes = document.querySelector('fa-times')

faBars.addEventListener('click', () => {
    faTimes.style.display = "block"
    faBars.style.display = "none"
})
faTimes.addEventListener('click', () => {
    faBars.style.display = "block"
    faTimes.style.display = "none"
})