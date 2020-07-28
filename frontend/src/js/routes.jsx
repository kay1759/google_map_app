import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import Locations from "./domains/locations/container";
import store from "./store";
import ja_JP from "./constants/ja_JP.json";
import en_AU from "./constants/en_AU.json";

const locale = window.locale;
const chooseLocale = (locale) => {
    switch(locale) {
	case 'en':
	    return en_AU
	case 'ja':
	    return ja_JP
	default:
	    return en_AU
    }
}

export default (
  <Provider store={store}>
    <IntlProvider locale={locale} messages={chooseLocale(locale)}>
      <Locations />
    </IntlProvider>
  </Provider>
);
