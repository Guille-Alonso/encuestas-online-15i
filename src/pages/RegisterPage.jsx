import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  useForm  from '../hook/useForm'
import 'bootstrap/dist/css/bootstrap.css'
import "../components/Register/register.css"
import { REGISTER_VALUES } from '../constants';
import { toast } from 'react-toastify';
import axios from '../config/axios';
import { Button,Alert } from 'react-bootstrap';
import { validationRegister } from "../helpers/validationsRegister";

export const RegisterPage = () => {

	const navigate = useNavigate()

	const register = async () => {
		try {
			const { data } = await axios.post("/users/register", values);
			toast.success("registro exitoso")	
			navigate('/login');
		} catch (error) {
		// toast.error("Registro fallido. Campos incorrectos");
		if(error.response.data.errors){
			toast.error(error.response.data.errors[0].msg)
		
		}else toast.error(error.response.data.message)
		}
	};
	
	const { handleChange, handleSubmit, values,errors} = useForm(
		REGISTER_VALUES,
		register,
		null,
		null,
		validationRegister
	);

	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	}

	return (
		<div id='register' className='contentHeightRegister'>
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
						maxLength={25}
						// pattern="[A-Za-z ]{4,25}"
           				// title="Solo Letras, sin acentos. Tamaño mínimo: 4. Tamaño máximo: 25"
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
						maxLength={25}
						
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
						maxLength={25}
					/>
					<Button id='button-password' onClick={toggleShowPassword}>{showPassword ? "Ocultar" : "Mostrar"}</Button>
				</div>



				<div className="content register-btn" data-aos="fade">
        <button className="btn-register btn-primary ">
        Registrarse
        </button>
		
    </div>
	{Object.keys(errors).length !== 0 &&
          Object.values(errors).map((error, index) => (
            <Alert variant="danger" className="mt-3" key={index}>
              {error}
            </Alert>
          ))}
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