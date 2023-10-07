import { styled } from 'styled-components';
import theme from '@styles/theme';

export const StyledDropBoxWrapper = styled.select`
	display: flex;
	align-items: center;

	font-weight: bold;

	cursor: pointer;

	transition: all 0.2s linear;
	width: fit-content;
	min-height: 2rem;
	padding: 0.625rem;
	border-radius: ${theme.layout.defaultRadius};
	border: 1px ${theme.colors.blueBold};
	border-color: ${theme.colors.blueBold};
	background-color: ${theme.colors.blueBold};
	color: ${theme.colors.surface};

	&:hover,
	&:active,
	&:disabled {
		background-color: ${theme.colors.blueBoldHovered};
		border-color: ${theme.colors.blueBoldHovered};
	}

	&:disabled {
		opacity: 24%;
		cursor: not-allowed;
	}
`;
