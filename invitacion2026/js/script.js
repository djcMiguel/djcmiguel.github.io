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
            if(currentPage === 0){
                launchConfetti();
            }
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
        if(currentPage === 0){
             launchConfetti();
        }
        currentPage++;
        updateButtons();
    }

});

function launchConfetti(){

    const duration = 2500;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount:3,
            angle:60,
            spread:55,
            origin:{x:0}
        });

        confetti({
            particleCount:3,
            angle:120,
            spread:55,
            origin:{x:1}
        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    }());

}
