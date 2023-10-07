import { MdAdd } from 'react-icons/md';

// COMPONENTS
import UiButtonComponent from '@components/ui/button/Button';

// STYLES
import { StyledHeaderWrapper } from './Header.styles';

// HEADER COMPONENT UTILS
interface IHeaderComponentProps {
	newCardClickHandler: () => void;
}
// HEADER COMPONENT
const HeaderComponent = ({ newCardClickHandler }: IHeaderComponentProps) => {
	/* Render */
	return (
		<StyledHeaderWrapper>
			<UiButtonComponent onClick={newCardClickHandler} spaced startIcon={<MdAdd />}>
				Novo card
			</UiButtonComponent>
		</StyledHeaderWrapper>
	);
};
export default HeaderComponent;
