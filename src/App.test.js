import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import  allReducers from './reducers';
import { createStore, combineReducers } from 'redux';
const store = createStore(allReducers);

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store} >
    <App />
  </Provider>);
  const linkElement = getByText(/Visual Regression Testing is pretty awesome!/i);
  expect(linkElement).toBeInTheDocument();
});
