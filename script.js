document.getElementById('find-cartridges').addEventListener('click', function() {
    const brand = document.getElementById('printer-brand').value;
    const series = document.getElementById('printer-series').value;
    const model = document.getElementById('printer-model').value;

    if (brand && series && model) {
        alert(`Searching for cartridges for ${brand} ${series} ${model}`);
    } else {
        alert('Please select all options.');
    }
    document.querySelector('.arrow-left').addEventListener('click', function() {
        console.log('Left arrow clicked');
    });
    
    document.querySelector('.arrow-right').addEventListener('click', function() {
        console.log('Right arrow clicked');
    });
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Add to Cart button clicked');
        });
    });
    
});
