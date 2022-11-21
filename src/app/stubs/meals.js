const burgerAdditions = [{
	id: 1,
	name: 'mustard',
	price: 0
}, {
	id: 2,
	name: 'ketchup',
	price: 0
}, {
	id: 3,
	name: 'mushrooms',
	price: .75
}, {
	id: 4,
	name: 'avocado',
	price: 1.75
}]
const burgerCategories = [{
	id: 1,
	name: 'cheeseburger',
	price: 12,
	url: 'menu/meals/category/1',
	additions: burgerAdditions
}, {
	id: 2,
	name: 'hamburger',
	price: 10,
	additions: burgerAdditions
}]
const pizzaCategories = [{
	id: 3,
	name: 'peperoni',
	price: 7
}, {
	id: 4,
	name: 'cheese',
	price: 5
}]

export const meals = [
	{
		id: 1,
		name: 'burgers',
		description: 'The best burgers in town!',
		subTitle: '',
		categories: burgerCategories,
		url: 'menu/meals/1'
	},
	{
		id: 2,
		name: 'pizza',
		description: 'best pizza in town',
		subTitle: '',
		categories: pizzaCategories,
		url: 'menu/meals/2'
	},
	{
		id: 3,
		name: 'chicken nuggets'
	},
	{
		id: 4,
		name: 'tacos'
	},
	{
		id: 5,
		name: 'burritos'
	},
	{
		id: 6,
		name: 'sushi'
	},
	{
		id: 7,
		name: 'tuna',
		other: [{
			name: 'sandwich'
		}, {
			name: 'salad'
		}]
	}
]