import React from "react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import Locations from "./domains/locations/Resources";
import store from "./store";
import ja_JP from "./constants/ja_JP.json";
import en_AU from "./constants/en_AU.json";

const locale: string = (window as any).locale;
const chooseLocale = (locale: string) => {
  switch (locale) {
    case "en":
      return en_AU;
    case "ja":
      return ja_JP;
    default:
      return en_AU;
  }
};

export default (
  <Provider store={store}>
    <IntlProvider locale={locale} messages={chooseLocale(locale)}>
      <Locations />
    </IntlProvider>
  </Provider>
);
