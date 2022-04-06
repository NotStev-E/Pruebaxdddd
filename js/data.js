var data = [
    //VIDEOCONSOLAS
    ['PlayStation4',
    'Videoconsola',
    3000,
    2857.5,
    12345,
    'Sistema electrónico de entretenimiento que ejecuta videojuegos.',
    false, 
    'Sony',
    true, 
    true],
    ['PlayStation5', 'Videoconsola', 9755, 7000, 67891, 'Es una videoconsola de sobremesa lanzada por Sony Computer Entertainment.', true, 'Sony', true, false],
    ['Xbox One', 'Videoconsola', 3000, 2490, 32145, 'Sistema electrónico de entretenimiento que ejecuta videojuegos.', true, 'Microsoft', true, true],
    ['Xbox Series S', 'Videoconsola', 9000, 6000, 89452, 'Es una consola de juegos totalmente digital para disfrutar de juegos sin discos.', true, 'Microsoft', false, false],
    //BEBIDAS
    ['Monster Energy', 'Bebida', 20, 15, 87439, 'es una bebida energizante que fue lanzada y comercializada por Hansen Natural en el año 2002.', true, 'Monster Energy', true, true],
    ['Red Bull', 'Bebida', 15, 10, 78549, 'Es una bebida energética distribuida por la compañía austríaca Red Bull GmbH.​', true, 'Red Bull GmbH',false, true],
    ['Coca-Cola', 'Bebida', 8, 5, 98984, 'Es una bebida azucarada gaseosa vendida a nivel mundial en tiendas, restaurantes y máquinas expendedoras.', true, 'The Coca-Cola Company', true, true],
    //BOTANAS
    ['Tortrix Limón', 'Botana', 1, 0.6, 92843, 'Es una botana hecha de maiz', false, 'TorTrix', true, true],
    ['Pringles', 'Botana', 5, 3, 98343, 'Está compuesto por patata deshidratada, almidón de trigo y harinas mezcladas con aceite vegetal.', true, 'Pringles', true, true],
    ['Sabritas', 'Botana', 3, 1.5, 84571, 'Sabritas está hecha con papa, aceite, un poco de sal y un cuarto ingrediente secreto.', true, 'Sabritas', true, true],
];


// FILTRAR LOS DATOS DE LOS PRODUCTOS
// DE IMPORTACION Y DISPONIBLES PARA MAYOREO
for(var i = 0; i < 10; i++){
    var a;
    if(data[i][6] == true){
        a = true
        if(data[i][8] == true){
            var e;
            e = true
            if(a == true, e == true){
                console.log(data[i][0]);
            }
        }
    }
}