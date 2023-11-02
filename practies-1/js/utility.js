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

