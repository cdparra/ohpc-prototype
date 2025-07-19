import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Camera,
  MessageSquare,
  BookOpen,
  Target,
  TrendingUp,
  Navigation,
  Smartphone,
  Wifi,
  WifiOff,
} from "lucide-react"
import Link from "next/link"

const todayInspections = [
  {
    id: 1,
    time: "08:00 - 09:30",
    location: "Mercado Central",
    type: "Mercado Municipal",
    address: "Centro, Tegucigalpa",
    status: "completed",
    products: 15,
    coordinates: "14.0723, -87.1921",
  },
  {
    id: 2,
    time: "10:00 - 11:00",
    location: "Supermercado La Colonia",
    type: "Supermercado",
    address: "Col. Palmira, Tegucigalpa",
    status: "in-progress",
    products: 8,
    coordinates: "14.0889, -87.2750",
  },
  {
    id: 3,
    time: "14:00 - 15:30",
    location: "Pulpería El Ahorro",
    type: "Pulpería",
    address: "Col. Kennedy, Tegucigalpa",
    status: "pending",
    products: 12,
    coordinates: "14.0723, -87.1921",
  },
  {
    id: 4,
    time: "16:00 - 17:00",
    location: "Feria del Agricultor",
    type: "Feria",
    address: "Blvd. Morazán, Tegucigalpa",
    status: "pending",
    products: 20,
    coordinates: "14.0723, -87.1921",
  },
]

const weeklyStats = [
  { label: "Inspecciones Completadas", value: "23", target: "25", percentage: 92 },
  { label: "Productos Registrados", value: "347", target: "350", percentage: 99 },
  { label: "Establecimientos Visitados", value: "18", target: "20", percentage: 90 },
  { label: "Evidencias Capturadas", value: "156", target: "150", percentage: 104 },
]

export default function InspectorDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Panel del Inspector</h1>
                <p className="text-xs text-gray-600">Juan Pérez - Inspector Senior</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">En línea</span>
                <Wifi className="w-4 h-4 text-green-500" />
              </div>
              <Button variant="outline" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat Central
              </Button>
              <Button size="sm">
                <Smartphone className="w-4 h-4 mr-2" />
                Modo Móvil
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Buenos días, Juan!</h2>
              <p className="text-gray-600">Tienes 4 inspecciones programadas para hoy</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">92%</div>
              <div className="text-sm text-gray-600">Cumplimiento semanal</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Button asChild className="h-16 bg-blue-600 hover:bg-blue-700">
            <Link href="/inspector/inspection/new">
              <div className="text-center">
                <Camera className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm">Nueva Inspección</span>
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-16 bg-transparent">
            <Link href="/inspector/schedule">
              <div className="text-center">
                <Calendar className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm">Mi Cronograma</span>
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-16 bg-transparent">
            <Link href="/inspector/training">
              <div className="text-center">
                <BookOpen className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm">Capacitación</span>
              </div>
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-16 bg-transparent">
            <Link href="/inspector/reports">
              <div className="text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm">Mis Reportes</span>
              </div>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Cronograma de Hoy
                    </CardTitle>
                    <CardDescription>Martes, 16 de Enero 2024</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Navigation className="w-4 h-4 mr-2" />
                    Optimizar Ruta
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todayInspections.map((inspection) => (
                    <div
                      key={inspection.id}
                      className={`p-4 border rounded-lg ${
                        inspection.status === "completed"
                          ? "bg-green-50 border-green-200"
                          : inspection.status === "in-progress"
                            ? "bg-blue-50 border-blue-200"
                            : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
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
                                : "Pendiente"}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-2">
                          {inspection.status === "completed" && <CheckCircle className="w-5 h-5 text-green-600" />}
                          {inspection.status === "in-progress" && <AlertCircle className="w-5 h-5 text-blue-600" />}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{inspection.location}</h4>
                          <p className="text-sm text-gray-600 flex items-center mb-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {inspection.address}
                          </p>
                          <Badge variant="outline" className="text-xs">
                            {inspection.type}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">{inspection.products}</span> productos a verificar
                          </div>
                          <div className="flex space-x-2">
                            {inspection.status === "pending" && (
                              <Button asChild size="sm">
                                <Link href={`/inspector/inspection/${inspection.id}`}>Iniciar</Link>
                              </Button>
                            )}
                            {inspection.status === "in-progress" && (
                              <Button asChild size="sm" variant="outline">
                                <Link href={`/inspector/inspection/${inspection.id}`}>Continuar</Link>
                              </Button>
                            )}
                            {inspection.status === "completed" && (
                              <Button asChild size="sm" variant="outline">
                                <Link href={`/inspector/inspection/${inspection.id}/report`}>Ver Reporte</Link>
                              </Button>
                            )}
                          </div>
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
            {/* Weekly Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rendimiento Semanal</CardTitle>
                <CardDescription>Del 13 al 19 de Enero</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {weeklyStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                      <span className="text-sm text-gray-600">
                        {stat.value}/{stat.target}
                      </span>
                    </div>
                    <Progress value={stat.percentage} className="h-2" />
                    <div className="text-xs text-gray-500 mt-1">{stat.percentage}% completado</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Training Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Capacitación Continua
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-1">Nuevo Módulo Disponible</h4>
                    <p className="text-sm text-blue-700 mb-2">Identificación de Productos Orgánicos</p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Iniciar Curso
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Progreso General</span>
                      <span className="text-sm font-medium text-gray-900">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Communication Center */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Centro de Comunicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs">AC</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">Ana Coordinadora</span>
                      <span className="text-xs text-gray-500">10:30 AM</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Recuerda verificar los precios de aceite vegetal en todos los establecimientos hoy.
                    </p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs">MG</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">María González</span>
                      <span className="text-xs text-gray-500">09:45 AM</span>
                    </div>
                    <p className="text-sm text-gray-700">¿Alguien ha visitado el Mercado Los Dolores hoy?</p>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Abrir Chat Grupal
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Offline Mode */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  Modo Sin Conexión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Datos Sincronizados</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Actualizado</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Registros Pendientes</span>
                    <Badge variant="outline">0</Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    <WifiOff className="w-4 h-4 mr-2" />
                    Activar Modo Offline
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
