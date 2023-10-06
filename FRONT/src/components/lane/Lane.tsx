// ENUMS
import { ECardList } from '@enums/cards';

// STYLES
import { StyledLaneContainer, StyledLaneHeader } from './Lane.styles';

// LANE COMPONENT UTILS
interface ILaneComponentProps {
	counter?: number;
	list: ECardList;
}

// LANE COMPONENT
const LaneComponent = ({ counter, list }: ILaneComponentProps) => {
	/* Utils */
	const listTitle = {
		[ECardList.DOING]: 'DOING',
		[ECardList.DONE]: 'DONE',
		[ECardList.TODO]: 'TO DO',
	};

	/* Render */
	return (
		<StyledLaneContainer>
			<StyledLaneHeader>
				<span>{listTitle[list]}</span>
				<small>{counter ?? 0}</small>
			</StyledLaneHeader>
		</StyledLaneContainer>
	);
};
export default LaneComponent;
