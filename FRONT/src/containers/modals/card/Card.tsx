import { ChangeEvent, useState } from 'react';

// COMPONENTS
import CardModalComponent from '@components/modals/card/Card';

// HOOKS
import { useCardsContextHook } from '@contexts/cards.context';

// INTERFACES
import { ICard, ICreateCardPayload } from '@interfaces/cards';
import { ECardList } from '@enums/cards';

// CARD MODAL CONTAINER UTILS
interface ICardModalContainer {
	closeModalHandler: () => void;
}

// CARD MODAL CONTAINER
const CardModalContainer = ({ closeModalHandler }: ICardModalContainer) => {
	/* States */
	const [isEdit, setIEdit] = useState<boolean>(false);
	const [showPreview, setShowPreview] = useState<boolean>(false);

	/* Hooks */
	const { cardDetails, saveCard, setCardDetails } = useCardsContextHook();

	/* Handlers */
	const enableEditHandler = () => {
		setIEdit(prevState => !prevState);
	};

	const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const name = target.name;
		const value = target.value;

		const newCardDetails = {
			...cardDetails,
			[name]: value,
		};

		setCardDetails(newCardDetails as ICard | ICreateCardPayload);
	};

	const previewHandler = () => {
		setShowPreview(prevState => !prevState);
	};

	const saveCardHandler = async () => {
		await saveCard();
		closeModalHandler();
	};

	const updateListHandler = async (listType: ECardList) => {
		const newCardDetails = {
			...cardDetails,
			lista: listType,
		};

		await saveCard(newCardDetails as ICard);
		closeModalHandler();
	};

	/* Render */
	return (
		<CardModalComponent
			card={cardDetails}
			closeModalHandler={closeModalHandler}
			enableEditHandler={enableEditHandler}
			isEditCard={isEdit}
			onChangeHandler={onChangeHandler}
			previewHandler={previewHandler}
			saveCardHandler={saveCardHandler}
			showPreview={showPreview}
			updateListHandler={updateListHandler}
		/>
	);
};
export default CardModalContainer;
