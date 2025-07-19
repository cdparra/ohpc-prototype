import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Play,
  CheckCircle,
  Clock,
  Award,
  Users,
  FileText,
  Video,
  Headphones,
  Download,
  Star,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Identificación de Productos Orgánicos",
    description: "Aprende a distinguir productos orgánicos y sus certificaciones",
    duration: "45 min",
    progress: 0,
    status: "new",
    priority: "high",
    type: "video",
    instructor: "Dra. María Fernández",
  },
  {
    id: 2,
    title: "Técnicas de Negociación con Comerciantes",
    description: "Estrategias para obtener información precisa de precios",
    duration: "30 min",
    progress: 75,
    status: "in-progress",
    priority: "medium",
    type: "interactive",
    instructor: "Lic. Carlos Mendoza",
  },
  {
    id: 3,
    title: "Uso de Tecnología Móvil en Campo",
    description: "Maximiza el uso de la app móvil y herramientas digitales",
    duration: "25 min",
    progress: 100,
    status: "completed",
    priority: "medium",
    type: "hands-on",
    instructor: "Ing. Ana López",
  },
  {
    id: 4,
    title: "Protocolos de Seguridad en Inspecciones",
    description: "Medidas de seguridad personal durante las inspecciones",
    duration: "60 min",
    progress: 100,
    status: "completed",
    priority: "high",
    type: "video",
    instructor: "Lic. Roberto García",
  },
]

const achievements = [
  { id: 1, title: "Inspector Novato", description: "Completó su primera capacitación", earned: true },
  { id: 2, title: "Experto en Tecnología", description: "Dominó todas las herramientas digitales", earned: true },
  { id: 3, title: "Comunicador Efectivo", description: "Excelente en técnicas de negociación", earned: false },
  { id: 4, title: "Inspector Veterano", description: "6 meses de inspecciones exitosas", earned: false },
]

const weeklyStats = [
  { label: "Horas de Capacitación", value: "12.5", target: "15", percentage: 83 },
  { label: "Cursos Completados", value: "8", target: "10", percentage: 80 },
  { label: "Evaluaciones Aprobadas", value: "6", target: "8", percentage: 75 },
  { label: "Certificaciones Obtenidas", value: "3", target: "4", percentage: 75 },
]

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/inspector" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Centro de Capacitación</h1>
                <p className="text-xs text-gray-600">Desarrollo Profesional Continuo</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Nivel 3</div>
                <div className="text-xs text-gray-600">Inspector Intermedio</div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Certificados
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Sigue Aprendiendo, Juan!</h2>
          <p className="text-gray-600">Tu desarrollo profesional es clave para el éxito del OHPC</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {weeklyStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                  <span className="text-sm text-gray-600">
                    {stat.value}/{stat.target}
                  </span>
                </div>
                <Progress value={stat.percentage} className="h-2 mb-2" />
                <div className="text-xs text-gray-500">{stat.percentage}% del objetivo mensual</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="courses">Cursos</TabsTrigger>
            <TabsTrigger value="achievements">Logros</TabsTrigger>
            <TabsTrigger value="resources">Recursos</TabsTrigger>
            <TabsTrigger value="community">Comunidad</TabsTrigger>
          </TabsList>

          <TabsContent value="courses">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Course List */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900">Cursos Disponibles</h3>
                  <Badge variant="secondary">4 cursos</Badge>
                </div>

                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{course.title}</h4>
                            <Badge
                              variant={
                                course.status === "completed"
                                  ? "default"
                                  : course.status === "in-progress"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {course.status === "completed"
                                ? "Completado"
                                : course.status === "in-progress"
                                  ? "En Progreso"
                                  : "Nuevo"}
                            </Badge>
                            {course.priority === "high" && (
                              <Badge variant="destructive" className="text-xs">
                                Prioritario
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3">{course.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {course.duration}
                            </span>
                            <span className="flex items-center">
                              {course.type === "video" && <Video className="w-4 h-4 mr-1" />}
                              {course.type === "interactive" && <Users className="w-4 h-4 mr-1" />}
                              {course.type === "hands-on" && <FileText className="w-4 h-4 mr-1" />}
                              {course.type}
                            </span>
                            <span>Por {course.instructor}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          {course.status === "completed" ? (
                            <CheckCircle className="w-8 h-8 text-green-600" />
                          ) : (
                            <Button>
                              <Play className="w-4 h-4 mr-2" />
                              {course.status === "in-progress" ? "Continuar" : "Iniciar"}
                            </Button>
                          )}
                        </div>
                      </div>

                      {course.progress > 0 && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Progreso</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Learning Path */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Ruta de Aprendizaje
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Fundamentos</div>
                          <div className="text-sm text-gray-600">Completado</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Técnicas Avanzadas</div>
                          <div className="text-sm text-gray-600">En progreso (75%)</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Especialización</div>
                          <div className="text-sm text-gray-600">Próximamente</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Estadísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Cursos Completados</span>
                      <Badge>8/12</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Horas de Estudio</span>
                      <Badge variant="outline">47.5h</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Calificación Promedio</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Ranking</span>
                      <Badge variant="secondary">#3 de 25</Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Recommended */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recomendado para Ti</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-1">Análisis de Datos de Precios</h4>
                        <p className="text-sm text-blue-700 mb-2">Basado en tu progreso actual</p>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Ver Curso
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`${achievement.earned ? "bg-yellow-50 border-yellow-200" : "bg-gray-50"}`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        achievement.earned ? "bg-yellow-100" : "bg-gray-200"
                      }`}
                    >
                      <Award className={`w-8 h-8 ${achievement.earned ? "text-yellow-600" : "text-gray-400"}`} />
                    </div>
                    <h3 className={`font-semibold mb-2 ${achievement.earned ? "text-yellow-900" : "text-gray-600"}`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-sm ${achievement.earned ? "text-yellow-700" : "text-gray-500"}`}>
                      {achievement.description}
                    </p>
                    {achievement.earned && <Badge className="mt-3 bg-yellow-600 hover:bg-yellow-700">Obtenido</Badge>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Manual del Inspector</h3>
                  <p className="text-sm text-gray-600 mb-4">Guía completa de procedimientos y protocolos</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Video className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Videos Tutoriales</h3>
                  <p className="text-sm text-gray-600 mb-4">Biblioteca de videos instructivos</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Play className="w-4 h-4 mr-2" />
                    Ver Videos
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Podcasts Educativos</h3>
                  <p className="text-sm text-gray-600 mb-4">Contenido de audio para aprender en movimiento</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Headphones className="w-4 h-4 mr-2" />
                    Escuchar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Discussion Forum */}
              <Card>
                <CardHeader>
                  <CardTitle>Foro de Discusión</CardTitle>
                  <CardDescription>Comparte experiencias con otros inspectores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">MG</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">María González</span>
                          <span className="text-sm text-gray-500 ml-2">hace 2 horas</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        ¿Alguien ha tenido experiencia con la nueva app móvil? ¿Funciona bien en modo offline?
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>5 respuestas</span>
                        <span>12 likes</span>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-green-600">CL</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Carlos López</span>
                          <span className="text-sm text-gray-500 ml-2">hace 4 horas</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Tips para negociar con comerciantes que no quieren dar información de precios
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>8 respuestas</span>
                        <span>15 likes</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Ver Todas las Discusiones
                  </Button>
                </CardContent>
              </Card>

              {/* Leaderboard */}
              <Card>
                <CardHeader>
                  <CardTitle>Tabla de Líderes</CardTitle>
                  <CardDescription>Top inspectores del mes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-yellow-600">1</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Ana Rodríguez</span>
                          <div className="text-sm text-gray-600">98% cumplimiento</div>
                        </div>
                      </div>
                      <Award className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-gray-600">2</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Carlos Mendoza</span>
                          <div className="text-sm text-gray-600">95% cumplimiento</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-orange-600">3</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">Juan Pérez</span>
                          <div className="text-sm text-gray-600">92% cumplimiento</div>
                        </div>
                      </div>
                      <Badge variant="secondary">¡Tú!</Badge>
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
