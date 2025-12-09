import { useState } from 'react';

export default function AreaTriangulo() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const areaCalculada = (Number(base) * Number(altura)) / 2;
    setArea(areaCalculada.toFixed(2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Calcular Área del Triángulo</h2>
      <input
        type="number"
        placeholder="Base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        required
      />
      <button type="submit">Calcular Área</button>
      {area !== null && <p>Área del triángulo: {area}</p>}
    </form>
  );
}