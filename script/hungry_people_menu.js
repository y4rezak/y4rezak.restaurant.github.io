window.addEventListener("load", function(){
    let pizza = this.document.querySelector("#pizza");
    let pizza_list = this.document.querySelector("#pizza_list");
    let pasta = this.document.querySelector("#pasta");
    let pasta_list = this.document.querySelector("#pasta_list");
    let soupe = this.document.querySelector("#soupe");
    let soupe_list = this.document.querySelector("#soupe_list");
    let desert = this.document.querySelector("#desert");
    let desert_list = this.document.querySelector("#desert_list");
    let wine = this.document.querySelector("#wine");
    let wine_list = this.document.querySelector("#wine_list");
    let beer = this.document.querySelector("#beer");
    let beer_list = this.document.querySelector("#beer_list");
    let drinks = this.document.querySelector("#drinks");
    let drinks_list = this.document.querySelector("#drinks_list");

    pizza.addEventListener('click', function(){
        // Типы меню
        pizza.classList.toggle("active_btn");
        pasta.classList.remove("active_btn");
        soupe.classList.remove("active_btn");
        desert.classList.remove("active_btn");
        wine.classList.remove("active_btn");
        beer.classList.remove("active_btn");
        drinks.classList.remove("active_btn");
        // Список меню
        pizza_list.classList.toggle('pizza_list');
        pasta_list.classList.remove('pasta_list');
        soupe_list.classList.remove('soupe_list');
        desert_list.classList.remove('desert_list');
        wine_list.classList.remove('wine_list');
        beer_list.classList.remove('beer_list');
        drinks_list.classList.remove('drinks_list');
    });
    
    pasta.addEventListener('click', function(){
        pasta.classList.toggle("active_btn");
        pizza.classList.remove("active_btn");
        soupe.classList.remove("active_btn");
        desert.classList.remove("active_btn");
        wine.classList.remove("active_btn");
        beer.classList.remove("active_btn");
        drinks.classList.remove("active_btn");
        // 
        pasta_list.classList.toggle('pasta_list');
        pizza_list.classList.remove('pizza_list');
        soupe_list.classList.remove('soupe_list');
        desert_list.classList.remove('desert_list');
        wine_list.classList.remove('wine_list');
        beer_list.classList.remove('beer_list');
        drinks_list.classList.remove('drinks_list');
    });

    soupe.addEventListener('click', function(){
        soupe.classList.toggle("active_btn");
        pizza.classList.remove("active_btn");
        pasta.classList.remove("active_btn");
        desert.classList.remove("active_btn");
        wine.classList.remove("active_btn");
        beer.classList.remove("active_btn");
        drinks.classList.remove("active_btn");
        // 
        soupe_list.classList.toggle('soupe_list');
        pizza_list.classList.remove('pizza_list');
        pasta_list.classList.remove('pasta_list');
        desert_list.classList.remove('desert_list');
        wine_list.classList.remove('wine_list');
        beer_list.classList.remove('beer_list');
        drinks_list.classList.remove('drinks_list');
    });

    desert.addEventListener('click', function(){
        desert.classList.toggle("active_btn");
        pizza.classList.remove("active_btn");
        soupe.classList.remove("active_btn");
        pasta.classList.remove("active_btn");
        wine.classList.remove("active_btn");
        beer.classList.remove("active_btn");
        drinks.classList.remove("active_btn");
        // 
        desert_list.classList.toggle('desert_list');
        pizza_list.classList.remove('pizza_list');
        pasta_list.classList.remove('pasta_list');
        soupe_list.classList.remove('soupe_list');
        wine_list.classList.remove('wine_list');
        beer_list.classList.remove('beer_list');
        drinks_list.classList.remove('drinks_list');
    });

    wine.addEventListener('click', function(){
        wine.classList.toggle("active_btn");
        pizza.classList.remove("active_btn");
        soupe.classList.remove("active_btn");
        desert.classList.remove("active_btn");
        pasta.classList.remove("active_btn");
        beer.classList.remove("active_btn");
        drinks.classList.remove("active_btn");
        // 
        wine_list.classList.toggle('wine_list');
        pizza_list.classList.remove('pizza_list');
        pasta_list.classList.remove('pasta_list');
        soupe_list.classList.remove('soupe_list');
        desert_list.classList.remove('desert_list');
        beer_list.classList.remove('beer_list');
        drinks_list.classList.remove('drinks_list');
    });

    beer.addEventListener('click', function(){
        beer.classList.toggle("active_btn");
        pizza.classList.remove("active_btn");
        soupe.classList.remove("active_btn");
        desert.classList.remove("active_btn");
        wine.classList.remove("active_btn");
        pasta.classList.remove("active_btn");
        drinks.classList.remove("active_btn");
        // 
        beer_list.classList.toggle('beer_list');
        pizza_list.classList.remove('pizza_list');
        pasta_list.classList.remove('pasta_list');
        soupe_list.classList.remove('soupe_list');
        desert_list.classList.remove('desert_list');
        wine_list.classList.remove('wine_list');
        drinks_list.classList.remove('drinks_list');
    });

    drinks.addEventListener('click', function(){
        drinks.classList.toggle("active_btn");
        pizza.classList.remove("active_btn");
        soupe.classList.remove("active_btn");
        desert.classList.remove("active_btn");
        wine.classList.remove("active_btn");
        beer.classList.remove("active_btn");
        pasta.classList.remove("active_btn");
        // 
        drinks_list.classList.toggle('drinks_list');
        pizza_list.classList.remove('pizza_list');
        pasta_list.classList.remove('pasta_list');
        soupe_list.classList.remove('soupe_list');
        desert_list.classList.remove('desert_list');
        wine_list.classList.remove('wine_list');
        beer_list.classList.remove('beer_list');
    });
})