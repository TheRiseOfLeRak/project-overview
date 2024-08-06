"use strict"

var soundPlaying = false;

$('.button').on ('click', function() {
    console.log("Button clicked, id:"+this.id);
    var audio = new Audio(""+this.id);

    if(!soundPlaying) {
        audio.play();
        soundPlaying = true;
    } else {
        audio.pause();
        soundPlaying = false;
    }
    soundPlaying = false;
    //so funktioniert das natürlich nicht, aber ich hab grad keine brainpower darüber nachzudenken, passiert nachher...
});


/** collapsible */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
} 