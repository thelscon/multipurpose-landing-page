'use strict' ;

let header__choiсeOfStyle = document.getElementById ( 'header__choiсe-of-style' ) ;
if ( window.innerWidth >= 1440 ) {
    header__choiсeOfStyle.style.backgroundImage = 'url(./images/3.svg)' ;
}
else {
    header__choiсeOfStyle.style.backgroundImage = 'url(./images/1.svg)' ;
}
window.addEventListener ( 'resize' , () => {
    if ( window.innerWidth >= 1440 ) {
        header__choiсeOfStyle.style.backgroundImage = 'url(./images/3.svg)' ;
    }
    else {
        header__choiсeOfStyle.style.backgroundImage = 'url(./images/1.svg)' ;
    }
} ) ;