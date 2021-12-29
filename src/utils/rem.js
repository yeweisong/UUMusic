function refreshRem(){
    const baseSize = 37.5;
    const docEl = document.documentElement;
    const width = docEl.clientWidth || document.body.clientWidth;
    const scale = width/375;
    docEl.style.fontSize = baseSize * scale + 'px'
}
refreshRem()
window.addEventListener('resize',refreshRem)