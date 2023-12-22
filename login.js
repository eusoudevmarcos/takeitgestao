import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Implementar a validação do usuário e senha aqui (pode ser no backend)
    if (username === 'usuario' && password === 'senha') {
      // Redirecionar o usuário para a página inicial
      window.location.href = '/inicio';
    } else {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div>
      <h2>Tela de Login</h2>
      <div>
        <input
          type="text"
          placeholder="Nome de Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;