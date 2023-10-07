import { useEffect } from 'react';

// COMPONENTS
import LaneBodyComponent from '@components/lane/body/Body';
import LaneHeaderComponent from '@components/lane/header/Header';

// ENUMS
import { ECardList } from '@enums/cards';

// INTERFACES
import { ICard, ILaneHeaderComponentList } from '@interfaces/cards';

// HOOKS
import { useCardsContextHook } from '@contexts/cards.context';

// CARDS LIST CONTAINER UTILS
interface ICardsListContainerProps {
	showCardDetails: () => void;
}

// CARDS LIST CONTAINER
const CardsListContainer = ({ showCardDetails }: ICardsListContainerProps) => {
	/* Hooks */
	const { cardList, getCarList, setCardDetails } = useCardsContextHook();

	/* Vars */
	const listHeder = Object.keys(cardList).map(list => {
		const listType = list as ECardList;

		const counter = cardList[listType]?.length ?? 0;

		return {
			list: listType,
			counter: counter,
		} satisfies ILaneHeaderComponentList;
	});

	/* Handlers */
	const showCardDetailsHandler = (card: ICard) => {
		setCardDetails(card);
		showCardDetails();
	};

	/* Lifecycles */
	useEffect(() => {
		(async () => {
			await getCarList();
		})();
	}, []);

	/* Render */
	return (
		<>
			<LaneHeaderComponent cardList={listHeder} />
			<LaneBodyComponent cardList={cardList} showCardDetails={showCardDetailsHandler} />
		</>
	);
};

export default CardsListContainer;
