function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll')
    const windowMetade = window.innerHeight * 0.6;

    if(sections.length){
        function animaScroll(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if(isSectionVisible){
                    section.classList.add('ativo')
                }
            })
    }

    window.addEventListener('scroll', animaScroll)
    }
}
initAnimacaoScroll()