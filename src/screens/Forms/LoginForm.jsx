import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from "react-redux";
import { saveFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import { useState } from "react";
import { Link } from 'react-router-dom';
import ModalLogout from "../../components/ModalLogout";

const LoginForm = () => {
    const [values, handleChange] = useForm({username: '', email: '', password: '',});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    const form = useSelector(state => state.form);
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        // Send the form data to the server for authentication.
        if (values.password === form.correctPassword) {
            dispatch(saveFormData(values));
        } else {
            showModal();
        }
    }
    
    const hideModalInfo = () => {
        setShowModalInfo(false);
    }

    const showModal = () => {
        setShowModalInfo(true);
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const showModalLO = () => {
        setShowModalLogout(true);
    }
    const hideModalLO = () => {
        setShowModalLogout(false);
    }

    const clearFromData = () => {
        dispatch(saveFormData({username: '', email: '', password: ''}));
        setShowModalLogout(false);
    }

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
        >
            <div className="container">
                <ModalInfo 
                    visible={showModalInfo}
                    message="Password Incorrecto"
                    onClose={hideModalInfo}
                />
                <ModalLogout
                    visible={showModalLogout}
                    message="Estas seguro de que quieres cerrar sesión? "
                    onClose={hideModalLO}
                    onClickButton={clearFromData}
                />
                <form onSubmit={handleSubmit} >
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <h5>password: {form.formData.password}</h5>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            value={values.username} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            value={values.email} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            id="password" 
                            name="password" 
                            value={values.password} 
                            onChange={handleChange} 
                        />
                        <button type="button" onClick={handleTogglePassword}>
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        {/* <button onClick={showModal}>Mostrar Modal</button> */}
                        <Link className="linkLogout" to="#" onClick={showModalLO}>Logout</Link>
                    </div>
                </form>
            </div>
        </motion.div>
    )
}

export default LoginForm;