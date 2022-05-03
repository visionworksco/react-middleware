import '@testing-library/jest-dom/extend-expect';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';
import matchers from 'jest-extended/all';

expect.extend(matchers);

configure({ adapter: new Adapter() });
