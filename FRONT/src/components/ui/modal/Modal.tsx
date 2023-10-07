import React, { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

// STYLES
import {
	customModalStyles,
	StyledButton,
	StyledHeader,
	StyledModal,
	StyledModalWrapper,
} from './Modal.styles';

// MODAL UTILS
export interface IUiModalProps extends IChildrenProps {
	isOpenModal: boolean;
	onCloseHandler: () => void;
}

// UI MODAL COMPONENT
const UiModalComponent = ({ children, isOpenModal, onCloseHandler }: IUiModalProps) => {
	/* HANDLERS */
	const handleCloseModal = () => {
		if (onCloseHandler) {
			onCloseHandler();
		}
	};

	useEffect(() => {
		document.body.style.overflow = isOpenModal ? 'hidden' : 'unset';

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpenModal]);

	/* Render */
	return (
		<StyledModalWrapper>
			<StyledModal
				isOpen={isOpenModal}
				onRequestClose={handleCloseModal}
				style={customModalStyles}
			>
				<StyledHeader>
					<StyledButton onClick={handleCloseModal}>
						<MdClose />
					</StyledButton>
				</StyledHeader>

				<div>{children}</div>
			</StyledModal>
		</StyledModalWrapper>
	);
};

export default UiModalComponent;
