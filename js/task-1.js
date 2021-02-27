// ---вирішення 1---
// const iteratesListOfElements = function(elements) {
// const parentsEl = elements.children;
// console.log(`В списке ${parentsEl.length} категории.`);

// const childrenEl = elements.querySelectorAll('.item');

// const categoryElementsEl = elements.querySelectorAll('ul');
// const itemsCategoriesEl = [...categoryElementsEl].map(elementEl => elementEl.children.length)

// for (let i = 0; i <= childrenEl.length - 1; i += 1) {
   
//     const text = childrenEl[i].querySelector("h2");
//     console.log(`Категория: ${text.textContent}`);

//     console.log(`Количество элементов: ${itemsCategoriesEl[i]}`);
// }
// }

// iteratesListOfElements(categories);




const iteratesListOfElements = function(elements) {
    const parentsEl = elements.children;
    console.log(`В списке ${parentsEl.length} категории.`);
    
    const childrenEl = elements.querySelectorAll('.item');

    const itemsCategoriesEl = childrenEl.forEach(elementEl =>{ 
        
        console.log(`Категория: ${elementEl.querySelector("h2").textContent}`);
        console.log(`Количество элементов: ${elementEl.querySelector("ul").children.length}`);

    })
}
    
    
    iteratesListOfElements(categories);

