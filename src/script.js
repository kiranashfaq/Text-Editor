var bold = document.getElementById("bold")
var italic = document.getElementById("italic")
var underline = document.getElementById("underline");
var align_left = document.getElementById("align-left");
var align_center = document.getElementById("align-center");
var align_right = document.getElementById("align-right");
var font_size = document.getElementById("font-size")
var font_family = document.getElementById("font-family")
var bg_color = document.getElementById("bg-color")
var text_color = document.getElementById("text-color");



var editor = document.getElementById("editor")
bold.addEventListener("click",function(){
editor.style.fontWeight = "bold"
})
italic.addEventListener("click", function () {
  editor.style.fontStyle = "italic";
});
underline.addEventListener("click",function(){
    editor.style.textDecoration = "underline";
})

align_left.addEventListener("click", function(){
    editor.style.textAlign = "left";
})

align_center.addEventListener("click", function(){
    editor.style.textAlign = "center";
})

align_right.addEventListener("click", function(){
    editor.style.textAlign = "right";
})

font_size.addEventListener("click",function(){
  editor.style.fontSize = font_size.value  
})

font_family.addEventListener("click", function(){
  editor.style.fontFamily = font_family.value
})
bg_color.addEventListener("input", function(){
    
    editor.style.backgroundColor = bg_color.value
})
text_color.addEventListener("input", function () {
  editor.style.color = text_color.value;
});