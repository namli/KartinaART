function calc() {
    let calc = document.querySelector('.calc'),
        size = calc.querySelector('#size'),
        material = calc.querySelector('#material'),
        options = calc.querySelector('#options'),
        promocode = calc.querySelector('.promocode'),
        placeholderText = 'Для расчета нужно выбрать размер картины и материал картины',
        price = calc.querySelector('.calc-price');
        
        size.addEventListener('change', e =>{
            if (validateClac()) {
                price.innerHTML = countPrice().toFixed();
            } else {
                price.innerHTML = placeholderText;
            }
        });

        material.addEventListener('change', e =>{
            if (validateClac()) {
                price.innerHTML = countPrice().toFixed();
            } else {
                price.innerHTML = placeholderText;
            }
        });

        options.addEventListener('change', e =>{
            if (validateClac()) {
                price.innerHTML = countPrice().toFixed();
            } else {
                price.innerHTML = placeholderText;
            }
        });

        promocode.addEventListener('input', e =>{
            promocode.value = promocode.value.trim();
            if (validateClac()) {
                price.innerHTML = countPrice().toFixed();
            } else {
                price.innerHTML = placeholderText;
            }
        });


function validateClac() {
    if (size.selectedIndex != 0 && material.selectedIndex != 0 ) {
        return true;
    } else {
        return false;
    }
}    

function countPrice() {
    let totalPrice = size.selectedIndex + material.selectedIndex + options.selectedIndex;
    if (promocode.value.trim() === 'IWANTPOPART') {
        totalPrice = totalPrice * 0.7;
    }
    return totalPrice*1000;
}

}
export default calc;