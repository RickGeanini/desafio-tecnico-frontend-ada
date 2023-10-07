import { ChangeEvent, TextareaHTMLAttributes } from 'react';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Markdown from 'react-markdown';

// STYLES
import { StyledMarkdown, StyledPreviewButton, StyledTextArea } from './Markdown.styles';

// UI MARK DOWN COMPONENT UTILS
interface IUiMarkdownComponentProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	previewHandler?: () => void;
	showPreview?: boolean;
	value?: string;
}

// UI MARK DOWN COMPONENT
const UiMarkdownComponent = ({
	onChangeHandler,
	previewHandler,
	showPreview,
	value,
	...restProps
}: IUiMarkdownComponentProps) => {
	/* Utils */
	const renderedTextArea = !showPreview && (
		<StyledTextArea onChange={onChangeHandler} value={value} {...restProps} />
	);

	const renderedMarkdown = showPreview && (
		<StyledMarkdown>
			<Markdown
				components={{
					code(props) {
						const { children, className, ...rest } = props;
						const match = /language-(\w+)/.exec(className || '');

						if (!match) {
							return (
								<code {...rest} className={className}>
									{children}
								</code>
							);
						}

						return (
							<SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div">
								{String(children).replace(/\n$/, '')}
							</SyntaxHighlighter>
						);
					},
				}}
			>
				{value}
			</Markdown>
		</StyledMarkdown>
	);

	const renderedPreviewButton = previewHandler && (
		<StyledPreviewButton onClick={previewHandler}>
			{showPreview ? 'Editar' : 'Visualizar'}
		</StyledPreviewButton>
	);

	/* Render */
	return (
		<div>
			{renderedTextArea}
			{renderedMarkdown}
			{renderedPreviewButton}
		</div>
	);
};
export default UiMarkdownComponent;
