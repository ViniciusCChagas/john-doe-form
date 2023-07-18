import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	background: var(--yellow);

	min-height: 100vh;

	form {
		display: flex;
		flex-direction: column;

		width: 500px;
		max-width: 80vw;

		margin-top: 10vh;

		background: var(--white);

		border-radius: 5px;

		header {
			background: var(--black);

			padding: 1rem 2rem;

			color: var(--white);
			text-align: center;
			font-size: 1.5rem;

			font-weight: bold;

			border-radius: 5px 5px 0 0;
		}

		main {
			padding: 1rem 2rem;
		}

		footer {
			padding: 1rem 2rem 2rem;
		}
	}
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;

	margin-top: 1rem;

	input,
	select,
	textarea {
		height: 2.5rem;

		font-size: 1rem;

		border: 1px solid var(--black);
		border-radius: 5px;

		background: var(--white);

		padding: 0.5rem 1rem;
	}

	textarea {
		height: 7.5rem;

		resize: vertical;
	}
`;

export const FormErrorMessage = styled.span`
	display: block;

	color: var(--danger);
	font-size: 0.875rem;
`;
