// alert('...')
// at first fetched the category name
const allCategories = async () => {
  const fetchCategories = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const response = await fetchCategories.json();
  showAllCategory(response.categories);
};

// now showing the category name dynamically
const showAllCategory = (categories) => {
  for (const category of categories) {
    // console.log(category);
    const categoryNameContainer = document.getElementById(
      "categoryNameContainer"
    );
    const div = document.createElement("div");
    div.classList.add("categoryBtn");

    div.innerHTML = `
    <button onclick="categoryWisePet('${category.category}')" class="flex items-center gap-3">
       <img src="${category.category_icon}" alt="" />
            <h4 class="text-2xl font-bold">${category.category}</h4>
            </button>
      `;
    categoryNameContainer.appendChild(div);
  }
};

// now when category btn got clicked its data needs to show so at first fetch category based data from api
const categoryWisePet = async (petsArr) => {
  show("spinnerContainer");
  const fetchPets = await fetch(
    `https://openapi.programming-hero.com/api/peddy/category/${petsArr}`
  );
  const response = await fetchPets.json();
  if (response.data) {
    makeHide("spinnerContainer");
    showCategoryWisePet(response.data);
  }
};

// now category wise pets show
const showCategoryWisePet = (pets) => {
  // console.log(pets);
  if (pets.length < 1) {
    makeHide("categoryWiseContainer");
    show("noData");
    return;
  }

  const categoryWiseContainer = document.getElementById(
    "categoryWiseContainer"
  );
  categoryWiseContainer.innerHTML = "";

  pets.forEach((element) => {
    show("categoryWiseContainer");
    makeHide("noData");
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="card bg-base-100  shadow-sm mb-10 h-120">
              <figure>
                <img class="w-full object-cover h-80"
                  src="${element.image}"
                  alt="Shoes"
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title">${element.breed}</h2>
                <p>${element.pet_details.slice(0, 150)}....</p>
                <div class="card-actions justify-between ">
                  <button onclick="" class="btn btn-primary">Buy Now</button>
                  <button onclick="showModal()" class="btn btn-primary">See Details</button>
                </div>
              </div>
            </div>
    `;
    categoryWiseContainer.appendChild(div);
  });
};



const showModal = () => {
  
}
const makeHide = (id) => {
  document.getElementById(id).classList.add("hidden");
};

const show = (id) => {
  document.getElementById(id).classList.remove("hidden");
};
categoryWisePet("dog");

allCategories();
