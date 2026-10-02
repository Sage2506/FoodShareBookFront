import React from 'react';
import { useQuery } from 'react-query';
import { getDishSummaries } from '../../bff/dishesBff';
import useDishFilterStore from '../../stores/useDishFilterStore';



function DishListQuery() {
    const setSearchTerm = useDishFilterStore((state) => state.setSearchTerm);
    const searchTerm = useDishFilterStore((state) => state.searchTerm);

    const { data: dishes = [], isLoading, isError, error } = useQuery(
        'dishes',
        getDishSummaries
    );

    const visibleDishes = dishes.filter((dish) => dish.name.toLowerCase().includes(searchTerm.toLowerCase()))

    if (isLoading) {
        return <p>Cargando platos ...</p>;
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <section>
            <h1>Platos con React Query</h1>
            <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar platos..."
            ></input>
            <ul>
                {visibleDishes.map(dish => (
                    <li key={dish.id}>{dish.name} ({dish.ingredientCount} ingredientes)</li>
                ))}
            </ul>
        </section>
    );
}

export default DishListQuery;

