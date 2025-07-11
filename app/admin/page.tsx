import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Settings, Users, Database, FileText, Shield, Bell, Search, Plus, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

const users = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@dgpc.gob.hn",
    role: "Inspector",
    status: "Activo",
    lastLogin: "2024-01-15 10:30",
  },
  {
    id: 2,
    name: "María González",
    email: "maria.gonzalez@dgpc.gob.hn",
    role: "Analista",
    status: "Activo",
    lastLogin: "2024-01-15 09:15",
  },
  {
    id: 3,
    name: "Carlos López",
    email: "carlos.lopez@dgpc.gob.hn",
    role: "Inspector",
    status: "Inactivo",
    lastLogin: "2024-01-10 16:45",
  },
  {
    id: 4,
    name: "Ana Rodríguez",
    email: "ana.rodriguez@dgpc.gob.hn",
    role: "Administrador",
    status: "Activo",
    lastLogin: "2024-01-15 08:00",
  },
]

const systemStats = [
  { label: "Usuarios Activos", value: "24", change: "+2" },
  { label: "Productos Configurados", value: "1,247", change: "+15" },
  { label: "Establecimientos", value: "342", change: "+8" },
  { label: "Reportes Automatizados", value: "22", change: "0" },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Settings className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Panel de Administración</h1>
                <p className="text-xs text-gray-600">OHPC</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notificaciones
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Usuario
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Administración del Sistema</h2>
          <p className="text-gray-600">Gestión de usuarios, configuración y parámetros del OHPC</p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    {stat.change !== "0" && <p className="text-xs text-green-600 mt-1">{stat.change} este mes</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gestión de Usuarios</h3>
              <p className="text-sm text-gray-600">Administrar roles y permisos</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Configuración</h3>
              <p className="text-sm text-gray-600">Parámetros del sistema</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reportes</h3>
              <p className="text-sm text-gray-600">Configurar reportes automáticos</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Seguridad</h3>
              <p className="text-sm text-gray-600">Auditoría y logs del sistema</p>
            </CardContent>
          </Card>
        </div>

        {/* User Management */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Gestión de Usuarios</CardTitle>
                <CardDescription>Administrar usuarios del sistema y sus permisos</CardDescription>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Agregar Usuario
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Buscar usuarios..." className="pl-10" />
                </div>
              </div>
              <Button variant="outline">Filtros</Button>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Usuario</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Rol</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Estado</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Último Acceso</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <span className="font-medium text-gray-900">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{user.email}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            user.role === "Administrador"
                              ? "default"
                              : user.role === "Analista"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {user.role}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant={user.status === "Activo" ? "default" : "secondary"}>{user.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{user.lastLogin}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-3 h-3" />
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

        {/* System Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Reportes</CardTitle>
              <CardDescription>Gestionar reportes automatizados del sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Canasta Básica Alimentaria</h4>
                    <p className="text-sm text-gray-600">Reporte semanal - Lunes 8:00 AM</p>
                  </div>
                  <Badge>Activo</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Precio de Huevos</h4>
                    <p className="text-sm text-gray-600">Reporte semanal - Miércoles 9:00 AM</p>
                  </div>
                  <Badge>Activo</Badge>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Frutas y Vegetales</h4>
                    <p className="text-sm text-gray-600">Reporte quincenal - 1ro y 15 de cada mes</p>
                  </div>
                  <Badge variant="secondary">Pausado</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Configurar Reportes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Parámetros del Sistema</CardTitle>
              <CardDescription>Configuración general de la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Productos Monitoreados</span>
                  <span className="text-sm text-gray-600">1,247 activos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Establecimientos Registrados</span>
                  <span className="text-sm text-gray-600">342 activos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Inspectores Activos</span>
                  <span className="text-sm text-gray-600">18 usuarios</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Última Sincronización</span>
                  <span className="text-sm text-gray-600">Hace 5 minutos</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Configurar Sistema
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
