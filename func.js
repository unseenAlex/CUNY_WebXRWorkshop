const colors = ['red', 'green', 'blue', 'peachpuff'];

//get all the boxes in the scene
var boxes = document.querySelectorAll("a-box");

//loop through all the boxes and set them to rotate every 10ms
for (let i = 0; i < boxes.length; i++) {
    window.setInterval(rotateBox, 10, boxes[i], 0.05);
}

//function to rotate a box
function rotateBox(box, rotStep) {
    //this will work even if the element doesn't have a specified rotation
    box.object3D.rotation.y += rotStep;
    if (box.object3D.rotation.y > 360) {
        box.object3D.rotation.y = 0;
    }
}