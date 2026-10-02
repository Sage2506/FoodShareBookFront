import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import DishListQuery from './DishListQuery';
import { getDishSummaries } from '../../bff/dishesBff';

jest.mock('../../bff/dishesBff', () => ({
    getDishSummaries: jest.fn()
}));

const renderComponent = () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false }
        }
    });

    return render(
        <QueryClientProvider client={queryClient}>
            <DishListQuery />
        </QueryClientProvider>
    );
};

test('muestra los platos recibidos desde el BFF', async () => {
    getDishSummaries.mockResolvedValue([
        { id: 1, name: 'plato 1', imageUrl: '', ingredientCount: 3 },
    ]);

    renderComponent();

    expect(
        await screen.findByText('plato 1 (3 ingredientes)')
    ).toBeInTheDocument();
});