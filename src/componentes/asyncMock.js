const products = [
    {
      id: '1',
      name: 'Kimono blanco',
      price: 10000,
      category: 'kimonos',
      description: 'Kimono blanco para artes marciales',
      image: '/productos/kimono-blanco.jpg',
      stock: 5
    },
    {
      id: '2',
      name: 'Kimono azul',
      price: 20000,
      category: 'kimonos',
      description: 'Kimono azul para artes marciales',
      image: '/productos/kimono-azul.jpg',
      stock: 10
    },
    {
      id: '3',
      name: 'Kimono negro',
      price: 30000,
      category: 'kimonos',
      description: 'Kimono negro para artes marciales',
      image: '/productos/kimono-negro.jpg',
      stock: 15
    },
    {
      id: '4',
      name: 'Kimono rojo',
      price: 30000,
      category: 'kimonos',
      description: 'Kimono rojo para artes marciales',
      image: '/productos/kimono-rojo.jpg',
      stock: 15
    },
    {
      id: '5',
      name: 'Cinturón blanco',
      price: 10000,
      category: 'accesorios',
      description: 'Cinturón blanco para artes marciales',
      image: '/productos/cinturon-blanco.jpg',
      stock: 10
    },
    {
      id: '6',
      name: 'Cinturón amarillo',
      price: 5000,
      category: 'accesorios',
      description: 'Cinturón amarillo para artes marciales',
      image: '/productos/cinturon-amarillo.jpg',
      stock: 20
    },
    {
      id: '7',
      name: 'Cinturón verde',
      price: 5000,
      category: 'accesorios',
      description: 'Cinturón verde para artes marciales',
      image: '/productos/cinturon-verde.jpg',
      stock: 30
    },
    {
      id: '8',
      name: 'Cinturón purpura',
      price: 5000,
      category: 'accesorios',
      description: 'Cinturón purpura para artes marciales',
      image: '/productos/cinturon-purpura.jpg',
      stock: 30
    },
    {
      id: '9',
      name: 'Bucal blanco',
      price: 5000,
      category: 'protecciones',
      description: 'Bucal blanco para artes marciales',
      image: '/productos/bucal-blanco.jpg',
      stock: 10
    },
    {
      id: '10',
      name: 'Bucal azul',
      price: 20000,
      category: 'protecciones',
      description: 'Bucal azul para artes marciales',
      image: '/productos/bucal-azul.jpg',
      stock: 20
    },
    {
      id: '11',
      name: 'Bucal negro',
      price: 30000,
      category: 'protecciones',
      description: 'Bucal negro para artes marciales',
      image: '/productos/bucal-negro.jpg',
      stock: 30
    },
    {
      id: '12',
      name: 'Bucal rojo',
      price: 30000,
      category: 'protecciones',
      description: 'Bucal rojo para artes marciales',
      image: '/productos/bucal-rojo.jpg',
      stock: 30
    }
  ]

  export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
  }

  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId))
      }, 500)
    })
  }

  export const getProductsByCategory = (productsByCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(prod => prod.category === productsByCategory);
        resolve(filteredProducts);
      }, 500);
    });
  };  