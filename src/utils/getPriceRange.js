export const getPriceRange = (products) => {
    const prices = products.map(p => p.price);
    return {
        min: Math.min(...prices),
        max: Math.max(...prices)
    };
};