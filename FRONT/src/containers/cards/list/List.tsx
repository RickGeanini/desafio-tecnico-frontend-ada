import { useEffect } from 'react';

// COMPONENTS
import ContainerComponent from '@components/layout/container/Container';
import LaneHeaderComponent from '@components/lane/header/Header';

// ENUMS
import { ECardList } from '@enums/cards';

// INTERFACES
import { ILaneHeaderComponentList } from '@interfaces/cards';

// HOCS
import withCardsProvider from '@hocs/with-cards-provider';

// HOOKS
import { useAuthContextHook } from '@contexts/auth.context';
import { useCardsContextHook } from '@contexts/cards.context';

// CARDS LIST CONTAINER
const CardsListContainer = () => {
	/* Hooks */
	const { cardList, getCarList } = useCardsContextHook();
	const { loginHandler } = useAuthContextHook();

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
			await loginHandler();
			await getCarList();
		})();
	}, []);

	/* Render */
	return (
		<ContainerComponent>
			<LaneHeaderComponent cardList={listHeder} />
		</ContainerComponent>
	);
};

export default withCardsProvider(CardsListContainer);
