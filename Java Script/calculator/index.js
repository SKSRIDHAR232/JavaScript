var output = document.getElementById("input")

function display(asd){
      output.value += asd 
}
function calculate(){
    try{
    output.value = eval(output.value)
}
    catch(err) 
       {
        output.value="ERROR"
       }
}
function clr(){
    output.value ="";
}
function del(){
    output.value = output.value.slice(0,-1);
}