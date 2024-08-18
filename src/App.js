import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/auth/AuthContext';
import { LoginContextProvider } from './context/auth/LoginContext';
import { SatuanDetailContextProvider } from './context/satuan/SatuanDetailContent';
import { MainContextProvider } from './context/main/MainContext';
import { PersonilDetailContextProvider } from './context/personil/PersonilDetailContext';
import { DetailSatuanPage, LoginPage, MainPage } from './pages';
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
        {/* Satuan */}
        <Route path='/detail-satuan' element={
          <SatuanDetailContextProvider>
            <DetailSatuanPage />
          </SatuanDetailContextProvider>
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
