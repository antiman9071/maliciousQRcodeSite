function dispTime() {
    let d = new Date();                                                             
    dMins = d.getMinutes().toString().padStart(2,'0');                              
    dSecs = d.getSeconds().toString().padStart(2,'0');                              
    document.getElementById('time-display').innerHTML = "<h3>Time right now is:  " + d.getHours() + ":" + dMins +       ":" + dSecs + "</h3>";        
}
setInterval(dispTime, 1000);                       
