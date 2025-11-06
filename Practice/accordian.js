// const accordianTab = document.getElementsByClassName("accordian-tab");

// for (let i = 0; i < accordianTab.length; i++) {
//   accordianTab[i].addEventListener("click", function () {
//     //close all first
//     for (let j = 0; j < accordianTab.length; j++) {
//       accordianTab[j].nextElementSibling.classList.remove("active");
//     }

//     // Then open only the clicked one
//     this.nextElementSibling.classList.add("active");
//   });
// }

const accordianTab = document.getElementsByClassName("accordian-tab");

for (let i = 0; i < accordianTab.length; i++) {
  accordianTab[i].addEventListener("click", function () {

    const content = this.nextElementSibling;  
    const isActive = content.classList.contains("active")

      for(let j=0; j<accordianTab.length; j++){
        accordianTab[j].nextElementSibling.classList.remove("active")
      }

      if(!isActive){
        content.classList.add("active");
      }

  });
}
