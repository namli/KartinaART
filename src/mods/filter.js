function filter() {
let filterSection = document.querySelector("#portfolio"),
    menu = filterSection.querySelector('.portfolio-menu'),
    items = filterSection.querySelectorAll('.portfolio-block'),
    noItemPlaceholder = filterSection.querySelector('.portfolio-no');

menu.addEventListener('click', e => {
    
    if (e.target.nodeName === "LI") {
      let filterClass = e.target.getAttribute("class"),
        menuTabs = menu.querySelectorAll('li');

        menuTabs.forEach(element => {
            element.classList.remove("active");
        });
        noItemPlaceholder.style.display = 'none';

        e.target.classList.add('active');

        items.forEach(element => {
            if (!element.classList.contains(filterClass)) {
                element.classList.add("hidden");
            } else {
                element.classList.remove("hidden");
            }
        }); 

        if (filterSection.querySelectorAll('div.'+filterClass).length < 1) {
            noItemPlaceholder.style.display = 'block';
        }
      
      
    }
});



}
export default filter;