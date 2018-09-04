//Função recebe um elemento (através do seletor)
function scrollToElement(element){
    //Passa o seletor para a função do botão + animate
    $(element).click(function(event){
        event.preventDefault();
        //Pega no atributo href, o Id do elemento de destino
        var target = $(this).attr('href');
        // console.log(target);        
        //Manda o animate ir até o elemento target
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },700);        
    });
}

//Seletor da <a> com attr panel-about
scrollToElement("a[href*=panel-about]");
scrollToElement("a[href*=panel-palestrantes]");
scrollToElement("a[href*=form]");