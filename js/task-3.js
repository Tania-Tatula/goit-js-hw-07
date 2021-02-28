const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// --вирішення 1--
//   const createsListOfImg = (images) => {

//     const selectedByIdGalleryEl = document.querySelector('#gallery');
//     const positionLiGalleryEl = document.createElement('li');
//     const liItems = images.map(imag => {
//         const positionImagesEl = document.createElement('img');
//         positionImagesEl.src = imag.url;

//         positionImagesEl.alt = imag.alt;

//         return positionImagesEl;
//     });
//     selectedByIdGalleryEl.append(...liItems);

//   }

//   createsListOfImg(images);

// --вирішення 2--

// const createsListOfImg = (images) => {
//     const selectedByIdGalleryEl = document.querySelector('#gallery');
//     const liItems = images.map(imag => {

//         const positionLiGalleryEl = document.createElement('li');

//         positionLiGalleryEl.insertAdjacentHTML('beforeend', `<img src= ${imag.url} alt = ${imag.alt}></img>`);

//         return positionLiGalleryEl;
//     })

//     selectedByIdGalleryEl.append(...liItems);
//     }

// createsListOfImg(images);

// --вирішення 3--

function createsListOfImg(images) {
  const selectedByIdGalleryEl = document.querySelector("#gallery");

  const liItems = images.forEach((imag) => {
    return selectedByIdGalleryEl.insertAdjacentHTML(
      "beforeend",
      `<li class="imeges-list"><img class="images-items" src = ${imag.url} 
      alt = "${imag.alt}"></img></li>`
    );
  });
}

createsListOfImg(images);
