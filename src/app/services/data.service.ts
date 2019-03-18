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
                color: 'black',
                price: 99.99,
                imageUrl: '../../assets/products/images/laptop.jpg'
              },
              {
                productName: 'laptop2',
                productSKU: 'l2',
                color: 'black',
                price: 99.99,
                imageUrl: '../../assets/products/images/laptop.jpg'
              },
              {
                productName: 'laptop3',
                productSKU: 'l3',
                color: 'white',
                price: 99.99,
                imageUrl: '../../assets/products/images/laptop.jpg'
              }
            ]
          },
          {
            name: 'smart',
            products: [
              {
                productName: 'smartwatch1',
                productSKU: 'sw1',
                color: 'black',
                price: 99.99,
                imageUrl: '../../assets/products/images/smartwatch-1.jpg'
              },
              {
                productName: 'smartwatch2',
                productSKU: 'sw2',
                color: 'black',
                price: 99.99,
                imageUrl: '../../assets/products/images/smartwatch-2.jpg'
              },
              {
                productName: 'smartwatch3',
                productSKU: 'sw3',
                color: 'white',
                price: 99.99,
                imageUrl: '../../assets/products/images/smartwatch-3.jpg'
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
                  color: 'black',
                  price: 99.99,
                  imageUrl: '../../assets/products/images/phone.jpg'
                },
                {
                  productName: 'phone2',
                  productSKU: 'p2',
                  color: 'black',
                  price: 99.99,
                  imageUrl: '../../assets/products/images/phone.jpg'
                },
                {
                  productName: 'phone3',
                  productSKU: 'p3',
                  color: 'white',
                  price: 99.99,
                  imageUrl: '../../assets/products/images/phone-2.jpg'
                }
              ]
            }],
        }]
    }];
  dummyProducts = [
    {
      category: 'IT',
      productName: 'smartwatch1',
      productSKU: 'sw1',
      color: 'black',
      price: 99.99,
      imageUrl: '../../assets/products/images/smartwatch-1.jpg',
      shortDescription: 'the quick brown fox jumped over the lazy dog',
      icons: ['favorite', 'bookmark', 'share'],
      brand: 'Earth corp.',
      features: {
        model: 'first-ever barely works',
        OS: 'Tizen OS 4.0',
        batteryLife: '472 mAh',
        RAM: '768 MB',
        storage: '4 GB',
        processor: 'Dual core',
        displayType: 'AMOLED touchscreen',
        displaySize: '3.5 CM',
        resolution:	'454X454',
        memoryCardSlot: '',
        GPS: true,
        bluetooth: 'Bluetooth 4.2',
        WLAN: 'Wi-Fi 802,11',
        camera: true,
        notifications: true,
        loudspeaker: true,
        heartRateMonitor: true,
        distance: true,
        burnedCalories: true,
        weight: '46 g',
        dimension: '46.5X46.5X10.6 mm'
      }
    },
    {
      category: 'IT',
      productName: 'smartwatch2',
      productSKU: 'sw2',
      color: 'black',
      price: 99.99,
      imageUrl: '../../assets/products/images/smartwatch-2.jpg',
      shortDescription: 'the quick brown fox jumped over the lazy dog',
      icons: ['favorite', 'bookmark', 'share'],
      brand: 'Great corp.',
      features: {
        model: 'first-ever barely works',
        OS: 'Tizen OS 4.0',
        batteryLife: '472 mAh',
        RAM: '768 MB',
        storage: '4 GB',
        processor: 'Dual core',
        displayType: 'Super AMOLED',
        displaySize: '3.5 CM',
        resolution:	'454X454',
        memoryCardSlot: '',
        GPS: true,
        bluetooth: 'Bluetooth 4.2',
        WLAN: 'Wi-Fi 802,11',
        camera: true,
        notifications: true,
        loudspeaker: true,
        heartRateMonitor: true,
        distance: true,
        burnedCalories: true,
        weight: '46 g',
        dimension: '46.5X46.5X10.6 mm'
      }
    },
    {
      category: 'IT',
      productName: 'smartwatch3',
      productSKU: 'sw3',
      color: 'white',
      price: 99.99,
      imageUrl: '../../assets/products/images/smartwatch-3.jpg',
      shortDescription: 'the quick brown fox jumped over the lazy dog',
      icons: ['favorite', 'bookmark', 'share'],
      brand: 'Mars corp.',
      features: {
        model: 'state-of-art',
        OS: 'Tizen OS 5.0',
        batteryLife: '572 mAh',
        RAM: '1024 MB',
        storage: '6 GB',
        processor: 'Tripple core',
        displayType: 'Giga AMOLED',
        displaySize: '4.2 CM',
        resolution:	'554X554',
        memoryCardSlot: '',
        GPS: true,
        bluetooth: 'Bluetooth 4.2',
        WLAN: 'Wi-Fi 802,11',
        camera: true,
        notifications: true,
        loudspeaker: true,
        heartRateMonitor: true,
        distance: true,
        burnedCalories: true,
        weight: '46 g',
        dimension: '46.5X46.5X10.6 mm'
      }
    }
  ];

  public GetITProducts() {
   // let categoryData = this.data.filter(x => x.category.keys.name === 'IT');
  //  let categoryData = this.data.filter(x => x.category.name === 'IT');
  //   console.log(JSON.stringify(categoryData));
    //$log.debug(angular.toJson(categoryData, true));

  }

  public getPromoProducts() {
    return this.data.filter(x => x.category.filter(y => y.subcategory.keys.name === 'smart'));
  }

  public getDummyData() {
    return this.dummyProducts;
  }

  public getFilteredProduct(filteredProduct: string) {
    return this.dummyProducts.filter(product => product.productName === filteredProduct);
  }

  public getFilteredProductCategory(filteredProduct: string) {
    const category =  this.dummyProducts.filter(product => product.productName ===  filteredProduct).map(x => x.category);
    return category[0];
  }
}
