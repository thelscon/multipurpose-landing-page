'use strict' ;

const hero__header__choiсeOfStyle = document.getElementById ( 'hero__header__choiсe-of-style' ) ;
const blockText__h2 = document.getElementById ( 'block-text__h2' ) ;
const blockText__p = document.getElementById ( 'block-text__p' ) ;

if ( window.innerWidth < 768 ) {
    blockText__p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean<br><br>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.' ;
}

if ( window.innerWidth >= 768 && window.innerWidth < 1440 ) {
    blockText__p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper.<br><br>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.' ;
}

if ( window.innerWidth >= 1440 ) {
    hero__header__choiсeOfStyle.style.backgroundImage = 'url(./images/3.svg)' ;
    blockText__h2.innerHTML = 'We Are <span class="span-color">Making<br> Ideas Better</span> For Everyone' ;
    blockText__p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.<br><br>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.' ;
    
}
else {
    hero__header__choiсeOfStyle.style.backgroundImage = 'url(./images/1.svg)' ;
    blockText__h2.innerHTML = 'We Are <span class="span-color">Making Ideas Better</span> For Everyone' ;
}

window.addEventListener ( 'resize' , () => {
    if ( window.innerWidth < 768 ) {
        blockText__p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean<br><br>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.' ;
    }
    
    if ( window.innerWidth >= 768 && window.innerWidth < 1440 ) {
        blockText__p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper.<br><br>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet.' ;
    }

    if ( window.innerWidth >= 1440 ) {
        hero__header__choiсeOfStyle.style.backgroundImage = 'url(./images/3.svg)' ;
        blockText__h2.innerHTML = 'We Are <span class="span-color">Making<br> Ideas Better</span> For Everyone' ;
        blockText__p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur imperdiet at a augue ullamcorper. Leo faucibus feugiat rutrum aenean. Nisi, lectus aliquet aliquam consectetur augue praesent. Lorem vulputate orci eget mi, sed pulvinar.<br><br>Ornare etiam erat volutpat tempor fringilla mi. Elit a blandit faucibus est, dui interdum ut amet. Adipiscing feugiat vel at posuere in. Pellentesque volutpat vestibulum.' ;
        
    }
    else {
        hero__header__choiсeOfStyle.style.backgroundImage = 'url(./images/1.svg)' ;
        blockText__h2.innerHTML = 'We Are <span class="span-color">Making Ideas Better</span> For Everyone' ;
        
    }
} ) ;