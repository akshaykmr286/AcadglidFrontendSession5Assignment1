/*
This function is called when the calculate button is clicked
*/
function Calculate(){
    //select the radius input
    var radius=document.querySelector("#radius");
    //check if radius is not entered,alert the warning and apply style to input box
    if(radius.value == ""){
        alert("Please Enter the radius first..!!");//error alert
        radius.style.backgroundColor= "#E6B0AA";
        radius.focus();//styling input box if error
    }
    //If radius is entered then call CalculateArea function to get area,pass the argument as radius in the function
    else{
        //assign a variable with function return
        var ar=CalculateArea(radius.value);
        //change the innerhtml of area div with the result
         document.getElementById("area").innerHTML= "The Area<span style='font-style:oblique;'>(two decimal)</span> Of Circle is : <span style='color:green;'>"+ar.toFixed(2)+"</span> m<sup>2</sup>";//toFixed is used to restrict the no of digits after decimal point
         radius.style.backgroundColor= "white";
    }
}

/*
This is the javascript function for calculating area of circle which takes the argument as the radius of circle and returns the area
*/
function CalculateArea(radius){
    var area=radius * radius * Math.PI;
    return area;
}
