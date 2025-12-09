export default function UserCard({ user }) {
  return (
    <div>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Edad:</strong> {user.age} años</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <p><strong>Dirección:</strong> {user.address}</p>
    </div>
  );
}