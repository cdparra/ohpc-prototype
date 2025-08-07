'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, TrendingDown, AlertTriangle, Package, Search, Filter, Download, Eye, Activity, Target, Zap } from 'lucide-react'
import Link from "next/link"

// Datos simulados (reutilizando del módulo admin)
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
    estadisticas: {
      monitoreos: 145,
      establecimientos: 28,
      precioPromedio: 18.50,
      variacionMensual: 2.3,
      disponibilidad: 92.4
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
    estadisticas: {
      monitoreos: 198,
      establecimientos: 35,
      precioPromedio: 42.50,
      variacionMensual: 21.4,
      disponibilidad: 87.6
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
    estadisticas: {
      monitoreos: 89,
      establecimientos: 22,
      precioPromedio: 25.00,
      variacionMensual: -1.2,
      disponibilidad: 95.1
    },
    ultimoMonitoreo: "2024-01-14"
  }
]

const canastas = [
  "Canasta Básica Alimentaria",
  "Útiles Escolares", 
  "Medicamentos Básicos",
  "Materiales de Construcción"
]

export default function AnalyticsProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCanasta, setSelectedCanasta] = useState("")
  const [selectedTab, setSelectedTab] = useState("overview")
  const [filteredProducts, setFilteredProducts] = useState(productos)

  // Filtrar productos
  useEffect(() => {
    let filtered = productos.filter(producto => {
      const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           producto.categoria1.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           producto.categoria2.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCanasta = !selectedCanasta || producto.canasta === selectedCanasta
      return matchesSearch && matchesCanasta
    })
    setFilteredProducts(filtered)
  }, [searchTerm, selectedCanasta])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/analytics" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Análisis de Productos y Canastas</h1>
                <p className="text-xs text-gray-600">Análisis estadístico de productos monitoreados</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar Análisis
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Análisis de Productos y Canastas</h2>
          <p className="text-gray-600">
            Análisis estadístico de productos monitoreados y alertas de cambios en el mercado
          </p>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Resumen General</TabsTrigger>
            <TabsTrigger value="analysis">Análisis Detallado</TabsTrigger>
            <TabsTrigger value="market-changes">Cambios de Mercado</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="space-y-6">
              {/* KPIs principales */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                        <p className="text-sm font-medium text-gray-600">Monitoreos Totales</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {productos.reduce((sum, p) => sum + p.estadisticas.monitoreos, 0)}
                        </p>
                      </div>
                      <Activity className="w-8 h-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Disponibilidad Promedio</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {(productos.reduce((sum, p) => sum + p.estadisticas.disponibilidad, 0) / productos.length).toFixed(1)}%
                        </p>
                      </div>
                      <Target className="w-8 h-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>

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
                          <SelectItem value="">Todas las canastas</SelectItem>
                          {canastas.map((canasta) => (
                            <SelectItem key={canasta} value={canasta}>
                              {canasta}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Lista de productos con estadísticas */}
              <Card>
                <CardHeader>
                  <CardTitle>Productos Monitoreados ({filteredProducts.length})</CardTitle>
                  <CardDescription>
                    Vista general de productos con estadísticas de monitoreo
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
                              {producto.alertas.tendencia === "up" ? (
                                <TrendingUp className="w-4 h-4 text-red-600" />
                              ) : producto.alertas.tendencia === "down" ? (
                                <TrendingDown className="w-4 h-4 text-green-600" />
                              ) : null}
                            </div>
                            <div className="text-sm text-gray-600 mb-3">
                              {producto.categoria1} → {producto.categoria2}
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Detalles
                          </Button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="text-blue-600 font-medium">Monitoreos</div>
                            <div className="text-lg font-bold text-blue-900">{producto.estadisticas.monitoreos}</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="text-green-600 font-medium">Establecimientos</div>
                            <div className="text-lg font-bold text-green-900">{producto.estadisticas.establecimientos}</div>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg">
                            <div className="text-purple-600 font-medium">Precio Promedio</div>
                            <div className="text-lg font-bold text-purple-900">L. {producto.estadisticas.precioPromedio.toFixed(2)}</div>
                          </div>
                          <div className={`p-3 rounded-lg ${producto.estadisticas.variacionMensual > 0 ? 'bg-red-50' : 'bg-green-50'}`}>
                            <div className={`font-medium ${producto.estadisticas.variacionMensual > 0 ? 'text-red-600' : 'text-green-600'}`}>
                              Variación Mensual
                            </div>
                            <div className={`text-lg font-bold ${producto.estadisticas.variacionMensual > 0 ? 'text-red-900' : 'text-green-900'}`}>
                              {producto.estadisticas.variacionMensual > 0 ? '+' : ''}{producto.estadisticas.variacionMensual.toFixed(1)}%
                            </div>
                          </div>
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-gray-600 font-medium">Disponibilidad</div>
                            <div className="text-lg font-bold text-gray-900">{producto.estadisticas.disponibilidad.toFixed(1)}%</div>
                          </div>
                        </div>

                        {(producto.alertas.presentacionNoEncontrada > 5 || producto.alertas.marcaNoEncontrada > 5) && (
                          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <div className="flex items-center space-x-2 mb-2">
                              <AlertTriangle className="w-4 h-4 text-yellow-600" />
                              <span className="text-sm font-medium text-yellow-900">Alertas de Mercado</span>
                            </div>
                            <div className="text-sm text-yellow-800">
                              Presentación no encontrada: {producto.alertas.presentacionNoEncontrada} veces • 
                              Marca no encontrada: {producto.alertas.marcaNoEncontrada} veces
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analysis Tab */}
          <TabsContent value="analysis">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Análisis Estadístico Detallado
                  </CardTitle>
                  <CardDescription>
                    Análisis profundo de patrones de monitoreo y comportamiento de productos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Gráfico de disponibilidad */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Disponibilidad por Producto</h4>
                      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                          <p>Gráfico de Disponibilidad</p>
                          <p className="text-sm">Porcentaje de disponibilidad por producto</p>
                        </div>
                      </div>
                    </div>

                    {/* Gráfico de variación de precios */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Variación de Precios Mensual</h4>
                      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                          <p>Gráfico de Variación</p>
                          <p className="text-sm">Cambios porcentuales mensuales</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabla de análisis */}
                  <div className="mt-8">
                    <h4 className="font-medium text-gray-900 mb-4">Análisis Comparativo</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Producto</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Monitoreos</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Disponibilidad</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Precio Promedio</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Variación</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-900">Tendencia</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredProducts.map((producto) => (
                            <tr key={producto.id} className="border-b hover:bg-gray-50">
                              <td className="py-3 px-4 font-medium text-gray-900">{producto.nombre}</td>
                              <td className="py-3 px-4">{producto.estadisticas.monitoreos}</td>
                              <td className="py-3 px-4">
                                <div className="flex items-center space-x-2">
                                  <div className="w-16 bg-gray-200 rounded-full h-2">
                                    <div 
                                      className="bg-green-600 h-2 rounded-full" 
                                      style={{ width: `${producto.estadisticas.disponibilidad}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-sm">{producto.estadisticas.disponibilidad.toFixed(1)}%</span>
                                </div>
                              </td>
                              <td className="py-3 px-4">L. {producto.estadisticas.precioPromedio.toFixed(2)}</td>
                              <td className="py-3 px-4">
                                <span className={`font-medium ${producto.estadisticas.variacionMensual > 0 ? 'text-red-600' : 'text-green-600'}`}>
                                  {producto.estadisticas.variacionMensual > 0 ? '+' : ''}{producto.estadisticas.variacionMensual.toFixed(1)}%
                                </span>
                              </td>
                              <td className="py-3 px-4">
                                {producto.alertas.tendencia === "up" ? (
                                  <TrendingUp className="w-4 h-4 text-red-600" />
                                ) : producto.alertas.tendencia === "down" ? (
                                  <TrendingDown className="w-4 h-4 text-green-600" />
                                ) : (
                                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Market Changes Tab */}
          <TabsContent value="market-changes">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Alertas de Cambios en el Mercado
                  </CardTitle>
                  <CardDescription>
                    Productos con alta frecuencia de presentaciones o marcas no encontradas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {productos
                      .filter(p => p.alertas.presentacionNoEncontrada > 5 || p.alertas.marcaNoEncontrada > 5)
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
                              <div className="text-sm font-medium text-gray-700 mb-1">Alertas de Campo</div>
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
                              <div className="text-sm font-medium text-gray-700 mb-1">Impacto</div>
                              <div className="text-xs space-y-1">
                                <div>Disponibilidad: {producto.estadisticas.disponibilidad.toFixed(1)}%</div>
                                <div>Monitoreos afectados: {((producto.alertas.presentacionNoEncontrada + producto.alertas.marcaNoEncontrada) / producto.estadisticas.monitoreos * 100).toFixed(1)}%</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Ver Reportes de Campo
                            </Button>
                            <Button size="sm" variant="outline">
                              Analizar Alternativas
                            </Button>
                            <Button size="sm">
                              Actualizar Especificaciones
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recomendaciones */}
              <Card>
                <CardHeader>
                  <CardTitle>Recomendaciones de Actualización</CardTitle>
                  <CardDescription>
                    Sugerencias basadas en los patrones de monitoreo identificados
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Productos Prioritarios para Revisión</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• HUEVOS BLANCOS: 25 reportes de presentación no encontrada</li>
                        <li>• ACETAMINOFÉN: 22 reportes de marca no encontrada</li>
                        <li>• CUADERNO UNIVERSITARIO: 15 reportes de marca no encontrada</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Acciones Recomendadas</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Actualizar especificaciones de productos con más de 15 alertas</li>
                        <li>• Investigar nuevas marcas dominantes en el mercado</li>
                        <li>• Revisar presentaciones estándar por categoría de producto</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
