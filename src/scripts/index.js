import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import data from '../public/data/DATA.json';

document.addEventListener('DOMContentLoaded', () => {
    const restaurantList = document.getElementById('restaurant-list');

    data.restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('div');
        restaurantItem.classList.add('restaurant-item');

        restaurantItem.innerHTML = `
            <img src="${restaurant.pictureId}" alt="${restaurant.name}">
            <div class="content">
                <p>Kota: ${restaurant.city}</p>
                <p>Rating: ${restaurant.rating}</p>
                <h3>${restaurant.name}</h3>
                <p>${restaurant.description.substring(0, 100)}...</p>
            </div>
        `;

        restaurantList.appendChild(restaurantItem);
    });
});