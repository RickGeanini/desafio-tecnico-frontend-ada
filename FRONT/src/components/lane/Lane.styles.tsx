import styled from 'styled-components';

export const StyledLaneContainer = styled.div`
	display: flex;
	overflow: hidden;
	min-height: calc(100vh - 8rem);
	flex-direction: column;
	box-shadow: 0px 3px 6px ${({ theme }) => theme.colors.boxShadow};
	width: calc(100vw / 3 - 8rem);
	background-color: ${({ theme }) => theme.colors.polar};
	border-radius: ${({ theme }) => theme.layout.defaultRadius};
	padding: 0.75rem;
`;

export const StyledLaneHeader = styled.h4`
	font: normal normal bold 20px/24px ${({ theme }) => theme.fonts.textFont};
	padding: 0.5rem;

	display: flex;
	gap: 1rem;
`;
