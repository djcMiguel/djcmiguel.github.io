const pages = document.querySelectorAll('.page');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let currentPage = 0;


function updateButtons(){

    prev.disabled = currentPage === 0;

    next.disabled = currentPage === pages.length - 1;
}

updateButtons();


pages.forEach((page,index)=>{

    page.addEventListener('click',()=>{

        if(currentPage < pages.length - 1){

            page.classList.add('flipped');
            currentPage++;
            updateButtons();
        }

    });

});

prev.addEventListener('click', () => {

    if(currentPage > 0){

        currentPage--;
        pages[currentPage].classList.remove('flipped');
        updateButtons();

    }

});

next.addEventListener('click', () => {

    if(currentPage < pages.length - 1){

        pages[currentPage].classList.add('flipped');

        currentPage++;
        updateButtons();
    }

});
