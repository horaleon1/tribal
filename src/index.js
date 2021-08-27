import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import { store } from "./store";
import i18next from "i18next";
import reportWebVitals from "./reportWebVitals";
import sidebar_en from "./translations/en/Sidebar.json";
import sidebar_es from "./translations/es/Sidebar.json";
import home_en from "./translations/en/Home.json";
import home_es from "./translations/es/Home.json";
import business_en from "./translations/en/Business.json";
import business_es from "./translations/es/Business.json";
import ui_en from "./translations/en/Ui.json";
import ui_es from "./translations/es/Ui.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      sidebar: sidebar_en,
      home: home_en,
      business: business_en,
      ui: ui_en,
    },
    es: {
      sidebar: sidebar_es,
      home: home_es,
      business: business_es,
      ui: ui_es,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
