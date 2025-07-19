import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Camera, MapPin, Save, Upload, Smartphone, Globe, Plus, Search } from "lucide-react"
import Link from "next/link"

const recentCaptures = [
  {
    id: 1,
    product: "Arroz Blanco",
    price: 28.5,
    store: "Supermercado La Colonia",
    inspector: "Juan Pérez",
    date: "2024-01-15 10:30",
    status: "Validado",
  },
  {
    id: 2,
    product: "Frijoles Rojos",
    price: 45.0,
    store: "Pulpería El Ahorro",
    inspector: "María González",
    date: "2024-01-15 09:15",
    status: "Pendiente",
  },
  {
    id: 3,
    product: "Aceite Vegetal",
    price: 65.0,
    store: "Walmart",
    inspector: "Carlos López",
    date: "2024-01-15 08:45",
    status: "Validado",
  },
]

export default function CapturePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Captura de Precios</h1>
                <p className="text-xs text-gray-600">OHPC</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Smartphone className="w-4 h-4 mr-2" />
                App Móvil
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Carga Masiva
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sistema de Captura de Información</h2>
          <p className="text-gray-600">Registro de precios desde fuentes primarias y secundarias</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Capture Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Nuevo Registro de Precio
                </CardTitle>
                <CardDescription>Captura información de precios desde fuentes primarias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Establishment Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="establishment">Establecimiento</Label>
                    <div className="flex space-x-2">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar establecimiento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="colonia">Supermercado La Colonia</SelectItem>
                          <SelectItem value="walmart">Walmart</SelectItem>
                          <SelectItem value="despensa">Despensa Familiar</SelectItem>
                          <SelectItem value="pulperia">Pulpería El Ahorro</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="outline" size="icon">
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="location">Ubicación</Label>
                    <div className="flex space-x-2">
                      <Input placeholder="Tegucigalpa, Francisco Morazán" />
                      <Button variant="outline" size="icon">
                        <MapPin className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="category">Categoría</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="granos">Granos Básicos</SelectItem>
                        <SelectItem value="proteinas">Proteínas</SelectItem>
                        <SelectItem value="lacteos">Lácteos</SelectItem>
                        <SelectItem value="aceites">Aceites</SelectItem>
                        <SelectItem value="vegetales">Vegetales</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="product">Producto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar producto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="arroz">Arroz Blanco</SelectItem>
                        <SelectItem value="frijoles">Frijoles Rojos</SelectItem>
                        <SelectItem value="aceite">Aceite Vegetal</SelectItem>
                        <SelectItem value="azucar">Azúcar Blanca</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="brand">Marca/Especificación</Label>
                    <Input placeholder="Ej: Marca específica, presentación" />
                  </div>
                </div>

                {/* Price Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="price">Precio Actual (L.)</Label>
                    <Input type="number" step="0.01" placeholder="0.00" />
                  </div>
                  <div>
                    <Label htmlFor="previous-price">Precio Anterior (L.)</Label>
                    <Input type="number" step="0.01" placeholder="0.00" />
                  </div>
                  <div>
                    <Label htmlFor="offer">¿En Oferta?</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no">No</SelectItem>
                        <SelectItem value="yes">Sí</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <Label htmlFor="observations">Observaciones</Label>
                  <Textarea
                    placeholder="Información adicional, condiciones especiales, etc."
                    className="min-h-[80px]"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <Label>Documentos de Soporte</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">Arrastra archivos aquí o haz clic para seleccionar</p>
                    <p className="text-xs text-gray-500">Formatos: JPG, PNG, PDF (máx. 5MB)</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Seleccionar Archivos
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button className="flex-1">
                    <Save className="w-4 h-4 mr-2" />
                    Guardar Registro
                  </Button>
                  <Button variant="outline">Cancelar</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estadísticas del Día</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Registros Hoy</span>
                  <Badge variant="secondary">28</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Pendientes</span>
                  <Badge variant="outline">5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Validados</span>
                  <Badge>23</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Mobile App Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Smartphone className="w-5 h-5 mr-2" />
                  App Móvil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Descarga la aplicación móvil para captura de datos en campo con funcionalidad offline.
                </p>
                <Button variant="outline" className="w-full">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Descargar APK
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="w-4 h-4 mr-2" />
                  Carga Masiva Excel
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Globe className="w-4 h-4 mr-2" />
                  Fuentes Secundarias
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar Establecimiento
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Captures */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Capturas Recientes</CardTitle>
            <CardDescription>Últimos registros de precios ingresados al sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Producto</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Precio</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Establecimiento</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Inspector</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Fecha</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCaptures.map((capture) => (
                    <tr key={capture.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">{capture.product}</td>
                      <td className="py-3 px-4">L. {capture.price.toFixed(2)}</td>
                      <td className="py-3 px-4 text-gray-600">{capture.store}</td>
                      <td className="py-3 px-4 text-gray-600">{capture.inspector}</td>
                      <td className="py-3 px-4 text-gray-600">{capture.date}</td>
                      <td className="py-3 px-4">
                        <Badge variant={capture.status === "Validado" ? "default" : "secondary"}>
                          {capture.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
