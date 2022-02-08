import { render, screen } from '@testing-library/react';
import App from './App';

test('checking h1', () =>{
    render(<App/>)
    const el = screen.getByTestId('ttl')
    expect(el).toHaveTextContent('Welcome to react')
}) 
