import {
    describe,
    it,
    expect,
    vi,
    Mock
} from 'vitest'
import {
    fireEvent,
    render,
    screen,
    act
} from '@testing-library/react'
import { 
    // BrowserRouter as Router, // Para desarrollo
    MemoryRouter // Lo mismo que BrowserRouter pero para pruebas
} from 'react-router-dom';
import Login from './Login'
import {
    getAuth
} from '../../functions/auth'

vi.mock('../../functions/auth', () => ({
    getAuth: vi.fn(),
}));
/*
vi.mock('../../functions/auth', () => ({
    default: vi.fn(),
}));
*/

const mockGetAuth = getAuth as Mock

describe('<Login />', () => {
    it('Deberias validar que se ingrese un usuario', async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        const buttonLogin = screen.getByRole('button', {
            name: 'Login'
        })
        await act(async () => {
            fireEvent.click(buttonLogin)
        })
        // const ErrorMessage = screen.getByText('Mi error')
        const ErrorMessage = await screen.findByText('Debe agregar usuario.')
        expect(ErrorMessage).toBeInTheDocument()
    })

    it('Deberias validar que se ingrese una contraseña', async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        const inputUser = screen.getByPlaceholderText('User')
        const buttonLogin = screen.getByRole('button', {
            name: 'Login'
        })
        await act(async () => {
            fireEvent.change(inputUser, {
                target: {
                    value: 'andres'
                }
            })
            fireEvent.click(buttonLogin)
        })
        // const ErrorMessage = screen.getByText('Mi error')
        const ErrorMessage = await screen.findByText('Debe agregar password.')
        expect(ErrorMessage).toBeInTheDocument()
    })

    mockGetAuth.mockRejectedValue(new Error('Error de auth'))

    it('Debería de controlar los problemas de autenticación con: getAuth', async () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        const inputUser = screen.getByPlaceholderText('User')
        const inputPassword = screen.getByPlaceholderText('Password')
        const buttonLogin = screen.getByRole('button', {
            name: 'Login'
        })
        await act(async () => {
            fireEvent.change(inputUser, {
                target: {
                    value: 'andres'
                }
            })
            fireEvent.change(inputPassword, {
                target: {
                    value: '123456789'
                }
            })
            fireEvent.click(buttonLogin)
        })
        // const ErrorMessage = screen.getByText('Mi error')
        const ErrorMessage = await screen.findByText('Error de auth')
        expect(ErrorMessage).toBeInTheDocument()
    })
})