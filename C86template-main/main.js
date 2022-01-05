var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img) {	
	blockimage=Img;
    blockimage.scaleToWidth(700);
    blockimage.scaleToHeight(500);
    blockimage.set({
        top:0, left:0
    });
    canvas.add(blockimage);});
}

function playsound(){
x.play();
}
