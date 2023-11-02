function getRectangleCalculate(){
    // console.log("hello ")
    const getWidthElement = document.getElementById("rectangle-width");
     const getWidth = parseFloat(getWidthElement.value);
     getWidthElement.value = '';
    //  console.log(getWidth)
    const getLengthElement = document.getElementById("rectangle-length");
    const getLength = parseFloat(getLengthElement.value);  
    getLengthElement.value = '';
 
  if(isNaN(getWidth) || isNaN(getLength)){
        alert ("Please input a number");
       return;
     }
    const rectangleTotal  = getWidth * getLength
    const rectangle =document.getElementById("Rectangle-total");
     rectangle.innerText = rectangleTotal; 
     //Add to calculation
   setCalculation( 'Rectangle' ,rectangleTotal)
}