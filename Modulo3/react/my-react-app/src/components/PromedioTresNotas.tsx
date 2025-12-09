import { useState } from 'react';

export default function PromedioTresNotas() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [promedio, setPromedio] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const promediocalculado = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    setPromedio(promediocalculado.toFixed(2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Primera nota"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Segunda nota"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
      />
      <input
        type="number"
        placeholder="Tercera nota"
        value={nota3}
        onChange={(e) => setNota3(e.target.value)}
      />
      <button type="submit">Calcular Promedio</button>
      {promedio !== null && <p>Promedio: {promedio}</p>}
    </form>
  );
}
