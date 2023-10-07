import React, { ReactElement, MouseEventHandler } from 'react';

// ENUMS
import { EButtonColor, EButtonVariant } from '@enums/button';

// STYLES
import { StyledButton, StyledChildrenIconWrapper } from './Button.styles';

// UI BUTTON COMPONENT UTILS
type TUiButtonProps = IChildrenProps & {
	color?: `${EButtonColor}`;
	disabled?: boolean;
	endIcon?: ReactElement;
	onClick?: MouseEventHandler;
	spaced?: boolean;
	startIcon?: ReactElement;
	variant?: `${EButtonVariant}`;
};

// UI BUTTON COMPONENT
const UiButtonComponent = ({
	children,
	color = EButtonColor.PRIMARY,
	disabled,
	endIcon,
	onClick,
	spaced,
	startIcon,
	variant = EButtonVariant.FILLED,
}: TUiButtonProps) => {
	/* Render */
	return (
		<StyledButton
			color={color as EButtonColor}
			disabled={disabled}
			onClick={onClick}
			spaced={spaced}
			variant={variant as EButtonVariant}
		>
			{!!startIcon && (
				<StyledChildrenIconWrapper isLeft>{startIcon}</StyledChildrenIconWrapper>
			)}
			{children}
			{!!endIcon && <StyledChildrenIconWrapper>{endIcon}</StyledChildrenIconWrapper>}
		</StyledButton>
	);
};

export default UiButtonComponent;
