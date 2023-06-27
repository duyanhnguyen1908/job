import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as pages from "../pages";
import Sidebar from "../components/Sidebar";

export default function Navbar() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/job" element={<pages.Job />} />
            <Route path="/status" element={<pages.Status />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
