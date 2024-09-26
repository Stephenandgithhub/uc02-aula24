   //Geting div using id root using '='
   const divRoot = document.getElementById("root");
   //Printing div on console
   console.log(divRoot);
   const value1 = 10;
   const value2 = 20;
   //creating a title element
   const result = document.createElement("h1");
   //turning sum of value1 and 2 as h1
   result.textContent = value1 + value2;
   divRoot.appendChild(result);
   //creating another div '-'
   //const 1
   const divValues = document.createElement("div");
   divValues.setAttribute("id", "values");
   divRoot.appendChild(divValues)
   //creating a title element for value1
   const h2Value1 = document.createElement("h2");
   
   h2Value1.textContent = value1;
   divValues.appendChild(h2Value1);