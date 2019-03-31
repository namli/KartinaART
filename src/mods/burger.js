function burger() {
    let burgerBtn = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu');
        
        
            burgerBtn.addEventListener('click', () =>{
                if (document.documentElement.clientWidth <= 768) {
                burgerMenu.classList.toggle('show');
            }
            });
        
        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth > 768){
                burgerMenu.classList.remove('show');
            }
            
        });
}
export default burger;