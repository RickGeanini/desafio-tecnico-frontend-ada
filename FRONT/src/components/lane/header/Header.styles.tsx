import styled from 'styled-components';

export const StyledLaneContainer = styled.ul`
	display: grid;
	position: sticky;
	grid-column-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(calc(100vw / 3 - 8rem), 1fr));
	overflow: visible;
`;

export const StyledLaneGrid = styled.li`
	grid-row: 1;
	min-width: calc(100vw / 3 - 8rem);
`;

export const StyledLaneHeader = styled(StyledLaneGrid)`
	display: flex;
	gap: 0.5rem;

	padding: 1rem 0.75rem;
	background-color: ${({ theme }) => theme.colors.surfaceSunken};
	border-radius: ${({ theme }) => theme.layout.defaultRadius};

	font: normal normal normal 0.86em ${({ theme }) => theme.fonts.textFont};

	span {
		color: #5e6c84;
	}
`;
