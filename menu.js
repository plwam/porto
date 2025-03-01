function openModal() {
    document.getElementById("menuModal").style.display="flex";
}
function closeModal() {
    document.getElementById("menuModal").style.display="none";
}
window.onclick = function(event) {
    let modal = document.getElementById("menuModal");
    if (event.traget == modal) {
        modal.style.display ="none";
    }
}
///////////////////////////////////////////////////
liens_menu = document.getElementById("liens_menu")

function navigation(liens_menu){
    liens_menu.scrollLeft = liens_menu.scrollWidth; // Pour horizontal
    liens_menu.scrollTop = liens_menu.scrollHeight;
}

