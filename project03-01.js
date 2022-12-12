/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Raul A Haro
      Date:   9/18/22

      Filename: project03-01.js
*/
// Create collection of elements in the menuitem class
let menuItems = document.getElementsByClassName("menuItem");

// Loop through menuItems collection and add click eventlistener for each element
for (i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal);
}

// Function to calculate total cost of order
function calcTotal() {
      let orderTotal = 0;

      for (i = 0; i < menuItems.length; i++) {
            if (menuItems[i].checked) {
                  orderTotal += Number(menuItems[i].value);
            }
      }

      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }