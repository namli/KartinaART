function consultation() {
    let consultBtn = document.querySelectorAll('.card button'),
        consultpopup = document.querySelector('.popup-consultation'),
        designForm = document.querySelector('.popup-design'),
	    giftForm = document.querySelector('.popup-gift');
        
    consultBtn.forEach(element => {
        element.addEventListener('click', e =>{
            consultpopup.classList.toggle('show');
        });
    });

    let timerId = setInterval(() => {
     if (performance.now() > 60000 ) {

        if (designForm.style.display != 'block' && consultpopup.style.display != 'block' && 
	  		giftForm.style.display != 'block') {
                consultpopup.classList.add('show');
	  	}
        
     }
   }, 1000);

   setTimeout(() => {
     clearInterval(timerId);
   }, 60100);
    
}
export default consultation;