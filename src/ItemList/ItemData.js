const productos = [
    {   
        id:0,
        name:"Yeezy 700 v2 Tephra",
        description: "If you’re looking for a tough sneaker then you need to buy the new adidas Yeezy Boost 700 V2 Tephra. This Yeezy Boost 700 V2 comes with a tephra upper, tephra midsole, and a tephra sole. These sneakers released in June 2019 and retailed for $300.",
        price: 500,
        stock: 2,

    },

    {   
        id:1,
        name: "Yeezy 700 v3 KYANITE ",
        description: "In a similar fashion to their 2020’s Azareth release, adidas and Yeezy bring back the favored blue design with the 700 V3 Kyanite in 2021.",
        price: 300,
        stock: 4,

    },

    {   
        id:2,
        name:"Yeezy 350 v2 Cinder",
        description: "This Yeezy 350 V2 is composed of a cinder Primeknit upper with a tonal side stripe. A cinder Boost cushioned midsole sole and gold outsole completes the design. These sneakers released in March of 2020 and retailed for $220.",
        price: 600,
        stock: 6,

    }
]

export const cargarProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(productos),5000)
    });
}