
const hamTabs  = document.querySelectorAll(".ham-menu");
const hamList  = document.querySelector(".ham-list");
console.log(hamList)
hamTabs.forEach(function (item) {
  item.addEventListener("click", function () {
    let hamBtn = item;
    let hamId = hamBtn.getAttribute("data-ham");
    let hamTab = document.querySelector(hamId);


    hamTabs.forEach(function(item){
        item.classList.remove("active")
    });
    
   
    

    hamTab.classList.add("active");

  
  });
});





