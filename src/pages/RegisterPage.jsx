import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import 'bootstrap/dist/css/bootstrap.css'
import "../index.css"

export const RegisterPage = () => {
	const navigate = useNavigate();

	const { name, email, password, onInputChange, onResetForm } =
		useForm({
			name: '',
			email: '',
			password: '',
		});

	const onRegister = e => {
		e.preventDefault();

		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
				name,
			},
		});

		onResetForm();
	};

	return (
		<div id='register' className='wrapper  bg-chatter-green h-100 py-4 fs-1 fw-bold scroll-y'>
			<form onSubmit={onRegister}>
				<h1>Registrarse</h1>

				<div className='input-group'>
					<input
						type='text'
						name='name'
						id='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu nombre"
					/>
					<label htmlFor='name'>Nombre:</label>
				</div>

				<div className='input-group'>
					<input
						type='email'
						name='email'
						id='email'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu correo"
					/>
					<label htmlFor='email'>Email:</label>
				</div>
				<div className='input-group'>
					<input
						type='password'
						name='password'
						id='password'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu contraseña"
					/>
					<label htmlFor='password'>Contraseña:</label>
				</div>

				<div className="content d-flex flex-column mb-3 d-flex align-items-start" data-aos="fade">
        <button className="btn btn-primary">
        Registrarse
        </button>
    </div>

		<div className="content text d-flex flex-row gap-2 fs-6 fst-italic" data-aos="fade">
        <span>¿Ya tienes una cuenta?</span>
        <Link to="/" className="text-chatter-blue">
    Inicia sesión aquí
        </Link>
    </div>
		
			</form>

			
		</div>
	);
};