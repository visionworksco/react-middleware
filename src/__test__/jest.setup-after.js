import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import matchers from 'jest-extended/all';

expect.extend(matchers);

configure({ adapter: new Adapter() });
