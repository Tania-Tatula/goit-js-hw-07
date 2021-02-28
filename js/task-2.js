    const ingredients = [
        'Картошка',
        'Грибы',
        'Чеснок',
        'Помидоры',
        'Зелень',
        'Приправы',
    ];

   

    function createsListOfProducts(products){
              
        
    const selectedById = document.querySelector('#ingredients');
    
    const liItems = products.map(product =>{
        const positionLiEl = document.createElement('li');
        positionLiEl.textContent = product;
        return positionLiEl;
    });
    selectedById.append(...liItems)
   
  }
  
// --вирішення 2--
//   function createsListOfProducts(products){
               
//     const selectedById = document.querySelector('#ingredients');
//     const elementStringEl = products.reduce(
//         (string, item) => string + `<li>${item}</li>`,
//         ""
//     );
    
//     selectedById.innerHTML = elementStringEl;
// }


createsListOfProducts(ingredients);
 

    
 