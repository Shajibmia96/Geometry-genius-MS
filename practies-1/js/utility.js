 function getTriangleCalculate(){
   //  console.log('find it')
    const getInputField =document.getElementById("triangle-base")
    const getInputValue = getInputField.value;
    getInputField.value = '';
    const inputValueBase  = parseFloat(getInputValue);

    const getInputFieldValue =document.getElementById("triangle-height")
    const getInputValueHeight = getInputFieldValue.value;
    getInputFieldValue.value = '';
    const inputValueHeight  = parseFloat(getInputValueHeight);
   //  return inputValue;
   //  console.log(inputValue)
   if(isNaN(inputValueBase) || isNaN(inputValueHeight)){
      alert ("Please input a number");
     return;
   }
   const aria = 1/2* inputValueBase * inputValueHeight;
   // console.log(aria);

   const getAriaTotal = document.getElementById("AriaTotal")
   // console.log(getAriaTotal)
    getAriaTotal.innerText = aria;
    //Add to calculation
   setCalculation( 'Triangle' , aria)
 }
//   const TotalAria = inputValue;
//   console.log(TotalAria)
//  getTriangleCalculate("triangle-base")
// //  getTriangleCalculate("triangle-height")


// function for parallelogram
function getParallelogramCalculate(){
   const getParallelogramBase = inputFieldElement("parallelogram-base") ;
   // console.log(getParallelogramBase)
   const  getParallelogramHeight = inputFieldElement("parallelogram-height")
   // console.log(getParallelogramHeight)
   const totalAreaParallelogram = getParallelogramBase * getParallelogramHeight;
   setInnerText("parallelogram-total" , totalAreaParallelogram);
  //Add to calculation
   setCalculation( 'Parallelogram' , totalAreaParallelogram)
}

// Rhombus calculate
function getRhombusCalculate(){
    const d1Value = inputFieldElement('rhombus-d1');
    const d2Value = inputFieldElement('rhombus-d2');
    const rhombusTotal = 0.5 * d1Value *d2Value;
     
    setInnerText("rhombus-total" , rhombusTotal)
// add to calculation
setCalculation( "Rhombus" , rhombusTotal)
}

//Pentagon Function
  function getPentagonCalculate(){
     const p = inputFieldElement ("pentagon-pade");
     const b = inputFieldElement("pentagon-base");
     if(isNaN(p) || isNaN(b)){
      alert("input a number")
      return;
     }
     const pentagonTotal = 0.5 * p * b;
     setInnerText("pentagon-total" , pentagonTotal)
  }

  function getEllipseCalculate(){
      const EllipseA = inputFieldElement("ellipse-base")
      const EllipseB = inputFieldElement("ellipse-height")
      const EllipseTotal = (Math.PI* EllipseA *EllipseB).toFixed(1);
       
      setInnerText ("ellipse-total" ,EllipseTotal);
      //Add to calculation
   setCalculation( 'Ellipse' , EllipseTotal)
  }

//reuseable get number for an input field Function

function inputFieldElement (fieldId){
    const inputFieldText = document.getElementById(fieldId);
    const inputValue = inputFieldText.value;
   //  inputFieldText.value = '';
   //  inputFieldText.value = "";
     const value = parseFloat (inputValue)
    return value;

}

// Reuseable set a number function

 function setInnerText(spanId , area){
    const setText = document.getElementById(spanId) ;
    setText.innerText =area
 }

//   find element in Calculation section

 function setCalculation( areaType  , area){
   //   console.log("hello")
   // const cale = (areaType + " " + area);
   const calculationEntry = document.getElementById("calculation-entry");
   const count = calculationEntry.childElementCount;
   // calculationEntry.classList.add("my-5 mx-5")
   const paragraph = document.createElement('p');
   paragraph.classList.add('my-5')
   paragraph.classList.add('mx-5')
   paragraph.innerHTML = `
                         ${count+1}. ${areaType} ${area}cm<sup>2</sup>
                          <button class = "btn btn-primary btn-sm"> Convert</button>
   `
   calculationEntry.appendChild(paragraph)
   
 }
