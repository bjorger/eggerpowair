import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "components/header/Header";
import { News, Contact, Home, Projects, Team, CodeOfConduct, AGB, ImpressumPage, DataSecurityPage, MissionStatementPage } from "pages";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/footer";
import ScrollToTop from "utils/ScrollToTop";
import CookieBanner from "components/cookieBanner/CookieBanner";
import GA4React from "ga-4-react";
import NewsArticle from "components/news/NewsArticle";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <div id="outer-container">
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Header />
                        <ScrollToTop>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/team" element={<Team />} />
                                <Route path="/news" element={<News />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/news-article" element={<NewsArticle />} />
                                <Route path="/coc" element={<CodeOfConduct />} />
                                <Route path="/agb" element={<AGB />} />
                                <Route path="/impressum" element={<ImpressumPage />} />
                                <Route path="/datasecurity" element={<DataSecurityPage />} />
                                <Route path="/mission-statement" element={<MissionStatementPage />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </ScrollToTop>
                        <Footer />
                        <CookieBanner />
                    </BrowserRouter>
                </ThemeProvider>
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

const ga4react = new GA4React(process.env.REACT_APP_GA4_TRACKING_ID || "");
ga4react.initialize().then().catch();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
