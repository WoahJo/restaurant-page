# End of the Line Cafe (Tabbed Restaurant Page)  
View it live [HERE](https://woahjo.github.io/restaurant-page/)!
  
## Goal:  
  
My goal with this project was to create a webpage for a restaurant using modules to display each tab and bundle them using `Webpack`.  
  
## How:  

Each tab (Home, Menu, Contact) is housed in its own Javascript file (module) and is loaded when clicked. The heading, footer and the content area in the middle are all created using one file (`load.js`)and is loaded when the page loads along with the homepage. `index.js` initializes `load.js`, imports each module and displays them with event listeners when needed.  
  
## Hurdles:  
  
My biggest hurdle was finding the best way to organize the code in a way that is readable, but also helps me avoid repeating myself.