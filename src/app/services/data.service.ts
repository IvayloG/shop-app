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
          name: 'PHONES&TABLETS',
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
      price: 99.99,
      imageUrl: '../../assets/products/images/smartwatch-1.jpg',
      shortDescription: 'the quick brown fox jumped over the lazy dog',
      icons: ['favorite', 'bookmark', 'share'],
      filters: [
        { brand: 'Earth corp.' },
        { color: 'black' },
        { promotion: 'Hot Sale' }
      ],
      features: {
        model: 'first-ever barely works',
        OS: 'Tizen OS 4.0',
        batteryLife: '472 mAh',
        RAM: '768 MB',
        storage: '4 GB',
        processor: 'Dual core',
        displayType: 'AMOLED touchscreen',
        displaySize: '3.5 CM',
        resolution: '454X454',
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
      price: 99.99,
      imageUrl: '../../assets/products/images/smartwatch-2.jpg',
      shortDescription: 'the quick brown fox jumped over the lazy dog',
      icons: ['favorite', 'bookmark', 'share'],
      filters: [
        { brand: 'Great corp' },
        { color: 'black' },
        { promotion: 'Limited' }
      ],
      features: {
        model: 'first-ever barely works',
        OS: 'Tizen OS 4.0',
        batteryLife: '472 mAh',
        RAM: '768 MB',
        storage: '4 GB',
        processor: 'Dual core',
        displayType: 'Super AMOLED',
        displaySize: '3.5 CM',
        resolution: '454X454',
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
      price: 99.99,
      imageUrl: '../../assets/products/images/smartwatch-3.jpg',
      shortDescription: 'the quick brown fox jumped over the lazy dog',
      icons: ['favorite', 'bookmark', 'share'],
      filters: [
        { brand: 'Mars corp.' },
        { color: 'white' },
        { promotion: 'Days offer' }
      ],
      features: {
        model: 'state-of-art',
        OS: 'Tizen OS 5.0',
        batteryLife: '572 mAh',
        RAM: '1024 MB',
        storage: '6 GB',
        processor: 'Tripple core',
        displayType: 'Giga AMOLED',
        displaySize: '4.2 CM',
        resolution: '554X554',
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
    const category = this.dummyProducts.filter(product => product.productName === filteredProduct).map(x => x.category);
    return category[0];
  }

  public getFiltersForProductCategory(category: string): any {
    const filters = [];
    const productsByCategory = this.getDummyData().filter(cat => cat.category === category);
    filters.push(productsByCategory);

    const availableFilters = [];
    const uniqueFilters = [];
    productsByCategory.forEach((product, index) => {
      availableFilters.push(product.filters);
    });

    const brandsArr = availableFilters.map((filter, i) => filter[0].brand);
    const colorsArr = availableFilters.map((filter, i) => filter[1].color);
    const promosArr = availableFilters.map((filter, i) => filter[2].promotion);

    const uniqueBrandsArr = Array.from(new Set(brandsArr));
    const uniqueColorsArr = Array.from(new Set(colorsArr));
    const uniquePromosArr = Array.from(new Set(promosArr));
    uniqueFilters.push({brands: uniqueBrandsArr}, {colors: uniqueColorsArr}, {promos: uniquePromosArr});
    return uniqueFilters;
  }











  // Temp
  // public getFiltersForProductCategory(category: string): any {
  //   const filters = ['brand', 'color', 'promotion'];
  //   return filters;
  // }

  // public getBrands () {
  //   const brands = ['a', 'b', 'c', 'd'];
  //   return brands;
  // }

  // public getColors () {
  //   const colors = ['1', '2', '3', '4'];
  //   return colors;
  // }

  // public getPromotions () {
  //   const promotions = ['Hot Sale', 'Days offer', 'Limited'];
  //   return promotions;
  // }
}
