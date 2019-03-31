function formsvalidate() {
let names = document.querySelectorAll('input[name="name"]'),
    phones = document.querySelectorAll('input[name="phone"]'),
    questions = document.querySelectorAll('input[name="message"]');
    
    phones.forEach(element => {
        element.setAttribute('placeholder',"+7(___)___-____");
        element.defaultValue="+7(___)___-____";
        element.addEventListener('input', mask, false);
    });
    names.forEach(element => {
        element.addEventListener('input', e => {
            e.target.value = validateRusInput(e.target.value);
        });
        
    });

    questions.forEach(element => {
        element.addEventListener('input', e => {
            e.target.value = validateRusInput(e.target.value);
        });
        
    });




    function validateRusInput(input) {
        if (!input.match("^[? А-ЯЁа-яё]+$")) {
            return input.slice(0, -1);
        } else {
            return input;
        }
    }



    function mask(event) {        
	    let matrix = this.defaultValue,
	        i = 0,
	        def = matrix.replace(/\D/g, ''),
	        val = this.value.replace(/\D/g, '');
	        def.length >= val.length && (val = def);
	     matrix = matrix.replace(/[_\d]/g, function(a) {
	        return val.charAt(i++) || '_'
	    });
	    this.value = matrix;
	    i = matrix.lastIndexOf(val.substr(-1));
	    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf('_');
	    setCursorPosition(i, this);
	}
	
		function setCursorPosition(pos, elem) {
		  elem.focus();
		  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
		  else if (elem.createTextRange) {
		      let range = elem.createTextRange();

		      range.collapse(true);
		      range.moveEnd('character', pos);
		      range.moveStart('character', pos);
		      range.select();
		  }
		}
}
export default formsvalidate;