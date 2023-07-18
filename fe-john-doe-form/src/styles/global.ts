import { createGlobalStyle } from 'styled-components';
import { device } from './breakpoints';

export const GlobalStyle = createGlobalStyle`

  :root {
    --black: #000000;
    --yellow: #FABB18;

    --white: #ffffff;
    --light-white: #f5f5f5;
    --backgroud: #F0F2F5;

    --text: #000000;
    --light-text: #969CB2;

    --danger: #c00000;
    --success: #009100;

    --max-width: 1150px;

    ${device.md`
    	--max-width: 100vw;
    `};
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, button, input, textarea{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
  }

  body {
    background: var(--backgroud);
    -webkit-font-smoothing: antialiased;
  }

  button {
		width: 100%;
		height: 3rem;

		background: var(--yellow);

		border: none;
		border-radius: 5px;

		font-size: 1rem;
	  font-weight: bold;

    cursor: pointer;

    transition: filter 0.2s;
	}

  button:hover {
    filter: brightness(0.95);
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
