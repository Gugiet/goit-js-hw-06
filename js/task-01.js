const menuItemsByTagName = document.querySelectorAll("li.item");
console.log(`Number of categories: ${menuItemsByTagName.length}`);

const categoryItems = categories.querySelectorAll("li.item");
categoryItems.forEach((categoryItem) => {
  const header = categoryItem.querySelector("h2");
  const category = header.textContent;
  const elements = categoryItem.querySelectorAll("li").length;

  console.log("category: " + category + " elements: " + elements);
});
