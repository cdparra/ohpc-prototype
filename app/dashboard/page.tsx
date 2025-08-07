import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, TrendingDown, Users, ShoppingCart, MapPin, Calendar, Download, RefreshCw } from 'lucide-react'
import Link from "next/link"

const recentReports = [
{
  id: 1,
  name: "Canasta Básica Alimentaria",
  type: "Semanal",
  status: "Completado",
  date: "2024-01-15",
  progress: 100,
},
{ id: 2, name: "Precio de Huevos", type: "Semanal", status: "En Proceso", date: "2024-01-15", progress: 75 },
{ id: 3, name: "Frutas y Vegetales", type: "Quincenal", status: "Pendiente", date: "2024-01-20", progress: 0 },
{ id: 4, name: "Productos Cárnicos", type: "Mensual", status: "Completado", date: "2024-01-01", progress: 100 },
]

const priceAlerts = [
{ product: "Arroz Blanco", change: "+15%", type: "increase", location: "Tegucigalpa" },
{ product: "Frijoles Rojos", change: "-8%", type: "decrease", location: "San Pedro Sula" },
{ product: "Aceite Vegetal", change: "+22%", type: "increase", location: "La Ceiba" },
]

export default function DashboardPage() {
return (
  <div className="min-h-screen bg-gray-50">
    {/* Header */}
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Dashboard Analítico</h1>
              <p className="text-xs text-gray-600">OHPC</p>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Actualizar
            </Button>
            <Link href="/analytics" passHref>
              <Button variant="outline" size="sm">
                Análisis detallado
              </Button>
            </Link>
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
          </div>
        </div>
      </div>
    </header>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard de Análisis de Precios</h2>
        <p className="text-gray-600">
          Monitoreo en tiempo real del comportamiento de precios en el mercado hondureño
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Productos Monitoreados</p>
                <p className="text-2xl font-bold text-gray-900">1,247</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% vs mes anterior
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Establecimientos</p>
                <p className="text-2xl font-bold text-gray-900">342</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5% vs mes anterior
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Variación Semanal</p>
                <p className="text-2xl font-bold text-gray-900">-2.3%</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  Reducción de precios
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Inspecciones Hoy</p>
                <p className="text-2xl font-bold text-gray-900">28</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  Meta: 35 diarias
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Reportes Recientes</CardTitle>
            <CardDescription>Estado de los reportes automatizados del sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-medium text-gray-900">{report.name}</h4>
                      <Badge
                        variant={
                          report.status === "Completado"
                            ? "default"
                            : report.status === "En Proceso"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 space-x-4">
                      <span>{report.type}</span>
                      <span>{report.date}</span>
                    </div>
                    {report.status === "En Proceso" && (
                      <div className="mt-2">
                        <Progress value={report.progress} className="h-2" />
                        <span className="text-xs text-gray-500 mt-1">{report.progress}% completado</span>
                      </div>
                    )}
                  </div>
                  <Button variant="outline" size="sm">
                    Ver
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Price Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alertas de Precios</CardTitle>
            <CardDescription>Variaciones significativas detectadas automáticamente</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {priceAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${alert.type === "increase" ? "bg-red-500" : "bg-green-500"}`}
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{alert.product}</h4>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {alert.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-lg font-bold ${alert.type === "increase" ? "text-red-600" : "text-green-600"}`}
                    >
                      {alert.change}
                    </div>
                    <div className="text-xs text-gray-500">vs semana anterior</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Tendencia de Precios - Canasta Básica</CardTitle>
          <CardDescription>Evolución de precios promedio en los últimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <BarChart3 className="w-12 h-12 mx-auto mb-4" />
              <p>Gráfico de tendencias de precios</p>
              <p className="text-sm">Integración con herramientas de visualización</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Generar Reporte</h3>
            <p className="text-sm text-gray-600 mb-4">Crear reportes personalizados con IA</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/analytics/products">
                Crear Reporte
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Gestionar Inspectores</h3>
            <p className="text-sm text-gray-600 mb-4">Asignar tareas y monitorear progreso</p>
            <Button variant="outline" className="w-full">
              Ver Inspectores
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Mapa de Precios</h3>
            <p className="text-sm text-gray-600 mb-4">Visualización geográfica de datos</p>
            <Button variant="outline" className="w-full">
              Ver Mapa
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
)
}
