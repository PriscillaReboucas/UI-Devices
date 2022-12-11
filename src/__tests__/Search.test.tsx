import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from '../components/Search';
import DevicesProvider from '../DevicesContext';

describe('Search component', () => {
    type TestElement = Document | Element | Window | Node;

    function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e
    };

    test('Should return the correct input value', () => {
        render(
            <DevicesProvider>
                <Search />
            </DevicesProvider> 
        );

        const input = screen.getByLabelText('search__input');
        fireEvent.change(input, {target: {value: 'airMax'}});

        expect(hasInputValue(input, 'airMax')).toBe(true);
    });
});