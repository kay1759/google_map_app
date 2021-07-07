import { shallow, mount } from 'enzyme'
import { IntlProvider } from 'react-intl';

const messages = require('../../src/js/constants/en_AU.json');
const defaultLocale = 'en-AU';
const locale = defaultLocale;

export const shallowWithIntl = (node: JSX.Element) => {
    return shallow(node, {
	wrappingComponent: IntlProvider,
	wrappingComponentProps: {
	    locale,
	    defaultLocale,
	    messages,
	},
    })};

export const mountWithIntl = (node: JSX.Element) => {
    return mount(node, {
	wrappingComponent: IntlProvider,
	wrappingComponentProps: {
	    locale,
	    defaultLocale,
	    messages,
	},
    })};
