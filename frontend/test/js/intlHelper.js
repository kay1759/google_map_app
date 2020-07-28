import { shallow, mount } from 'enzyme'
import { IntlProvider } from 'react-intl';

const messages = require('../../src/js/constants/en_AU.json');
const defaultLocale = 'en-AU';
const locale = defaultLocale;

export const shallowWithIntl = (node) => {
    return shallow(node, {
	wrappingComponent: IntlProvider,
	wrappingComponentProps: {
	    locale,
	    defaultLocale,
	    messages,
	},
    })};

export const mountWithIntl = (node) => {
    return mount(node, {
	wrappingComponent: IntlProvider,
	wrappingComponentProps: {
	    locale,
	    defaultLocale,
	    messages,
	},
    })};
