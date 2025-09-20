import { Suspense } from "react";
import "./App.css";
import Foods from "./component/Foods";


const foodsFetch = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then(res => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading..........</p>}>
        <Foods foodsFetch={foodsFetch}>

        </Foods>
      </Suspense>
    </>
  );
}

export default App;
