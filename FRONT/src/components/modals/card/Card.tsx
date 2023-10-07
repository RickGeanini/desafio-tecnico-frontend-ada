import { ChangeEvent } from 'react';

// COMPONENTS
import UiButtonComponent from '@components/ui/button/Button';
import UiDropboxComponent from '@components/ui/dropbox/Dropbox';
import UiMarkdownComponent from '@components/ui/markdown/Markdown';
import UiModalComponent from '@components/ui/modal/Modal';
import UiTextInputComponent from '@components/ui/text-input/TextInput';

// ENUMS
import { cardListTitle, ECardList } from '@enums/cards';

// INTERFACES
import { ICard } from '@interfaces/cards';

// STYLES
import {
	StyledModalActions,
	StyledModalContainer,
	StyledModalTitle,
	StyledOptionsWrapper,
} from './Card.styles';

// CARD MODAL COMPONENT UTILS
interface ICardModalComponentProps {
	card?: ICard;
	closeModalHandler: () => void;
	enableEditHandler: () => void;
	isEditCard: boolean;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	previewHandler?: () => void;
	saveCardHandler: () => void;
	showPreview?: boolean;
	updateListHandler: (value: ECardList) => void;
}

// CARD MODAL COMPONENT
const CardModalComponent = ({
	card,
	closeModalHandler,
	enableEditHandler,
	isEditCard,
	onChangeHandler,
	previewHandler,
	saveCardHandler,
	showPreview,
	updateListHandler,
}: ICardModalComponentProps) => {
	/* Vars */
	const isDisabledButton = !card?.conteudo || !card.titulo;
	const disablePreview = !!card?.id && !isEditCard;

	/* Utils */
	const renderedModalActions = (
		<>
			{!!card?.id && (
				<>
					{!isEditCard ? (
						<UiButtonComponent variant="text" onClick={enableEditHandler}>
							Editar
						</UiButtonComponent>
					) : (
						<UiButtonComponent variant="text" onClick={enableEditHandler}>
							Cancelar
						</UiButtonComponent>
					)}
				</>
			)}
			{(isEditCard || !card?.id) && (
				<UiButtonComponent disabled={isDisabledButton} onClick={saveCardHandler}>
					Salvar
				</UiButtonComponent>
			)}
		</>
	);

	const renderedOptions = card?.id && (
		<StyledOptionsWrapper>
			<span>Mover para: </span>
			<UiDropboxComponent
				defaultValue={card.lista}
				onChange={e => updateListHandler(e.target.value as ECardList)}
			>
				{Object.values(ECardList).map(cardType => {
					return <option value={cardType}>{cardListTitle[cardType]}</option>;
				})}
			</UiDropboxComponent>
		</StyledOptionsWrapper>
	);

	const renderedTitle = disablePreview ? (
		<StyledModalTitle>{card.titulo}</StyledModalTitle>
	) : (
		<UiTextInputComponent
			name="titulo"
			type="text"
			placeholder="Titulo"
			onChange={onChangeHandler}
			value={card?.titulo}
		/>
	);

	/* Render */
	return (
		<UiModalComponent isOpenModal onCloseHandler={closeModalHandler}>
			<StyledModalContainer>
				{renderedOptions}

				{renderedTitle}

				<UiMarkdownComponent
					name="conteudo"
					onChangeHandler={onChangeHandler}
					rows={6}
					showPreview={showPreview || disablePreview}
					value={card?.conteudo}
					previewHandler={
						!disablePreview && previewHandler ? () => previewHandler() : undefined
					}
				/>

				<StyledModalActions>{renderedModalActions}</StyledModalActions>
			</StyledModalContainer>
		</UiModalComponent>
	);
};

export default CardModalComponent;
