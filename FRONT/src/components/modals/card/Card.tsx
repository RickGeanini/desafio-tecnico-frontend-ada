import { ChangeEvent } from 'react';

// COMPONENTS
import UiButtonComponent from '@components/ui/button/Button';
import UiMarkdownComponent from '@components/ui/markdown/Markdown';
import UiModalComponent from '@components/ui/modal/Modal';
import UiTextInputComponent from '@components/ui/text-input/TextInput';

// INTERFACES
import { ICard, ICreateCardPayload } from '@interfaces/cards';

// STYLES
import { StyledModalActions, StyledModalContainer } from './Card.styles';

// CARD MODAL COMPONENT UTILS
interface ICardModalComponentProps {
	card?: ICard | ICreateCardPayload;
	closeModalHandler: () => void;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	previewHandler?: () => void;
	saveCardHandler: () => void;
	showPreview?: boolean;
}

// CARD MODAL COMPONENT
const CardModalComponent = ({
	card,
	closeModalHandler,
	onChangeHandler,
	previewHandler,
	saveCardHandler,
	showPreview,
}: ICardModalComponentProps) => {
	/* Render */
	return (
		<UiModalComponent isOpenModal onCloseHandler={closeModalHandler}>
			<StyledModalContainer>
				<UiTextInputComponent
					name="titulo"
					type="text"
					placeholder="Titulo"
					onChange={onChangeHandler}
					value={card?.titulo}
				/>

				<UiMarkdownComponent
					name="conteudo"
					onChangeHandler={onChangeHandler}
					previewHandler={previewHandler}
					rows={6}
					showPreview={showPreview}
					value={card?.conteudo}
				/>

				<StyledModalActions>
					<UiButtonComponent onClick={saveCardHandler}>Salvar</UiButtonComponent>
				</StyledModalActions>
			</StyledModalContainer>
		</UiModalComponent>
	);
};

export default CardModalComponent;
