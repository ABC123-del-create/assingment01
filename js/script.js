// Sample menu items
const menuItems = [
  { name: "Espresso", price: "$3.00", img: "https://via.placeholder.com/300" },
  { name: "Latte", price: "$4.00", img: "https://via.placeholder.com/300" },
  { name: "Cappuccino", price: "$4.50", img: "https://via.placeholder.com/300" }
];

// Dynamically load menu items
document.addEventListener("DOMContentLoaded", function() {
  const menuContainer = document.getElementById("menu-items");
  menuItems.forEach(item => {
      const col = document.createElement("div");
      col.className = "col-md-4";
      col.innerHTML = `
          <div class="card mb-4">
              <img src="${item.img}" class="card-img-top" alt="${item.name}">
              <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">${item.price}</p>
              </div>
          </div>
      `;
      menuContainer.appendChild(col);
  });
});

// Handle form submission (for demonstration purposes)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting us! We’ll get back to you soon.");
});
