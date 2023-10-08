import { MdRemoveRedEye, MdChevronLeft, MdChevronRight, MdDelete } from 'react-icons/md';

// ENUMS
import { ECardList } from '@enums/cards';

// INTERFACES
import { ICard, ICardsList } from '@interfaces/cards';

// STYLES
import {
	StyledCardFooter,
	StyledLaneCard,
	StyledLaneCardHeader,
	StyledLaneCardHeaderButton,
	StyledLaneCardHeaderTitle,
	StyledLaneCardOptionButton,
	StyledLaneContainer,
	StyledLaneGrid,
} from './Body.styles';

// LANE BODY COMPONENT UTILS
interface ILaneBodyComponentProps {
	cardList: ICardsList;
	removeCardHandler: (cardId: string) => Promise<void>;
	showCardDetails: (card: ICard) => void;
	updateCardLineHandler: (card: ICard, line: ECardList) => Promise<void>;
}

// LANE BODY COMPONENT
const LaneBodyComponent = ({
	cardList,
	removeCardHandler,
	showCardDetails,
	updateCardLineHandler,
}: ILaneBodyComponentProps) => {
	/* Vars */
	const listCards = Object.keys(cardList);

	/* Handlers */
	const renderCards = (cards: ICard[], index: number) => {
		const isFirstLine = index === 0;
		const isLastLine = listCards.length - 1 === index;
		const nextLine: ECardList | undefined = !isLastLine
			? (listCards[index + 1] as ECardList)
			: undefined;
		const prevLine: ECardList | undefined = !isFirstLine
			? (listCards[index - 1] as ECardList)
			: undefined;

		return cards.map(card => {
			return (
				<StyledLaneCard key={card.id}>
					<StyledLaneCardHeader>
						<StyledLaneCardHeaderTitle>{card.titulo}</StyledLaneCardHeaderTitle>
						<StyledLaneCardHeaderButton
							title="Visualizar card"
							aria-label="Visualizar card"
							onClick={() => showCardDetails(card)}
						>
							<MdRemoveRedEye />
						</StyledLaneCardHeaderButton>
					</StyledLaneCardHeader>
					<StyledCardFooter>
						<StyledLaneCardOptionButton
							aria-label="Mover para a lista anterior"
							isDisabled={isFirstLine}
							title="Mover para a lista anterior"
							onClick={
								!prevLine ? undefined : () => updateCardLineHandler(card, prevLine)
							}
						>
							<MdChevronLeft />
						</StyledLaneCardOptionButton>
						<StyledLaneCardOptionButton
							aria-label="Excluir card"
							isRemoveIcon
							onClick={() => removeCardHandler(card.id ?? '')}
							title="Excluir card"
						>
							<MdDelete />
						</StyledLaneCardOptionButton>
						<StyledLaneCardOptionButton
							aria-label="Mover para a próxima lista"
							isDisabled={isLastLine}
							title="Mover para a próxima lista"
							onClick={
								!nextLine ? undefined : () => updateCardLineHandler(card, nextLine)
							}
						>
							<MdChevronRight />
						</StyledLaneCardOptionButton>
					</StyledCardFooter>
				</StyledLaneCard>
			);
		});
	};

	/* Utils */
	const renderedList = listCards.map((list, index) => {
		return (
			<StyledLaneGrid key={list}>
				{renderCards(cardList[list as ECardList], index)}
			</StyledLaneGrid>
		);
	});

	/* Render */
	return <StyledLaneContainer>{renderedList}</StyledLaneContainer>;
};
export default LaneBodyComponent;
