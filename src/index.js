import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import messages_es from "./locales/es";
import messages_en from "./locales/en";

import JobsList from "./components/jobsList";

const messages = {
  es: messages_es,
  en: messages_en,
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={navigator.language} messages={messages[language]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
