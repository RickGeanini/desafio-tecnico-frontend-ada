import Modal from 'react-modal';
import styled from 'styled-components';
import theme from '@styles/theme';

// MODAL STYLES UTILS
export const customModalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		borderRadius: theme.layout.defaultRadius,
	},
	overlay: {
		background: `${theme.colors.penguim}80`,
		zIndex: 998,
	},
};

type StyledModalProps = {
	noBorder?: boolean;
};

// MODAL STYLES
export const StyledModalWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;
`;

export const StyledModal = styled(Modal)<StyledModalProps>`
	position: relative;
	z-index: 999;

	width: fit-content;
	min-height: 10rem;
	min-width: 10rem;

	background: ${theme.colors.surfaceOverlay};

	&:focus {
		outline: none !important;
	}
`;

export const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	max-height: 3.75rem;
	width: 100%;
`;

export const StyledButton = styled.button`
	border: none;
	background: none;
	padding: 0.5rem;
	position: fixed;
	right: 0;

	color: ${theme.colors.textSubtlest};
	font-size: 1.5rem;

	cursor: pointer;
`;
