import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

/**
 *  unit testing
 *  for given inputs 
 *  chcking expected vs actual results    
 * 
 */

test('checking h1', () => { // this is test case
    render(<App />) // please load app component
    const h1 = screen.getByTestId('ttl') // get perticular element in side app component
    expect(h1).toHaveTextContent('Welcome to react') // check expected and actual values
}) 

// tdd - test driven development
test('check button click', () => {
    render(<App />)

    const h1 = screen.getByTestId('ttl') 
    expect(h1).toHaveTextContent('Welcome to react')

    const btn = screen.getByTestId('btn')
    fireEvent.click(btn) // simulation of button click
    
    expect(h1).toHaveTextContent('clicked')
})

test('check style after click', () => {
    render(<App />)

    const btn = screen.getByTestId('btn')
    fireEvent.click(btn)

    const ip = screen.getByTestId('ip')
    expect(ip.style.border).toBe('1px solid blue')
})
