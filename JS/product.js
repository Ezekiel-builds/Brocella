const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".cart-item");
const errMessage = document.getElementById("message");

searchInput.addEventListener("input", () => {
    const inputValue = searchInput.value.toLocaleLowerCase();

    products.forEach(product => {
        const productName = product.dataset.category.toLowerCase();

        if (productName.includes(inputValue)) {
            product.classList.remove("active");
        } else {
            product.classList.add("active")
            errMessage.textContent = "Oops! Nothing here yet🤧"
        }
    })
})