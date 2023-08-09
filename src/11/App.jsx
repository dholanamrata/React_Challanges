import { getImageUrl } from "./utils.jsx";

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={size < 90 ? getImageUrl(person, "s") : getImageUrl(person, "b")}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP"
      }}
    />
  );
}