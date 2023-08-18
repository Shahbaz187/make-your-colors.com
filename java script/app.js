const get_color = () => {
    //  haxcolor    
 const randomNumber = Math.floor(Math.random()* 16777215);
  const randomCode = "#" + randomNumber.toString(16);
   document.body.style.background = randomCode;
   document.getElementById('color_code').innerHTML = randomCode;
   
}
document.getElementById('btn').addEventListener(
    "click",
    get_color
)
get_color();