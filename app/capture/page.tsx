'use client'

import { useState, useEffect, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Camera, MapPin, Save, Upload, Smartphone, Globe, Plus, Search, AlertTriangle, CheckCircle, XCircle, Trash2, Edit, Image, FileText, X } from 'lucide-react'
import Link from "next/link"

// Datos de inspectores
const inspectores = [
  "Gerardo Baca",
  "Allan Velásquez", 
  "José Armando Trejo",
  "Hernán Madariaga",
  "Luis Ernesto Polanco Rodriguez",
  "Edwin Davila",
  "Deny Mejia"
]

// Tipos de plaza y establecimientos
const tiposPlaza = [
  "Distribuidores de insumos agricolas",
  "Supermercados",
  "Ferias",
  "Ahorroferias", 
  "Mercados",
  "Farmacia",
  "Ferreterias"
]

const establecimientosPorTipo = {
  "Supermercados": [
    "La Colonia",
    "Paiz",
    "La Despensa",
    "Familiar", 
    "Wal Mart"
  ],
  "Ferias": [
    "BANASUPRO",
    "Ferias agropecuarias"
  ],
  "Mercados": [
    "Zonal Belén",
    "Juan Pablo",
    "Villanueva",
    "El mayoreo"
  ],
  "Distribuidores de insumos agricolas": [],
  "Ahorroferias": [],
  "Farmacia": [],
  "Ferreterias": []
}

const unidadesMedida = [
  "kg", "rollos", "unidad", "pulgadas", "cubeta", "galon", 
  "litros", "onzas", "ml", "libra", "m", "pie"
]

// Datos simulados de productos
const productosData = {
  categorias1: [
    { name: "c1_01", label: "Alimentos", categoria1: "Alimentos" },
    { name: "c1_15", label: "Construcción", categoria1: "Construcción" },
    { name: "c1_03", label: "Bebidas", categoria1: "Bebidas" },
    { name: "c1_04", label: "Medicamentos", categoria1: "Medicamentos" },
    { name: "c1_05", label: "Ferretería", categoria1: "Ferretería" }
  ],
  categorias2: [
    { name: "c2_01", label: "GRANOS BÁSICOS", categoria1: "c1_01", categoria1_label: "Alimentos" },
    { name: "c2_02", label: "PROTEÍNAS", categoria1: "c1_01", categoria1_label: "Alimentos" },
    { name: "c2_03", label: "LÁCTEOS", categoria1: "c1_01", categoria1_label: "Alimentos" },
    { name: "c2_04", label: "ACEITES", categoria1: "c1_01", categoria1_label: "Alimentos" },
    { name: "c2_15", label: "CONSTRUCCIÓN", categoria1: "c1_15", categoria1_label: "Construcción" },
    { name: "c2_16", label: "MEDICAMENTOS BÁSICOS", categoria1: "c1_04", categoria1_label: "Medicamentos" },
    { name: "c2_17", label: "HERRAMIENTAS", categoria1: "c1_05", categoria1_label: "Ferretería" }
  ],
  productos: [
    {
      name: "p001",
      label: "ARROZ BLANCO",
      nro: "001",
      categoria1: "c1_01",
      categoria1_label: "Alimentos",
      categoria2: "c2_01", 
      categoria2_label: "GRANOS BÁSICOS",
      unidad: "libra",
      producto: "ARROZ",
      presentacion: "1 libra",
      marca: "Diana"
    },
    {
      name: "p002",
      label: "FRIJOLES ROJOS",
      nro: "002", 
      categoria1: "c1_01",
      categoria1_label: "Alimentos",
      categoria2: "c2_01",
      categoria2_label: "GRANOS BÁSICOS", 
      unidad: "libra",
      producto: "FRIJOLES",
      presentacion: "1 libra",
      marca: "La Costeña"
    },
    {
      name: "p003",
      label: "ACEITE VEGETAL",
      nro: "003",
      categoria1: "c1_01",
      categoria1_label: "Alimentos",
      categoria2: "c2_04",
      categoria2_label: "ACEITES",
      unidad: "litros",
      producto: "ACEITE",
      presentacion: "1 litro",
      marca: "Mazola"
    },
    {
      name: "p004",
      label: "LECHE ENTERA",
      nro: "004",
      categoria1: "c1_01",
      categoria1_label: "Alimentos",
      categoria2: "c2_03",
      categoria2_label: "LÁCTEOS",
      unidad: "litros",
      producto: "LECHE",
      presentacion: "1 litro",
      marca: "Lacthosa"
    },
    {
      name: "p005",
      label: "HUEVOS BLANCOS",
      nro: "005",
      categoria1: "c1_01",
      categoria1_label: "Alimentos",
      categoria2: "c2_02",
      categoria2_label: "PROTEÍNAS",
      unidad: "unidad",
      producto: "HUEVOS",
      presentacion: "12 unidades",
      marca: "Granja Lenca"
    },
    {
      name: "p006",
      label: "POLLO ENTERO",
      nro: "006",
      categoria1: "c1_01",
      categoria1_label: "Alimentos",
      categoria2: "c2_02",
      categoria2_label: "PROTEÍNAS",
      unidad: "libra",
      producto: "POLLO",
      presentacion: "por libra",
      marca: "Campeón"
    },
    {
      name: "p571",
      label: "CANALETA 2 X 6",
      nro: "571",
      categoria1: "c1_15",
      categoria1_label: "Construcción",
      categoria2: "c2_15",
      categoria2_label: "CONSTRUCCIÓN",
      unidad: "unidad",
      producto: "CANALETA",
      presentacion: "2 X 6",
      marca: "Tangit"
    },
    {
      name: "p007",
      label: "ACETAMINOFÉN 500MG",
      nro: "007",
      categoria1: "c1_04",
      categoria1_label: "Medicamentos",
      categoria2: "c2_16",
      categoria2_label: "MEDICAMENTOS BÁSICOS",
      unidad: "unidad",
      producto: "ACETAMINOFÉN",
      presentacion: "caja 20 tabletas",
      marca: "Bayer"
    },
    {
      name: "p008",
      label: "MARTILLO 16 OZ",
      nro: "008",
      categoria1: "c1_05",
      categoria1_label: "Ferretería",
      categoria2: "c2_17",
      categoria2_label: "HERRAMIENTAS",
      unidad: "unidad",
      producto: "MARTILLO",
      presentacion: "16 onzas",
      marca: "Stanley"
    }
  ],
  preciosRangos: {
    "p001": { min: 15, max: 25, promedio: 20 },
    "p002": { min: 35, max: 50, promedio: 42 },
    "p003": { min: 45, max: 65, promedio: 55 },
    "p004": { min: 25, max: 35, promedio: 30 },
    "p005": { min: 40, max: 60, promedio: 50 },
    "p006": { min: 35, max: 45, promedio: 40 },
    "p571": { min: 80, max: 120, promedio: 100 },
    "p007": { min: 15, max: 25, promedio: 20 },
    "p008": { min: 150, max: 250, promedio: 200 }
  }
}

export default function CapturePage() {
  // Estado del formulario principal
  const [sessionData, setSessionData] = useState({
    inspectores: [],
    tipoPlaza: "",
    plazaOtra: "",
    establecimiento: "",
    establecimientoOtro: "",
    fecha: new Date().toISOString().split('T')[0],
    nombreEncuestado: "",
    firmaEncuestado: "",
    observacionesGenerales: ""
  })

  // Estado para el producto actual que se está agregando
  const [currentProduct, setCurrentProduct] = useState({
    busquedaProducto: "",
    categoria1: "",
    categoria2: "",
    producto: "",
    presentacionSugerida: true,
    unidadAlternativa: "",
    cantidadAlternativa: "",
    presentacionAlternativa: "",
    marcaSugerida: true,
    marcaAlternativa: "",
    precio: "",
    observaciones: "",
    fotos: []
  })

  // Lista de productos agregados
  const [productosAgregados, setProductosAgregados] = useState([])
  
  // Estados de UI
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [priceAlert, setPriceAlert] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [showProductResults, setShowProductResults] = useState(false)
  const [editingProductIndex, setEditingProductIndex] = useState(-1)

  // Filtrar productos basado en búsqueda
  const productosFilteredBySearch = useMemo(() => {
    if (!currentProduct.busquedaProducto.trim()) return []
    
    const searchTerm = currentProduct.busquedaProducto.toLowerCase()
    return productosData.productos.filter(producto => 
      producto.label.toLowerCase().includes(searchTerm) ||
      producto.producto.toLowerCase().includes(searchTerm) ||
      producto.categoria1_label.toLowerCase().includes(searchTerm) ||
      producto.categoria2_label.toLowerCase().includes(searchTerm) ||
      (producto.marca && producto.marca.toLowerCase().includes(searchTerm))
    ).slice(0, 10)
  }, [currentProduct.busquedaProducto])

  // Filtrar categorías y productos basado en selecciones
  const categoriasNivel1Disponibles = productosData.categorias1
  const categoriasNivel2Disponibles = productosData.categorias2.filter(
    cat => !currentProduct.categoria1 || cat.categoria1 === currentProduct.categoria1
  )
  const productosDisponibles = productosData.productos.filter(producto => {
    if (currentProduct.categoria2) {
      return producto.categoria2 === currentProduct.categoria2
    }
    if (currentProduct.categoria1) {
      return producto.categoria1 === currentProduct.categoria1
    }
    return true
  })

  // Obtener establecimientos disponibles según tipo de plaza
  const establecimientosDisponibles = sessionData.tipoPlaza ? 
    establecimientosPorTipo[sessionData.tipoPlaza] || [] : []

  // Manejar selección de inspectores múltiples
  const handleInspectorToggle = (inspector) => {
    setSessionData(prev => ({
      ...prev,
      inspectores: prev.inspectores.includes(inspector)
        ? prev.inspectores.filter(i => i !== inspector)
        : [...prev.inspectores, inspector]
    }))
  }

  // Manejar selección de producto desde búsqueda
  const handleProductSearchSelect = (producto) => {
    setSelectedProduct(producto)
    setCurrentProduct(prev => ({ 
      ...prev, 
      producto: producto.name,
      categoria1: producto.categoria1,
      categoria2: producto.categoria2,
      busquedaProducto: producto.label
    }))
    setShowProductResults(false)
  }

  // Manejar selección de producto desde categorías
  const handleProductSelect = (productId) => {
    const producto = productosData.productos.find(p => p.name === productId)
    setSelectedProduct(producto)
    setCurrentProduct(prev => ({ ...prev, producto: productId }))
  }

  // Validar precio y mostrar alertas
  const handlePriceChange = (precio) => {
    setCurrentProduct(prev => ({ ...prev, precio }))
    
    if (selectedProduct && precio) {
      const precioNum = parseFloat(precio)
      const rango = productosData.preciosRangos[selectedProduct.name]
      
      if (rango) {
        if (precioNum < rango.min) {
          setPriceAlert({
            type: "warning",
            message: `⚠️ Precio muy bajo. El rango típico para ${selectedProduct.label} es L.${rango.min.toFixed(2)} - L.${rango.max.toFixed(2)}. Por favor verifique el precio registrado.`
          })
        } else if (precioNum > rango.max) {
          setPriceAlert({
            type: "warning", 
            message: `⚠️ Precio muy alto. El rango típico para ${selectedProduct.label} es L.${rango.min.toFixed(2)} - L.${rango.max.toFixed(2)}. Por favor verifique el precio registrado.`
          })
        } else {
          setPriceAlert({
            type: "success",
            message: `✅ Precio dentro del rango esperado (L.${rango.min.toFixed(2)} - L.${rango.max.toFixed(2)})`
          })
        }
      }
    } else {
      setPriceAlert(null)
    }
  }

  // Manejar carga de archivos
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      type: file.type,
      size: file.size,
      url: URL.createObjectURL(file)
    }))
    
    setCurrentProduct(prev => ({
      ...prev,
      fotos: [...prev.fotos, ...newFiles]
    }))
  }

  // Eliminar foto
  const removePhoto = (photoId) => {
    setCurrentProduct(prev => ({
      ...prev,
      fotos: prev.fotos.filter(foto => foto.id !== photoId)
    }))
  }

  // Agregar producto a la lista
  const addProductToList = () => {
    if (!selectedProduct || !currentProduct.precio) return

    const newProduct = {
      id: Date.now(),
      producto: selectedProduct,
      datos: { ...currentProduct },
      timestamp: new Date().toISOString()
    }

    if (editingProductIndex >= 0) {
      // Editando producto existente
      const updatedProducts = [...productosAgregados]
      updatedProducts[editingProductIndex] = newProduct
      setProductosAgregados(updatedProducts)
      setEditingProductIndex(-1)
    } else {
      // Agregando nuevo producto
      setProductosAgregados(prev => [...prev, newProduct])
    }

    // Limpiar formulario de producto
    resetCurrentProduct()
  }

  // Limpiar formulario de producto actual
  const resetCurrentProduct = () => {
    setCurrentProduct({
      busquedaProducto: "",
      categoria1: "",
      categoria2: "",
      producto: "",
      presentacionSugerida: true,
      unidadAlternativa: "",
      cantidadAlternativa: "",
      presentacionAlternativa: "",
      marcaSugerida: true,
      marcaAlternativa: "",
      precio: "",
      observaciones: "",
      fotos: []
    })
    setSelectedProduct(null)
    setPriceAlert(null)
    setCurrentStep(2)
  }

  // Editar producto de la lista
  const editProduct = (index) => {
    const productToEdit = productosAgregados[index]
    setCurrentProduct(productToEdit.datos)
    setSelectedProduct(productToEdit.producto)
    setEditingProductIndex(index)
    setCurrentStep(2)
  }

  // Eliminar producto de la lista
  const removeProduct = (index) => {
    setProductosAgregados(prev => prev.filter((_, i) => i !== index))
  }

  // Validar si puede continuar al siguiente paso
  const canContinueStep1 = sessionData.inspectores.length > 0 && 
    (sessionData.tipoPlaza !== "otro" ? sessionData.tipoPlaza : sessionData.plazaOtra) &&
    (sessionData.establecimiento !== "otro" ? sessionData.establecimiento : sessionData.establecimientoOtro)

  const canAddProduct = selectedProduct && currentProduct.precio && 
    (!currentProduct.presentacionSugerida ? 
      (currentProduct.unidadAlternativa && currentProduct.cantidadAlternativa && currentProduct.presentacionAlternativa) : true) &&
    (!currentProduct.marcaSugerida ? currentProduct.marcaAlternativa : true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Registro de Precios</h1>
                <p className="text-xs text-gray-600">OHPC - Formato Digital Múltiple</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                {currentStep === 1 ? "Configuración" : 
                 currentStep === 2 ? "Agregar Productos" : 
                 "Finalizar"}
              </Badge>
              <Badge variant="secondary">
                {productosAgregados.length} productos agregados
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Título del formulario */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">FORMATO DE PRECIOS DIARIOS - MÚLTIPLES PRODUCTOS</h2>
          <p className="text-gray-600">Formulario para registrar múltiples productos en un mismo establecimiento</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario principal */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Registro de Precios</CardTitle>
                <CardDescription>Complete la información del establecimiento y agregue productos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Paso 1: Información de la Sesión */}
                {currentStep >= 1 && (
                  <div className="space-y-4 p-4 border rounded-lg bg-blue-50">
                    <h3 className="font-semibold text-lg">Información de la Sesión de Recolección</h3>
                    
                    {/* Inspectores múltiples */}
                    <div>
                      <Label className="text-base font-medium">Inspectores Participantes *</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {inspectores.map((inspector) => (
                          <div key={inspector} className="flex items-center space-x-2">
                            <Checkbox
                              id={inspector}
                              checked={sessionData.inspectores.includes(inspector)}
                              onCheckedChange={() => handleInspectorToggle(inspector)}
                            />
                            <Label htmlFor={inspector} className="text-sm">{inspector}</Label>
                          </div>
                        ))}
                      </div>
                      {sessionData.inspectores.length > 0 && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-600">Seleccionados: </p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {sessionData.inspectores.map(inspector => (
                              <Badge key={inspector} variant="secondary" className="text-xs">
                                {inspector}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fecha">Fecha *</Label>
                        <Input
                          type="date"
                          value={sessionData.fecha}
                          onChange={(e) => setSessionData(prev => ({ ...prev, fecha: e.target.value }))}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="tipo-plaza">Tipo de Plaza *</Label>
                        <Select 
                          value={sessionData.tipoPlaza} 
                          onValueChange={(value) => setSessionData(prev => ({ 
                            ...prev, 
                            tipoPlaza: value, 
                            establecimiento: "", 
                            establecimientoOtro: "" 
                          }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar tipo de plaza" />
                          </SelectTrigger>
                          <SelectContent>
                            {tiposPlaza.map((tipo) => (
                              <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
                            ))}
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        {sessionData.tipoPlaza === "otro" && (
                          <Input
                            className="mt-2"
                            placeholder="Especificar tipo de plaza"
                            value={sessionData.plazaOtra}
                            onChange={(e) => setSessionData(prev => ({ ...prev, plazaOtra: e.target.value }))}
                          />
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="establecimiento">Establecimiento *</Label>
                      <Select 
                        value={sessionData.establecimiento} 
                        onValueChange={(value) => setSessionData(prev => ({ ...prev, establecimiento: value }))}
                        disabled={!sessionData.tipoPlaza || sessionData.tipoPlaza === "otro"}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar establecimiento" />
                        </SelectTrigger>
                        <SelectContent>
                          {establecimientosDisponibles.map((establecimiento) => (
                            <SelectItem key={establecimiento} value={establecimiento}>{establecimiento}</SelectItem>
                          ))}
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                      {(sessionData.establecimiento === "otro" || sessionData.tipoPlaza === "otro" || establecimientosDisponibles.length === 0) && (
                        <Input
                          className="mt-2"
                          placeholder="Especificar nombre del establecimiento"
                          value={sessionData.establecimientoOtro}
                          onChange={(e) => setSessionData(prev => ({ ...prev, establecimientoOtro: e.target.value }))}
                        />
                      )}
                    </div>

                    {canContinueStep1 && (
                      <Button onClick={() => setCurrentStep(2)} className="w-full">
                        Continuar a Agregar Productos
                      </Button>
                    )}
                  </div>
                )}

                {/* Paso 2: Agregar Productos */}
                {currentStep >= 2 && (
                  <div className="space-y-4 p-4 border rounded-lg bg-green-50">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">
                        {editingProductIndex >= 0 ? "Editar Producto" : "Agregar Producto"}
                      </h3>
                      {editingProductIndex >= 0 && (
                        <Button variant="outline" size="sm" onClick={resetCurrentProduct}>
                          Cancelar Edición
                        </Button>
                      )}
                    </div>
                    
                    {/* Buscador de productos */}
                    <div className="space-y-2">
                      <Label htmlFor="busqueda-producto">🔍 Buscador de Productos</Label>
                      <div className="relative">
                        <Input
                          placeholder="Escriba el nombre del producto, categoría o marca..."
                          value={currentProduct.busquedaProducto}
                          onChange={(e) => {
                            setCurrentProduct(prev => ({ ...prev, busquedaProducto: e.target.value }))
                            setShowProductResults(e.target.value.length > 2)
                          }}
                          onFocus={() => setShowProductResults(currentProduct.busquedaProducto.length > 2)}
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                      
                      {/* Resultados de búsqueda */}
                      {showProductResults && productosFilteredBySearch.length > 0 && (
                        <div className="absolute z-10 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {productosFilteredBySearch.map((producto) => (
                            <div
                              key={producto.name}
                              className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                              onClick={() => handleProductSearchSelect(producto)}
                            >
                              <div className="font-medium text-gray-900">{producto.label}</div>
                              <div className="text-sm text-gray-600">
                                {producto.categoria2_label} • {producto.unidad} • {producto.marca || "Sin marca específica"}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Información del producto seleccionado */}
                    {selectedProduct && (
                      <div className="space-y-4 p-4 bg-white border rounded-lg">
                        <h4 className="font-semibold">Producto Seleccionado:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <strong>Nombre:</strong><br />
                            {selectedProduct.label}
                          </div>
                          <div>
                            <strong>Unidad:</strong><br />
                            {selectedProduct.unidad || "No especificada"}
                          </div>
                          <div>
                            <strong>Presentación:</strong><br />
                            {selectedProduct.presentacion || "No especificada"}
                          </div>
                          <div>
                            <strong>Marca:</strong><br />
                            {selectedProduct.marca || "No especificada"}
                          </div>
                        </div>

                        {/* Verificación de presentación */}
                        <div>
                          <Label className="text-base font-medium">
                            ¿El producto se encontró en la presentación sugerida? *
                          </Label>
                          <RadioGroup 
                            value={currentProduct.presentacionSugerida.toString()} 
                            onValueChange={(value) => setCurrentProduct(prev => ({ ...prev, presentacionSugerida: value === "true" }))}
                            className="mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="true" id="presentacion-si" />
                              <Label htmlFor="presentacion-si">SÍ</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="false" id="presentacion-no" />
                              <Label htmlFor="presentacion-no">NO</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Presentación alternativa */}
                        {!currentProduct.presentacionSugerida && (
                          <div className="space-y-3 p-3 bg-gray-50 border rounded">
                            <h5 className="font-medium">Presentación Alternativa</h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              <div>
                                <Label htmlFor="unidad-alternativa">Unidad *</Label>
                                <Select 
                                  value={currentProduct.unidadAlternativa} 
                                  onValueChange={(value) => setCurrentProduct(prev => ({ ...prev, unidadAlternativa: value }))}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Seleccionar" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {unidadesMedida.map((unidad) => (
                                      <SelectItem key={unidad} value={unidad}>{unidad}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="cantidad-alternativa">Cantidad *</Label>
                                <Input
                                  type="number"
                                  step="0.1"
                                  placeholder="0.0"
                                  value={currentProduct.cantidadAlternativa}
                                  onChange={(e) => setCurrentProduct(prev => ({ ...prev, cantidadAlternativa: e.target.value }))}
                                />
                              </div>
                              <div>
                                <Label htmlFor="presentacion-alternativa">Descripción *</Label>
                                <Input
                                  placeholder="ej: paquete de 0.5Kg"
                                  value={currentProduct.presentacionAlternativa}
                                  onChange={(e) => setCurrentProduct(prev => ({ ...prev, presentacionAlternativa: e.target.value }))}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Verificación de marca */}
                        <div>
                          <Label className="text-base font-medium">
                            ¿El producto se encontró con la marca sugerida? *
                          </Label>
                          <RadioGroup 
                            value={currentProduct.marcaSugerida.toString()} 
                            onValueChange={(value) => setCurrentProduct(prev => ({ ...prev, marcaSugerida: value === "true" }))}
                            className="mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="true" id="marca-si" />
                              <Label htmlFor="marca-si">SÍ</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="false" id="marca-no" />
                              <Label htmlFor="marca-no">NO</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Marca alternativa */}
                        {!currentProduct.marcaSugerida && (
                          <div>
                            <Label htmlFor="marca-alternativa">Marca Alternativa *</Label>
                            <Input
                              placeholder="Anote la marca encontrada"
                              value={currentProduct.marcaAlternativa}
                              onChange={(e) => setCurrentProduct(prev => ({ ...prev, marcaAlternativa: e.target.value }))}
                            />
                          </div>
                        )}

                        {/* Precio */}
                        <div>
                          <Label htmlFor="precio">Precio (en lempiras) *</Label>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={currentProduct.precio}
                            onChange={(e) => handlePriceChange(e.target.value)}
                          />
                          
                          {/* Alerta de precio */}
                          {priceAlert && (
                            <Alert className={`mt-2 ${priceAlert.type === 'success' ? 'border-green-500 bg-green-50' : 'border-yellow-500 bg-yellow-50'}`}>
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>{priceAlert.message}</AlertDescription>
                            </Alert>
                          )}
                        </div>

                        {/* Fotografías */}
                        <div>
                          <Label>Fotografías del Producto o Factura</Label>
                          <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-4">
                            <div className="text-center">
                              <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-2">Agregue fotos del producto o su factura</p>
                              <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                                id="file-upload"
                              />
                              <Button variant="outline" size="sm" onClick={() => document.getElementById('file-upload')?.click()}>
                                <Upload className="w-4 h-4 mr-2" />
                                Seleccionar Fotos
                              </Button>
                            </div>
                            
                            {/* Vista previa de fotos */}
                            {currentProduct.fotos.length > 0 && (
                              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                                {currentProduct.fotos.map((foto) => (
                                  <div key={foto.id} className="relative">
                                    <img
                                      src={foto.url || "/placeholder.svg?height=80&width=80"}
                                      alt={foto.name}
                                      className="w-full h-20 object-cover rounded border"
                                    />
                                    <Button
                                      variant="destructive"
                                      size="sm"
                                      className="absolute -top-2 -right-2 w-6 h-6 p-0"
                                      onClick={() => removePhoto(foto.id)}
                                    >
                                      <X className="w-3 h-3" />
                                    </Button>
                                    <p className="text-xs text-gray-500 mt-1 truncate">{foto.name}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Observaciones del producto */}
                        <div>
                          <Label htmlFor="observaciones-producto">Observaciones del Producto</Label>
                          <Textarea
                            placeholder="Comentarios específicos sobre este producto..."
                            value={currentProduct.observaciones}
                            onChange={(e) => setCurrentProduct(prev => ({ ...prev, observaciones: e.target.value }))}
                            className="min-h-[60px]"
                          />
                        </div>

                        {/* Botón para agregar producto */}
                        <Button 
                          onClick={addProductToList} 
                          disabled={!canAddProduct}
                          className="w-full"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          {editingProductIndex >= 0 ? "Actualizar Producto" : "Agregar Producto a la Lista"}
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Paso 3: Finalizar */}
                {currentStep >= 3 && productosAgregados.length > 0 && (
                  <div className="space-y-4 p-4 border rounded-lg bg-red-50">
                    <h3 className="font-semibold text-lg">Finalizar Registro</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre-encuestado">Nombre del Encuestado *</Label>
                        <Input
                          placeholder="Nombre completo"
                          value={sessionData.nombreEncuestado}
                          onChange={(e) => setSessionData(prev => ({ ...prev, nombreEncuestado: e.target.value }))}
                        />
                      </div>

                      <div>
                        <Label htmlFor="firma-encuestado">Firma del Encuestado *</Label>
                        <Input
                          placeholder="Firma o iniciales"
                          value={sessionData.firmaEncuestado}
                          onChange={(e) => setSessionData(prev => ({ ...prev, firmaEncuestado: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="observaciones-generales">Observaciones Generales</Label>
                      <Textarea
                        placeholder="Comentarios generales sobre la visita al establecimiento..."
                        value={sessionData.observacionesGenerales}
                        onChange={(e) => setSessionData(prev => ({ ...prev, observacionesGenerales: e.target.value }))}
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="flex space-x-4 pt-4">
                      <Button 
                        className="flex-1" 
                        disabled={!sessionData.nombreEncuestado || !sessionData.firmaEncuestado || productosAgregados.length === 0}
                      >
                        <Save className="w-4 h-4 mr-2" />
                        Guardar Registro Completo
                      </Button>
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        Reiniciar Todo
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar con productos agregados */}
          <div className="space-y-6">
            {/* Resumen de la sesión */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Resumen de la Sesión</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <strong>Inspectores:</strong><br />
                  {sessionData.inspectores.length > 0 ? sessionData.inspectores.join(", ") : "No seleccionados"}
                </div>
                <div>
                  <strong>Fecha:</strong> {sessionData.fecha}
                </div>
                <div>
                  <strong>Tipo de Plaza:</strong><br />
                  {sessionData.tipoPlaza === "otro" ? sessionData.plazaOtra : sessionData.tipoPlaza || "No seleccionado"}
                </div>
                <div>
                  <strong>Establecimiento:</strong><br />
                  {sessionData.establecimiento === "otro" ? sessionData.establecimientoOtro : sessionData.establecimiento || "No seleccionado"}
                </div>
                <div>
                  <strong>Productos:</strong> {productosAgregados.length}
                </div>
              </CardContent>
            </Card>

            {/* Lista de productos agregados */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  Productos Agregados
                  <Badge variant="secondary">{productosAgregados.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {productosAgregados.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No hay productos agregados</p>
                ) : (
                  <div className="space-y-3">
                    {productosAgregados.map((item, index) => (
                      <div key={item.id} className="border rounded-lg p-3 bg-white">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{item.producto.label}</h4>
                          <div className="flex space-x-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => editProduct(index)}
                              className="w-6 h-6 p-0"
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => removeProduct(index)}
                              className="w-6 h-6 p-0"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div><strong>Precio:</strong> L. {item.datos.precio}</div>
                          <div><strong>Presentación:</strong> {item.datos.presentacionSugerida ? "Sugerida" : "Alternativa"}</div>
                          <div><strong>Marca:</strong> {item.datos.marcaSugerida ? "Sugerida" : "Alternativa"}</div>
                          {item.datos.fotos.length > 0 && (
                            <div className="flex items-center">
                              <Image className="w-3 h-3 mr-1" />
                              <span>{item.datos.fotos.length} foto(s)</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {productosAgregados.length > 0 && currentStep < 3 && (
                      <Button 
                        onClick={() => setCurrentStep(3)} 
                        className="w-full mt-4"
                        variant="outline"
                      >
                        Finalizar Registro
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Acciones rápidas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={resetCurrentProduct}
                  disabled={currentStep < 2}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Agregar Otro Producto
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Carga Masiva Excel
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Smartphone className="w-4 h-4 mr-2" />
                  App Móvil
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
