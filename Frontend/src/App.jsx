import { BusProvider } from "./context/BusContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BusProvider>
      <Dashboard />
    </BusProvider>
  );
}

export default App;