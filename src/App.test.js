import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import App from './App';

  describe('the route', () => {
    it('should be on the home page', () => {
      const history = createBrowserHistory();
  
      render(<BrowserRouter><App /></BrowserRouter>)
    
      expect(history.location.pathname).toBe('/')
    });
  
    it('should user be on the product page', () => {
      const history = createBrowserHistory();
  
      render(<BrowserRouter><App /></BrowserRouter>)
  
      history.push('/product');
    
      expect(history.location.pathname).toBe('/product')
    });
  })



