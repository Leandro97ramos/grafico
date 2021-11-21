'use strict'

 //variable range-slider
  var sliderOne = document.getElementById("slider-1");
  var sliderTwo = document.getElementById("slider-2");
  var displayValOne = document.getElementById("range1");
  var displayValTwo = document.getElementById("range2");
  var minGap = 1;
  var calendario = ['ene','feb', 'mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("slider-1").max;



function SliderCalendarOne(){
    let valor = parseInt(sliderTwo.value) - parseInt(sliderOne.value);
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
    console.log("valor slide uno "+sliderOne.value +"cuenta: "+ valor );

  }else{
    console.log("valor slide uno "+sliderOne.value +"cuenta: "+ valor );
  }
  displayValOne.textContent = calendario[sliderOne.value];
  fillColor();
}

function SliderCalendarTwo(){
  if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
     sliderTwo.value = parseInt(sliderOne.value) + minGap;
    console.log(sliderTwo.value);
  }else{
    console.log(sliderTwo.value);
  }
  displayValTwo.textContent = calendario[sliderTwo.value-1];
  fillColor();

}

function fillColor(){
    let percent1 =(sliderOne.value/ sliderMaxValue * 12);
    let percent2 =(sliderTwo.value/ sliderMaxValue * 12);

    console.log(percent1,percent2);

}
