import React, { Component }  from 'react';
import './Hackaton.css';
import {DatosUsuario} from './Components/Forms/FormsUsuarios';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 display: false,
             usuario: '',
             email: '',
             password: '',
             phone: '',
             submitted: false,
		};
    }
    
    onSubmitMessage = (e) => {
		e.preventDefault();
		if (this.state.usuario.length === 0 || this.state.usuario.email === 0 || this.state.usuario.password === 0 || this.state.usuario.phone === 0) {
			return;
		} else {
			this.setState({
                user: this.state.usuario,
                email: this.state.email,
                passw: this.state.password,
                phone: this.state.phone,
				display: true,
				submitted: !this.state.submitted,
			});
        }
    };

    haUserChange = (e) => {
		this.setState({
			usuario: e.target.value,
		});
    };

    haEmailChange = (e) => {
		this.setState({
			email: e.target.value,
		});
    };

    haPassChange = (e) => {
		this.setState({
			password: e.target.value,
		});
    };

    haPhoneChange = (e) => {
		this.setState({
			phone: e.target.value,
		});
    };
    
    onSubmitReturn= () => {
        this.setState({
            usuario: '',
            email: '',
            password: '',
            phone: '',
            display: false,
            submitted: !this.state.submitted,
        });
   }

	render() {
		const { display,user, email, passw, phone, submitted } = this.state;
		return (	
			<div className='App'>	
				<header className='App-header'>
                <div className='cont-general'>
                <div className='cont-left'>
                {!submitted ? (
                <form onSubmit={this.onSubmitMessage}>
                       <DatosUsuario title={'Ingrese sus datos para el registro'} 
                       usuario={this.state.usuario} 
                       userChange={this.haUserChange}
                       email={this.state.email} 
                       emailChange={this.haEmailChange}
                       password={this.state.password} 
                       passChange={this.haPassChange}
                       phone={this.state.phone} 
                       phoneChange={this.haPhoneChange}
                        />
                </form>
                ) : null}
                {display ? 
                    <div>
                     <h2 className='primary-title'>Gracias por registrar sus datos</h2>  
                        <table className='table-resumen'>
                        <tbody>
                        <tr><td><label>Tus datos son los siguientes: </label></td><td></td></tr>
                        <tr><td><label>Usuario: </label></td><td>{user}</td></tr>
                        <tr><td><label>Email: </label></td><td>{email}</td></tr>
                        <tr><td><label>Contraseña: </label></td><td>{passw}</td></tr>
                        <tr><td><label>Teléfono: </label></td><td>{phone}</td></tr>
                        </tbody>
                        <tfoot><tr>
                        <td colSpan="2" className='foot-form'>
                        <button className='primary-button'  onClick={this.onSubmitReturn}>
                        <p className='text-button'>Retornar</p>
                        </button>
                        </td>
                        </tr></tfoot>
                        </table>
                    </div>
                : null}
                </div>
                <div className='cont-right'>
                    <img className='img-right' src="https://www.solofondos.com/wp-content/uploads/2016/01/imagenes-para-celular-gratis.jpg" alt=""/>
                </div>
                </div>
				</header>	
			</div>
		);
	}
}

export default App;