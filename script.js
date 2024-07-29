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