document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    
    document.querySelectorAll('.art-item button').forEach((button, index) => {
        button.addEventListener('click', () => {
            const artItem = button.parentElement;
            const title = artItem.querySelector('h2').innerText;
            const price = artItem.querySelector('p:nth-of-type(2)').innerText;
            
            cart.push({ title, price });
            alert(`${title} has been added to your cart.`);
            console.log(cart);
        });
    });
});
