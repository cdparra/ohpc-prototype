'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, AlertTriangle, BarChart3, LineChart, PieChart, Calendar, Download, Settings, Brain, Globe, Zap, FileText, Target, Activity, Package, MapPin, ShoppingBasket, Factory, Users, Scale, DollarSign, Truck, ClipboardCheck, MessageSquareWarning } from 'lucide-react'
import Link from "next/link"

const priceAlerts = [
  {
    id: 1,
    product: "Huevos (Docena)",
    currentPrice: 42.5,
    previousPrice: 35.0,
    change: 21.4,
    status: "critical",
    reason: "Brote de gripe aviar",
    justified: true,
    arancelCode: "0407.11.00",
  },
  {
    id: 2,
    product: "Tortilla de Maíz",
    currentPrice: 8.5,
    previousPrice: 7.2,
    change: 18.1,
    status: "warning",
    reason: "Sequía en zona productora",
    justified: true,
    arancelCode: "1905.90.00",
  },
  {
    id: 3,
    product: "Aceite Vegetal",
    currentPrice: 68.0,
    previousPrice: 52.0,
    change: 30.8,
    status: "critical",
    reason: "No identificada",
    justified: false,
    arancelCode: "1507.90.00",
  },
  {
    id: 4,
    product: "Arroz Blanco",
    currentPrice: 32.0,
    previousPrice: 28.5,
    change: 12.3,
    status: "moderate",
    reason: "Incremento en combustibles",
    justified: true,
    arancelCode: "1006.30.00",
  },
]

const keyMetrics = [
  { label: "Inflación Alimentaria", value: "8.2%", change: "+1.3%", trend: "up", period: "Mensual" },
  { label: "Canasta Básica", value: "L. 1,247", change: "+L. 89", trend: "up", period: "Semanal" },
  { label: "Productos Sensibles", value: "12", change: "+3", trend: "up", period: "Alertas Activas" },
  { label: "Precisión Predictiva", value: "87.3%", change: "+2.1%", trend: "up", period: "Modelo IA" },
]

const seasonalTrends = [
  { product: "Frijoles", season: "Época Seca", impact: "↑ 15-20%", reason: "Menor producción local" },
  { product: "Frutas", season: "Época Lluviosa", impact: "↓ 10-15%", reason: "Mayor disponibilidad" },
  { product: "Huevos", season: "Navidad", impact: "↑ 25-30%", reason: "Alta demanda estacional" },
  { product: "Maíz", season: "Post-Cosecha", impact: "↓ 20-25%", reason: "Abundante oferta" },
]

const internationalPrices = [
  { commodity: "Maíz Amarillo", local: 18.5, international: 22.3, differential: -17.0, frequency: "Semanal" },
  { commodity: "Trigo", local: 24.0, international: 28.7, differential: -16.4, frequency: "Quincenal" },
  { commodity: "Soya", local: 35.2, international: 41.8, differential: -15.8, frequency: "Semanal" },
  { commodity: "Aceite Palma", local: 45.6, international: 52.1, differential: -12.5, frequency: "Mensual" },
]

// --- Nuevos datos simulados para los reportes ---
const distributionChannels = [
  { name: "Supermercados", product: "Arroz", avgPrice: 32.5, trend: "up", change: 2.1 },
  { name: "Mercados Locales", product: "Arroz", avgPrice: 30.0, trend: "stable", change: 0.5 },
  { name: "Pulperías", product: "Arroz", avgPrice: 35.0, trend: "up", change: 3.5 },
  { name: "Supermercados", product: "Huevos", avgPrice: 43.0, trend: "up", change: 5.0 },
  { name: "Mercados Locales", product: "Huevos", avgPrice: 41.0, trend: "up", change: 3.0 },
];

const timePeriodPrices = [
  { product: "Huevos", period: "Ene-23", price: 30.0, change: 0 },
  { product: "Huevos", period: "Abr-23", price: 32.5, change: 8.3 },
  { product: "Huevos", period: "Jul-23", price: 35.0, change: 7.7 },
  { product: "Huevos", period: "Oct-23", price: 38.0, change: 8.6 },
  { product: "Huevos", period: "Ene-24", price: 42.5, change: 11.8 },
];

const annualHistory = [
  { product: "Arroz", year: 2021, avgPrice: 25.0, change: 0 },
  { product: "Arroz", year: 2022, avgPrice: 28.0, change: 12.0 },
  { product: "Arroz", year: 2023, avgPrice: 31.0, change: 10.7 },
  { product: "Frijoles", year: 2021, avgPrice: 40.0, change: 0 },
  { product: "Frijoles", year: 2022, avgPrice: 42.0, change: 5.0 },
  { product: "Frijoles", year: 2023, avgPrice: 45.0, change: 7.1 },
];

const citizenReports = [
  { id: 1, product: "Leche (Litro)", location: "Col. Centro, Tegucigalpa", reportedPrice: 32.0, reason: "Escasez en pulpería", date: "2024-01-20", status: "Pendiente" },
  { id: 2, product: "Pan Molde", location: "Barrio Abajo, San Pedro Sula", reportedPrice: 55.0, reason: "Precio muy alto en supermercado", date: "2024-01-18", status: "Investigando" },
  { id: 3, product: "Tomate (Libra)", location: "Mercado Zonal Belén, Comayagua", reportedPrice: 15.0, reason: "Calidad baja para el precio", date: "2024-01-15", status: "Resuelto" },
];

const geoPrices = [
  { zone: "Zona Norte", product: "Huevos", avgPrice: 41.0, trend: "up" },
  { zone: "Zona Central", product: "Huevos", avgPrice: 42.5, trend: "up" },
  { zone: "Zona Sur", product: "Huevos", avgPrice: 40.0, trend: "stable" },
  { zone: "Zona Occidental", product: "Huevos", avgPrice: 43.5, trend: "up" },
];

const basketPrices = [
  { basket: "Canasta Básica Alimentaria", avgPrice: 1247.0, change: 2.3, trend: "up" },
  { basket: "Útiles Escolares", avgPrice: 500.0, change: -1.2, trend: "down" },
  { basket: "Medicamentos Básicos", avgPrice: 850.0, change: 0.8, trend: "stable" },
  { basket: "Materiales de Construcción", avgPrice: 3500.0, change: 4.5, trend: "up" },
];

const harvestData = [
  { zone: "Valle de Sula", product: "Maíz", status: "Buena", impact: "↓ 5% en precio", date: "2023-11" },
  { zone: "El Paraíso", product: "Frijoles", status: "Regular", impact: "↑ 3% en precio", date: "2023-12" },
  { zone: "Olancho", product: "Arroz", status: "Excelente", impact: "↓ 7% en precio", date: "2024-01" },
];

const prodConsData = [
  { product: "Arroz", production: 1000, consumption: 950, balance: "Superávit", unit: "TM" },
  { product: "Frijoles", production: 700, consumption: 750, balance: "Déficit", unit: "TM" },
  { product: "Maíz", production: 1500, consumption: 1400, balance: "Superávit", unit: "TM" },
];

const strategicReserves = [
  { product: "Arroz", current: 5000, target: 6000, status: "Bajo", unit: "TM", lastUpdate: "2024-01-10" },
  { product: "Frijoles", current: 3500, target: 3000, status: "Óptimo", unit: "TM", lastUpdate: "2024-01-05" },
  { product: "Azúcar", current: 2000, target: 2500, status: "Moderado", unit: "TM", lastUpdate: "2024-01-12" },
];

const productionCosts = [
  { product: "Maíz", stage: "Siembra", cost: 0.5, unit: "L./lb", details: "Semilla, fertilizante" },
  { product: "Maíz", stage: "Cosecha", cost: 0.3, unit: "L./lb", details: "Mano de obra, maquinaria" },
  { product: "Maíz", stage: "Acopio", cost: 0.1, unit: "L./lb", details: "Transporte, almacenamiento" },
  { product: "Huevos", stage: "Producción", cost: 2.5, unit: "L./unidad", details: "Alimento, sanidad" },
];

const valueChain = [
  { product: "Arroz", stage: "Producción", share: 30, profit: 10 },
  { product: "Arroz", stage: "Procesamiento", share: 20, profit: 8 },
  { product: "Arroz", stage: "Distribución", share: 25, profit: 7 },
  { product: "Arroz", stage: "Minorista", share: 25, profit: 15 },
];

const inspectorMonitoring = [
  { inspector: "Juan Pérez", zone: "Central", inspections: 120, accuracy: 98.5, alertsReported: 5, lastReport: "2024-01-22" },
  { inspector: "María González", zone: "Norte", inspections: 150, accuracy: 97.0, alertsReported: 8, lastReport: "2024-01-21" },
  { inspector: "Carlos Rivera", zone: "Sur", inspections: 90, accuracy: 99.0, alertsReported: 2, lastReport: "2024-01-20" },
];

const complaints = [
  { id: 1, type: "Precio Elevado", product: "Pan Molde", reporter: "Ciudadano A", status: "En Proceso", date: "2024-01-22", details: "Reporte de precio de L.55.00 en Supermercado X" },
  { id: 2, type: "Producto No Disponible", product: "Leche", reporter: "Ciudadano B", status: "Resuelto", date: "2024-01-20", details: "No se encontró marca habitual en Pulpería Y" },
  { id: 3, type: "Calidad Baja", product: "Tomate", reporter: "Ciudadano C", status: "Pendiente", date: "2024-01-18", details: "Tomates en mal estado a precio regular en Mercado Z" },
];


export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Centro de Análisis Avanzado</h1>
                <p className="text-xs text-gray-600">Análisis Econométrico y Predictivo</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configurar Modelos
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar Análisis
              </Button>
              <Button size="sm">
                <Brain className="w-4 h-4 mr-2" />
                Ejecutar IA
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard de Análisis Econométrico</h2>
          <p className="text-gray-600">
            Análisis avanzado con modelos predictivos, alertas inteligentes y comparativas históricas
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                  <div className="flex items-center space-x-1">
                    {metric.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-red-600" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-green-600" />
                    )}
                    <span
                      className={`text-xs font-medium ${metric.trend === "up" ? "text-red-600" : "text-green-600"}`}
                    >
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.period}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="alerts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-10">
            <TabsTrigger value="alerts">Alertas IA</TabsTrigger>
            <TabsTrigger value="precios">Precios</TabsTrigger>
            <TabsTrigger value="mercado">Mercado y Suministro</TabsTrigger>
            <TabsTrigger value="cadena-valor">Cadena de Valor</TabsTrigger>
            <TabsTrigger value="operaciones">Operaciones</TabsTrigger>
            <TabsTrigger value="comparative">Comparativo</TabsTrigger>
            <TabsTrigger value="predictive">Predictivo</TabsTrigger>
            <TabsTrigger value="bulletin">Boletín</TabsTrigger>
            <TabsTrigger value="international">Internacional</TabsTrigger>
            <TabsTrigger value="models">Modelos</TabsTrigger>
            <TabsTrigger value="products">Productos</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Price Alerts */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          Alertas de Alzas de Precios
                        </CardTitle>
                        <CardDescription>Detección automática de alzas injustificadas con IA</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Configurar Umbrales
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {priceAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`p-4 border rounded-lg ${
                            alert.status === "critical"
                              ? "bg-red-50 border-red-200"
                              : alert.status === "warning"
                                ? "bg-yellow-50 border-yellow-200"
                                : "bg-orange-50 border-orange-200"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="font-semibold text-gray-900">{alert.product}</h4>
                                <Badge
                                  variant={
                                    alert.status === "critical"
                                      ? "destructive"
                                      : alert.status === "warning"
                                        ? "default"
                                        : "secondary"
                                  }
                                >
                                  {alert.status === "critical"
                                    ? "Crítico"
                                    : alert.status === "warning"
                                      ? "Alerta"
                                      : "Moderado"}
                                </Badge>
                                <Badge variant={alert.justified ? "default" : "destructive"}>
                                  {alert.justified ? "Justificado" : "Injustificado"}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-600">Precio Actual:</span>
                                  <div className="font-medium">L. {alert.currentPrice.toFixed(2)}</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Precio Anterior:</span>
                                  <div className="font-medium">L. {alert.previousPrice.toFixed(2)}</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Variación:</span>
                                  <div className="font-medium text-red-600">+{alert.change.toFixed(1)}%</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Partida Arancelaria:</span>
                                  <div className="font-medium text-blue-600">{alert.arancelCode}</div>
                                </div>
                              </div>
                              <div className="mt-2 p-2 bg-white rounded border">
                                <span className="text-sm font-medium text-gray-700">Razón identificada: </span>
                                <span className="text-sm text-gray-600">{alert.reason}</span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <AlertTriangle
                                className={`w-6 h-6 ${
                                  alert.status === "critical"
                                    ? "text-red-600"
                                    : alert.status === "warning"
                                      ? "text-yellow-600"
                                      : "text-orange-600"
                                }`}
                              />
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Ver Análisis Detallado
                            </Button>
                            <Button size="sm" variant="outline">
                              Generar Reporte
                            </Button>
                            {!alert.justified && (
                              <Button size="sm" variant="destructive">
                                Investigar Causa
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Precios elevados reportados por ciudadanos */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquareWarning className="w-5 h-5 mr-2" />
                      Precios Elevados Reportados por Ciudadanos
                    </CardTitle>
                    <CardDescription>Reportes directos de consumidores sobre precios anómalos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {citizenReports.map((report) => (
                        <div key={report.id} className="p-4 border rounded-lg bg-blue-50 border-blue-200">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">{report.product}</h4>
                              <p className="text-sm text-gray-600 mb-2">{report.location}</p>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <span className="text-gray-600">Precio Reportado:</span>
                                  <div className="font-medium">L. {report.reportedPrice.toFixed(2)}</div>
                                </div>
                                <div>
                                  <span className="text-gray-600">Razón:</span>
                                  <div className="font-medium">{report.reason}</div>
                                </div>
                              </div>
                              <div className="mt-2 text-xs text-gray-500">Fecha: {report.date}</div>
                            </div>
                            <Badge variant={report.status === "Pendiente" ? "destructive" : report.status === "Investigando" ? "default" : "secondary"}>
                              {report.status}
                            </Badge>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Ver Detalles
                            </Button>
                            <Button size="sm">
                              Investigar
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Seasonal Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Tendencias Estacionales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {seasonalTrends.map((trend, index) => (
                        <div key={index} className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-gray-900">{trend.product}</span>
                            <span
                              className={`font-bold ${trend.impact.includes("↑") ? "text-red-600" : "text-green-600"}`}
                            >
                              {trend.impact}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">{trend.season}</div>
                          <div className="text-xs text-gray-500 mt-1">{trend.reason}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Alert Configuration */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Configuración de Alertas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Umbral Crítico</label>
                      <Select defaultValue="20">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15% de incremento</SelectItem>
                          <SelectItem value="20">20% de incremento</SelectItem>
                          <SelectItem value="25">25% de incremento</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Período de Análisis</label>
                      <Select defaultValue="weekly">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Diario</SelectItem>
                          <SelectItem value="weekly">Semanal</SelectItem>
                          <SelectItem value="monthly">Mensual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Actualizar Configuración</Button>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estadísticas Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Alertas Activas</span>
                      <Badge variant="destructive">12</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Alzas Injustificadas</span>
                      <Badge variant="outline">3</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Productos Sensibles</span>
                      <Badge>8</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Precisión IA</span>
                      <Badge variant="secondary">87.3%</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* New Tab: Precios */}
          <TabsContent value="precios">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Reportes de Precios y Tendencias
                  </CardTitle>
                  <CardDescription>Análisis detallado de precios por diferentes criterios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Precios y tendencias de precios por canal de distribución */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Truck className="w-4 h-4 mr-2" />
                      Precios por Canal de Distribución
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {distributionChannels.map((channel, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-gray-50">
                          <h4 className="font-medium text-gray-900">{channel.name}</h4>
                          <p className="text-sm text-gray-600">{channel.product}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xl font-bold">L. {channel.avgPrice.toFixed(2)}</span>
                            <Badge variant={channel.trend === "up" ? "destructive" : channel.trend === "down" ? "default" : "secondary"}>
                              {channel.trend === "up" ? <TrendingUp className="w-3 h-3 mr-1" /> : channel.trend === "down" ? <TrendingDown className="w-3 h-3 mr-1" /> : null}
                              {channel.change > 0 ? '+' : ''}{channel.change.toFixed(1)}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico de Precios por Canal</p>
                      </div>
                    </div>
                  </div>

                  {/* Precios y tendencias de precios por período de tiempo */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Precios por Período de Tiempo
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Producto</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Período</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Precio Promedio</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Variación</th>
                          </tr>
                        </thead>
                        <tbody>
                          {timePeriodPrices.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-4">{item.product}</td>
                              <td className="py-2 px-4">{item.period}</td>
                              <td className="py-2 px-4">L. {item.price.toFixed(2)}</td>
                              <td className="py-2 px-4">
                                <span className={item.change > 0 ? "text-red-600" : "text-green-600"}>
                                  {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <LineChart className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico de Tendencia de Precios</p>
                      </div>
                    </div>
                  </div>

                  {/* Históricos anuales */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Históricos Anuales
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Producto</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Año</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Precio Promedio Anual</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Variación Anual</th>
                          </tr>
                        </thead>
                        <tbody>
                          {annualHistory.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-4">{item.product}</td>
                              <td className="py-2 px-4">{item.year}</td>
                              <td className="py-2 px-4">L. {item.avgPrice.toFixed(2)}</td>
                              <td className="py-2 px-4">
                                <span className={item.change > 0 ? "text-red-600" : "text-green-600"}>
                                  {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico Histórico Anual</p>
                      </div>
                    </div>
                  </div>

                  {/* Comportamiento y variación de precios */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Activity className="w-4 h-4 mr-2" />
                      Comportamiento y Variación de Precios
                    </h3>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <LineChart className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico de Volatilidad de Precios</p>
                        <p className="text-sm">Análisis de desviación estándar y rango</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Tab: Mercado y Suministro */}
          <TabsContent value="mercado">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Reportes de Mercado y Suministro
                  </CardTitle>
                  <CardDescription>Análisis de factores externos que influyen en los precios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Por zona geográfica */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Precios por Zona Geográfica
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {geoPrices.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-gray-50">
                          <h4 className="font-medium text-gray-900">{item.zone}</h4>
                          <p className="text-sm text-gray-600">{item.product}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xl font-bold">L. {item.avgPrice.toFixed(2)}</span>
                            <Badge variant={item.trend === "up" ? "destructive" : item.trend === "down" ? "default" : "secondary"}>
                              {item.trend === "up" ? <TrendingUp className="w-3 h-3 mr-1" /> : item.trend === "down" ? <TrendingDown className="w-3 h-3 mr-1" /> : null}
                              {item.trend === "up" ? "Alza" : item.trend === "down" ? "Baja" : "Estable"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-12 h-12 mx-auto mb-4" />
                        <p>Mapa de Precios por Zona</p>
                      </div>
                    </div>
                  </div>

                  {/* Por tipo de canasta */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <ShoppingBasket className="w-4 h-4 mr-2" />
                      Precios por Tipo de Canasta
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {basketPrices.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-gray-50">
                          <h4 className="font-medium text-gray-900">{item.basket}</h4>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xl font-bold">L. {item.avgPrice.toFixed(2)}</span>
                            <Badge variant={item.trend === "up" ? "destructive" : item.trend === "down" ? "default" : "secondary"}>
                              {item.trend === "up" ? <TrendingUp className="w-3 h-3 mr-1" /> : item.trend === "down" ? <TrendingDown className="w-3 h-3 mr-1" /> : null}
                              {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <PieChart className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico de Precios por Canasta</p>
                      </div>
                    </div>
                  </div>

                  {/* Tendencias internacionales */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Globe className="w-4 h-4 mr-2" />
                      Tendencias Internacionales
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Commodity</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Precio Local</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Precio Intl.</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Diferencial</th>
                          </tr>
                        </thead>
                        <tbody>
                          {internationalPrices.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-4">{item.commodity}</td>
                              <td className="py-2 px-4">L. {item.local.toFixed(2)}</td>
                              <td className="py-2 px-4">L. {item.international.toFixed(2)}</td>
                              <td className="py-2 px-4">
                                <span className={item.differential < 0 ? "text-green-600" : "text-red-600"}>
                                  {item.differential.toFixed(1)}%
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <LineChart className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico Comparativo Internacional</p>
                      </div>
                    </div>
                  </div>

                  {/* Cosechas por zonas */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Cosechas por Zonas
                    </h3>
                    <div className="space-y-3">
                      {harvestData.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-gray-50">
                          <h4 className="font-medium text-gray-900">{item.product} - {item.zone}</h4>
                          <p className="text-sm text-gray-600">Estado: {item.status}</p>
                          <p className="text-sm text-gray-600">Impacto estimado: {item.impact}</p>
                          <p className="text-xs text-gray-500">Última cosecha: {item.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Producción y consumo */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Factory className="w-4 h-4 mr-2" />
                      Producción y Consumo
                    </h3>
                    <div className="space-y-3">
                      {prodConsData.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-gray-50">
                          <h4 className="font-medium text-gray-900">{item.product}</h4>
                          <p className="text-sm text-gray-600">Producción: {item.production} {item.unit}</p>
                          <p className="text-sm text-gray-600">Consumo: {item.consumption} {item.unit}</p>
                          <p className="text-sm font-semibold">Balance: {item.balance}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reserva estratégica */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      Reserva Estratégica
                    </h3>
                    <div className="space-y-3">
                      {strategicReserves.map((item, index) => (
                        <div key={index} className="p-4 border rounded-lg bg-gray-50">
                          <h4 className="font-medium text-gray-900">{item.product}</h4>
                          <p className="text-sm text-gray-600">Actual: {item.current} {item.unit}</p>
                          <p className="text-sm text-gray-600">Meta: {item.target} {item.unit}</p>
                          <p className="text-sm font-semibold">Estado: {item.status}</p>
                          <p className="text-xs text-gray-500">Última actualización: {item.lastUpdate}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Tab: Cadena de Valor */}
          <TabsContent value="cadena-valor">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="w-5 h-5 mr-2" />
                    Reportes de Cadena de Valor
                  </CardTitle>
                  <CardDescription>Análisis de costos y distribución de ganancias a lo largo de la cadena</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Costos de producción */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <DollarSign className="w-4 h-4 mr-2" />
                      Costos de Producción
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Producto</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Etapa</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Costo Unitario</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Detalles</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productionCosts.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-4">{item.product}</td>
                              <td className="py-2 px-4">{item.stage}</td>
                              <td className="py-2 px-4">L. {item.cost.toFixed(2)}/{item.unit}</td>
                              <td className="py-2 px-4 text-sm text-gray-600">{item.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico de Costos por Etapa</p>
                      </div>
                    </div>
                  </div>

                  {/* Cadena de valor (distribución de costos y ganancias) */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Truck className="w-4 h-4 mr-2" />
                      Cadena de Valor
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Producto</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Etapa</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Participación (%)</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Ganancia (%)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {valueChain.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-4">{item.product}</td>
                              <td className="py-2 px-4">{item.stage}</td>
                              <td className="py-2 px-4">{item.share}%</td>
                              <td className="py-2 px-4">{item.profit}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <PieChart className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico de Participación en la Cadena de Valor</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Tab: Operaciones y Denuncias */}
          <TabsContent value="operaciones">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ClipboardCheck className="w-5 h-5 mr-2" />
                    Reportes de Operaciones y Denuncias
                  </CardTitle>
                  <CardDescription>Monitoreo de la actividad de inspectores y seguimiento de denuncias</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Monitoreo de precios por inspectores */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Monitoreo de Precios por Inspectores
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Inspector</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Zona</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Inspecciones</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Precisión (%)</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Alertas Reportadas</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Último Reporte</th>
                          </tr>
                        </thead>
                        <tbody>
                          {inspectorMonitoring.map((item, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-4">{item.inspector}</td>
                              <td className="py-2 px-4">{item.zone}</td>
                              <td className="py-2 px-4">{item.inspections}</td>
                              <td className="py-2 px-4">{item.accuracy.toFixed(1)}%</td>
                              <td className="py-2 px-4">{item.alertsReported}</td>
                              <td className="py-2 px-4">{item.lastReport}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico de Actividad de Inspectores</p>
                      </div>
                    </div>
                  </div>

                  {/* Denuncias y seguimiento de procesos */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <MessageSquareWarning className="w-4 h-4 mr-2" />
                      Denuncias y Seguimiento de Procesos
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4 font-medium text-gray-900">ID</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Tipo</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Producto</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Reportado por</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Estado</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Fecha</th>
                            <th className="text-left py-2 px-4 font-medium text-gray-900">Detalles</th>
                          </tr>
                        </thead>
                        <tbody>
                          {complaints.map((item) => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                              <td className="py-2 px-4">{item.id}</td>
                              <td className="py-2 px-4">{item.type}</td>
                              <td className="py-2 px-4">{item.product}</td>
                              <td className="py-2 px-4">{item.reporter}</td>
                              <td className="py-2 px-4">
                                <Badge variant={item.status === "Pendiente" ? "destructive" : item.status === "En Proceso" ? "default" : "secondary"}>
                                  {item.status}
                                </Badge>
                              </td>
                              <td className="py-2 px-4">{item.date}</td>
                              <td className="py-2 px-4 text-sm text-gray-600">{item.details}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mt-4">
                      <div className="text-center text-gray-500">
                        <ClipboardCheck className="w-12 h-12 mx-auto mb-4" />
                        <p>Gráfico de Estado de Denuncias</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Historical Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="w-5 h-5 mr-2" />
                    Análisis Comparativo Histórico
                  </CardTitle>
                  <CardDescription>Comparación de precios por períodos y estaciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Producto</label>
                        <Select defaultValue="huevos">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="huevos">Huevos (Docena)</SelectItem>
                            <SelectItem value="tortilla">Tortilla de Maíz</SelectItem>
                            <SelectItem value="arroz">Arroz Blanco</SelectItem>
                            <SelectItem value="frijoles">Frijoles Rojos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Período</label>
                        <Select defaultValue="year">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="month">Último Mes</SelectItem>
                            <SelectItem value="quarter">Último Trimestre</SelectItem>
                            <SelectItem value="year">Último Año</SelectItem>
                            <SelectItem value="pandemic">Período Pandemia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <LineChart className="w-12 h-12 mx-auto mb-4" />
                      <p>Gráfico Comparativo Histórico</p>
                      <p className="text-sm">Huevos - Último Año vs Años Anteriores</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">L. 42.5</div>
                      <div className="text-gray-600">Precio Actual</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">L. 38.2</div>
                      <div className="text-gray-600">Promedio Histórico</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-lg font-bold text-red-600">+11.3%</div>
                      <div className="text-gray-600">Variación</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Seasonal Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Análisis Estacional
                  </CardTitle>
                  <CardDescription>Patrones de precios por estaciones y eventos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-500">
                      <PieChart className="w-12 h-12 mx-auto mb-4" />
                      <p>Análisis Estacional</p>
                      <p className="text-sm">Variaciones por época del año</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                      <span className="text-sm font-medium">Época Seca (Nov-Abr)</span>
                      <span className="text-sm font-bold text-red-600">+18% promedio</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                      <span className="text-sm font-medium">Época Lluviosa (May-Oct)</span>
                      <span className="text-sm font-bold text-green-600">-12% promedio</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                      <span className="text-sm font-medium">Temporada Navideña</span>
                      <span className="text-sm font-bold text-red-600">+25% promedio</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Inspector Data Analysis */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Análisis de Datos de Inspectores</CardTitle>
                  <CardDescription>Precios tratados estadísticamente - Mensual y Trimestral</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Análisis Mensual</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <span className="font-medium text-gray-900">Huevos (Docena)</span>
                            <div className="text-sm text-gray-600">Media: L. 41.2 | Mediana: L. 40.8</div>
                          </div>
                          <Badge variant="outline">σ = 3.2</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <span className="font-medium text-gray-900">Tortilla de Maíz</span>
                            <div className="text-sm text-gray-600">Media: L. 8.1 | Mediana: L. 8.0</div>
                          </div>
                          <Badge variant="outline">σ = 0.8</Badge>
                        </div>
                        <div className="flex justify-between items-center p-3 border rounded-lg">
                          <div>
                            <span className="font-medium text-gray-900">Arroz Blanco</span>
                            <div className="text-sm text-gray-600">Media: L. 30.5 | Mediana: L. 30.2</div>
                          </div>
                          <Badge variant="outline">σ = 2.1</Badge>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Análisis Trimestral</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">Tendencia General</span>
                            <TrendingUp className="w-4 h-4 text-red-600" />
                          </div>
                          <div className="text-sm text-gray-600">Incremento promedio: +8.3% trimestral</div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">Volatilidad</span>
                            <Activity className="w-4 h-4 text-orange-600" />
                          </div>
                          <div className="text-sm text-gray-600">Coeficiente de variación: 12.4%</div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">Correlación Estacional</span>
                            <Target className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-sm text-gray-600">R² = 0.73 (fuerte correlación)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="predictive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Predictive Models */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Modelos Predictivos Configurables
                  </CardTitle>
                  <CardDescription>Predicciones basadas en factores climáticos y económicos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Producto a Predecir</label>
                      <Select defaultValue="huevos">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="huevos">Huevos (Producto Sensible)</SelectItem>
                          <SelectItem value="tortilla">Tortilla (Producto Sensible)</SelectItem>
                          <SelectItem value="maiz">Maíz Amarillo</SelectItem>
                          <SelectItem value="frijoles">Frijoles Rojos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Factores Climáticos</label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="lluvia" defaultChecked />
                          <label htmlFor="lluvia" className="text-sm">
                            Precipitación
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="temperatura" defaultChecked />
                          <label htmlFor="temperatura" className="text-sm">
                            Temperatura
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="sequia" defaultChecked />
                          <label htmlFor="sequia" className="text-sm">
                            Índice de Sequía
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="huracan" />
                          <label htmlFor="huracan" className="text-sm">
                            Temporada Huracanes
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Horizonte de Predicción</label>
                      <Select defaultValue="3months">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1month">1 Mes</SelectItem>
                          <SelectItem value="3months">3 Meses</SelectItem>
                          <SelectItem value="6months">6 Meses</SelectItem>
                          <SelectItem value="1year">1 Año</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      <Brain className="w-4 h-4 mr-2" />
                      Ejecutar Predicción
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Prediction Results */}
              <Card>
                <CardHeader>
                  <CardTitle>Resultados Predictivos</CardTitle>
                  <CardDescription>Proyecciones para Huevos - Próximos 3 meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-500">
                      <LineChart className="w-12 h-12 mx-auto mb-4" />
                      <p>Gráfico Predictivo</p>
                      <p className="text-sm">Proyección basada en modelo IA</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">L. 45.2</div>
                      <div className="text-gray-600">Mes 1</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-lg font-bold text-orange-600">L. 48.7</div>
                      <div className="text-gray-600">Mes 2</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-lg font-bold text-red-600">L. 52.1</div>
                      <div className="text-gray-600">Mes 3</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">Factores de Riesgo Identificados</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Temporada seca prolongada (+15% impacto)</li>
                      <li>• Incremento en costos de alimentación aviar (+8% impacto)</li>
                      <li>• Demanda estacional navideña (+12% impacto)</li>
                    </ul>
                  </div>
                  <div className="mt-4 flex justify-between items-center text-sm">
                    <span className="text-gray-600">Precisión del modelo:</span>
                    <Badge>87.3% ± 3.2%</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Sensitive Products */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Productos Sensibles - Modelo Excel Integrado</CardTitle>
                  <CardDescription>
                    Lista identificada de productos con alta incidencia nutricional (Plantilla de Lisbeth)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Proteínas Esenciales</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg bg-red-50 border-red-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">Huevos (Docena)</span>
                            <Badge variant="destructive">Crítico</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            Proteína más barata - Alta incidencia nutricional
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>Precio actual: L. 42.5</div>
                            <div>Predicción 30d: L. 45.2</div>
                            <div>Impacto nutricional: 95%</div>
                            <div>Volatilidad: Alta</div>
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">Pollo Entero</span>
                            <Badge variant="secondary">Moderado</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Segunda proteína más accesible</div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>Precio actual: L. 85.2</div>
                            <div>Predicción 30d: L. 87.1</div>
                            <div>Impacto nutricional: 78%</div>
                            <div>Volatilidad: Media</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Carbohidratos Básicos</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg bg-yellow-50 border-yellow-200">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">Tortilla de Maíz</span>
                            <Badge variant="default">Alto Impacto</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Alimento básico - Consumo diario masivo</div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>Precio actual: L. 8.5</div>
                            <div>Predicción 30d: L. 9.1</div>
                            <div>Impacto nutricional: 92%</div>
                            <div>Volatilidad: Media</div>
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-gray-900">Arroz Blanco</span>
                            <Badge variant="secondary">Moderado</Badge>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">Complemento alimentario esencial</div>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div>Precio actual: L. 32.0</div>
                            <div>Predicción 30d: L. 33.2</div>
                            <div>Impacto nutricional: 71%</div>
                            <div>Volatilidad: Baja</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Integración con Modelo Excel</h4>
                    <p className="text-sm text-blue-800 mb-3">
                      Fórmulas sistematizadas de Lisbeth integradas con análisis SPSS del equipo técnico
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Exportar a Excel
                      </Button>
                      <Button size="sm" variant="outline">
                        Sincronizar con SPSS
                      </Button>
                      <Button size="sm">Actualizar Modelo</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="international">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Análisis de Precios Internacionales
                </CardTitle>
                <CardDescription>Comparación con mercados internacionales y frecuencia relativa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Commodity</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Precio Local (L./lb)</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Precio Internacional (L./lb)</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Diferencial</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Frecuencia</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Tendencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {internationalPrices.map((item, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{item.commodity}</td>
                          <td className="py-3 px-4">L. {item.local.toFixed(2)}</td>
                          <td className="py-3 px-4">L. {item.international.toFixed(2)}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`font-medium ${item.differential < 0 ? "text-green-600" : "text-red-600"}`}
                            >
                              {item.differential > 0 ? "+" : ""}
                              {item.differential.toFixed(1)}%
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">{item.frequency}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            {item.differential < -10 ? (
                              <TrendingDown className="w-4 h-4 text-green-600" />
                            ) : (
                              <TrendingUp className="w-4 h-4 text-red-600" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Ventaja Competitiva</h4>
                    <p className="text-sm text-green-800">Precios locales 15.2% menores al promedio internacional</p>
                  </div>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-900 mb-2">Riesgo de Importación</h4>
                    <p className="text-sm text-yellow-800">
                      3 productos con diferencial crítico que podrían requerir importación
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Proyección Acumulada</h4>
                    <p className="text-sm text-blue-800">
                      Tendencia del año sugiere convergencia con precios internacionales
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bulletin">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Generador de Boletín de Precios
                </CardTitle>
                <CardDescription>Boletín automatizado para reportar al consumidor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Bulletin Configuration */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración del Boletín</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Boletín</label>
                          <Select defaultValue="weekly">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Diario</SelectItem>
                              <SelectItem value="weekly">Semanal</SelectItem>
                              <SelectItem value="monthly">Mensual</SelectItem>
                              <SelectItem value="special">Especial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Productos a Incluir</label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="canasta" defaultChecked />
                              <label htmlFor="canasta" className="text-sm">
                                Canasta Básica Completa
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="sensibles" defaultChecked />
                              <label htmlFor="sensibles" className="text-sm">
                                Productos Sensibles
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="alertas" defaultChecked />
                              <label htmlFor="alertas" className="text-sm">
                                Productos con Alertas
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="estacional" />
                              <label htmlFor="estacional" className="text-sm">
                                Análisis Estacional
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Formato de Salida</label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="pdf" defaultChecked />
                              <label htmlFor="pdf" className="text-sm">
                                PDF para Impresión
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="web" defaultChecked />
                              <label htmlFor="web" className="text-sm">
                                Versión Web
                              </label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input type="checkbox" id="social" />
                              <label htmlFor="social" className="text-sm">
                                Redes Sociales
                              </label>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full">
                          <FileText className="w-4 h-4 mr-2" />
                          Generar Boletín
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Bulletin Preview */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Vista Previa del Boletín</h3>
                    <div className="border rounded-lg p-6 bg-white shadow-sm">
                      <div className="text-center mb-6">
                        <h2 className="text-xl font-bold text-gray-900">BOLETÍN SEMANAL DE PRECIOS</h2>
                        <p className="text-sm text-gray-600">Observatorio Hondureño de Precios al Consumidor</p>
                        <p className="text-sm text-gray-600">Semana del 15 al 21 de Enero, 2024</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Resumen Ejecutivo</h3>
                          <p className="text-sm text-gray-700">
                            La canasta básica alimentaria registró un incremento del 2.3% esta semana, impulsada
                            principalmente por el alza en huevos (+21.4%) y tortilla de maíz (+18.1%).
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Productos Destacados</h3>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                              <span>Huevos (Docena)</span>
                              <span className="font-medium text-red-600">L. 42.50 (+21.4%)</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span>Tortilla de Maíz</span>
                              <span className="font-medium text-red-600">L. 8.50 (+18.1%)</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span>Arroz Blanco</span>
                              <span className="font-medium text-green-600">L. 32.00 (-2.3%)</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Recomendaciones</h3>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Considerar alternativas proteicas temporales</li>
                            <li>• Aprovechar ofertas en supermercados</li>
                            <li>• Monitorear precios en mercados locales</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t text-center">
                        <p className="text-xs text-gray-500">
                          Datos recopilados de 342 establecimientos en 18 departamentos
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Download className="w-4 h-4 mr-2" />
                        Descargar PDF
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        Publicar Web
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="models">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Econometric Models */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Modelos Econométricos Integrados
                  </CardTitle>
                  <CardDescription>Base econométrica ajustada a problemas específicos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-900">Modelo de Tendencias Pandemia</h4>
                        <Badge>Activo</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Identifica patrones de precios durante crisis sanitarias y económicas
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Precisión: 89.2%</div>
                        <div>R²: 0.84</div>
                        <div>Variables: 12</div>
                        <div>Última actualización: Hoy</div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-900">Modelo de Volatilidad Estacional</h4>
                        <Badge variant="secondary">En Desarrollo</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Predice variaciones estacionales basado en datos históricos
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Precisión: 76.8%</div>
                        <div>R²: 0.71</div>
                        <div>Variables: 8</div>
                        <div>En calibración</div>
                      </div>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium text-gray-900">Modelo de Alzas Injustificadas</h4>
                        <Badge>Activo</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Detecta incrementos anómalos sin justificación económica
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>Precisión: 92.1%</div>
                        <div>R²: 0.88</div>
                        <div>Variables: 15</div>
                        <div>Última actualización: Ayer</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Analysis Guide */}
              <Card>
                <CardHeader>
                  <CardTitle>Guía Replicable de Análisis</CardTitle>
                  <CardDescription>Metodología sistematizada para análisis consistente</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Paso 1: Recolección de Datos</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Validar datos de inspectores</li>
                        <li>• Integrar precios internacionales</li>
                        <li>• Incorporar variables climáticas</li>
                        <li>• Verificar partidas arancelarias</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Paso 2: Análisis Estadístico</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Aplicar plantilla Excel de Lisbeth</li>
                        <li>• Ejecutar modelos SPSS</li>
                        <li>• Calcular medidas de tendencia central</li>
                        <li>• Evaluar volatilidad y correlaciones</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-2">Paso 3: Interpretación</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Identificar alzas justificadas vs injustificadas</li>
                        <li>• Evaluar impacto nutricional</li>
                        <li>• Generar alertas automáticas</li>
                        <li>• Crear recomendaciones</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                      <h4 className="font-medium text-orange-900 mb-2">Paso 4: Comunicación</h4>
                      <ul className="text-sm text-orange-800 space-y-1">
                        <li>• Generar boletín automatizado</li>
                        <li>• Crear visualizaciones</li>
                        <li>• Preparar reportes ejecutivos</li>
                        <li>• Publicar en portal ciudadano</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Guía Completa
                  </Button>
                </CardContent>
              </Card>

              {/* Integration Tools */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Integración con Herramientas Existentes</CardTitle>
                  <CardDescription>Conectores con Excel, SPSS y otras herramientas del equipo técnico</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Excel Integration</h4>
                          <p className="text-sm text-gray-600">Plantilla de Lisbeth</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Estado:</span>
                          <Badge>Conectado</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Última sync:</span>
                          <span className="text-gray-600">Hace 5 min</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fórmulas:</span>
                          <span className="text-gray-600">47 activas</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                        Sincronizar
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">SPSS Integration</h4>
                          <p className="text-sm text-gray-600">Equipo Técnico</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Estado:</span>
                          <Badge>Conectado</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Modelos:</span>
                          <span className="text-gray-600">8 activos</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Precisión:</span>
                          <span className="text-gray-600">87.3%</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                        Ejecutar Modelos
                      </Button>
                    </div>

                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Brain className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">AI Models</h4>
                          <p className="text-sm text-gray-600">Predictivos</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Estado:</span>
                          <Badge>Entrenando</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Algoritmos:</span>
                          <span className="text-gray-600">5 activos</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Accuracy:</span>
                          <span className="text-gray-600">89.1%</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                        Entrenar IA
                      </Button>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-3">Flujo de Trabajo Integrado</h4>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-blue-600 font-bold">1</span>
                        </div>
                        <span className="text-gray-600">Datos Inspectores</span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-green-600 font-bold">2</span>
                        </div>
                        <span className="text-gray-600">Excel/SPSS</span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-purple-600 font-bold">3</span>
                        </div>
                        <span className="text-gray-600">Modelos IA</span>
                      </div>
                      <div className="flex-1 h-px bg-gray-300 mx-2"></div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-orange-600 font-bold">4</span>
                        </div>
                        <span className="text-gray-600">Boletín</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Análisis de Productos y Canastas
                </CardTitle>
                <CardDescription>Análisis detallado de productos monitoreados y alertas de mercado</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Package className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Análisis de Productos</h3>
                  <p className="text-gray-600 mb-4">
                    Acceda al módulo completo de análisis de productos y canastas
                  </p>
                  <Link href="/analytics/products">
                    <Button>
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Ver Análisis Completo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
