// ENUMS
import { ECardList } from '@enums/cards';

// INTERFACES
import { ICard, ICardsList } from '@interfaces/cards';

// STYLES
import { StyledLaneCard, StyledLaneContainer, StyledLaneGrid } from './Body.styles';

// LANE BODY COMPONENT UTILS
interface ILaneBodyComponentProps {
	cardList: ICardsList;
	showCardDetails: (card: ICard) => void;
}

// LANE BODY COMPONENT
const LaneBodyComponent = ({ cardList, showCardDetails }: ILaneBodyComponentProps) => {
	/* Handlers */
	const renderCards = (cards: ICard[]) => {
		return cards.map(card => {
			return (
				<StyledLaneCard key={card.id} onClick={() => showCardDetails(card)}>
					{card.titulo}
				</StyledLaneCard>
			);
		});
	};

	/* Utils */
	const renderedList = Object.keys(cardList).map(list => {
		return (
			<StyledLaneGrid key={list}>{renderCards(cardList[list as ECardList])}</StyledLaneGrid>
		);
	});

	/* Render */
	return <StyledLaneContainer>{renderedList}</StyledLaneContainer>;
};
export default LaneBodyComponent;
