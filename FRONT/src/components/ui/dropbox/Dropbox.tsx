import { SelectHTMLAttributes } from 'react';

// STYLES
import { StyledDropBoxWrapper } from './Dropbox.styles';

// UI DROPBOX COMPONENT
const UiDropboxComponent = ({
	children,
	...restProps
}: SelectHTMLAttributes<HTMLSelectElement>) => {
	/* Render */
	return <StyledDropBoxWrapper {...restProps}>{children}</StyledDropBoxWrapper>;
};
export default UiDropboxComponent;
