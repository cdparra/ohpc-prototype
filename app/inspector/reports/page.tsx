import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  Camera,
  Calendar,
} from "lucide-react"
import Link from "next/link"

const myReports = [
  {
    id: 1,
    title: "Inspección Mercado Central - 15 Enero",
    type: "Inspección Completa",
    date: "2024-01-15",
    status: "approved",
    products: 15,
    establishments: 1,
    evidence: 12,
    supervisor: "Ana Coordinadora",
  },
  {
    id: 2,
    title: "Ronda Supermercados Zona Norte - 14 Enero",
    type: "Inspección Múltiple",
    date: "2024-01-14",
    status: "pending",
    products: 24,
    establishments: 3,
    evidence: 18,
    supervisor: "Carlos Supervisor",
  },
  {
    id: 3,
    title: "Verificación Precios Aceite - 13 Enero",
    type: "Inspección Específica",
    date: "2024-01-13",
    status: "revision",
    products: 8,
    establishments: 5,
    evidence: 15,
    supervisor: "Ana Coordinadora",
  },
]

const performanceMetrics = [
  { label: "Reportes Aprobados", value: "28", total: "32", percentage: 88 },
  { label: "Tiempo Promedio", value: "2.3h", target: "2.5h", status: "good" },
  { label: "Calidad de Evidencias", value: "94%", target: "90%", status: "excellent" },
  { label: "Cumplimiento", value: "92%", target: "85%", status: "excellent" },
]

const validationHistory = [
  {
    id: 1,
    report: "Mercado Central - 15 Enero",
    validator: "Ana Coordinadora",
    date: "2024-01-15 16:30",
    status: "approved",
    comments: "Excelente trabajo. Evidencias completas y datos precisos.",
    score: 95,
  },
  {
    id: 2,
    report: "Supermercados Zona Norte - 14 Enero",
    validator: "Carlos Supervisor",
    date: "2024-01-14 18:45",
    status: "pending",
    comments: "En revisión. Pendiente verificación de 3 productos.",
    score: null,
  },
  {
    id: 3,
    report: "Verificación Aceite - 13 Enero",
    validator: "Ana Coordinadora",
    date: "2024-01-13 14:20",
    status: "revision",
    comments: "Requiere fotos adicionales del establecimiento #3.",
    score: 78,
  },
]

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/inspector" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Mis Reportes</h1>
                <p className="text-xs text-gray-600">Historial y Validación de Inspecciones</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">92% Aprobación</div>
                <div className="text-xs text-gray-600">Últimos 30 días</div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar Todo
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Reportes de Inspección</h2>
          <p className="text-gray-600">Seguimiento de tu trabajo y validación por supervisores</p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {performanceMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                  <Badge
                    variant={
                      metric.status === "excellent" ? "default" : metric.status === "good" ? "secondary" : "outline"
                    }
                  >
                    {metric.status === "excellent" ? "Excelente" : metric.status === "good" ? "Bueno" : "Regular"}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                {metric.percentage && (
                  <>
                    <Progress value={metric.percentage} className="h-2 mb-1" />
                    <div className="text-xs text-gray-500">
                      {metric.percentage}% de {metric.total}
                    </div>
                  </>
                )}
                {metric.target && !metric.percentage && (
                  <div className="text-sm text-gray-600">Meta: {metric.target}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reports">Mis Reportes</TabsTrigger>
            <TabsTrigger value="validation">Validación</TabsTrigger>
            <TabsTrigger value="analytics">Análisis</TabsTrigger>
          </TabsList>

          <TabsContent value="reports">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reports List */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Reportes Recientes</CardTitle>
                    <CardDescription>Historial de tus inspecciones y su estado de validación</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {myReports.map((report) => (
                        <div key={report.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="font-semibold text-gray-900">{report.title}</h4>
                                <Badge
                                  variant={
                                    report.status === "approved"
                                      ? "default"
                                      : report.status === "pending"
                                        ? "secondary"
                                        : "outline"
                                  }
                                >
                                  {report.status === "approved"
                                    ? "Aprobado"
                                    : report.status === "pending"
                                      ? "Pendiente"
                                      : "En Revisión"}
                                </Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{report.type}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {report.date}
                                </span>
                                <span>{report.products} productos</span>
                                <span>{report.establishments} establecimientos</span>
                                <span className="flex items-center">
                                  <Camera className="w-3 h-3 mr-1" />
                                  {report.evidence} evidencias
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">Supervisor: {report.supervisor}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              {report.status === "approved" && <CheckCircle className="w-5 h-5 text-green-600" />}
                              {report.status === "pending" && <Clock className="w-5 h-5 text-yellow-600" />}
                              {report.status === "revision" && <AlertTriangle className="w-5 h-5 text-orange-600" />}
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4 mr-2" />
                                Ver
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estadísticas Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Total Reportes</span>
                      <Badge variant="outline">32</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Aprobados</span>
                      <Badge>28</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Pendientes</span>
                      <Badge variant="secondary">3</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">En Revisión</span>
                      <Badge variant="outline">1</Badge>
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
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="text-sm">
                          <span className="font-medium">Reporte aprobado</span>
                          <div className="text-gray-500">Mercado Central - hace 2h</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="text-sm">
                          <span className="font-medium">Reporte enviado</span>
                          <div className="text-gray-500">Zona Norte - hace 4h</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="text-sm">
                          <span className="font-medium">Revisión solicitada</span>
                          <div className="text-gray-500">Verificación Aceite - hace 1d</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quality Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Consejos de Calidad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="font-medium text-blue-900">📸 Evidencias Fotográficas</p>
                        <p className="text-blue-700">Incluye fotos claras de precios y establecimientos</p>
                      </div>
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="font-medium text-green-900">📍 Geolocalización</p>
                        <p className="text-green-700">Verifica que las coordenadas GPS sean precisas</p>
                      </div>
                      <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <p className="font-medium text-purple-900">📝 Observaciones</p>
                        <p className="text-purple-700">Detalla condiciones especiales del mercado</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="validation">
            <Card>
              <CardHeader>
                <CardTitle>Historial de Validación</CardTitle>
                <CardDescription>
                  Seguimiento de la revisión y aprobación de tus reportes por supervisores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {validationHistory.map((validation) => (
                    <div key={validation.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{validation.report}</h4>
                            <Badge
                              variant={
                                validation.status === "approved"
                                  ? "default"
                                  : validation.status === "pending"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {validation.status === "approved"
                                ? "Aprobado"
                                : validation.status === "pending"
                                  ? "Pendiente"
                                  : "En Revisión"}
                            </Badge>
                            {validation.score && (
                              <Badge
                                variant={
                                  validation.score >= 90 ? "default" : validation.score >= 80 ? "secondary" : "outline"
                                }
                              >
                                {validation.score}/100
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                            <span>Validado por: {validation.validator}</span>
                            <span>{validation.date}</span>
                          </div>
                          <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                            <strong>Comentarios:</strong> {validation.comments}
                          </p>
                        </div>
                        <div className="ml-4">
                          {validation.status === "approved" && <CheckCircle className="w-6 h-6 text-green-600" />}
                          {validation.status === "pending" && <Clock className="w-6 h-6 text-yellow-600" />}
                          {validation.status === "revision" && <AlertTriangle className="w-6 h-6 text-orange-600" />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Performance Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Rendimiento Mensual
                  </CardTitle>
                  <CardDescription>Evolución de tu desempeño en los últimos meses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                      <p>Gráfico de rendimiento mensual</p>
                      <p className="text-sm">Reportes aprobados vs. total</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quality Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Métricas de Calidad
                  </CardTitle>
                  <CardDescription>Análisis detallado de la calidad de tus reportes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Completitud de Datos</span>
                        <span className="text-sm font-bold text-gray-900">96%</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Calidad de Evidencias</span>
                        <span className="text-sm font-bold text-gray-900">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Puntualidad de Entrega</span>
                        <span className="text-sm font-bold text-gray-900">89%</span>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Precisión de Datos</span>
                        <span className="text-sm font-bold text-gray-900">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Improvement Areas */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Áreas de Mejora</CardTitle>
                  <CardDescription>Recomendaciones personalizadas para mejorar tu desempeño</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Puntualidad</h4>
                      <p className="text-sm text-blue-700 mb-3">
                        Mejora la entrega de reportes dentro del plazo establecido
                      </p>
                      <Badge variant="outline" className="text-blue-700 border-blue-300">
                        89% actual → 95% meta
                      </Badge>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Evidencias</h4>
                      <p className="text-sm text-green-700 mb-3">Excelente calidad de fotografías y documentación</p>
                      <Badge className="bg-green-600 hover:bg-green-700">Fortaleza</Badge>
                    </div>
                    <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Observaciones</h4>
                      <p className="text-sm text-purple-700 mb-3">Incluye más detalles contextuales en tus reportes</p>
                      <Badge variant="outline" className="text-purple-700 border-purple-300">
                        Oportunidad
                      </Badge>
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
