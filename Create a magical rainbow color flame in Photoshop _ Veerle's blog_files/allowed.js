function toggleList(id){
    if(document.getElementById) {
        var le = document.getElementById(id);
        le.style.display = (le.style.display == 'none') ? 'block' : 'none';
    }
}