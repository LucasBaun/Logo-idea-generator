//Get all the images
image_array = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
]

function get_random_image(){
  //Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  //Get a image at the random_index
  selected_image = image_array[random_index]

  //display the image
  document.getElementById('image_shower').src = `./img/${selected_image}`
}



var arr = ["Coal Mining","Bank","Bakery","Woodworking","Skiing Facilities","Corn Farming","Streaming site","Book Store"];

function getItem(){
  const element = document.getElementById("something");
    document.getElementById("something").innerHTML = arr[Math.floor(Math.random() * arr.length)];
}

function changeStyle(){
    var element = document.getElementById("myPara");
    element.style.display = "none";
}
