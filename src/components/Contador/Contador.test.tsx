import {
    describe,
    it,
    expect
} from 'vitest';
import {
    render,
    screen,
    fireEvent,
    act
} from '@testing-library/react';
import Contador from './Contador';

describe('<Contador />', () => {
    it('Debería mostrar el valor inicial', () => {
        render(<Contador />);
        const contador = screen.getByText('Contador: 0');
        expect(contador).toBeInTheDocument();
    });

    it('Debería incrementar el contador', async () => {
        render(<Contador />);
        const boton = screen.getByText('Incrementar');
        await act(() => {
            fireEvent.click(boton);
        });
        const contador = screen.getByText('Contador: 1');
        expect(contador).toBeInTheDocument();
    });
});