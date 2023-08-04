// function showNotification(params){
//     // create div
//     let notification = document.createElement('div');
//     let container = document.querySelector('.container');
//     notification.className ='notification';
//     // creae new class
//     if(params.className){
//         notification.classList.add(params.className);
//     }
//     // style class
//     notification.style.top = params.top +'px';
//     notification.style.right = params.right +'px';
//     // put into html tag
//     notification.innerHTML = params.html;
//     // appenc to container div
//     container.appendChild(notification);
//     // set time out ot notification for remove after 1500ms
//     setTimeout(()=>notification.remove(), 1500);
// }


// let i = 1;
// setInterval(()=>{
//     showNotification({top:10, right:10, html: 'Hellow - '+ i++, className: 'welcome'});
// }, 2000);

// method - 2 
// function showNotification({top = 0, right = 0, className, html}) {
//     let msgBox = null;
    
//     if (document.getElementsByClassName(className).length != 0) {
//         msgBox = document.getElementsByClassName(className)[0];
//     } else {
//       msgBox = document.createElement("div");
//       msgBox.className = className;
//     }
    
//     msgBox.style.cssText = `
//       display: block;
//       position: absolute;
//       padding: 10px;
//       border: 2px solid yellow;
//       background-color: green;

//       top: ${top}px;
//       right: ${right}px;
//     `;
//     msgBox.innerHTML = html;
//     let paragraph = document.getElementsByTagName("p")[0];
//     paragraph.prepend(msgBox);
    
//     setTimeout(() => {msgBox.style.display = "none"}, 1500);

//   }

  //-3
  function showNotification({top = 20,right = 30,html = "default", className = ""} = {}) {
    const notEl = document.createElement("div");
    notEl.className = "notification";
    notEl.classList.add(className);
    notEl.innerHTML = html;
    notEl.style.cssText = `position: fixed;
    top: ${top}px;
    right: ${right}px;
    background-color: #ccc;
    padding: 20px;
    border-radius: 5px;
    `;
    document.body.append(notEl);
    
    setInterval(() => {
    notEl.hidden = !notEl.hidden;
    }, 1500);
    }
    
    showNotification({
    top: 10, // 10px from the top of the window (by default 0px)
    right: 10, // 10px from the right edge of the window (by default 0px)
    html: "Hello!", // the HTML of notification
    className: "welcome" // an additional class for the div (optional)
    });