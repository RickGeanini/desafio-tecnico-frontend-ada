import styled, { css } from 'styled-components';
import theme from '@styles/theme';

// ENUMS
import { EButtonColor, EButtonVariant } from '@enums/button';

// STYLES UTILS
interface IButtonProps {
	color: EButtonColor;
	disabled?: boolean;
	spaced?: boolean;
	variant: EButtonVariant;
}

interface IChildrenIconWrapperProps {
	isLeft?: boolean;
}

const buttonColors = {
	[EButtonColor.PRIMARY]: theme.colors.blueBold,
};

const getBorder = (color: EButtonColor, variant: EButtonVariant) => {
	const border = {
		[EButtonVariant.FILLED]: 'solid',
		[EButtonVariant.TEXT]: 'transparent',
	};

	return css`
		border: 1px ${border[variant]};
		border-color: ${buttonColors[color]};
	`;
};

const getBackgroundColor = (color: EButtonColor, variant: EButtonVariant) => {
	const isTextButton = EButtonVariant.TEXT === variant;

	return css`
		color: ${isTextButton ? buttonColors[color] : theme.colors.surface};
		background-color: ${isTextButton ? 'transparent' : buttonColors[color]};

		&:hover,
		&:active,
		&:disabled {
			color: ${isTextButton ? theme.colors.textInformation : theme.colors.surface};
			background-color: ${theme.colors[isTextButton ? 'textSubtlest' : 'blueBoldHovered']};
			border-color: ${theme.colors[isTextButton ? 'textSubtlest' : 'blueBoldHovered']};
		}

		&:disabled {
			opacity: 24%;
			cursor: not-allowed;
		}
	`;
};

export const StyledButton = styled.button<IButtonProps>`
	display: flex;
	align-items: center;
	justify-content: ${({ spaced }) => (spaced ? 'space-between' : 'center')};

	font-weight: bold;

	cursor: pointer;

	transition: all 0.2s linear;

	width: fit-content;
	height: 2rem;
	padding: 0.625rem;
	border-radius: ${theme.layout.defaultRadius};
	${({ color, variant }) => getBorder(color, variant)}
	${({ color, variant }) => getBackgroundColor(color, variant)};
`;

export const StyledChildrenIconWrapper = styled.span<IChildrenIconWrapperProps>`
	display: inherit;
	margin-right: ${({ isLeft }) => (isLeft ? '8px' : '-4px')};
	margin-left: ${({ isLeft }) => (isLeft ? '-4px' : '8px')};
`;
