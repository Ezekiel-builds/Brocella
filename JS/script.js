const carousel = document.querySelector(".carousel");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

if (carousel && left && right) {
    right.addEventListener("click", () => {
        carousel.scrollLeft += 340;
    });

    left.addEventListener("click", () => {
        carousel.scrollLeft -= 340;
    });
}

const buttons = document.querySelectorAll(".filter-btns button");
const cards = document.querySelectorAll(".cart-item");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter; 
        console.log(filter);

        cards.forEach(card => {
            const category = card.dataset.category;

            if(filter === "all" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        })
    })
});

const filterIcon = document.querySelector(".filterIcon");
const filterBtnContainer = document.querySelector(".filter-btns");

if (filterIcon && filterBtnContainer) {
    filterIcon.addEventListener("click", () => {
        filterBtnContainer.classList.toggle("active");
    });
}
