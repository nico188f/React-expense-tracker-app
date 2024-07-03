import { useState } from "react";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <div className="card bg-background">
            <button
               className="bg-green-100 hover:bg-green-200"
               onClick={() => setCount(count => count + 1)}
            >
               up
            </button>
            <button
               className="bg-red-100 hover:bg-red-200"
               onClick={() => setCount(count => count - 1)}
            >
               down
            </button>
            <p>count: {count}</p>
         </div>
      </>
   );
}

export default App;
