import { Link } from 'react-router-dom';
import Welcome from './Navbar/_components/Welcome';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const form = useSelector(state => state.form)

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/default"> Default </Link>
                </li>
                <li>
                    <Link to="/product"> Products </Link>
                </li>
                <li>
                    <Link to="/login"> Login </Link>
                </li>
                <li className='navright'>
                    <Welcome 
                        name={form.formData.username} 
                        email={form.formData.email}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;