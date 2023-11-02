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
   const aria = 1/2* inputValueBase * inputValueHeight;
   console.log(aria);

   const getAriaTotal = document.getElementById("AriaTotal")
   // console.log(getAriaTotal)
    getAriaTotal.innerText = aria;
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
   setInnerText("parallelogram-total" , totalAreaParallelogram)
}

// Rhombus calculate
function getRhombusCalculate(){
    const d1Value = inputFieldElement('rhombus-d1');
    const d2Value = inputFieldElement('rhombus-d2');
    const rhombusTotal = 0.5 * d1Value *d2Value;
     
    setInnerText("rhombus-total" , rhombusTotal)

}

//Pentagon Function
  function getPentagonCalculate(){
     const p = inputFieldElement ("pentagon-pade");
     const b = inputFieldElement("pentagon-base");
     const pentagonTotal = 0.5 * p * b;
     setInnerText("pentagon-total" , pentagonTotal)
  }

  function getEllipseCalculate(){
      const EllipseA = inputFieldElement("ellipse-base")
      const EllipseB = inputFieldElement("ellipse-height")
      const EllipseTotal = 3.1416* EllipseA *EllipseB;
       
      setInnerText ("ellipse-total" ,EllipseTotal);
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
