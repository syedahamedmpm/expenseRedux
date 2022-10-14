import "./App.css";
import { Routes, Route } from "react-router-dom";
import GetExpensesList from "./GetExpensesList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetExpensesList />} />
      </Routes>
    </div>
  );
}

export default App;
