import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [dailyGoal, setDailyGoal] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");
  const [totalCalories, setTotalCalories] = useState(0);
  const [remainingCalories, setRemainingCalories] = useState(0);
  const [status, setStatus] = useState("");

  const calculateCalories = () => {
    if (!name || !dailyGoal || !breakfast || !lunch || !dinner || !snacks) {
      alert("Please fill in all fields!");
      return;
    }
    const numbers = [dailyGoal, breakfast, lunch, dinner, snacks].map(Number);
    if (numbers.some((num) => num < 0 || isNaN(num))) {
      alert("All values must be positive numbers!");
      return;
    }
    const total = numbers[1] + numbers[2] + numbers[3] + numbers[4];
    const remaining = numbers[0] - total;
    setTotalCalories(total);
    setRemainingCalories(remaining);
    setStatus(remaining < 0 ? "red" : "green");
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">🍎 Calorie Tracker</h1>
        <div className="form">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="number" placeholder="Daily Calorie Goal" value={dailyGoal} onChange={(e) => setDailyGoal(e.target.value)} />
          <input type="number" placeholder="Breakfast Calories" value={breakfast} onChange={(e) => setBreakfast(e.target.value)} />
          <input type="number" placeholder="Lunch Calories" value={lunch} onChange={(e) => setLunch(e.target.value)} />
          <input type="number" placeholder="Dinner Calories" value={dinner} onChange={(e) => setDinner(e.target.value)} />
          <input type="number" placeholder="Snacks Calories" value={snacks} onChange={(e) => setSnacks(e.target.value)} />
          <button onClick={calculateCalories}>Calculate</button>
        </div>

        {totalCalories > 0 && (
          <div className="results">
            <h2>Results</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Daily Goal:</strong> {dailyGoal} kcal</p>
            <p><strong>Total Consumed:</strong> {totalCalories} kcal</p>
            <p className={status === "red" ? "over" : "under"}>
              Remaining Calories: {remainingCalories} kcal {" "}
              {status === "red" ? "⚠️ You exceeded your goal!" : "✅ You are within your goal!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
