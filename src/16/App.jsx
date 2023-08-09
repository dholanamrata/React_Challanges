import { people } from "./data.jsx";
import { getImageUrl } from "./utils.jsx";

export default function List() {
  const chemist = [];
  const others = [];
  people.forEach((person) => {
    const listItems = (
      <li key={person.id}>
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    );

    if (person.profession === "chemist") {
      chemist.push(listItems);
    } else {
      others.push(listItems);
    }
  });
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>{chemist}</ul>
      <h2> Everyone Else</h2>
      <ul>{others}</ul>
    </article>
  );
}