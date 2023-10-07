import { useState } from 'react';

// COMPONENTS
import LayoutContainerComponent from '@components/layout/container/Container';
import HeaderComponent from '@components/layout/header/Header';

// CONTAINERS
import CardModalContainer from '@containers/modals/card/Card';
import CardsListContainer from '@containers/cards/list/List';

// HOCS
import withCardsProvider from '@hocs/with-cards-provider';

// DASHBOARD PAGE CONTAINER
const DashboardPageContainer = () => {
	/* States */
	const [isShowCardModal, setIsShowCardModal] = useState<boolean>(false);

	/* Handlers */
	const closeCardsModal = () => {
		setIsShowCardModal(false);
	};

	const newCardClickHandler = () => {
		setIsShowCardModal(true);
	};

	/* Render */
	return (
		<LayoutContainerComponent>
			<HeaderComponent newCardClickHandler={newCardClickHandler} />
			<CardsListContainer />

			{isShowCardModal && <CardModalContainer closeModalHandler={closeCardsModal} />}
		</LayoutContainerComponent>
	);
};
export default withCardsProvider(DashboardPageContainer);
