import {
    describe,
    it,
    expect,
    vi
} from 'vitest';
import { 
    render,
    screen,
    fireEvent,
    act
} from '@testing-library/react'
import Button from './Button';

describe('<Button />', () => {
    it('Deberías renderizar el botón.', () => {
        render(<Button label='click' />);
        const button = screen.getByText('click');
        expect(button).toBeInTheDocument();
    });

    it('Debería de llamar a la función onClick.', async () => {
        const handleClick = vi.fn();
        render(<Button label='click' onClick={handleClick} />);
        const button = screen.getByText('click');
        await act(() => {
            fireEvent.click(button);
            // fireEvent.click(button);
        });
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});