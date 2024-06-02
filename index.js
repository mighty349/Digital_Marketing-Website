const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

document.querySelector('.show_form').addEventListener('click', function() {
    var formContainer = document.querySelector('.contact');

        formContainer.style.display = 'block';
        
   
});
document.querySelector('.cross').addEventListener('click', function() {
    var formContainer = document.querySelector('.contact');

        formContainer.style.display = 'none';
        
   
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll(".changer");
    const defaultButton = document.querySelector(".mid.changer");
    const defaultImageSrc = "./images/" + defaultButton.value + ".png";

    // Set initial image and styles
    document.querySelector('.clicker').src = defaultImageSrc;
    defaultButton.style.backgroundColor = "#FF3147";
    defaultButton.style.color = "white";

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const imagesrc = "./images/" + event.currentTarget.value + ".png";
            document.querySelector('.clicker').src = imagesrc;

            // Reset all buttons' styles
            buttons.forEach(btn => {
                btn.style.backgroundColor = "#F6F6F6";
                btn.style.color = "black";
            });

            // Change the style of the clicked button
            event.currentTarget.style.backgroundColor = "#FF3147";
            event.currentTarget.style.color = "white";
        });
    });
});

