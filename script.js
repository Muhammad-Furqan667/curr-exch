let Base_URL = "https://api.exchangerate-api.com/v4/latest/USD";
const dropdowns = document.querySelectorAll(".dropdown select");
let from = document.querySelector(".from");
let to = document.querySelector(".to");

const updateFlag = (element) => {
      let currCode = element.value;
      let countryCode = countryList[currCode];
      console.log(countryCode);
      let newSrc = `https://flagcdn.com/16x12/${countryCode}.png`;
      let img =  element.parentElement.querySelector("img");
      img.src = newSrc;
   }

from.addEventListener("change", (evt) => {
      updateFlag(evt.target);
});
to.addEventListener("change", (evt) => {
    updateFlag(evt.target);
});

for(let select of dropdowns){
      for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
       }
      
}

// const updateFlag = (element) => {
//    let currCode = element.value;
//    let countryCode = countryList[currCode];
//    console.log(countryCode);
//    let newSrc = `https://flagcdn.com/16x12/${countryCode}.png`;
//    let img =  element.parentElement.querySelector("img");
//    img.src = newSrc;
// }

















































// if (select.name === "from" && currCode === "USD"){
//       newOption.selected = "selected";
// }else if(select.name === "to" && currCode === "INR"){
//       newOption.selected = "selected";
// }