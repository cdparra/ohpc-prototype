'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Settings, Plus, Edit, Trash2, Search, AlertTriangle, Package, ShoppingCart, Stethoscope, GraduationCap, Hammer, Download, Upload, Eye, TrendingUp, TrendingDown, Filter, Save, X } from 'lucide-react'
import Link from "next/link"

// Datos simulados de canastas
const canastas = [
  {
    id: 1,
    nombre: "Canasta Básica Alimentaria",
    descripcion: "Productos alimentarios esenciales para el hogar hondureño",
    tipo: "alimentaria",
    productos: 45,
    activa: true,
    ultimaActualizacion: "2024-01-15",
    icon: ShoppingCart,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 2,
    nombre: "Útiles Escolares",
    descripcion: "Materiales educativos y útiles para estudiantes",
    tipo: "educacion",
    productos: 28,
    activa: true,
    ultimaActualizacion: "2024-01-10",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 3,
    nombre: "Medicamentos Básicos",
    descripcion: "Medicamentos de uso común y primeros auxilios",
    tipo: "salud",
    productos: 22,
    activa: true,
    ultimaActualizacion: "2024-01-12",
    icon: Stethoscope,
    color: "bg-red-100 text-red-600"
  },
  {
    id: 4,
    nombre: "Materiales de Construcción",
    descripcion: "Insumos básicos para construcción y reparaciones",
    tipo: "construccion",
    productos: 67,
    activa: true,
    ultimaActualizacion: "2024-01-08",
    icon: Hammer,
    color: "bg-orange-100 text-orange-600"
  }
]

// Datos simulados de productos
const productos = [
  {
    id: 1,
    nombre: "ARROZ BLANCO",
    categoria1: "Granos Básicos",
    categoria2: "Cereales",
    unidadSugerida: "libra",
    presentacionSugerida: "Bolsa de 1 libra",
    marcaSugerida: "Diana",
    canasta: "Canasta Básica Alimentaria",
    activo: true,
    alertas: {
      presentacionNoEncontrada: 12,
      marcaNoEncontrada: 8,
      tendencia: "up"
    },
    ultimoMonitoreo: "2024-01-15"
  },
  {
    id: 2,
    nombre: "HUEVOS BLANCOS",
    categoria1: "Proteínas",
    categoria2: "Huevos",
    unidadSugerida: "docena",
    presentacionSugerida: "Cartón de 12 unidades",
    marcaSugerida: "Granja Azul",
    canasta: "Canasta Básica Alimentaria",
    activo: true,
    alertas: {
      presentacionNoEncontrada: 25,
      marcaNoEncontrada: 18,
      tendencia: "up"
    },
    ultimoMonitoreo: "2024-01-15"
  },
  {
    id: 3,
    nombre: "CUADERNO UNIVERSITARIO",
    categoria1: "Papelería",
    categoria2: "Cuadernos",
    unidadSugerida: "unidad",
    presentacionSugerida: "100 hojas rayado",
    marcaSugerida: "Norma",
    canasta: "Útiles Escolares",
    activo: true,
    alertas: {
      presentacionNoEncontrada: 5,
      marcaNoEncontrada: 15,
      tendencia: "stable"
    },
    ultimoMonitoreo: "2024-01-14"
  },
  {
    id: 4,
    nombre: "ACETAMINOFÉN",
    categoria1: "Analgésicos",
    categoria2: "Medicamentos OTC",
    unidadSugerida: "caja",
    presentacionSugerida: "500mg x 20 tabletas",
    marcaSugerida: "Panadol",
    canasta: "Medicamentos Básicos",
    activo: true,
    alertas: {
      presentacionNoEncontrada: 8,
      marcaNoEncontrada: 22,
      tendencia: "down"
    },
    ultimoMonitoreo: "2024-01-13"
  }
]

// Unidades de medida disponibles
const unidadesMedida = [
  "kg", "libra", "gramo", "onza", "litro", "galón", "ml", "unidad", 
  "docena", "caja", "paquete", "bolsa", "frasco", "tubo", "rollo", 
  "metro", "pie", "pulgada", "cubeta"
]

export default function ProductManagementPage() {
  const [selectedTab, setSelectedTab] = useState("canastas")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCanasta, setSelectedCanasta] = useState("all")
  const [showProductDialog, setShowProductDialog] = useState(false)
  const [showCanastaDialog, setShowCanastaDialog] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [editingCanasta, setEditingCanasta] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState(productos)

  // Filtrar productos
  useEffect(() => {
    let filtered = productos.filter(producto => {
      const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           producto.categoria1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           producto.categoria2.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCanasta = !selectedCanasta || selectedCanasta === "all" || producto.canasta === selectedCanasta
      return matchesSearch && matchesCanasta
    })
    setFilteredProducts(filtered)
  }, [searchTerm, selectedCanasta])

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setShowProductDialog(true)
  }

  const handleEditCanasta = (canasta) => {
    setEditingCanasta(canasta)
    setShowCanastaDialog(true)
  }

  const resetDialogs = () => {
    setShowProductDialog(false)
    setShowCanastaDialog(false)
    setEditingProduct(null)
    setEditingCanasta(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/admin" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Gestión de Canastas y Productos</h1>
                <p className="text-xs text-gray-600">Administración de productos monitoreados</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Importar CSV
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Canastas y Productos</h2>
          <p className="text-gray-600">
            Administre las canastas temáticas, productos monitoreados y sus especificaciones
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="canastas">Canastas Temáticas</TabsTrigger>
            <TabsTrigger value="productos">Productos</TabsTrigger>
            <TabsTrigger value="alertas">Alertas de Mercado</TabsTrigger>
          </TabsList>

          {/* Canastas Tab */}
          <TabsContent value="canastas">
            <div className="space-y-6">
              {/* Header con botón agregar */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Canastas Temáticas</h3>
                  <p className="text-gray-600">Gestione las diferentes canastas de productos monitoreados</p>
                </div>
                <Dialog open={showCanastaDialog} onOpenChange={setShowCanastaDialog}>
                  <DialogTrigger asChild>
                    <Button onClick={() => setEditingCanasta(null)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Nueva Canasta
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>
                        {editingCanasta ? 'Editar Canasta' : 'Nueva Canasta'}
                      </DialogTitle>
                      <DialogDescription>
                        Configure los detalles de la canasta temática
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="nombre">Nombre de la Canasta</Label>
                        <Input
                          id="nombre"
                          placeholder="Ej: Canasta Básica Alimentaria"
                          defaultValue={editingCanasta?.nombre || ""}
                        />
                      </div>
                      <div>
                        <Label htmlFor="descripcion">Descripción</Label>
                        <Textarea
                          id="descripcion"
                          placeholder="Descripción de la canasta..."
                          defaultValue={editingCanasta?.descripcion || ""}
                        />
                      </div>
                      <div>
                        <Label htmlFor="tipo">Tipo de Canasta</Label>
                        <Select defaultValue={editingCanasta?.tipo || ""}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione el tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="alimentaria">Alimentaria</SelectItem>
                            <SelectItem value="educacion">Educación</SelectItem>
                            <SelectItem value="salud">Salud</SelectItem>
                            <SelectItem value="construccion">Construcción</SelectItem>
                            <SelectItem value="hogar">Hogar</SelectItem>
                            <SelectItem value="personal">Cuidado Personal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={resetDialogs}>
                          Cancelar
                        </Button>
                        <Button onClick={resetDialogs}>
                          <Save className="w-4 h-4 mr-2" />
                          Guardar
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Grid de canastas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {canastas.map((canasta) => {
                  const IconComponent = canasta.icon
                  return (
                    <Card key={canasta.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${canasta.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="outline" size="sm" onClick={() => handleEditCanasta(canasta)}>
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{canasta.nombre}</h3>
                        <p className="text-sm text-gray-600 mb-4">{canasta.descripcion}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Productos:</span>
                            <Badge variant="secondary">{canasta.productos}</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Estado:</span>
                            <Badge variant={canasta.activa ? "default" : "secondary"}>
                              {canasta.activa ? "Activa" : "Inactiva"}
                            </Badge>
                          </div>
                          <div className="text-xs text-gray-500">
                            Actualizada: {canasta.ultimaActualizacion}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </TabsContent>

          {/* Productos Tab */}
          <TabsContent value="productos">
            <div className="space-y-6">
              {/* Filtros y búsqueda */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          placeholder="Buscar productos..."
                          className="pl-10"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-64">
                      <Select value={selectedCanasta} onValueChange={setSelectedCanasta}>
                        <SelectTrigger>
                          <SelectValue placeholder="Filtrar por canasta" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas las canastas</SelectItem>
                          {canastas.map((canasta) => (
                            <SelectItem key={canasta.id} value={canasta.nombre}>
                              {canasta.nombre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Dialog open={showProductDialog} onOpenChange={setShowProductDialog}>
                      <DialogTrigger asChild>
                        <Button onClick={() => setEditingProduct(null)}>
                          <Plus className="w-4 h-4 mr-2" />
                          Nuevo Producto
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>
                            {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
                          </DialogTitle>
                          <DialogDescription>
                            Configure los detalles del producto y sus especificaciones de monitoreo
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="nombreProducto">Nombre del Producto</Label>
                            <Input
                              id="nombreProducto"
                              placeholder="Ej: ARROZ BLANCO"
                              defaultValue={editingProduct?.nombre || ""}
                            />
                          </div>
                          <div>
                            <Label htmlFor="canasta">Canasta</Label>
                            <Select defaultValue={editingProduct?.canasta || ""}>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccione canasta" />
                              </SelectTrigger>
                              <SelectContent>
                                {canastas.map((canasta) => (
                                  <SelectItem key={canasta.id} value={canasta.nombre}>
                                    {canasta.nombre}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="categoria1">Categoría 1</Label>
                            <Input
                              id="categoria1"
                              placeholder="Ej: Granos Básicos"
                              defaultValue={editingProduct?.categoria1 || ""}
                            />
                          </div>
                          <div>
                            <Label htmlFor="categoria2">Categoría 2</Label>
                            <Input
                              id="categoria2"
                              placeholder="Ej: Cereales"
                              defaultValue={editingProduct?.categoria2 || ""}
                            />
                          </div>
                          <div>
                            <Label htmlFor="unidad">Unidad de Medida</Label>
                            <Select defaultValue={editingProduct?.unidadSugerida || ""}>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccione unidad" />
                              </SelectTrigger>
                              <SelectContent>
                                {unidadesMedida.map((unidad) => (
                                  <SelectItem key={unidad} value={unidad}>
                                    {unidad}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="presentacion">Presentación Sugerida</Label>
                            <Input
                              id="presentacion"
                              placeholder="Ej: Bolsa de 1 libra"
                              defaultValue={editingProduct?.presentacionSugerida || ""}
                            />
                          </div>
                          <div className="col-span-2">
                            <Label htmlFor="marca">Marca Sugerida</Label>
                            <Input
                              id="marca"
                              placeholder="Ej: Diana"
                              defaultValue={editingProduct?.marcaSugerida || ""}
                            />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={resetDialogs}>
                            Cancelar
                          </Button>
                          <Button onClick={resetDialogs}>
                            <Save className="w-4 h-4 mr-2" />
                            Guardar Producto
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de productos */}
              <Card>
                <CardHeader>
                  <CardTitle>Productos Monitoreados ({filteredProducts.length})</CardTitle>
                  <CardDescription>
                    Lista de productos con sus especificaciones de monitoreo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Producto</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Canasta</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Especificaciones</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Alertas</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Estado</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-900">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map((producto) => (
                          <tr key={producto.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div>
                                <div className="font-medium text-gray-900">{producto.nombre}</div>
                                <div className="text-sm text-gray-600">
                                  {producto.categoria1} → {producto.categoria2}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant="outline">{producto.canasta}</Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="text-sm space-y-1">
                                <div><strong>Unidad:</strong> {producto.unidadSugerida}</div>
                                <div><strong>Presentación:</strong> {producto.presentacionSugerida}</div>
                                <div><strong>Marca:</strong> {producto.marcaSugerida}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-2">
                                {(producto.alertas.presentacionNoEncontrada > 10 || 
                                  producto.alertas.marcaNoEncontrada > 10) && (
                                  <AlertTriangle className="w-4 h-4 text-red-600" />
                                )}
                                <div className="text-sm">
                                  <div>Pres: {producto.alertas.presentacionNoEncontrada}</div>
                                  <div>Marca: {producto.alertas.marcaNoEncontrada}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <Badge variant={producto.activo ? "default" : "secondary"}>
                                {producto.activo ? "Activo" : "Inactivo"}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" onClick={() => handleEditProduct(producto)}>
                                  <Edit className="w-3 h-3" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Eye className="w-3 h-3" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Alertas Tab */}
          <TabsContent value="alertas">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Alertas de Cambios en el Mercado
                  </CardTitle>
                  <CardDescription>
                    Productos con alta frecuencia de presentaciones o marcas no encontradas según lo estipulado
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productos
                      .filter(p => p.alertas.presentacionNoEncontrada > 10 || p.alertas.marcaNoEncontrada > 10)
                      .map((producto) => (
                        <div key={producto.id} className="p-4 border rounded-lg bg-red-50 border-red-200">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="font-semibold text-gray-900">{producto.nombre}</h4>
                                <Badge variant="outline">{producto.canasta}</Badge>
                                {producto.alertas.tendencia === "up" ? (
                                  <TrendingUp className="w-4 h-4 text-red-600" />
                                ) : producto.alertas.tendencia === "down" ? (
                                  <TrendingDown className="w-4 h-4 text-green-600" />
                                ) : null}
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-600">Presentación Sugerida:</span>
                                  <div className="font-medium">{producto.presentacionSugerida}</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Marca Sugerida:</span>
                                  <div className="font-medium">{producto.marcaSugerida}</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Último Monitoreo:</span>
                                  <div className="font-medium">{producto.ultimoMonitoreo}</div>
                                </div>
                              </div>
                            </div>
                            <AlertTriangle className="w-6 h-6 text-red-600 ml-4" />
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="p-3 bg-white rounded border">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700">Presentación No Encontrada</span>
                                <Badge variant="destructive">{producto.alertas.presentacionNoEncontrada}</Badge>
                              </div>
                              <div className="text-xs text-gray-600">
                                Inspectores reportaron {producto.alertas.presentacionNoEncontrada} veces que no encontraron la presentación sugerida
                              </div>
                            </div>
                            <div className="p-3 bg-white rounded border">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm font-medium text-gray-700">Marca No Encontrada</span>
                                <Badge variant="destructive">{producto.alertas.marcaNoEncontrada}</Badge>
                              </div>
                              <div className="text-xs text-gray-600">
                                Inspectores reportaron {producto.alertas.marcaNoEncontrada} veces que no encontraron la marca sugerida
                              </div>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Ver Reportes Detallados
                            </Button>
                            <Button size="sm" variant="outline">
                              Actualizar Especificaciones
                            </Button>
                            <Button size="sm">
                              Investigar Cambio de Mercado
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Resumen de alertas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Productos con Alertas</p>
                        <p className="text-2xl font-bold text-red-600">
                          {productos.filter(p => p.alertas.presentacionNoEncontrada > 10 || p.alertas.marcaNoEncontrada > 10).length}
                        </p>
                      </div>
                      <AlertTriangle className="w-8 h-8 text-red-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Cambios de Presentación</p>
                        <p className="text-2xl font-bold text-orange-600">
                          {productos.reduce((sum, p) => sum + p.alertas.presentacionNoEncontrada, 0)}
                        </p>
                      </div>
                      <Package className="w-8 h-8 text-orange-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Cambios de Marca</p>
                        <p className="text-2xl font-bold text-blue-600">
                          {productos.reduce((sum, p) => sum + p.alertas.marcaNoEncontrada, 0)}
                        </p>
                      </div>
                      <Settings className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
