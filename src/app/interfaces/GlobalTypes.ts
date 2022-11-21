export interface AdditionsType {
	id: number,
	name: string,
	price: number
}

export interface CategoryType {
	id: number
	name: string
	price: number
	additions?: AdditionsType[]
}

export interface MealType {
	id: number
	name: string
	description?: string
	subTitle?: string
	categories?: CategoryType[]
}

export interface CartItemType {
	name: string
	price: number
	additions?: AdditionsType[]
}

export interface UserInterface {
	name: string
}