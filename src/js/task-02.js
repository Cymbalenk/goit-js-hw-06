const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredList = document.querySelector('#ingredients');
const createEl = (text) => {
  const ingredList = document.createElement('li');
  ingredList.textContent = text;
  ingredList.classList.add('item');
  return ingredList;
};
const addItems = (array) => {
  ingredList.append(...array.map((element) => createEl(element)));
};
addItems(ingredients);
console.log(ingredList);


// const navItemEl = document.createElement('li');
// navItemEl.textContent = 'Potatoes';
// navItemEl.classList.add("item");

// const navItemEl1 = document.createElement('li');
// navItemEl1.classList.add("item");
// navItemEl1.textContent =  'Mushrooms';

// const navItemEl2 = document.createElement('li');
// navItemEl2.classList.add("item");
// navItemEl2.textContent = 'Garlic';

// const navItemEl3 = document.createElement('li');
// navItemEl3.classList.add("item");
// navItemEl3.textContent = 'Tomatos';

// const navItemEl4 = document.createElement('li');
// navItemEl4.classList.add("item");
// navItemEl4.textContent = 'Herbs';

// const navItemEl5 = document.createElement('li');
// navItemEl5.classList.add("item");
// navItemEl5.textContent = 'Condiments';




// console.log(navItemEl);
// console.log(navItemEl1);
// console.log(navItemEl2);
// console.log(navItemEl3);
// console.log(navItemEl4);
// console.log(navItemEl5);


// navEl.append(navItemEl,navItemEl1,navItemEl2,navItemEl3,navItemEl4,navItemEl5);
// navEl.insertBefore(navItemEl, navEl.children(2));

// navEl.append;
// (navItemEl1,
// navItemEl2,
// navItemEl3,
// navItemEl4,
// navItemEl5);





// const imageEl = document.createElement('img');
// console.log(imageEl);
// imageEl.src = 
// imageEl.alt =



// document.ingredients.apperdChild(navItemEl);
