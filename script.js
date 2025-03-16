/****************  sidebar hide & show   *****************/
let showbar = document.getElementById("showbar");
let hidebar = document.getElementById("hidebar");
let sidebar = document.getElementById("sidebar");


showbar.addEventListener("click", function() {
    sidebar.style.display = "block";
})

hidebar.addEventListener("click", function() {
    sidebar.style.display = "none";
})

/******************* ques ans and faq's   ********************/
let quesbox = document.querySelectorAll(".quesbox");

quesbox.forEach(quesbox => {
    let ques = quesbox.querySelector(".ques");
    let icons = quesbox.querySelector(".icon");

    ques.addEventListener("click", function() {
        quesbox.classList.toggle("active");
        icons.classList.toggle("fa-plus");
        icons.classList.toggle("fa-minus");
    })
}) 



