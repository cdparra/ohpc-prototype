'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertTriangle, Plus, Edit, Trash2, Search, Filter, ShoppingCart, GraduationCap, Heart, Hammer, Package, Settings, Eye, Activity } from 'lucide-react'
import Link from "next/link"

// Datos simulados para canastas
const canastas = [
  {
    id: 1,
    nombre: "Canasta Básica Alimentaria",
    descripcion: "Productos alimentarios esenciales para el consumo familiar",
    tipo: "alimentaria",
    productos: 45,
    activa: true,
    fechaCreacion: "2024-01-01",
    icon: ShoppingCart,
    color: "bg-green-100 text-green-600"
  },
  {
    id: 2,
    nombre: "Útiles Escolares",
    descripcion: "Materiales educativos y útiles escolares básicos",
    tipo: "educacion",
    productos: 28,
    activa: true,
    fechaCreacion: "2024-01-15",
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
    fechaCreacion: "2024-02-01",
    icon: Heart,
    color: "bg-red-100 text-red-600"
  },
  {
    id: 4,
    nombre: "Materiales de Construcción",
    descripcion: "Materiales básicos para construcción y reparaciones",
    tipo: "construccion",
    productos: 18,
    activa: false,
    fechaCreacion: "2024-02-15",
    icon: Hammer,
    color: "bg-orange-100 text-orange-600"
  }
]

// Datos simulados para productos
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
      marcaNoEncontrada: 8
    },
    fechaCreacion: "2024-01-01",
    ultimaActualizacion: "2024-01-15"
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
      marcaNoEncontrada: 18
    },
    fechaCreacion: "2024-01-01",
    ultimaActualizacion: "2024-01-10"
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
      marcaNoEncontrada: 15
    },
    fechaCreacion: "2024-01-15",
    ultimaActualizacion: "2024-01-20"
  },
  {
    id: 4,
    nombre: "ACETAMINOFÉN",
    categoria1: "Medicamentos",
    categoria2: "Analgésicos",
    unidadSugerida: "caja",
    presentacionSugerida: "Caja de 20 tabletas 500mg",
    marcaSugerida: "Panadol",
    canasta: "Medicamentos Básicos",
    activo: true,
    alertas: {
      presentacionNoEncontrada: 8,
      marcaNoEncontrada: 22
    },
    fechaCreacion: "2024-02-01",
    ultimaActualizacion: "2024-02-05"
  }
]

const categorias1 = ["Granos Básicos", "Proteínas", "Lácteos", "Verduras", "Frutas", "Papelería", "Medicamentos", "Materiales"]
const categorias2 = ["Cereales", "Huevos", "Carnes", "Cuadernos", "Analgésicos", "Cemento", "Hierro"]
const unidades = ["libra", "docena", "unidad", "caja", "botella", "paquete", "metro", "galón"]

export default function AdminProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCanasta, setSelectedCanasta] = useState("all")
  const [selectedTab, setSelectedTab] = useState("canastas")
  const [filteredProducts, setFilteredProducts] = useState(productos)
  const [isCreateCanastaOpen, setIsCreateCanastaOpen] = useState(false)
  const [isCreateProductOpen, setIsCreateProductOpen] = useState(false)

  // Estados para formularios
  const [newCanasta, setNewCanasta] = useState({
    nombre: "",
    descripcion: "",
    tipo: ""
  })

  const [newProduct, setNewProduct] = useState({
    nombre: "",
    categoria1: "",
    categoria2: "",
    unidadSugerida: "",
    presentacionSugerida: "",
    marcaSugerida: "",
    canasta: ""
  })

  // Filtrar productos
  useEffect(() => {
    let filtered = productos.filter(producto => {
      const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           producto.categoria1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           producto.categoria2.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCanasta = selectedCanasta === "all" || producto.canasta === selectedCanasta
      return matchesSearch && matchesCanasta
    })
    setFilteredProducts(filtered)
  }, [searchTerm, selectedCanasta])

  const handleCreateCanasta = () => {
    console.log("Crear canasta:", newCanasta)
    setIsCreateCanastaOpen(false)
    setNewCanasta({ nombre: "", descripcion: "", tipo: "" })
  }

  const handleCreateProduct = () => {
    console.log("Crear producto:", newProduct)
    setIsCreateProductOpen(false)
    setNewProduct({
      nombre: "",
      categoria1: "",
      categoria2: "",
      unidadSugerida: "",
      presentacionSugerida: "",
      marcaSugerida: "",
      canasta: ""
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/admin" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Gestión de Productos y Canastas</h1>
                <p className="text-xs text-gray-600">Administración de productos monitoreados</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Importar Productos
              </Button>
              <Button variant="outline" size="sm">
                Exportar Datos
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Gestión de Productos y Canastas</h2>
          <p className="text-gray-600">
            Administra las canastas temáticas y productos que se monitorean en el sistema
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
              {/* Header con botón crear */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Canastas Temáticas</h3>
                  <p className="text-gray-600">Gestiona las diferentes canastas de productos</p>
                </div>
                <Dialog open={isCreateCanastaOpen} onOpenChange={setIsCreateCanastaOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Nueva Canasta
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Crear Nueva Canasta</DialogTitle>
                      <DialogDescription>
                        Define una nueva canasta temática para agrupar productos
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="nombre">Nombre de la Canasta</Label>
                        <Input
                          id="nombre"
                          value={newCanasta.nombre}
                          onChange={(e) => setNewCanasta({...newCanasta, nombre: e.target.value})}
                          placeholder="Ej: Canasta Básica Alimentaria"
                        />
                      </div>
                      <div>
                        <Label htmlFor="descripcion">Descripción</Label>
                        <Textarea
                          id="descripcion"
                          value={newCanasta.descripcion}
                          onChange={(e) => setNewCanasta({...newCanasta, descripcion: e.target.value})}
                          placeholder="Describe el propósito de esta canasta"
                        />
                      </div>
                      <div>
                        <Label htmlFor="tipo">Tipo de Canasta</Label>
                        <Select value={newCanasta.tipo} onValueChange={(value) => setNewCanasta({...newCanasta, tipo: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="alimentaria">Alimentaria</SelectItem>
                            <SelectItem value="educacion">Educación</SelectItem>
                            <SelectItem value="salud">Salud</SelectItem>
                            <SelectItem value="construccion">Construcción</SelectItem>
                            <SelectItem value="otros">Otros</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsCreateCanastaOpen(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleCreateCanasta}>
                        Crear Canasta
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Grid de canastas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {canastas.map((canasta) => {
                  const IconComponent = canasta.icon
                  return (
                    <Card key={canasta.id} className={`${canasta.activa ? 'border-green-200' : 'border-gray-200'}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className={`p-2 rounded-lg ${canasta.color}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <Badge variant={canasta.activa ? "default" : "secondary"}>
                            {canasta.activa ? "Activa" : "Inactiva"}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{canasta.nombre}</CardTitle>
                        <CardDescription className="text-sm">
                          {canasta.descripcion}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Productos:</span>
                            <span className="font-medium">{canasta.productos}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Tipo:</span>
                            <span className="font-medium capitalize">{canasta.tipo}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Creada:</span>
                            <span className="font-medium">{canasta.fechaCreacion}</span>
                          </div>
                          <div className="flex space-x-2 pt-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Edit className="w-4 h-4 mr-1" />
                              Editar
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="w-4 h-4 mr-1" />
                              Ver
                            </Button>
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
              {/* Header con filtros y botón crear */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Productos</h3>
                  <p className="text-gray-600">Gestiona los productos individuales de cada canasta</p>
                </div>
                <Dialog open={isCreateProductOpen} onOpenChange={setIsCreateProductOpen}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Nuevo Producto
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Crear Nuevo Producto</DialogTitle>
                      <DialogDescription>
                        Agrega un nuevo producto con sus especificaciones de monitoreo
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="producto-nombre">Nombre del Producto</Label>
                        <Input
                          id="producto-nombre"
                          value={newProduct.nombre}
                          onChange={(e) => setNewProduct({...newProduct, nombre: e.target.value})}
                          placeholder="Ej: ARROZ BLANCO"
                        />
                      </div>
                      <div>
                        <Label htmlFor="categoria1">Categoría Principal</Label>
                        <Select value={newProduct.categoria1} onValueChange={(value) => setNewProduct({...newProduct, categoria1: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categorias1.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="categoria2">Subcategoría</Label>
                        <Select value={newProduct.categoria2} onValueChange={(value) => setNewProduct({...newProduct, categoria2: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona subcategoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categorias2.map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="unidad">Unidad de Medida</Label>
                        <Select value={newProduct.unidadSugerida} onValueChange={(value) => setNewProduct({...newProduct, unidadSugerida: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona unidad" />
                          </SelectTrigger>
                          <SelectContent>
                            {unidades.map((unidad) => (
                              <SelectItem key={unidad} value={unidad}>{unidad}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="canasta-producto">Canasta</Label>
                        <Select value={newProduct.canasta} onValueChange={(value) => setNewProduct({...newProduct, canasta: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona canasta" />
                          </SelectTrigger>
                          <SelectContent>
                            {canastas.filter(c => c.activa).map((canasta) => (
                              <SelectItem key={canasta.nombre} value={canasta.nombre}>{canasta.nombre}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="presentacion">Presentación Sugerida</Label>
                        <Input
                          id="presentacion"
                          value={newProduct.presentacionSugerida}
                          onChange={(e) => setNewProduct({...newProduct, presentacionSugerida: e.target.value})}
                          placeholder="Ej: Bolsa de 1 libra"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="marca">Marca Sugerida</Label>
                        <Input
                          id="marca"
                          value={newProduct.marcaSugerida}
                          onChange={(e) => setNewProduct({...newProduct, marcaSugerida: e.target.value})}
                          placeholder="Ej: Diana"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsCreateProductOpen(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleCreateProduct}>
                        Crear Producto
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Filtros */}
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
                          {canastas.filter(c => c.activa).map((canasta) => (
                            <SelectItem key={canasta.nombre} value={canasta.nombre}>
                              {canasta.nombre}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de productos */}
              <Card>
                <CardHeader>
                  <CardTitle>Productos ({filteredProducts.length})</CardTitle>
                  <CardDescription>
                    Lista de productos con sus especificaciones de monitoreo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredProducts.map((producto) => (
                      <div key={producto.id} className="p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-gray-900">{producto.nombre}</h4>
                              <Badge variant="outline">{producto.canasta}</Badge>
                              {(producto.alertas.presentacionNoEncontrada > 10 || producto.alertas.marcaNoEncontrada > 10) && (
                                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                              )}
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                              {producto.categoria1} → {producto.categoria2}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4 mr-1" />
                              Editar
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              Ver
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="font-medium text-gray-700 mb-1">Especificaciones</div>
                            <div className="space-y-1">
                              <div><strong>Unidad:</strong> {producto.unidadSugerida}</div>
                              <div><strong>Presentación:</strong> {producto.presentacionSugerida}</div>
                              <div><strong>Marca:</strong> {producto.marcaSugerida}</div>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="font-medium text-gray-700 mb-1">Estado</div>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span>Estado:</span>
                                <Badge variant={producto.activo ? "default" : "secondary"}>
                                  {producto.activo ? "Activo" : "Inactivo"}
                                </Badge>
                              </div>
                              <div><strong>Creado:</strong> {producto.fechaCreacion}</div>
                              <div><strong>Actualizado:</strong> {producto.ultimaActualizacion}</div>
                            </div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <div className="font-medium text-gray-700 mb-1">Alertas</div>
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span>Presentación:</span>
                                <Badge variant={producto.alertas.presentacionNoEncontrada > 10 ? "destructive" : "secondary"}>
                                  {producto.alertas.presentacionNoEncontrada}
                                </Badge>
                              </div>
                              <div className="flex justify-between">
                                <span>Marca:</span>
                                <Badge variant={producto.alertas.marcaNoEncontrada > 10 ? "destructive" : "secondary"}>
                                  {producto.alertas.marcaNoEncontrada}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
                    Productos que requieren atención debido a alta frecuencia de reportes de "no encontrado"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productos
                      .filter(p => p.alertas.presentacionNoEncontrada > 10 || p.alertas.marcaNoEncontrada > 10)
                      .map((producto) => (
                        <div key={producto.id} className="p-4 border rounded-lg bg-yellow-50 border-yellow-200">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="font-semibold text-gray-900">{producto.nombre}</h4>
                                <Badge variant="outline">{producto.canasta}</Badge>
                                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                              </div>
                              <div className="text-sm text-gray-600 mb-3">
                                {producto.categoria1} → {producto.categoria2}
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="p-3 bg-white rounded border">
                              <div className="text-sm font-medium text-gray-700 mb-1">Especificaciones Actuales</div>
                              <div className="text-xs space-y-1">
                                <div><strong>Unidad:</strong> {producto.unidadSugerida}</div>
                                <div><strong>Presentación:</strong> {producto.presentacionSugerida}</div>
                                <div><strong>Marca:</strong> {producto.marcaSugerida}</div>
                              </div>
                            </div>
                            <div className="p-3 bg-white rounded border">
                              <div className="text-sm font-medium text-gray-700 mb-1">Alertas Críticas</div>
                              <div className="text-xs space-y-1">
                                <div className="flex justify-between">
                                  <span>Presentación no encontrada:</span>
                                  <Badge variant="destructive" className="text-xs">{producto.alertas.presentacionNoEncontrada}</Badge>
                                </div>
                                <div className="flex justify-between">
                                  <span>Marca no encontrada:</span>
                                  <Badge variant="destructive" className="text-xs">{producto.alertas.marcaNoEncontrada}</Badge>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 bg-white rounded border">
                              <div className="text-sm font-medium text-gray-700 mb-1">Acciones</div>
                              <div className="text-xs space-y-1">
                                <div>Requiere investigación inmediata</div>
                                <div>Actualizar especificaciones</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Ver Reportes
                            </Button>
                            <Button size="sm" variant="outline">
                              Investigar Mercado
                            </Button>
                            <Button size="sm">
                              Actualizar Producto
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Estadísticas de alertas */}
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
                        <p className="text-sm font-medium text-gray-600">Total Productos</p>
                        <p className="text-2xl font-bold text-gray-900">{productos.length}</p>
                      </div>
                      <Package className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Tasa de Alertas</p>
                        <p className="text-2xl font-bold text-orange-600">
                          {((productos.filter(p => p.alertas.presentacionNoEncontrada > 10 || p.alertas.marcaNoEncontrada > 10).length / productos.length) * 100).toFixed(1)}%
                        </p>
                      </div>
                      <Activity className="w-8 h-8 text-orange-600" />
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
