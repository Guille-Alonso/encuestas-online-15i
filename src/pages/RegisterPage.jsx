import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from '../hook/useForm'
import 'bootstrap/dist/css/bootstrap.css'
import "../components/Register/register.css"

export const RegisterPage = () => {
	const navigate = useNavigate();

	const { name, email, password,lastname,  onInputChange, onResetForm } =
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
			<form onSubmit={onRegister} class="form-register">
			<h1 class="h1-form font-weight-bold mb-3">Registrarse</h1>

				<div className='input-group'>
					<input
						type='text'
						name='name'
						className='name'
						value={name}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu nombre"
						maxLength={15}
					/>
				</div>

				<div className='input-group'>
					<input
						type='text'
						name='lastname'
						className='name'
						value={lastname}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu apellido"
						maxLength={15}
					/>
				</div>


				<div className='input-group'>
					<input
						type='email'
						name='email'
						className='name'
						value={email}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu correo"
						maxLength={35}
					/>
				</div>
				<div className='input-group'>
					<input
						type='password'
						name='password'
						className='name'
						value={password}
						onChange={onInputChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu contraseña"
						maxLength={20}
					/>
				</div>

				<div className="content register-btn" data-aos="fade">
        <button className="btn btn-primary ">
        Registrarse
        </button>
    </div>

		<div className="content text d-flex flex-row gap-2 fs-6 fst-italic" data-aos="fade">
        <span>¿Ya tienes una cuenta?</span>
        <Link to="/Login" className="text-chatter-blue">
    Inicia sesión aquí
        </Link>
    </div>
		
			</form>

			
		</div>
	);
};