// get id
let button = document.getElementById('sendbutton');
// typguard - type checking
if (button === null) {
  alert('this is null');
} else {
// on mousedown - event listener  
  button.addEventListener('mousedown', (e) => {;
// find body tag
    let source = "<body>";
    source += document.getElementsByTagName('body')[0].innerHTML;
    source += "</body>";
// regex to strip html tags    
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
// append pre tags to source    
    source = "<pre>"+source+"</pre>";
// create a new window with source    
    let sourceWindow = window.open('','__self', 'scrollbars=0');
// typguard - type checking
    if (sourceWindow === null) {
      alert('this is null');
    } else {
    sourceWindow.document.write(source);     
// disable scroll so on 'css is evil' can be seen    
    sourceWindow.document.body.style.overflow = "hidden";    
    }
  }); 
}





