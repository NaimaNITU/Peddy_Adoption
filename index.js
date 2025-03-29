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
    const btn = document.createElement("button");
    btn.classList.add("categoryBtn");

    btn.innerHTML = `
       <img src="${category.category_icon}" alt="" />
            <h4 class="text-2xl font-bold">${category.category}</h4>
      `;
    categoryNameContainer.appendChild(btn);
  }
};

allCategories();
