import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "components/header/Header";
import { News, Contact, Home, Projects, Team } from "pages";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./components/footer";
import NewsArticle from "components/news/NewsArticle";
import ScrollToTop from "utils/ScrollToTop";
import CodeOfConduct from "pages/CodeOfConduct";
import AGB from "pages/AGB";
import ImpressumPage from "pages/Impressum";
import CookieBanner from "components/CookieBanner/CookieBanner";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <div id="outer-container">
                <ThemeProvider theme={theme}>
                    <HashRouter>
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
                            </Routes>
                        </ScrollToTop>
                        <Footer />
                        <CookieBanner />
                    </HashRouter>
                </ThemeProvider>
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();