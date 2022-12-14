import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 tabindex="0" class="restaurant__title">${restaurant.name}</h2>
  <img tabindex="0" class="restaurant__poster lazyload" src="${
		CONFIG.BASE_IMAGE_URL + restaurant.pictureId
	}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Category</h4>
    <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
    <h4>Location</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Foods Menu</h4>
    <p>${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
    <h4>Drinks Menu</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
    <br/>
    <h3>Review</h3>
    ${restaurant.customerReviews
			.map(
				(review) => `
      <p>Name : ${review.name}</p>
      <p>Date : ${review.date}</p>
      <p>Review : ${review.review}</p>
      <br/>
    `
			)
			.join('')}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div tabindex="0" class="restaurant-item">
    <div class="restaurant-item__header">
      <img tabindex="0" class="restaurant-item__header__poster lazyload"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
	createRestaurantItemTemplate,
	createRestaurantDetailTemplate,
	createLikeRestaurantButtonTemplate,
	createUnlikeRestaurantButtonTemplate,
};
