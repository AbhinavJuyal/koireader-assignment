import "./App.css";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4A from "./components/Question4A";

function App() {
  return (
    <div className="m-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Question 2</h1>
        <Question2 />
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Question 3</h1>
        <Question3 />
      </div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Question 4A</h1>
        <Question4A />
      </div>
    </div>
  );
}

export default App;
