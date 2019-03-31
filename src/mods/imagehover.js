function imagehover() {
	let canvasBlock = document.querySelector('.sizes-wrapper'),
        canvasDiv = canvasBlock.querySelectorAll('.sizes-block'),
        images =[
            {size:'img/sizes-1.png',newSize:'img/sizes-1-1.png'},
            {size:'img/sizes-2.png',newSize:'img/sizes-2-1.png'},
            {size:'img/sizes-3.png',newSize:'img/sizes-3-1.png'},
            {size:'img/sizes-4.png',newSize:'img/sizes-4-1.png'},
        ];
        
        canvasDiv.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                let typeCanvas = e.target.querySelector('img').getAttribute('class').slice(-1);
                e.target.querySelector('img').setAttribute("src", images[typeCanvas-1].newSize);
            });
            element.addEventListener('mouseleave', (e) => {
                let typeCanvas = e.target.querySelector('img').getAttribute('class').slice(-1);
                e.target.querySelector('img').setAttribute("src", images[typeCanvas-1].size);
            });
            element.addEventListener('click', (e) => {
                let parentDiv = e.target.parentNode,
                    typeCanvas = parentDiv.querySelector('img').getAttribute('class').slice(-1);
                                 
                if (parentDiv.getAttribute('data-canvasswitch') !='1') {
                    parentDiv.querySelector('img').setAttribute("src", images[typeCanvas-1].newSize);
                    parentDiv.setAttribute('data-canvasswitch', '1');
                } else if (parentDiv.getAttribute('data-canvasswitch') === '1') {
                    parentDiv.querySelector('img').setAttribute("src", images[typeCanvas-1].size);
                    parentDiv.setAttribute('data-canvasswitch', '');
                }
                
            });
        });
        
}
export default imagehover;