import { recipes } from "./data.jsx";

export default function RecipeList({ name }) {
  // return (
  //   <div>
  //     <h1>{recipes.name}</h1>
  //   </div>
  // );
  const PrintObject = recipes.map((obj) => {
    return (
      <>
        <h2>{obj.name}</h2>
        <li>{obj.ingredients[0]}</li>
        <li>{obj.ingredients[1]}</li>
        <li>{obj.ingredients[2]}</li>
        <li>{obj.ingredients[3]}</li>
        <li>{obj.ingredients[4]}</li>
        <br />
      </>
    );
  });
  return (
    <>
      <ul>{PrintObject}</ul>
    </>
  );
}