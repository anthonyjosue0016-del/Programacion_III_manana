import { useState } from 'react';

export default function SimpleForm() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const suma = Number(num1) + Number(num2);
    setResultado(suma);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Primer número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button type="submit">Sumar</button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </form>
  );
}
