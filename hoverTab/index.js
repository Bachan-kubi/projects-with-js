function openCity(e, cityName){
    const tabs = document.getElementsByClassName('tablinks');
    const tabcontents = document.getElementsByClassName('tabcontent');
    for(let i =0; i<tabcontents.length; i++){
        tabcontents[i].style.display = 'none';
    }
    for(let i=0;i<tabs.length;i++){
        tabs[i].className = tabs[i].className.replace('active', '');
    }
    document.getElementById(cityName).style.display = 'block';
    e.currentTarget.className += 'active';
}
