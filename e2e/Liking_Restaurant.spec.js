const assert = require('assert');

Feature('Liking Restaurants');

Scenario('liking one restaurant', async ({ I }) => {
	I.amOnPage('/');
	I.seeElement('.restaurant__name a');

	const firstRestaurant = locate('.restaurant__name a').first();
	const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
	I.click(firstRestaurant);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/like');
	I.seeElement('.restaurant-item');
	const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

	assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking a restaurant', async ({ I }) => {
	I.amOnPage('/');
	I.seeElement('.restaurant__name a');

	const firstRestaurant = locate('.restaurant__name a').first();
	const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
	I.click(firstRestaurant);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/like');
	I.seeElement('.restaurant-item');
	const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

	assert.strictEqual(firstRestaurantName, likedRestaurantName);

	I.click(likedRestaurantName);

	I.seeElement('#likeButton');
	I.click('#likeButton');

	I.amOnPage('/#/like');
	I.dontSeeElement('.restaurant-item');
});
