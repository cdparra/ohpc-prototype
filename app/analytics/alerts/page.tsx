import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  TrendingUp,
  Bell,
  Settings,
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  Zap,
  Target,
} from "lucide-react"
import Link from "next/link"

const criticalAlerts = [
  {
    id: 1,
    product: "Aceite Vegetal",
    category: "Aceites",
    currentPrice: 68.0,
    previousPrice: 52.0,
    change: 30.8,
    threshold: 20.0,
    status: "active",
    severity: "critical",
    reason: "No identificada - Requiere investigación",
    justified: false,
    arancelCode: "1507.90.00",
    affectedStores: 23,
    reportedBy: "Sistema IA",
    createdAt: "2024-01-16 08:30",
    estimatedImpact: "Alto - Producto esencial",
  },
  {
    id: 2,
    product: "Huevos (Docena)",
    category: "Proteínas",
    currentPrice: 42.5,
    previousPrice: 35.0,
    change: 21.4,
    threshold: 20.0,
    status: "investigating",
    severity: "critical",
    reason: "Brote de gripe aviar en granjas principales",
    justified: true,
    arancelCode: "0407.11.00",
    affectedStores: 45,
    reportedBy: "Inspector María González",
    createdAt: "2024-01-15 14:20",
    estimatedImpact: "Crítico - Proteína más barata",
  },
  {
    id: 3,
    product: "Tortilla de Maíz",
    category: "Carbohidratos",
    currentPrice: 8.5,
    previousPrice: 7.2,
    change: 18.1,
    threshold: 15.0,
    status: "resolved",
    severity: "warning",
    reason: "Sequía en zona productora de maíz",
    justified: true,
    arancelCode: "1905.90.00",
    affectedStores: 67,
    reportedBy: "Sistema IA",
    createdAt: "2024-01-14 10:15",
    estimatedImpact: "Alto - Alimento básico diario",
  },
]

const alertRules = [
  {
    id: 1,
    name: "Productos Sensibles - Crítico",
    products: ["Huevos", "Tortilla", "Arroz", "Frijoles"],
    threshold: 15,
    period: "Semanal",
    active: true,
    notifications: ["Email", "SMS", "Dashboard"],
  },
  {
    id: 2,
    name: "Canasta Básica - Moderado",
    products: ["Todos los productos de canasta básica"],
    threshold: 10,
    period: "Mensual",
    active: true,
    notifications: ["Email", "Dashboard"],
  },
  {
    id: 3,
    name: "Alzas Injustificadas",
    products: ["Todos"],
    threshold: 25,
    period: "Diario",
    active: true,
    notifications: ["Email", "SMS", "Dashboard", "WhatsApp"],
  },
]

export default function AlertsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/analytics" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Sistema de Alertas Inteligentes</h1>
                <p className="text-xs text-gray-600">Detección Automática de Alzas Injustificadas</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">3 alertas críticas</span>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configurar
              </Button>
              <Button size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notificar Equipo
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Centro de Alertas de Precios</h2>
          <p className="text-gray-600">Monitoreo en tiempo real de alzas injustificadas con inteligencia artificial</p>
        </div>

        {/* Alert Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Alertas Críticas</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Requieren acción inmediata
                  </p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">En Investigación</p>
                  <p className="text-2xl font-bold text-yellow-600">5</p>
                  <p className="text-xs text-yellow-600 flex items-center mt-1">
                    <Clock className="w-3 h-3 mr-1" />
                    Análisis en progreso
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Resueltas Hoy</p>
                  <p className="text-2xl font-bold text-green-600">8</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Causas identificadas
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Precisión IA</p>
                  <p className="text-2xl font-bold text-blue-600">89.3%</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <Target className="w-3 h-3 mr-1" />
                    Últimos 30 días
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">Alertas Activas</TabsTrigger>
            <TabsTrigger value="history">Historial</TabsTrigger>
            <TabsTrigger value="rules">Reglas</TabsTrigger>
            <TabsTrigger value="analytics">Análisis</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Active Alerts */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          Alertas Activas de Precios
                        </CardTitle>
                        <CardDescription>Alzas detectadas automáticamente por IA</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Filter className="w-4 h-4 mr-2" />
                          Filtrar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Exportar
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {criticalAlerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`p-6 border rounded-lg ${
                            alert.severity === "critical"
                              ? "bg-red-50 border-red-200"
                              : alert.severity === "warning"
                                ? "bg-yellow-50 border-yellow-200"
                                : "bg-orange-50 border-orange-200"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <h4 className="text-lg font-semibold text-gray-900">{alert.product}</h4>
                                <Badge
                                  variant={
                                    alert.severity === "critical"
                                      ? "destructive"
                                      : alert.severity === "warning"
                                        ? "default"
                                        : "secondary"
                                  }
                                >
                                  {alert.severity === "critical"
                                    ? "CRÍTICO"
                                    : alert.severity === "warning"
                                      ? "ALERTA"
                                      : "MODERADO"}
                                </Badge>
                                <Badge
                                  variant={
                                    alert.status === "active"
                                      ? "destructive"
                                      : alert.status === "investigating"
                                        ? "default"
                                        : "secondary"
                                  }
                                >
                                  {alert.status === "active"
                                    ? "ACTIVA"
                                    : alert.status === "investigating"
                                      ? "INVESTIGANDO"
                                      : "RESUELTA"}
                                </Badge>
                                <Badge variant={alert.justified ? "default" : "destructive"}>
                                  {alert.justified ? "JUSTIFICADO" : "INJUSTIFICADO"}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div className="bg-white p-3 rounded-lg border">
                                  <span className="text-sm text-gray-600">Precio Actual</span>
                                  <div className="text-xl font-bold text-gray-900">
                                    L. {alert.currentPrice.toFixed(2)}
                                  </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg border">
                                  <span className="text-sm text-gray-600">Precio Anterior</span>
                                  <div className="text-xl font-bold text-gray-900">
                                    L. {alert.previousPrice.toFixed(2)}
                                  </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg border">
                                  <span className="text-sm text-gray-600">Variación</span>
                                  <div className="text-xl font-bold text-red-600 flex items-center">
                                    <TrendingUp className="w-4 h-4 mr-1" />+{alert.change.toFixed(1)}%
                                  </div>
                                </div>
                                <div className="bg-white p-3 rounded-lg border">
                                  <span className="text-sm text-gray-600">Umbral</span>
                                  <div className="text-xl font-bold text-orange-600">{alert.threshold.toFixed(1)}%</div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-white p-3 rounded-lg border">
                                  <div className="text-sm text-gray-600 mb-1">Razón Identificada</div>
                                  <div className="font-medium text-gray-900">{alert.reason}</div>
                                </div>
                                <div className="bg-white p-3 rounded-lg border">
                                  <div className="text-sm text-gray-600 mb-1">Impacto Estimado</div>
                                  <div className="font-medium text-gray-900">{alert.estimatedImpact}</div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                                <span>
                                  <strong>Partida Arancelaria:</strong> {alert.arancelCode}
                                </span>
                                <span>
                                  <strong>Establecimientos Afectados:</strong> {alert.affectedStores}
                                </span>
                                <span>
                                  <strong>Reportado por:</strong> {alert.reportedBy}
                                </span>
                                <span>
                                  <strong>Fecha:</strong> {alert.createdAt}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4">
                              <AlertTriangle
                                className={`w-8 h-8 ${
                                  alert.severity === "critical"
                                    ? "text-red-600"
                                    : alert.severity === "warning"
                                      ? "text-yellow-600"
                                      : "text-orange-600"
                                }`}
                              />
                            </div>
                          </div>

                          <div className="flex space-x-3">
                            <Button size="sm">
                              <Eye className="w-4 h-4 mr-2" />
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
                            {alert.status === "active" && (
                              <Button size="sm" variant="outline">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Marcar como Resuelto
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Filters */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Filtros Rápidos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Severidad</label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="critical">Críticas</SelectItem>
                          <SelectItem value="warning">Alertas</SelectItem>
                          <SelectItem value="moderate">Moderadas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                      <Select defaultValue="active">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todos</SelectItem>
                          <SelectItem value="active">Activas</SelectItem>
                          <SelectItem value="investigating">Investigando</SelectItem>
                          <SelectItem value="resolved">Resueltas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Justificación</label>
                      <Select defaultValue="all">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="justified">Justificadas</SelectItem>
                          <SelectItem value="unjustified">Injustificadas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">Aplicar Filtros</Button>
                  </CardContent>
                </Card>

                {/* Alert Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estadísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Alertas</span>
                      <Badge variant="outline">16</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Injustificadas</span>
                      <Badge variant="destructive">3</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Tiempo Promedio Resolución</span>
                      <span className="text-sm font-medium">2.3 días</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Productos Más Afectados</span>
                      <span className="text-sm font-medium">Huevos, Aceite</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Actividad Reciente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="text-sm">
                          <span className="font-medium">Nueva alerta crítica</span>
                          <div className="text-gray-500">Aceite Vegetal - hace 30min</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="text-sm">
                          <span className="font-medium">Alerta resuelta</span>
                          <div className="text-gray-500">Tortilla de Maíz - hace 2h</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="text-sm">
                          <span className="font-medium">En investigación</span>
                          <div className="text-gray-500">Huevos - hace 4h</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rules">
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Reglas de Alertas</CardTitle>
                <CardDescription>Define umbrales y condiciones para la detección automática</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {alertRules.map((rule) => (
                    <div key={rule.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900">{rule.name}</h4>
                          <p className="text-sm text-gray-600">
                            Umbral: {rule.threshold}% | Período: {rule.period}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={rule.active ? "default" : "secondary"}>
                            {rule.active ? "Activa" : "Inactiva"}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Settings className="w-4 h-4 mr-2" />
                            Editar
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Productos:</span>
                          <div className="text-sm text-gray-600 mt-1">
                            {Array.isArray(rule.products) ? rule.products.join(", ") : rule.products}
                          </div>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Notificaciones:</span>
                          <div className="flex space-x-2 mt-1">
                            {rule.notifications.map((notification) => (
                              <Badge key={notification} variant="outline" className="text-xs">
                                {notification}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button>
                    <Settings className="w-4 h-4 mr-2" />
                    Agregar Nueva Regla
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
