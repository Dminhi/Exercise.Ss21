let btnChoose = 1;

const renderBtn = () => {
    let stringBtn = "";
    for (let i = 1; i <= 10; i++) {
        stringBtn += `
    <button style="background-color: ${
      btnChoose == i ? "red" : ""
    }" onCLick="chooseBtn(${i})" class="btn">${i}</button>
    `;
    }
    document.getElementById("scope_btn").innerHTML = stringBtn;
};
renderBtn();

const chooseBtn = (i) => {
    btnChoose = i;
    renderBtn();
};

const input_1 = document.querySelector("#input_1");
const send = document.querySelector("#send");
const icon = document.querySelector("#icon");

send.addEventListener("click", (e) => {
    e.preventDefault();
    const reviewLocal = JSON.parse(localStorage.getItem("feed_back")) || [];
    reviewLocal.push({
        feedBack: input_1.value,
        btnChoose,
    });
    localStorage.setItem("feed_back", JSON.stringify(reviewLocal));
    input_1.value = "";
    render();
});

const render = () => {
    const reviewLocal = JSON.parse(localStorage.getItem("feed_back")) || [];
    const result = reviewLocal.map((review, index) => {
        return `
            <div class="item">${review.btnChoose} ${review.feedBack} <i onclick="xoa(${index})" class="fa-solid fa-xmark"></i></div>
        `;
    });
    document.getElementById("review").innerHTML = result.join("");
};
render();

const xoa = (index) => {
    const reviewLocal = JSON.parse(localStorage.getItem("feed_back")) || [];
    reviewLocal.splice(index, 1);
    localStorage.setItem("feed_back", JSON.stringify(reviewLocal));
    render();
};