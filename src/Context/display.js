function displaySchContOpacity() {
    var schCont = document.getElementById('sch-cont');
    
    if (schCont.style.opacity === '0') {
      schCont.style.opacity = '1';
    }
}

export default displaySchContOpacity;