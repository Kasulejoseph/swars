import { render, screen } from '@testing-library/react';
import { Context, PageProvider } from '../index';

describe('PageProvider', () => {
  it('should renders children', () => {
    render(
      <PageProvider>
        <div>Test</div>
      </PageProvider>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should provides page and setPage through context', () => {
    let contextValue;
    render(
      <Context.Consumer>
        {(value) => {
          contextValue = value;
        }}
      </Context.Consumer>
    );
    expect(contextValue.page).toBeDefined();
    expect(typeof contextValue.page).toBe('number');
    expect(contextValue.setPage).toBeDefined();
    expect(typeof contextValue.setPage).toBe('function');
  });
});