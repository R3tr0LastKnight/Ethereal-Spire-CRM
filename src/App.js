import "./App.css";
import { DataTableDemo } from "./components/RoundTableHold";
import Nav from "./components/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w- overflow-hidden ">
      <ToastContainer theme="dark" autoClose={900} />
      <Nav />
      <div className="px-16 py-8">
        <DataTableDemo />
        {/* <Drawer /> */}
      </div>
    </div>
  );
}

export default App;
