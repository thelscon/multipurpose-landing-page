'use strict' ;

let hero__header__choiсeOfStyle = document.getElementById ( 'hero__header__choiсe-of-style' ) ;
if ( window.innerWidth >= 1440 ) {
    hero__header__choiсeOfStyle.style.backgroundImage = 'url(./images/3.svg)' ;
}
else {
    hero__header__choiсeOfStyle.style.backgroundImage = 'url(./images/1.svg)' ;
}
window.addEventListener ( 'resize' , () => {
    if ( window.innerWidth >= 1440 ) {
        hero__header__choiсeOfStyle.style.backgroundImage = 'url(./images/3.svg)' ;
    }
    else {
        hero__header__choiсeOfStyle.style.backgroundImage = 'url(./images/1.svg)' ;
    }
} ) ;