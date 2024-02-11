import "./App.css";
import AppNavbar from "./components/Navbar/AppNavbar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <AppNavbar />
        <div>
          <LandingPage />
        </div>
      </div>
    </>
  );
}

export default App;
