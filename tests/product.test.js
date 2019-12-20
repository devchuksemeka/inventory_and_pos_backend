const sample_add_product = (a,b) =>{
    return a+b ;
}

test('sample_add_product 2 + 3 to equal 5', () => {
    expect(sample_add_product(2, 3)).toBe(5);
});