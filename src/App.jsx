import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LanguageContext } from "./helper/languageContext";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "./components/Loader/Loader";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const View = lazy(() => import("./pages/View/View"));
const Filter = lazy(() => import("./pages/Filter/Filter"));
const User = lazy(() => import("./pages/User/User"));
const Tarif = lazy(() => import("./pages/Tarif/Tarif"));
const Pay = lazy(() => import("./pages/Pay/Pay"));
const ToPay = lazy(() => import("./pages/ToPay/ToPay"));
const PayDetail = lazy(() => import("./pages/PayDetail/PayDetail"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));
const Add = lazy(() => import("./pages/Add/Add"));
const AddNew = lazy(() => import("./pages/AddNew/AddNew"));
const Protected = lazy(() => import("./components/Protected"));
const Vacation = lazy(() => import("./pages/Vacation/Vacation"));
const Announcoment = lazy(() => import("./pages/Announcement/Announcoment"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"));
const Services = lazy(() => import("./pages/Services/Services"));
const Profil = lazy(() => import("./pages/Profil/Profil"));
const ViewCottage = lazy(() => import("./pages/ViewCottage/ViewCottage"));
const VacationPage = lazy(() => import("./pages/Vacation/VacationPage"));
const UserCottageSingle = lazy(() => import("./pages/User/UserCottageSingle"));

function App() {
  if (!localStorage.getItem("language")) localStorage.setItem("language", "uz");

  const [languageChange, setLanguageChange] = useState(
    localStorage.getItem("language")
  );

  const queryClient = useQueryClient();

  const toggleLanguage = (e) => {
    e.preventDefault();
    localStorage.setItem("language", e.target.value);
    setLanguageChange(e.target.value);
    queryClient.invalidateQueries({ type: "all" });
  };

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="App">
      <LanguageContext.Provider value={{ languageChange, toggleLanguage }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />}>
              <Route path="home/contact" element={<Contact />} />
              <Route
                path="home/favorite"
                element={
                  <Protected>
                    <Favorite />
                  </Protected>
                }
              />
              <Route path="home/profile/user" element={<User />} />
              <Route
                path="home/filter"
                element={
                  <Protected>
                    <Filter />
                  </Protected>
                }
              />
              <Route
                path="home/profile"
                element={
                  <Protected>
                    <Profil />
                  </Protected>
                }
              />
              <Route
                path="home/profile/add"
                element={
                  <Protected>
                    <Add />
                  </Protected>
                }
              />
              <Route path="home/profile/services" element={<Services />} />
              <Route
                path="home/profile/add-new"
                element={
                  <Protected>
                    <AddNew />
                  </Protected>
                }
              />
              <Route
                path="home/profile/announcement"
                element={
                  <Protected>
                    <Announcoment />
                  </Protected>
                }
              />
              <Route
                path="home/view/:id"
                element={
                  <Protected>
                    <View />
                  </Protected>
                }
              />
              <Route path="home/view" element={<ViewCottage />} />
              <Route
                path="home/view/cottage/:id"
                element={<UserCottageSingle />}
              />
              <Route
                path="home/vacation/:id"
                element={
                  <Protected>
                    <Vacation />
                  </Protected>
                }
              />
              <Route
                path="home/vacation"
                element={
                  <Protected>
                    <VacationPage />
                  </Protected>
                }
              />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route
              path="/tarif"
              element={
                <Protected>
                  {" "}
                  <Tarif />
                </Protected>
              }
            />
            <Route
              path="/pay"
              element={
                <Protected>
                  <Pay />
                </Protected>
              }
            />
            <Route
              path="/to-pay"
              element={
                <Protected>
                  <ToPay />
                </Protected>
              }
            />
            <Route
              path="/pay-detail"
              element={
                <Protected>
                  <PayDetail />
                </Protected>
              }
            />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
