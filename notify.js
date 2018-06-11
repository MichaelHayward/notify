/*
Creates an alert message box in the DOM, styled with css.
Appended to the end of the body. Brought into view via css.
Class is dictated via param. Four classes: Success, Fail, Warning, Info
After 4 seconds, the alert disappears
Currently has FontAwesome as a dependency
Has an accompanying css file.
System is lightweight and can be used throughout development of applications.
*/

function notify(type, message){
  // Create what will fill our box, from params
  const boxContent = `<a class="alert-clear"><i class="fa fa-close"></i></a>
    <p class="alert-message">${message}</p>`;
  // Create the box itself, add a class, then fill with content
  // Use template strings (``) to include hyperlinks.
  const note = document.createElement("div");
        note.className = `alert alert-${type}`;
        note.innerHTML = boxContent;
  document.body.appendChild(note);
  note.addEventListener("click", (e) => {
    if(e.target.classList.contains("alert-clear")){
      notifyRemove();
    }
  });
  let removalTimer = setTimeout( notifyRemove, 4000 );
  let notifyHover = false;
  note.addEventListener("mouseenter", () => {
    clearTimeout(removalTimer);
    notifyHover = true;
    console.log("mouseenter");
  });
  // Sets hovering to false, checks every 4 seconds to see if hovering has become true. if false, removes.
  note.addEventListener("mouseleave", () => {
    notifyHover = false;
    setInterval( () => {
      if(notifyHover === false) {
        notifyRemove();
        return;
      }
    }, 4000 );
    console.log("mouseleave");
  });
// Allows css transition to animate, then removes the notification
  function notifyRemove(){
    note.style.left = "100px";
    note.style.opacity = "0";
    setTimeout( () => {note.remove()}, 1000 );
  }

  // Call removal function after 4 sec, even if clear is not clicked.

}
  // Move to the right, while reducing opacity to zero, then remove.

/* Add this notify function as a method to the UI object of future applications */
