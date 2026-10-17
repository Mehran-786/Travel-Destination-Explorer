
"use strict";


const destinations = [
    {
        id: 1,
        name: "Paris",
        country: "France",
        description: "Explore the Eiffel Tower and beautiful streets.",
        cost: 1200
    },
    {
        id: 2,
        name: "Tokyo",
        country: "Japan",
        description: "Experience modern technology and Japanese culture.",
        cost: 1800
    },
    {
        id: 3,
        name: "Istanbul",
        country: "Turkey",
        description: "Discover historic mosques and colourful bazaars.",
        cost: 700
    },
    {
        id: 4,
        name: "Dubai",
        country: "UAE",
        description: "Enjoy modern architecture and desert adventures.",
        cost: 1000
    }
];

const searchInput = document.getElementById("searchInput");
const destinationList = document.getElementById("destinationList");
const totalCost = document.getElementById("totalCost");
const noResults = document.getElementById("noResults");
const sortButton = document.getElementById("sortButton");

let sortByCost = false;


function displayDestinations() {
    const searchTerm = searchInput.value.toLowerCase();


    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchTerm)
    );

 
    const displayedDestinations = sortByCost
        ? [...filteredDestinations].sort((a, b) => a.cost - b.cost)
        : filteredDestinations;


    destinationList.innerHTML = displayedDestinations.map(destination => `
        <article class="destination-card">
            <h3>${destination.name}</h3>
            <p><strong>Country:</strong> ${destination.country}</p>
            <p>${destination.description}</p>
            <p class="cost">Estimated Cost: $${destination.cost}</p>
        </article>
    `).join("");


    const total = displayedDestinations.reduce(
        (sum, destination) => sum + destination.cost,
        0
    );

    totalCost.textContent = `$${total}`;


    noResults.hidden = displayedDestinations.length !== 0;
}


searchInput.addEventListener("input", displayDestinations);


sortButton.addEventListener("click", () => {
    sortByCost = true;
    displayDestinations();
});


displayDestinations();
