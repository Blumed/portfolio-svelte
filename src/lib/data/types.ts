export type CardCollection<T> = {
	data: T[];
};

export type BaseCard = {
	id: number;
	url: string;
	title: string;
	copy: string;
};

export type CategoryCard = BaseCard & {
	category: string;
};

export type ListCard = BaseCard & {
	listTitle: string;
	listItems: string[];
};

export type Card = CategoryCard | ListCard;

export type Tools = CardCollection<CategoryCard>;
export type Bookmarklets = CardCollection<CategoryCard>;
export type Snippets = CardCollection<CategoryCard>;
export type Art = CardCollection<ListCard>;
