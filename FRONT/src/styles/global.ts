import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }
    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"],
    li {
        list-style: none;
    }
    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }
    /* Set core body defaults */
    body {
		min-height: 100vh;

		padding: 0;
		margin: 0;

		background: ${({ theme }) => theme.colors.surface};
        transition: all 0.50s linear;

		color: ${({ theme }) => theme.colors.textSubtlest};
		font-family: ${({ theme }) => theme.fonts.textFont};
		font-size: 0.9;
		letter-spacing: 0.15px;
        line-height: 1.5;
        text-rendering: optimizeSpeed;

		@media (min-width: 900px) {
			background: ${({ theme }) => theme.colors.surface};
		}
    }
    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }
    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }
    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
		font: inherit;
    }
    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
    /* GLOBAL STYLES */
    #root {
        display: flex;
        flex-direction: column;
        align-items: center;

		min-height: 100vh;

        box-sizing: border-box;

		font-family: ${({ theme }) => theme.fonts.textFont};
        font-weight: 400;
    }
    :root {
        font-size: 16px;

        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 500;
        letter-spacing: 0.1rem;
    }
    a {
		transition: all 0.2s linear;

        color: ${({ theme }) => theme.colors.royal};
		font-weight: bold;
        text-decoration: none;

        &:hover {
            opacity: 0.65;
        }
    }
`;
