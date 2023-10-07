import { InputHTMLAttributes } from 'react';

// STYLES
import { StyledInput } from './TextInput.styles';

// TextInput
const UiTextInputComponent = ({ ...restProps }: InputHTMLAttributes<HTMLInputElement>) => {
	/* Render */
	return <StyledInput {...restProps} />;
};
export default UiTextInputComponent;
