import { Route, Routes } from "react-router";
import Home from "./page/Home";
import Project from "./page/Project";
import Resume from "./page/Resume";
import { DataProvider } from "./context/DataContext";
import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import ErrorPage from "./page/Error";

DataProvider;

function App() {
  return (
    <DataProvider>
      <div className="flex ">
        <SideMenu />

        <div className="ms-12 lg:ms-16 w-full">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            {/*   <Route path="about" element={<About />} /> */}
            <Route path="project" element={<Project />} />
            <Route path="resume" element={<Resume />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
