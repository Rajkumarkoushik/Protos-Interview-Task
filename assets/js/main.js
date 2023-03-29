// Services section starts.
async function servicesCardsData() {
    const data = await fetch("cards-data.json"); // fetched data
    const changeData = await data.json(); // data changed into json formate.
    let cards = "";
    changeData.map((eachCard) => {
        cards += `
        <div class="col-lg-2 col-md-3 col-12">
            <div class="serv-card">
                <img src="${eachCard.image}" alt="">
                <p>${eachCard.name}</p>
            </div>
      </div>
      `
    });
    document.querySelector(".services-cards").innerHTML = cards;
}
servicesCardsData();
// Services section starts.

// Scroll to top section starts.
const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTop.classList.add("scroll-to-top-active");  
    } else {
        scrollToTop.classList.remove("scroll-to-top-active");  
    }
});
// Scroll to top section ends.

// Hamburger menu starts.
const hamburger = document.querySelector(".hamburger");
const section = document.querySelector(".nav-section");

hamburger.addEventListener("click", () => {
    section.classList.toggle("active-nav");
});
// Hamburger menu ends.






