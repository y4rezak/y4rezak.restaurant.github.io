window.addEventListener("load", function(){
    let pancakes = document.querySelector("#pancakes");
    let pancakes_btn = document.querySelector("#pancakes_btn");
    let bolognese = document.querySelector("#bolognese");
    let bolognese_btn = document.querySelector("#bolognese_btn");
    let crem_soupe = document.querySelector("#crem_soupe");
    let crem_soupe_btn = document.querySelector("#crem_soupe_btn");

    pancakes_btn.addEventListener("click", function(){
        // btn
        pancakes_btn.classList.toggle("active_btn_dishes");
        bolognese_btn.classList.remove("active_btn_dishes");
        crem_soupe_btn.classList.remove("active_btn_dishes");
        // dishes
        pancakes.classList.toggle("pancakes");
        bolognese.classList.remove("bolognese");
        crem_soupe.classList.remove("crem_soupe");
    })

    bolognese_btn.addEventListener("click", function(){
        bolognese_btn.classList.toggle("active_btn_dishes");
        pancakes_btn.classList.remove("active_btn_dishes");
        crem_soupe_btn.classList.remove("active_btn_dishes");
        // 
        bolognese.classList.toggle("bolognese");
        pancakes.classList.remove("pancakes");
        crem_soupe.classList.remove("crem_soupe");
    })

    crem_soupe_btn.addEventListener("click", function(){
        crem_soupe_btn.classList.toggle("active_btn_dishes");
        pancakes_btn.classList.remove("active_btn_dishes");
        bolognese_btn.classList.remove("active_btn_dishes");
        // 
        crem_soupe.classList.toggle("crem_soupe");
        pancakes.classList.remove("pancakes");
        bolognese.classList.remove("bolognese");
    }) 

    // let dishes = document.querySelectorAll('.dishes');
    // let counter_dishes = 1;
    // setInterval(function(){  
    // for (let i = 0; i < dishes.length; ++i) {
    //     dishes[i].style.display = 'none';
    // }
    // if (counter_dishes > dishes.length - 1)
    //     counter_dishes = 0;
    
    // dishes[counter_dishes].style.display = 'flex';
    // counter_dishes++; 
    // }, 5000);
})