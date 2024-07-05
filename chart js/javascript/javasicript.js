let elList = document.getElementById("demo");

let API = "https://dummyjson.com/products";

fetch(API).then((response) => response.json()).then((data) => {
        data.products.map((item) => {
        const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', '', 'Blue'],
            datasets: [{
              label: '# of Votes',
              data: [item.dimensions.width, item.dimensions.height, item.dimensions.depth, item.weight, item.rating, item.stock, item.price, item.discountPercentage],
              borderWidth: 1,
              width:"500px"
                    
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
        });
    })