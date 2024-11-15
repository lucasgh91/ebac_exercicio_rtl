import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve inserir um comentário 1', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Comentário 1'
            }
        })
        fireEvent.click(screen.getByTestId('btn-enviar'))
        expect(screen.getByText('Comentário 1')).toBeInTheDocument()
    });

    it('Deve inserir um comentário 2', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('textarea'), {
            target: {
                value: 'Comentário 2'
            }
        })
        fireEvent.click(screen.getByTestId('btn-enviar'))
        expect(screen.getByText('Comentário 2')).toBeInTheDocument()
    });
});