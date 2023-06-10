const data = [
    {
        id: 1,
        name: "Invicta Men's Pro Diver",
        img: "/assets/img/product-1.png",
        price: 74,
        cat: "Coat",
    },
    {
        id: 11,
        name: "Clothing Hat Coat",
        img: "/assets/img/product-2.png",
        price: 74,
        cat: "Dress",
    },
    {
        id: 2,
        name: "Fur Jacket ",
        img: "/assets/img/product-3.png",
        price: 40,
        cat: "Sport",
    },
    {
        id: 3,
        name: "Fleece Jacket",
        img: "/assets/img/product-4.png",
        price: 200,
        cat: "Luxury",
    },
    {
        id: 4,
        name: "Casio Classic Resin Strap ",
        img: "/assets/img/product-5.png",
        price: 16,
        cat: "Sport",
    },
    {
        id: 5,
        name: "Garmin Smartwatch ",
        img: "/assets/img/product-6.png",
        price: 74,
        cat: "Casual",
    },
];

const productsContainer = document.querySelector(".shop__items");
const searchInput = document.querySelector(".search");


const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
    .map(
        (product) =>
        `
        <div class="shop__content">
            <div class="shop__tag">New</div>
            <img src=${product.img} alt="" class="shop__img">
            <h3 class="shop__title">${product.name}</h3>
            <span class="shop__subtitle">Accessory</span>

            <div class="shop__prices">
                <span class="shop__price">$${product.price}</span>
                <span class="shop__discounts">$29.99</span>
            </div>

            <a href="details.html" class="button shop__button">
                <i class="bx bx-cart-alt shop__icon"></i>
            </a>

        </div>
        `
        )
        .join("");
    };

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(
            data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
        );
    } else {
        displayProducts(data);
    }
});
