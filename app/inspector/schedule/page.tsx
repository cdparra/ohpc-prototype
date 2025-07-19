import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  Plus,
  Filter,
  Download,
  Upload,
  CheckCircle,
  AlertCircle,
  Users,
  Route,
} from "lucide-react"
import Link from "next/link"

const weekSchedule = [
  {
    day: "Lunes",
    date: "15 Enero",
    inspections: [
      {
        id: 1,
        time: "08:00-09:30",
        location: "Mercado Central",
        type: "Mercado Municipal",
        address: "Centro, Tegucigalpa",
        status: "completed",
        products: 15,
        priority: "high",
      },
      {
        id: 2,
        time: "10:30-11:30",
        location: "Supermercado Paiz",
        type: "Supermercado",
        address: "Col. Tepeyac, Tegucigalpa",
        status: "completed",
        products: 12,
        priority: "medium",
      },
    ],
  },
  {
    day: "Martes",
    date: "16 Enero",
    inspections: [
      {
        id: 3,
        time: "08:00-09:30",
        location: "Mercado Los Dolores",
        type: "Mercado Municipal",
        address: "Col. Los Dolores, Tegucigalpa",
        status: "in-progress",
        products: 18,
        priority: "high",
      },
      {
        id: 4,
        time: "10:00-11:00",
        location: "Supermercado La Colonia",
        type: "Supermercado",
        address: "Col. Palmira, Tegucigalpa",
        status: "pending",
        products: 8,
        priority: "medium",
      },
      {
        id: 5,
        time: "14:00-15:30",
        location: "Pulpería El Ahorro",
        type: "Pulpería",
        address: "Col. Kennedy, Tegucigalpa",
        status: "pending",
        products: 12,
        priority: "low",
      },
    ],
  },
  {
    day: "Miércoles",
    date: "17 Enero",
    inspections: [
      {
        id: 6,
        time: "09:00-10:30",
        location: "Feria del Agricultor",
        type: "Feria",
        address: "Blvd. Morazán, Tegucigalpa",
        status: "scheduled",
        products: 20,
        priority: "high",
      },
      {
        id: 7,
        time: "11:00-12:00",
        location: "Walmart Multiplaza",
        type: "Supermercado",
        address: "Multiplaza, Tegucigalpa",
        status: "scheduled",
        products: 10,
        priority: "medium",
      },
    ],
  },
]

const monthlyStats = [
  { label: "Inspecciones Programadas", value: "85", completed: "72", percentage: 85 },
  { label: "Establecimientos Únicos", value: "45", completed: "38", percentage: 84 },
  { label: "Productos Monitoreados", value: "1,250", completed: "1,180", percentage: 94 },
  { label: "Horas de Campo", value: "120", completed: "108", percentage: 90 },
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/inspector" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Mi Cronograma</h1>
                <p className="text-xs text-gray-600">Planificación y Organización de Inspecciones</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Navigation className="w-4 h-4 mr-2" />
                Optimizar Rutas
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Nueva Inspección
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title and Stats */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Cronograma de Inspecciones</h2>
          <p className="text-gray-600">Organiza y optimiza tu trabajo de campo</p>
        </div>

        {/* Monthly Performance */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {monthlyStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                  <Badge variant="outline">{stat.percentage}%</Badge>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.completed}</div>
                <div className="text-sm text-gray-600">de {stat.value} programadas</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="week" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="week">Vista Semanal</TabsTrigger>
            <TabsTrigger value="month">Vista Mensual</TabsTrigger>
            <TabsTrigger value="routes">Optimización de Rutas</TabsTrigger>
            <TabsTrigger value="requests">Solicitudes</TabsTrigger>
          </TabsList>

          <TabsContent value="week">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Weekly Schedule */}
              <div className="lg:col-span-3">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Semana del 15 - 19 Enero 2024</CardTitle>
                        <CardDescription>Cronograma detallado de inspecciones</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Filter className="w-4 h-4 mr-2" />
                          Filtros
                        </Button>
                        <Select defaultValue="week">
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="week">Esta Semana</SelectItem>
                            <SelectItem value="next">Próxima Semana</SelectItem>
                            <SelectItem value="prev">Semana Anterior</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {weekSchedule.map((day, dayIndex) => (
                        <div key={dayIndex} className="border-l-4 border-blue-500 pl-6">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{day.day}</h3>
                              <p className="text-sm text-gray-600">{day.date}</p>
                            </div>
                            <Badge variant="outline">{day.inspections.length} inspecciones</Badge>
                          </div>

                          <div className="space-y-3">
                            {day.inspections.map((inspection) => (
                              <div
                                key={inspection.id}
                                className={`p-4 border rounded-lg ${
                                  inspection.status === "completed"
                                    ? "bg-green-50 border-green-200"
                                    : inspection.status === "in-progress"
                                      ? "bg-blue-50 border-blue-200"
                                      : inspection.status === "pending"
                                        ? "bg-yellow-50 border-yellow-200"
                                        : "bg-gray-50 border-gray-200"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                      <div className="flex items-center space-x-2">
                                        <Clock className="w-4 h-4 text-gray-500" />
                                        <span className="font-medium text-gray-900">{inspection.time}</span>
                                      </div>
                                      <Badge
                                        variant={
                                          inspection.status === "completed"
                                            ? "default"
                                            : inspection.status === "in-progress"
                                              ? "secondary"
                                              : "outline"
                                        }
                                      >
                                        {inspection.status === "completed"
                                          ? "Completada"
                                          : inspection.status === "in-progress"
                                            ? "En Progreso"
                                            : inspection.status === "pending"
                                              ? "Pendiente"
                                              : "Programada"}
                                      </Badge>
                                      <Badge
                                        variant={
                                          inspection.priority === "high"
                                            ? "destructive"
                                            : inspection.priority === "medium"
                                              ? "default"
                                              : "secondary"
                                        }
                                        className="text-xs"
                                      >
                                        {inspection.priority}
                                      </Badge>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">{inspection.location}</h4>
                                    <p className="text-sm text-gray-600 flex items-center mb-1">
                                      <MapPin className="w-3 h-3 mr-1" />
                                      {inspection.address}
                                    </p>
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                      <span>{inspection.type}</span>
                                      <span>{inspection.products} productos</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {inspection.status === "completed" && (
                                      <CheckCircle className="w-5 h-5 text-green-600" />
                                    )}
                                    {inspection.status === "in-progress" && (
                                      <AlertCircle className="w-5 h-5 text-blue-600" />
                                    )}
                                    <Button variant="outline" size="sm">
                                      {inspection.status === "completed" ? "Ver Reporte" : "Gestionar"}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Today's Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resumen de Hoy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Inspecciones</span>
                      <Badge>3 programadas</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Tiempo estimado</span>
                      <span className="text-sm font-medium">4.5 horas</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Distancia total</span>
                      <span className="text-sm font-medium">25 km</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Productos</span>
                      <span className="text-sm font-medium">38 items</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Plus className="w-4 h-4 mr-2" />
                      Agregar Inspección
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Navigation className="w-4 h-4 mr-2" />
                      Optimizar Ruta
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Upload className="w-4 h-4 mr-2" />
                      Importar Cronograma
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Users className="w-4 h-4 mr-2" />
                      Coordinar con Equipo
                    </Button>
                  </CardContent>
                </Card>

                {/* Notifications */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Notificaciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-blue-900 font-medium">Cambio de Horario</p>
                        <p className="text-sm text-blue-700">Mercado Los Dolores - Nuevo horario: 8:30 AM</p>
                      </div>
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm text-yellow-900 font-medium">Producto Prioritario</p>
                        <p className="text-sm text-yellow-700">
                          Verificar precios de aceite vegetal en todos los establecimientos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="routes">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Route className="w-5 h-5 mr-2" />
                  Optimización de Rutas
                </CardTitle>
                <CardDescription>Planifica rutas eficientes para maximizar tu productividad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Route Planning */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Planificador de Rutas</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Inspección</label>
                          <Input type="date" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Zona de Trabajo</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar zona" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="centro">Centro de Tegucigalpa</SelectItem>
                              <SelectItem value="comayaguela">Comayagüela</SelectItem>
                              <SelectItem value="norte">Zona Norte</SelectItem>
                              <SelectItem value="sur">Zona Sur</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tipo de Establecimiento
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Todos los tipos" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">Todos</SelectItem>
                              <SelectItem value="supermercado">Supermercados</SelectItem>
                              <SelectItem value="mercado">Mercados</SelectItem>
                              <SelectItem value="pulperia">Pulperías</SelectItem>
                              <SelectItem value="feria">Ferias</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button className="w-full">
                          <Navigation className="w-4 h-4 mr-2" />
                          Generar Ruta Óptima
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Route Results */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ruta Sugerida</h3>
                      <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <Route className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">
                          Selecciona los parámetros arriba para generar una ruta optimizada
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">--</div>
                            <div className="text-gray-600">Distancia Total</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-green-600">--</div>
                            <div className="text-gray-600">Tiempo Estimado</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Beneficios de la Optimización</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Reduce tiempo de traslado hasta 30%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Minimiza costos de combustible</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Maximiza inspecciones por día</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Considera horarios de establecimientos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests">
            <Card>
              <CardHeader>
                <CardTitle>Solicitudes de Inspección</CardTitle>
                <CardDescription>Gestiona solicitudes especiales y cambios en el cronograma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">Inspección Urgente - Mercado San Pablo</h4>
                        <p className="text-sm text-gray-600">Solicitado por: Ana Coordinadora</p>
                      </div>
                      <Badge variant="destructive">Urgente</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Se requiere verificación inmediata de precios de granos básicos debido a reportes ciudadanos.
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm">Aceptar</Button>
                      <Button variant="outline" size="sm">
                        Rechazar
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">Cambio de Horario - Walmart Multiplaza</h4>
                        <p className="text-sm text-gray-600">Solicitado por: Sistema Automático</p>
                      </div>
                      <Badge variant="secondary">Pendiente</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      El establecimiento ha cambiado sus horarios de atención. Nuevo horario: 9:00 AM - 9:00 PM
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Actualizar Cronograma
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
