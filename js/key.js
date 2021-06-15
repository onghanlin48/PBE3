function display(img,name,x,y){
    document.getElementById("dis_img").src = img;
    document.getElementById("text").innerHTML = y;
    document.getElementById("name").innerHTML = name;
    document.getElementById("p").innerHTML = x;
}