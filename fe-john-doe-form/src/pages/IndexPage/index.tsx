import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import Swal from 'sweetalert2';
import { Color } from '../../models/Color';
import { IErrorResponseCreateNewClientDto } from '../../models/dtos/CreateNewClientDtos';
import { api } from '../../services/api';
import { Container, FormErrorMessage, FormGroup } from './styles';

interface FormData {
	name: string;
	email: string;
	cpf: string;
	favoriteColorId: number;
	comments: string;
}

const inputConfig = {
	name: {
		required: {
			value: true,
			message: 'Campo obrigatório',
		},
		minLength: {
			value: 3,
			message: 'Mínimo de 3 caracteres',
		},
		maxLength: {
			value: 255,
			message: 'Máximo de 255 caracteres',
		},
	},
	email: {
		required: {
			value: true,
			message: 'Campo obrigatório',
		},
		maxLength: {
			value: 255,
			message: 'Máximo de 255 caracteres',
		},
	},
	cpf: {
		required: {
			value: true,
			message: 'Campo obrigatório',
		},
	},
	favoriteColorId: {
		required: {
			value: true,
			message: 'Campo obrigatório',
		},
	},
	comments: {
		maxLength: {
			value: 625,
			message: 'Máximo de 625 caracteres',
		},
	},
};

export function IndexPage() {
	const [colorsList, setColorsList] = useState<Color[]>([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm<FormData>();

	useEffect(() => {
		api.get('/colors')
			.then((response) => {
				setColorsList(response.data);
			})
			.catch((error: AxiosError) => {
				Swal.fire({
					position: 'center',
					icon: 'error',
					title: 'Ops!',
					text: 'Ocorreu um erro ao carregar as cores, verifique a conexão com o servidor!',
					showConfirmButton: false,
					timer: 3000,
				});
			});
	}, []);

	async function onSubmit(data: FormData) {
		const requestData = {
			...data,
			cpf: data.cpf.replace(/\D/g, ''),
			color: colorsList.find((color) => color.id == data.favoriteColorId),
		};

		Swal.fire({
			title: 'Cadastrando cliente...',
		});
		Swal.showLoading();

		api.post('/client', requestData)
			.then(() => {
				Swal.fire({
					position: 'center',
					icon: 'success',
					title: 'Cliente cadastrado com sucesso!',
					showConfirmButton: false,
					timer: 3000,
				});
				reset();
			})
			.catch((error: AxiosError) => {
				const errorData = error.response
					?.data as IErrorResponseCreateNewClientDto;

				Swal.fire({
					position: 'center',
					icon: 'error',
					title: 'Ops!',
					text:
						errorData.errors.join('\n') ||
						'Ocorreu um erro ao cadastrar o cliente',
					showConfirmButton: false,
					timer: 3000,
				});
			});
	}

	return (
		<Container>
			<form onSubmit={handleSubmit((data) => onSubmit(data))}>
				<header>Cadastro de Cliente</header>
				<main>
					<FormGroup>
						<label htmlFor='name'>Nome:</label>
						<input
							type='text'
							{...register('name', { ...inputConfig.name })}
						/>

						{errors.name && (
							<FormErrorMessage>*{errors.name.message}</FormErrorMessage>
						)}
					</FormGroup>

					<FormGroup>
						<label htmlFor='email'>E-mail:</label>
						<input
							type='email'
							{...register('email', { ...inputConfig.email })}
						/>
						{errors.email && (
							<FormErrorMessage>*{errors.email.message}</FormErrorMessage>
						)}
					</FormGroup>

					<FormGroup>
						<label htmlFor='cpf'>CPF:</label>
						<Controller
							render={({ field }) => (
								<InputMask
									{...field}
									mask='999.999.999-99'
									placeholder='000.000.000-00'
									{...register('cpf', { ...inputConfig.cpf })}
								/>
							)}
							name='cpf'
							control={control}
							defaultValue={''}
						/>
						{errors.cpf && (
							<FormErrorMessage>*{errors.cpf.message}</FormErrorMessage>
						)}
					</FormGroup>

					<FormGroup>
						<label htmlFor='favoriteColorId'>Cor preferida:</label>
						<select
							{...register('favoriteColorId', {
								...inputConfig.favoriteColorId,
							})}
						>
							<option value=''>Selecione</option>
							{colorsList.map((color) => (
								<option key={color.id} value={color.id}>
									{color.name}
								</option>
							))}
						</select>
						{errors.favoriteColorId && (
							<FormErrorMessage>
								*{errors.favoriteColorId.message}
							</FormErrorMessage>
						)}
					</FormGroup>

					<FormGroup>
						<label htmlFor='comments'>Observações:</label>
						<textarea
							{...register('comments', { ...inputConfig.comments })}
						/>
						{errors.comments && (
							<FormErrorMessage>
								*{errors.comments.message}
							</FormErrorMessage>
						)}
					</FormGroup>
				</main>
				<footer>
					<button type='submit'>Cadastrar</button>
				</footer>
			</form>
		</Container>
	);
}
