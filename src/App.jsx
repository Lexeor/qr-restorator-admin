import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Public />} />

        {/* Protected routes */}
        <Route element={<Public />}>
          <Route path="welcome" element={<Public />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
