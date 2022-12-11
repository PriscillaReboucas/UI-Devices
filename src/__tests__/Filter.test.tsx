import { fireEvent, render, screen } from '@testing-library/react';
import { Filter } from '../components/Filter';
import DevicesProvider from '../DevicesContext';

describe('Filter component', () => {
    test('Should show modal after onClick', async () => {
        const spy = jest.fn();
        render(
            <DevicesProvider>
                <Filter />
            </DevicesProvider>
        );

        const filterBtn = screen.getByTestId('filter__name');
        fireEvent.click(filterBtn);

        const modalFilter = screen.getByTestId('modal__header__title');
        expect(modalFilter).toHaveTextContent('Filter');
    });
});