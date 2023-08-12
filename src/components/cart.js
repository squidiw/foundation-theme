import Alpine from "alpinejs";

Alpine.store('cart',{
    logEvent(event){
        console.log(event.target.classList)
    }
})

// Alpine.store('cart', {
//   logEvent(event) {
//     // Let's get the event's target's classes
//     console.log(event.target.classList)
//     },
//     add(id, quantity = 1){
//         let formData = {
//             'items': [{
//              'id': id,
//              'quantity': quantity
//              }]
//            };

//         //    let formData = {
//         //     'items': [{
//         //      'id': 36110175633573,
//         //      'quantity': 2
//         //      }]
//         //    };
           
//            fetch(window.Shopify.routes.root + 'cart/add.js', {
//              method: 'POST',
//              headers: {
//                'Content-Type': 'application/json'
//              },
//              body: JSON.stringify(formData)
//            })
//            .then(response => {
//              return response.json();
//            })
//            .catch((error) => {
//              console.error('Error:', error);
//            });
//     })
// }