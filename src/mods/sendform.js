function sendform() {
 let forms = document.querySelectorAll('form'),
	status = document.createElement('div');
	status.classList.add('status');

  forms.forEach(element => {
	  element.addEventListener('submit', e => {
			e.preventDefault();
			e.target.appendChild(status);
		// запрос
		
		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
 
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 
		let formData = new FormData(e.target);
		request.send(formData);
	
 
		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				status.classList.remove('hide');
				status.innerHTML = '<span class="modal-loading_text">Загрузка...</span><img src="img/ajax-loader.gif" class="modal-loading_img" alt="">';
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					status.classList.remove('hide');
					status.innerHTML = '<span class="modal-success_text">Спасибо, скоро мы с вами свяжемся</span><img src="img/ok-mark.png" class="modal-success_img" alt="">';
				}
				else {
					status.classList.remove('hide');
					status.innerHTML = '<span class="modal-success_text">Что-то пошло не так</span><img src="img/close-button.png" class="modal-failure_img" alt="">';
 
				}
			}
		};
		
		e.target.querySelectorAll('input').forEach(element => {
			element.value = '';
		});

		e.target.querySelectorAll('textarea').forEach(element => {
			element.value = '';
		});
		
		setTimeout(() => {
			status.classList.add('hide');
		  }, 6000);


	  });
  });
 
}
export default sendform;