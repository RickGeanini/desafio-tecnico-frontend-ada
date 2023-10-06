// COMPONENTS
import ContainerComponent from '@components/layout/container/Container';
import LaneComponent from '@components/lane/Lane';

// ENUMS
import { ECardList } from '@enums/cards';

// CARDS LIST CONTAINER
const CardsListContainer = () => {
	/* Utils */
	const renderedLanes = Object.values(ECardList).map(list => {
		return <LaneComponent key={list} list={list}></LaneComponent>;
	});
	/* Render */
	return <ContainerComponent>{renderedLanes}</ContainerComponent>;
};

export default CardsListContainer;
