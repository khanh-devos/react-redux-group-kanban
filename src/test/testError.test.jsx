import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import App from '../App';

jest.mock('axios');
jest.mock('./mock');

describe('test components', () => {
  beforeEach(() => {
    axios.get.mockImplementation((url) => Promise.reject(new Error('not found')))
  })

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should match the snapshot', async () => {
    await act(async () => {
      const { container } = render(
        <Provider store={store}>
          <App />
        </Provider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  
});
