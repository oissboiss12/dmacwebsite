import React, {useState} from "react";
import "./services.css";
import "./App.css";
import "./index.css";
import axios from "axios";
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState([{
        email: '',
        password: ''
    }]);
    
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) {
            setError('Both fields are required');
            return;
        }

        axios.post('http://localhost:3001/api/v1.0/admin/login', formData)
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem('token', token)
                alert('Login successful');
                navigate('/');
                console.log('Token', token);
            })
            .catch((error) => {
                setError('Invalid credentials');
                console.error('There was an error logging in!', error);
            });
    }

    return(
        <div className="bg-black min-h-screen text-white">
            <div className="relative bg-cover bg-center h-64 flex items-center justify center" style={{backgroundImage: 'url(/dmac.jpg)' }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                <h1 className="title"> Login </h1>
                </div>
            </div>
            </div>

            <div className="login-container">
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"> Email: </label>
                        <input
                            type=""
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password: </label>
                        <input
                            type=""
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}/>
                    </div>
                    <button type="submit" className="bg-[#4caf50] border-2 border-black">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
