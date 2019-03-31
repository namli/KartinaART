function present() {
    let presentBtn = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        allBtn = document.querySelectorAll('button'),
        btnFlag;


    presentBtn.addEventListener('click', e =>{
        e.target.classList.add('hide');
        popupGift.classList.add('show');
    });
        
    allBtn.forEach(element => {
        element.addEventListener('click', e =>{
            btnFlag = 1;
        });
    });
    window.addEventListener('scroll', e =>{
        let distanceFromBottom = document.body.scrollHeight - window.innerHeight - window.scrollY;
        if (distanceFromBottom < 100 && btnFlag != 1) {
            presentBtn.classList.add('hide');
            popupGift.classList.add('show');
        }
    });
    
}
export default present;