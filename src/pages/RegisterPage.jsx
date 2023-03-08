import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import  useForm  from '../hook/useForm'
import 'bootstrap/dist/css/bootstrap.css'
import "../components/Register/register.css"
import { REGISTER_VALUES } from '../constants';
import { toast } from 'react-toastify';
import axios from '../config/axios';
import { Button } from 'react-bootstrap';

export const RegisterPage = () => {
	
	const register = async () => {
		try {
		if(values.password==values.repeatPassword){
			const { data } = await axios.post("/users/register", values);
			toast.success("registro exitoso")
		}else toast.error("Las contraseñas no coinciden")
		
	
		} catch (error) {
		// toast.error("Registro fallido. Campos incorrectos");
		if(error.response.data.errors){
			toast.error(error.response.data.errors[0].msg)
		
		}else toast.error(error.response.data.message)
	
		
		}
	};
	const { handleChange, handleSubmit, values} = useForm(
		REGISTER_VALUES,
		register
	);

	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	}

	return (
		<div id='register' >
			<form onSubmit={handleSubmit} className="form-register">
			<h1 className="h1-form font-weight-bold mb-3">Registrarse</h1>

				<div className='input-group'>
					<input
						type='text'
						name='name'
						className='name'
						value={values.name}
						onChange={handleChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu nombre"
						maxLength={15}
					/>
				</div>


				<div className='input-group'>
					<input
						type='email'
						name='email'
						className='name'
						value={values.email}
						onChange={handleChange}
						required
						autoComplete='off'
						placeholder="Ingresa tu correo"
						maxLength={35}
					/>
				</div>
				<div className='input-group'>
					<input
						type={showPassword ? "text" : "password"}
						name='password'
						className='name'
						value={values.password}
						onChange={handleChange}
						required
						autoComplete='off'
						placeholder="Ingresar contraseña"
						maxLength={20}
						
					/>
					
					
				</div>

				<div className='input-group'>
					<input
						type={showPassword ? "text" : "password"}
						name='repeatPassword'
						className='name'
						value={values.repeatPassword}
						onChange={handleChange}
						required
						autoComplete='off'
						placeholder="Repetir contraseña"
						maxLength={20}
					/>
					<Button id='button-password' onClick={toggleShowPassword}>{showPassword ? "Ocultar" : "Mostrar"}</Button>
				</div>



				<div className="content register-btn" data-aos="fade">
        <button className="btn-register btn-primary ">
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