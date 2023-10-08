import styled, { css } from 'styled-components';

import theme from '@styles/theme';

interface IStyledLaneCardOptionButtonProps {
	isRemoveIcon?: boolean;
	isDisabled?: boolean;
}

const getHoverCardOptionButton = (isDisabled?: boolean, isRemoveIcon?: boolean) => {
	if (isDisabled) {
		return '';
	}

	return css`
		color: ${theme.colors[isRemoveIcon ? 'danger' : 'blueBold']};
	`;
};

export const StyledLaneContainer = styled.ul`
	display: grid;
	grid-column-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(calc(100vw / 3 - 8rem), 1fr));
	overflow: visible;
`;

export const StyledLaneGrid = styled.li`
	display: flex;
	flex-direction: column;
	grid-row: 1;
	min-width: calc(100vw / 3 - 8rem);
	display: flex;
	gap: 0.5rem;

	padding: 1rem 0.75rem;
	background-color: ${theme.colors.surfaceSunken};
	border-radius: ${theme.layout.defaultRadius};
`;

export const StyledCardFooter = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding-top: 1rem;
`;

export const StyledLaneCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	cursor: pointer;

	font: normal normal bold 1.3rem ${theme.fonts.textFont};
	letter-spacing: 0.2px;
	padding: 0.5rem;
	width: 100%;
	min-height: 5rem;
	background: ${theme.colors.surfaceOverlay};
	border-radius: ${theme.layout.defaultRadius};

	border: 1px solid ${theme.colors.surfaceOverlay};

	transition: all 0.2s linear;

	small {
		font-size: 0.8rem;
	}
`;

export const StyledLaneCardHeader = styled.div`
	position: relative;
	border-bottom: 1px solid;
	margin: 0 -0.5rem;
	padding: 0 0.5rem 0.5rem;
`;

export const StyledLaneCardHeaderTitle = styled.div`
	max-width: 17rem;
	flex-wrap: wrap;
`;

export const StyledLaneCardOptionButton = styled.li<IStyledLaneCardOptionButtonProps>`
	transition: all 0.2s linear;

	${({ isDisabled }) =>
		isDisabled &&
		css`
			cursor: not-allowed;
			opacity: 20%;
		`};

	:hover {
		${({ isDisabled, isRemoveIcon }) => getHoverCardOptionButton(isDisabled, isRemoveIcon)};
	}
`;

export const StyledLaneCardHeaderButton = styled(StyledLaneCardOptionButton)`
	position: absolute;
	right: 0.5rem;
	top: 0;
`;
