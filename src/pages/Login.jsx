import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";
import Input from "../components/ui/Input";

const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (login(mail, password)) {
            navigate('/')
        } else {
            setError('Utilisateur non reconnu')
        }

    }

    return (
        <div className="flex items-center justify-center mt-40">
            <div className="w-100">
                <h2>login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input
                            type="email"
                            placeholder="Mail"
                            onChange={(e) => setMail(e.target.value)}
                            value={mail}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <Input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            value={password}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
                    >
                        S'inscrire
                    </button>
                </form>
            </div>
        </div>)
}

export default Login