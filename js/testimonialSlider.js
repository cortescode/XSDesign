const query = str => document.querySelector(str);


const clients_data = [
    {
        "personImg": "./assets/person.webp",
        "Name": "Pablo Gallego - Frío Antakira",
        "Review": "Creamos nuestra web con una agencia distinta en su momento, pero decidimos hacerle un lavado de cara con XS Design. Con la nueva web conseguimos el doble de llamadas con la misma visitas."
    },
    {
        "personImg": "./assets/person.webp",
        "Name": "Antonio López - Bleckin",
        "Review": "No se cómo nos permitíamos estar sin página web. Nos han creado una web bastante mejor que la de nuestros competidores y estamos empezando a obtener cada vez más reservas en la web."
    },
    {
        "personImg": "./assets/person.webp",
        "Name": "Oscar Sánchez - Restaurante Aranda",
        "Review": "Muy contento con el resultado, estamos aumentando el número de reservas online."
    },
]

const client = {
    "Cointainer": query(".client-review"),
    "PersonImg": query(".client-review .testimonial-person"),
    "Name": query(".client-review h3"),
    "Review": query(".client-review p"),
    "Web": query(".client-review .testimonial-web")
}


// Circles generation
const reviews_circle_representation = '<div class="reviews-circle"></div>';
const circles_section = query(".reviews-circles");
circles_section.innerHTML = reviews_circle_representation.repeat(clients_data.length);


var reviews_amonut = clients_data.length -1; // -1 because the count starts from 0, where it also have an assouciated element
var selectedReview = 0; // it must be a number between 0 and clients_data length
// Protect against overflows of selectedReview in reviewsAmount, making shure the selectedReview exists after incrementing or decrementing it
const secureReviewIncrement = () => selectedReview == reviews_amonut ? 0 : selectedReview+1;
const secureReviewDecrement = () =>  selectedReview == 0 ? reviews_amonut : selectedReview-1;

changeContent(selectedReview); // Show the first review on web loading



// FUNCTIONS EJECUTED WHEN CLICK ON FORWARD OR BACK BUTTONS

function moveForward() {

    selectedReview = secureReviewIncrement(selectedReview);
    
    // Starting animation of container
    client.Cointainer.classList.add("client-review-animation");


    const previus_circle_selected = circles_section.children[secureReviewDecrement(selectedReview)];
    previus_circle_selected.style.backgroundColor = "white";

    // it changes content when animation is done and runs the inverse animation
    setTimeout(() => {
        changeContent(selectedReview);
        client.Cointainer.classList.remove("client-review-animation")
    }, 200);
}

function moveBack() {
    selectedReview = secureReviewDecrement(selectedReview);

    client.Cointainer.classList.add("client-review-animation");

    const previus_circle_selected = circles_section.children[secureReviewIncrement(selectedReview)];
    previus_circle_selected.style.backgroundColor = "white";

    setTimeout(() => {
        changeContent(selectedReview);
        client.Cointainer.classList.remove("client-review-animation")
    }, 200);

}



// CHANGE THE CONTENT OF SHOWN REVIEW

function changeContent(selectedReview) {
    client.Name.innerHTML = clients_data[selectedReview]["Name"];
    client.Review.innerHTML = clients_data[selectedReview].Review;

    const actual_circle_selected = circles_section.children[selectedReview];
    actual_circle_selected.style.backgroundColor = "#007fbd";
}

