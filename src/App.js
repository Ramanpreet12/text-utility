import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import NoPage from "./components/NoPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [containerStyle, setContainerStyle] = useState({
    background: "#fff",
  });

  const [textareaStyle, setTextareaStyle] = useState({
    background: "#fff",
    color: "#111",
  });

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      setContainerStyle({
        background: "#404258",
      });
      setTextareaStyle({ backgroundColor: "#242641a8", color: "#fff" });
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utils | Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      setTextareaStyle({ backgroundColor: "#fff", color: "#111" });
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Utils | Light mode";
    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="Text Utility Blog"
        aboutText="About Text Utils"
        mode={mode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container">
        
        <Routes>
          <Route path="/" element={<TextForm
            showAlert={showAlert}
            heading="Enter your text to analyze below"
            textareaStyle={textareaStyle}
            mode={mode}
            style={containerStyle}
            toggleMode={toggleMode}
          ></TextForm>}></Route>
          
          <Route path="about" element={<About></About> }></Route>
          <Route path="*" element={ <NoPage></NoPage>}></Route>
          {/* <About></About> */}
          </Routes>
       
      
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
