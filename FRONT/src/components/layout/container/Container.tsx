// STYLES
import { StyledContainerWrapper } from './Container.styles';

// CONTAINER COMPONENT
const ContainerComponent = ({ children }: IChildrenProps) => {
	/* Render */
	return <StyledContainerWrapper>{children}</StyledContainerWrapper>;
};
export default ContainerComponent;
