function accordeon() {
let accordSection = document.querySelector("#accordion"),
    allAnswers = accordSection.querySelectorAll('.accordion-block'),
    allQuestions = accordSection.querySelectorAll('.accordion-heading');

    accordSection.addEventListener('click', e => {
        allAnswers.forEach(element => {
            element.classList.remove('ui-accordion-content-active');
        });
        allQuestions.forEach(element => {
            element.classList.remove('ui-accordion-header-active');
        });
        if (e.target.parentElement.classList.contains('accordion-heading')) {
            e.target.parentElement.classList.add('ui-accordion-header-active');
            e.target.parentElement.nextElementSibling.classList.add('ui-accordion-content-active');    
        }
    });


}
export default accordeon;