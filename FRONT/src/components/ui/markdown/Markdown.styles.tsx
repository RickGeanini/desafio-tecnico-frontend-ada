import { styled } from 'styled-components';

export const StyledMarkdown = styled.div`
	padding: 0.5rem;
	min-height: 9.63rem;
`;

export const StyledPreviewButton = styled.li`
	font-size: 0.9rem;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.blueBold};
	}
`;

export const StyledTextArea = styled.textarea`
	width: 100%;
	padding: 0.5rem;

	font: normal normal normal 20px ${({ theme }) => theme.fonts.textFont};

	background-color: transparent;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtlest};
	color: ${({ theme }) => theme.colors.textInformation};

	font-size: 1.125rem;

	transition: all 0.2s linear;

	&:disabled {
		cursor: not-allowed;
		opacity: 20%;
		color: ${({ theme }) => theme.colors.textSubtlest};
	}

	&:focus {
		outline: none;
		border-bottom: 1.5px solid ${({ theme }) => theme.colors.textInformation};
	}
`;
