import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <Home
        props={
          (postsData = [
            {
              userId: 1,
              id: 1,
              title:
                'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            },
          ])
        }
      />
    );
    screen.debug();

    const headingText = screen.getByText('Posts');

    expect(headingText).toBeInTheDocument();
  });
});
