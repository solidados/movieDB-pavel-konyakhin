import { useEffect, useState } from "react";

import Header from "./components/header/Header.jsx";
import MainPage from "./pages/MainPage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";

function App () {
  const [page, setPage] = useState('MainPage')

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/") {
      setPage('MainPage');
    } else if (path === "/favorites") {
      setPage('FavoritePage');
    }
  }, []);

  return (
    <>
      <Header />
      {page === 'MainPage' && <MainPage />}
      {page === 'FavoritePage' && <FavoritePage />}
    </>
  )
}

export default App
