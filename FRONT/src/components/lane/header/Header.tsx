// ENUMS
import { cardListTitle } from '@enums/cards';

// INTERFACES
import { ILaneHeaderComponentList } from '@interfaces/cards';

// STYLES
import { StyledLaneContainer, StyledLaneHeader } from './Header.styles';

// LANE COMPONENT UTILS
interface ILaneComponentProps {
	cardList: ILaneHeaderComponentList[];
}

// LANE HEADER COMPONENT
const LaneHeaderComponent = ({ cardList }: ILaneComponentProps) => {
	/* Utils */

	const renderedList = cardList.map(list => {
		return (
			<StyledLaneHeader key={list.list}>
				{cardListTitle[list.list]}
				<span>{list.counter ?? 0}</span>
			</StyledLaneHeader>
		);
	});

	/* Render */
	return <StyledLaneContainer>{renderedList}</StyledLaneContainer>;
};
export default LaneHeaderComponent;
