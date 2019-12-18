let ballon = document.querySelector('p');
let fontSize = 20;
ballon.innerHTML = '🎈';
window.addEventListener('keypress', function(){

    if(fontSize >= 100)
          ballon.innerHTML = 'Merry Christmas!!!';

    if(this.event.key == '+'){
        fontSize += (fontSize * 0.1)
        ballon.setAttribute('style',`font-size: ${fontSize}px`);
    }
    if (fontSize < 100)
        ballon.innerHTML = '🎈';
    if(this.event.key == '-'){
        fontSize -= (fontSize*0.1)
        ballon.setAttribute('style',`font-size: ${fontSize}px`);
    }
})
