function allmodal() {
    let modalForm = document.querySelectorAll('.popup-design, .popup-consultation, .popup-gift');
        
    modalForm.forEach(element => {
        element.addEventListener('click', e =>{
            if (e.target == element) {
                element.classList.toggle('show');
            }
        });
        element.querySelector('.popup-close').addEventListener('click', e =>{
            element.classList.toggle('show');
        });
    });
    
}
export default allmodal;