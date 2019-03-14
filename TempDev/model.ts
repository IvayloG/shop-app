  public data: {
    category: string,
    subcategory: string,
    productName: string,
    productSKU: string,
    color: string
  }[] = [];
  
  
  
  
    public data: {
    category: {
      name: string,
      subcategory: {
        name: string,
        products: {
          productName: string,
          productSKU: string,
          color: string
        } []
      } []
    }[]
  }[] = [];
  