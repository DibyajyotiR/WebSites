const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        toggleBtn.textContent='Switch to Light Theme';
    }else{
        toggleBtn.textContent='Switch to Dark Theme'
    }
})