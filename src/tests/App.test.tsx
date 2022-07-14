import { render } from '@testing-library/react';
import App from '../components/App';

describe('App component', () => {

  it('App component rendered', () => {
    const app = render(<App />).getByTestId('app')
    expect(app).toBeTruthy()
  })

})