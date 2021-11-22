'use strict'


    
    //variable para filtro de meses
    var slidersMonthOne = document.getElementById("slider-month-1");
    var slidersMonthTwo = document.getElementById("slider-month-2");
    var displayMonthValOne = document.getElementById("range-month-1");
    var displayMonthValTwo = document.getElementById("range-month-2");
    var minGap = 1;
    var month = ['ene','feb', 'mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
    let sliderMaxValue = document.getElementById("slider-month-1").max;
    
    //variable por filtrado de años
    var slidersYearOne = document.getElementById("slider-year-1");
    var slidersYearTwo = document.getElementById("slider-year-2");
    var displayYearValOne = document.getElementById("range-year-1");
    var displayYearValTwo = document.getElementById("range-year-2");
    

    function sliderMonthOne(){
      let value = slidersMonthOne.value;
      if(parseInt(slidersMonthTwo.value) - parseInt(slidersMonthOne.value) < minGap){
        slidersMonthOne.value = parseInt(slidersMonthTwo.value) - minGap;
        
      }else{
        displayMonthValOne.textContent = month[slidersMonthOne.value];
        displayMonthValOne.style.left = (value * 8.3 ) + "%";
      }

  
     // fillColor();
    }
    
    function sliderMonthTwo(){
      let value = slidersMonthTwo.value;
      
      let diferencia = 11 - (value-1);
      
      if(parseInt(slidersMonthTwo.value) - parseInt(slidersMonthOne.value) < minGap){
        slidersMonthTwo.value = parseInt(slidersMonthOne.value) + minGap;
      }else{
        console.log(slidersMonthTwo.value);
        displayMonthValTwo.textContent = month[slidersMonthTwo.value-1]; 
        displayMonthValTwo.style.right = (diferencia *7.5) + "%";
        console.log("diferencia: " + diferencia + " resultado: " +(diferencia*5.8));
      }
      

 // fillColor();

}

function fillColor(){
    let percent1 =(slidersYearOne.value/ sliderMaxValue * 12);
    let percent2 =(slidersYearTwo.value/ sliderMaxValue * 12);

    console.log(percent1,percent2);

}



function sliderYearOne(){
  let value = slidersYearOne.value;
  let totalElementos = (value) - 1920;
  console.log(totalElementos);
if(parseInt(slidersYearTwo.value) - parseInt(slidersYearOne.value) < minGap){
  slidersYearOne.value = parseInt(slidersYearTwo.value) - minGap;

}else{
  displayYearValOne.style.left = ( totalElementos  ) + "%";
  displayYearValOne.textContent = value;
  
  console.log(slidersYearOne.value);
}
fillColor();
}

function sliderYearTwo(){
let value = slidersYearTwo.value;

let diferencia = 11 - (value-1);

if(parseInt(slidersYearTwo.value) - parseInt(slidersYearOne.value) < minGap){
  slidersYearTwo.value = parseInt(slidersYearOne.value) + minGap;
}else{
  console.log(slidersYearTwo.value);
  displayYearValTwo.style.right = (diferencia *7.5) + "%";
  displayYearValTwo.textContent = value;

  console.log("diferencia: " + diferencia + " resultado: " +(diferencia*5.8));
}


fillColor();

}
/*
function fillColor(){
  let percent1 =(slidersYearOne.value/ sliderMaxValue * 12);
  let percent2 =(slidersYearTwo.value/ sliderMaxValue * 12);

  console.log(percent1,percent2);

}
*/