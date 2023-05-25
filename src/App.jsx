import { Routes, Route } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import AllContactModal from "./components/AllContactModal.jsx";
import USContact from "./components/USContact.jsx";
import DetailsContact from "./components/DetailsContact.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />} />
        </Route>
        <Route path='/allcontacts' element={<AllContactModal />} />
        <Route path='/uscontacts' element={<USContact />} />
        <Route path='/details/:id' element={<DetailsContact />} />
      </Routes>
    </>
  );
}

export default App;
