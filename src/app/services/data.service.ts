// ['laptops', 'GamingPC', 'Monitors', 'PC']

export class DataService {
  data = [
    {
      category:
        [{
          name: 'IT',
          subcategory: [{
            name: 'laptops',
            products: [
              {
                productName: 'laptop1',
                productSKU: 'l1',
                color: 'black'
              },
              {
                productName: 'laptop2',
                productSKU: 'l2',
                color: 'black'
              },
              {
                productName: 'laptop3',
                productSKU: 'l3',
                color: 'white'
              }
            ]
          }]
        },
        {
          name: 'PHONES & TABLETS',
          subcategory: [
            {
              name: 'phones',
              products: [
                {
                  productName: 'phone1',
                  productSKU: 'p1',
                  color: 'black'
                },
                {
                  productName: 'phone2',
                  productSKU: 'p2',
                  color: 'black'
                },
                {
                  productName: 'phone3',
                  productSKU: 'p3',
                  color: 'white'
                }
              ]
            },
            {
              name: 'smart',
              products: [
                {
                  productName: 'smartwatch1',
                  productSKU: 'sw1',
                  color: 'black'
                },
                {
                  productName: 'smartwatch2',
                  productSKU: 'sw2',
                  color: 'black'
                },
                {
                  productName: 'smartwatch3',
                  productSKU: 'sw3',
                  color: 'white'
                }
              ]
            }],
        }]
    }];
  }
