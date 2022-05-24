import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Navbare from "./components/Navbar";
import Footer from "./components/Footer";
import Dashbord from "./components/Dashbord";
import SideBar from "./components/SideBar";
import Recette from "./components/recette/Recette";
import Devis from "./components/devis/Devis";
import AjoutDevis1 from "./components/devis/AjoutDevis1";
import Facture from "./components/factures/Facture";
import Commande from "./components/commandes/Commande";
import Ventes from "./components/ventes/Vente";
import Brouillon from "./components/brouillon/Brouillon";
import ModifierDevis from "./components/devis/ModifierDevis";
import DetailDevis from "./components/devis/DetailDevis";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import DetailCommande from "./components/commandes/DetailCommande";
import Paiement from "./components/factures/Paiement";
import store from "./redux/store";
import { ToastProvider } from "react-toast-notifications";
import MyDocument from "./components/MyDocument";
import AjoutFacture from "./components/factures/AjoutFacture";
import Payment from "./components/payments/Payment";
import Success from "./components/payments/Success";
import Fail from "./components/payments/Fail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import NoAccess from "./pages/NoAccess";
import PrivateRouter from "./component/PrivateRouter";
import AdminRouter from "./component/AdminRouter";
import ForceRedirect from "./component/ForceRedirect";
import jwt_decode from "jwt-decode";
import { Logout, setUser } from "./redux/actions/authActions";
import { useSelector } from "react-redux";
import { setAuth } from "./utils/setAuth";

if (window.localStorage.jwt) {
  const decode = jwt_decode(window.localStorage.jwt);
  store.dispatch(setUser(decode));
  setAuth(window.localStorage.jwt);
  const currentDate = Date.now / 1000;

  if (decode.exp > currentDate) {
    store.dispatch(Logout());
  }
}

function App() {
  const auth = useSelector((state) => state.auth);
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  };

  return (
    <div className="App">
      <ToastProvider>
        <Provider store={store}>
          <Navbare user={user} />
          <SideBar user={user} />
          <p>
            <br />
          </p>

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/noaccess" element={<NoAccess />} />
            <Route
              path="/login"
              element={
                <ForceRedirect user={user}>
                  <Login />
                </ForceRedirect>
              }
            />
            <Route
              path="/register"
              element={
                <ForceRedirect user={user}>
                  <Register />
                </ForceRedirect>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRouter user={user}>
                  <Profile />
                </PrivateRouter>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRouter user={user}>
                  <Admin />
                </AdminRouter>
              }
            />
            <Route
              path="/recette"
              element={
                <PrivateRouter user={user}>
                  <Recette />
                </PrivateRouter>
              }
            />
            <Route
              path="/devis"
              element={
                <PrivateRouter user={user}>
                  <Devis />
                </PrivateRouter>
              }
            />
            <Route
              path="/ajouter_devis"
              element={
                <PrivateRouter user={user}>
                  <AjoutDevis1 />
                </PrivateRouter>
              }
            />
            <Route
              path="/ajouter_facture"
              element={
                <PrivateRouter user={user}>
                  <AjoutFacture />
                </PrivateRouter>
              }
            />
            <Route path="/devis/:detail" element={<DetailDevis />} />
            <Route path="/devi/:modifier" element={<ModifierDevis />} />
            <Route path="/factures" element={<Facture />} />
            <Route path="/commandes" element={<Commande />} />
            <Route path="/ventes" element={<Ventes />} />
            <Route path="/brouillon" element={<Brouillon />} />
            <Route
              path="/"
              element={
                <PrivateRouter user={user}>
                  <Dashbord />
                </PrivateRouter>
              }
            />
            <Route path="/detail_commande/:id" element={<DetailCommande />} />
            <Route path="/paiement/:id" element={<Paiement />} />
            <Route path="/imprimer/:id" element={<MyDocument />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/fail" element={<Fail />} />
          </Routes>

          <Footer user={user} />
        </Provider>
      </ToastProvider>
    </div>
  );
}

export default App;
