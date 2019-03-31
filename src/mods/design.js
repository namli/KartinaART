function design() {
    let btnDesign = document.querySelectorAll('.button-design'),
	    modalForm = document.querySelector('.popup-design');
        
        btnDesign.forEach(element => {
        element.addEventListener('click', e =>{
            modalForm.classList.toggle('show');
        });
    });
    
}
export default design;