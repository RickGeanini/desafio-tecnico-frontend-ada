export enum ECardList {
	TODO = 'ToDo',
	DOING = 'Doing',
	DONE = 'Done',
}

export const cardListTitle = {
	[ECardList.DOING]: 'DOING',
	[ECardList.DONE]: 'DONE',
	[ECardList.TODO]: 'TO DO',
};
