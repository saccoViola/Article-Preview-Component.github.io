document.addEventListener("DOMContentLoaded", ()=> {

    const button = document.getElementById("img-share");

    const shapeContainer = document.querySelector(".share-shape-container");

    button.addEventListener("click", ()=> {
        shapeContainer.classList.toggle("display-none");
    })

})