import { ChangeEvent, useEffect, useState } from 'react';

// COMPONENTS
import CardModalComponent from '@components/modals/card/Card';

// HOOKS
import { useCardsContextHook } from '@contexts/cards.context';

// INTERFACES
import { ICard, ICreateCardPayload } from '@interfaces/cards';

// CARD MODAL CONTAINER UTILS
interface ICardModalContainer {
	closeModalHandler: () => void;
}

// CARD MODAL CONTAINER
const CardModalContainer = ({ closeModalHandler }: ICardModalContainer) => {
	/* States */
	const [showPreview, setShowPreview] = useState<boolean>();

	/* Hooks */
	const { cardDetails, saveCard, setCardDetails } = useCardsContextHook();

	/* Handlers */
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

	/* Lifecycles */
	useEffect(() => {
		setCardDetails(undefined);
	}, []);

	/* Render */
	return (
		<CardModalComponent
			card={cardDetails}
			closeModalHandler={closeModalHandler}
			onChangeHandler={onChangeHandler}
			previewHandler={previewHandler}
			saveCardHandler={saveCardHandler}
			showPreview={showPreview}
		/>
	);
};
export default CardModalContainer;
