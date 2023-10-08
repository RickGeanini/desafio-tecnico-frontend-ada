import { ChangeEvent, useEffect, useState } from 'react';

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
	const [cardEdit, setCardEdit] = useState<ICard | ICreateCardPayload>();
	const [isEdit, setIEdit] = useState<boolean>(false);
	const [showPreview, setShowPreview] = useState<boolean>(false);

	/* Hooks */
	const { cardDetails, saveCard } = useCardsContextHook();

	/* Handlers */
	const enableEditHandler = () => {
		setIEdit(prevState => !prevState);
	};

	const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const name = target.name;
		const value = target.value;

		const newCardDetails = {
			...cardEdit,
			[name]: value,
		};

		setCardEdit(newCardDetails as ICard | ICreateCardPayload);
	};

	const previewHandler = () => {
		setShowPreview(prevState => !prevState);
	};

	const saveCardHandler = async () => {
		await saveCard(cardEdit);
		closeModalHandler();
	};

	const updateListHandler = async (listType: ECardList) => {
		const newCardDetails = {
			...cardEdit,
			lista: listType,
			oldList: cardEdit?.lista,
		};

		await saveCard(newCardDetails as ICard);
		closeModalHandler();
	};

	/* Lifecycles */
	useEffect(() => {
		setCardEdit(cardDetails);
	}, []);

	/* Render */
	return (
		<CardModalComponent
			card={isEdit || !cardDetails?.id ? cardEdit : cardDetails}
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
