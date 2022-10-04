//Get all the images
image_array = [
  '1.png',
  '2.png',
  '3.png',
  '4.png',
  '5.png',
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
]

function get_random_image(){
  //Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  //Get a image at the random_index
  selected_image = image_array[random_index]

  //display the image
  document.getElementById('image_shower').src = `./img/${selected_image}`
}



var arr = ["Coal Mining","Bank","Bakery","Woodworking","Skiing Facilities","Corn Farming","Streaming site","Book Store", "Winemaker", "Eyelash stylists", "Chewing gum", "Organic Socks", "Fishing Lure", "Music company", "Gaming Equipment", "Yoga Professor", "Tattoo Shop", "Phone Case", "Jewelry Store", "Golf", "Vegan Food", "Surf School", "Car Rental", "Food Delivery", "Pawn Shop", "Library", "Wedding Photography", "Computer repair"];

function getItem(){
  const element = document.getElementById("something");
    document.getElementById("something").innerHTML = arr[Math.floor(Math.random() * arr.length)];
}

function changeStyle(){
    var element = document.getElementById("myPara");
    element.style.display = "none";
}
