import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/auth/AuthContext';
import { LoginContextProvider } from './context/auth/LoginContext';
import { BatalyonDetailContextProvider } from './context/batalyon/BatalyonDetailContent';
import { MainContextProvider } from './context/main/MainContext';
import { PersonilDetailContextProvider } from './context/personil/PersonilDetailContext';
import { LoginPage, MainPage } from './pages';
import DetailBatalyonPage from './pages/main/batalyon/detail';
import DetailPerosnilPage from './pages/main/personil/detail';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        {/* Auth */}
        <Route path='/' element={
          <LoginContextProvider>
            <LoginPage />
          </LoginContextProvider>
        } />
        {/* Main */}
        <Route path='/main-page' element={
          <MainContextProvider>
            <MainPage />
          </MainContextProvider>
        } />
        {/* Batalyon */}
        <Route path='/detail-batalyon' element={
          <BatalyonDetailContextProvider>
            <DetailBatalyonPage />
          </BatalyonDetailContextProvider>
        } />
        {/* Personil */}
        <Route path='/detail-personil' element={
          <PersonilDetailContextProvider>
            <DetailPerosnilPage />
          </PersonilDetailContextProvider>
        } />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
