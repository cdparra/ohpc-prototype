// Script para cargar y procesar los datos de productos y categorías
async function loadProductData() {
  try {
    console.log('Cargando datos de productos y categorías...');
    
    // Cargar categorías nivel 1
    const categoria1Response = await fetch('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/categoria1-6dsQGZHe66Kzc3BZrhvm0nwnBBAuGG.csv');
    const categoria1Text = await categoria1Response.text();
    
    // Cargar categorías nivel 2
    const categoria2Response = await fetch('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/categoria2-H8cnpSjE4qHVgTdniMEQxt4qNQQi7p.csv');
    const categoria2Text = await categoria2Response.text();
    
    // Cargar productos
    const productosResponse = await fetch('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/productos-8UGGafiBazETU2Rl70yPv0AxzdI6Eq.csv');
    const productosText = await productosResponse.text();
    
    // Función para parsear CSV
    function parseCSV(text) {
      const lines = text.trim().split('\n');
      const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
      
      return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.replace(/"/g, ''));
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = values[index] || '';
        });
        return obj;
      });
    }
    
    const categoria1Data = parseCSV(categoria1Text);
    const categoria2Data = parseCSV(categoria2Text);
    const productosData = parseCSV(productosText);
    
    console.log('Categorías Nivel 1:', categoria1Data.slice(0, 5));
    console.log('Categorías Nivel 2:', categoria2Data.slice(0, 5));
    console.log('Productos:', productosData.slice(0, 5));
    
    // Procesar datos para la aplicación
    const processedData = {
      categorias1: categoria1Data,
      categorias2: categoria2Data,
      productos: productosData,
      
      // Crear mapas para búsqueda rápida
      categoriasMap: {},
      productosMap: {},
      
      // Rangos de precios típicos (simulados para el ejemplo)
      preciosRangos: {}
    };
    
    // Crear mapas de categorías
    categoria1Data.forEach(cat => {
      processedData.categoriasMap[cat.name] = cat;
    });
    
    categoria2Data.forEach(cat => {
      processedData.categoriasMap[cat.name] = cat;
    });
    
    // Crear mapa de productos con rangos de precios simulados
    productosData.forEach(producto => {
      processedData.productosMap[producto.name] = producto;
      
      // Simular rangos de precios típicos basados en categoría
      const precioBase = Math.random() * 100 + 10; // Entre 10 y 110 lempiras
      processedData.preciosRangos[producto.name] = {
        min: precioBase * 0.7,
        max: precioBase * 1.3,
        promedio: precioBase
      };
    });
    
    console.log('Datos procesados exitosamente');
    console.log('Total categorías nivel 1:', categoria1Data.length);
    console.log('Total categorías nivel 2:', categoria2Data.length);
    console.log('Total productos:', productosData.length);
    
    return processedData;
    
  } catch (error) {
    console.error('Error cargando datos:', error);
    return null;
  }
}

// Ejecutar la carga de datos
loadProductData();
