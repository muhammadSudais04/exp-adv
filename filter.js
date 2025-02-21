const products = [
    //Electronics
    {
        name: "washing machine",
        price: 50.00,
        category:"Electronics",
        brand: "GNE"
    },
    {
        name: "Refrigerator",
        price:400.00,
        category: "Electronics",
        brand: "Dawalance"
    },
    {
        name: "Dispenser",
        price: 250.00,
        category: "Electronics",
        brand:"GNE"
    },

//Phones

    {
        name: "A15",
        price: 500.00,
        category: "phones",
        brand: "Samsung",
    },
    {
        name: "Iphone 16",
        price: 1200.00,
        category: "phones",
        brand: "Apple",
    },
    {
        name: "Google pixel 9",
        price: 899.00,
        category: "phones",
        brand: "Google",
    },
    {
        name:"realme 9pro",
        price: 399.00,
        category:"phones",
        brand: "realme",
    }

    //Footwear

    {
        name:"Nike Air 5",
        price: 4599.00,
        category: "Footwear",
        brand: "Nike",
    },
    {
        name:"Air Jordan",
        price: 7999.00,
        category:"Footwear",
        brand:"Nike",
    },
    {
        name:"daily 1.0",
        price: 52.00,
        category:"Footwear",
        brand:"adidas",
    },

    //Home Decor

    {
        name:"leather seats",
        price: 89.00,
        category:"Home Decor",
        brand:"habbit",
    },
    {
        name:"Sofa set",
        price: 199.00,
        category:"Home Decor",  
        brand:"habbit",
    },
    {
        name: "Dining Table",
        price: 160.00,
        category:"Home Decor",
        brand:"J.B. SAEED",
    }
    

    // fitness

    {
        name: "Yoga mat",
        price:20.00,
        category:"Fitness",
        brand: "iron gear",
    },
    {
        name: "rowing machine",
        price: 180.00,
        category:"Fitness",
        brand:"iron gear",
    },
     {
        name: "10kg dumbells",
        price: 30.00,
        category: "Fitness",
        brand:"Tee fit",
    },
    {
        name: "Steel Rod",
        price: 15.00,
        category:"Fitness",
        brand:"Tee fit",
    },
];

// Select the container where products will be displayed
var div = document.querySelector(".container");

// Function to render items dynamically
function renderItem(arr) {
    div.innerHTML = ""; // Clear the existing content

    if (arr.length === 0) {
        div.innerHTML = "<h3>No products found</h3>";
        return;
    }


    arr.forEach((item) => {
        div.innerHTML += `
        <div class="card">
            <h3>Name: ${item.name}</h3>
            <h3>Category: ${item.category}</h3>
            <h3>Price: $${item.price.toFixed(2)}</h3>
        </div>
        `;
    });
}

// Display all products initially
renderItem(products);

// Function to filter products by category
function filteredItem(button) 
{
    const category = button.innerText.trim(); // Get button text (category name)

    const filteredProducts = products.filter((item) => item.category === category);
    
    renderItem(filteredProducts);
}

// Selecting the container to render products
const div = document.querySelector(".container");

// Function to render items dynamically
function renderItem(arr) {
    div.innerHTML = ""; // Clear existing content

    if (arr.length === 0) {
        div.innerHTML = "<h3>No products found</h3>";
        return;
    }

    arr.forEach((item) => {
        div.innerHTML += 
        <div class="card">
            <h3>Name: ${item.name}</h3>
            <h3>Category: ${item.category}</h3>
            <h3>Price: $${item.price.toFixed(2)}</h3>
        </div>
        ;
    });
}

//  Render all products when the page loads
renderItem(btns);

// Function to filter products by category
function filteredItem(button) {
    
    const category = button.innerText.trim(); // Get button text (category name)
    
    if (category === "All") {
        renderItem(products); // Show all products when "All" button is clicked
    } else {
        const filteredProducts = products.filter((item) => item.category === category);
        renderItem(filteredProducts);
    }

}
