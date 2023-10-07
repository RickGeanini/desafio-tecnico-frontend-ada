import styled from 'styled-components';

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
	background-color: ${({ theme }) => theme.colors.surfaceSunken};
	border-radius: ${({ theme }) => theme.layout.defaultRadius};
`;

export const StyledLaneCard = styled.div`
	display: flex;
	align-items: center;

	cursor: pointer;

	font: normal normal bold 1.5rem ${({ theme }) => theme.fonts.textFont};
	letter-spacing: 0.2px;
	padding: 0.5rem;
	width: 100%;
	min-height: 5rem;
	background: ${({ theme }) => theme.colors.surfaceOverlay};
	border-radius: ${({ theme }) => theme.layout.defaultRadius};

	border: 1px solid ${({ theme }) => theme.colors.surfaceOverlay};

	transition: all 0.2s linear;

	&:hover {
		border-color: ${({ theme }) => theme.colors.blueBold};
	}
`;
