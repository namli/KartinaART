function loadMore() {
    let style = document.querySelector('#styles'),
        loadButton = style.querySelector(".button");

    loadButton.addEventListener('click', (e) =>{
        e.target.style.display = 'none';
        
        let items = style.querySelectorAll(".styles-2");
        items.forEach(element => {
            element.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
            element.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
        });

    });


}
export default loadMore;