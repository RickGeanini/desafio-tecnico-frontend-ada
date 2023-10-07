import { useEffect } from 'react';

// COMPONENTS
import LaneHeaderComponent from '@components/lane/header/Header';

// ENUMS
import { ECardList } from '@enums/cards';

// INTERFACES
import { ILaneHeaderComponentList } from '@interfaces/cards';

// HOCS
import withCardsProvider from '@hocs/with-cards-provider';

// HOOKS
import { useCardsContextHook } from '@contexts/cards.context';

// CARDS LIST CONTAINER
const CardsListContainer = () => {
	/* Hooks */
	const { cardList, getCarList } = useCardsContextHook();

	/* Vars */
	const listHeder = Object.keys(cardList).map(list => {
		const listType = list as ECardList;

		const counter = cardList[listType]?.length ?? 0;

		return {
			list: listType,
			counter: counter,
		} satisfies ILaneHeaderComponentList;
	});

	useEffect(() => {
		(async () => {
			await getCarList();
		})();
	}, []);

	/* Render */
	return <LaneHeaderComponent cardList={listHeder} />;
};

export default withCardsProvider(CardsListContainer);
