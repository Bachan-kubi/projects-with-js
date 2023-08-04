const accordionBtn = document.getElementsByClassName('accordionBtn');

for(let i=0; i<accordionBtn.length; i++){
    accordionBtn[i].addEventListener('click', function(){
        const panels = this.nextElementSibling;
        console.log(panels)
        if(panels.style.display === 'block'){
            panels.style.display = 'none';
        }else{
            panels.style.display = 'block';
        }
        this.classList.toggle("active");
    })
}

// with smooth transition 
const btn = document.getElementsByClassName('btn');
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click', function(){
        this.classList.toggle('act');
        const pan = this.nextElementSibling;
        console.log(pan);
        if(pan.style.maxHeight){
            pan.style.maxHeight = null;
        }else{
            pan.style.maxHeight = pan.scrollHeight + 'px';
        }
    });
}

// final according
const accBtn = document.getElementsByClassName('acc-btn');
for(let i=0; i<accBtn.length; i++){
    accBtn[i].addEventListener('click', function(){
        this.classList.toggle('action');
        const details = this.nextElementSibling;
        if(details.style.maxHeight){
            details.style.maxHeight = null;
        }else{
            details.style.maxHeight = details.scrollHeight + 'px';
        }
    });
}

const textBtn = document.getElementById('textBtn');
console.log(textBtn);
textBtn.addEventListener('click', ()=>{
    const dt = document.getElementById('dt');
    dt.classList.toggle('textAction')
    console.log(dt)
})

console.dir(document)

