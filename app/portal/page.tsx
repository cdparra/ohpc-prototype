import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, ShoppingCart, TrendingDown, TrendingUp, Camera, Filter } from "lucide-react"
import Link from "next/link"

const mockProducts = [
  {
    id: 1,
    name: "Arroz Blanco",
    category: "Granos Básicos",
    price: 28.5,
    previousPrice: 30.0,
    store: "Supermercado La Colonia",
    location: "Tegucigalpa",
    trend: "down",
  },
  {
    id: 2,
    name: "Frijoles Rojos",
    category: "Granos Básicos",
    price: 45.0,
    previousPrice: 42.0,
    store: "Pulpería El Ahorro",
    location: "San Pedro Sula",
    trend: "up",
  },
  {
    id: 3,
    name: "Aceite Vegetal",
    category: "Aceites",
    price: 65.0,
    previousPrice: 65.0,
    store: "Walmart",
    location: "Tegucigalpa",
    trend: "stable",
  },
  {
    id: 4,
    name: "Azúcar Blanca",
    category: "Endulzantes",
    price: 22.0,
    previousPrice: 24.0,
    store: "Despensa Familiar",
    location: "Choloma",
    trend: "down",
  },
  {
    id: 5,
    name: "Huevos (Docena)",
    category: "Proteínas",
    price: 38.0,
    previousPrice: 35.0,
    store: "Mercado Central",
    location: "Comayagua",
    trend: "up",
  },
  {
    id: 6,
    name: "Leche Entera",
    category: "Lácteos",
    price: 32.0,
    previousPrice: 32.0,
    store: "Supermercado Maxi Despensa",
    location: "La Ceiba",
    trend: "stable",
  },
]

const categories = ["Todos", "Granos Básicos", "Proteínas", "Lácteos", "Aceites", "Endulzantes", "Vegetales", "Frutas"]
const locations = ["Todas", "Tegucigalpa", "San Pedro Sula", "La Ceiba", "Choloma", "Comayagua", "Choluteca"]

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Portal Ciudadano</h1>
                <p className="text-xs text-gray-600">OHPC</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Camera className="w-4 h-4 mr-2" />
                Reportar Precio
              </Button>
              <Button size="sm">Iniciar Sesión</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Consulta de Precios al Consumidor</h2>
          <p className="text-lg text-gray-600 mb-6">
            Encuentra los mejores precios de productos de la canasta básica en tu zona
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filtros de Búsqueda
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Buscar Producto</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Ej: arroz, frijoles..." className="pl-10" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar ciudad" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location.toLowerCase()}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">↓ 2.3%</div>
              <div className="text-sm text-gray-600">Variación Semanal</div>
              <div className="text-xs text-gray-500 mt-1">Canasta Básica</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">L. 1,247</div>
              <div className="text-sm text-gray-600">Precio Promedio</div>
              <div className="text-xs text-gray-500 mt-1">Canasta Básica</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">342</div>
              <div className="text-sm text-gray-600">Establecimientos</div>
              <div className="text-xs text-gray-500 mt-1">Monitoreados</div>
            </CardContent>
          </Card>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">Productos Monitoreados</h3>
            <Badge variant="secondary">{mockProducts.length} productos encontrados</Badge>
          </div>

          <div className="grid gap-4">
            {mockProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
                        <Badge variant="outline">{product.category}</Badge>
                        {product.trend === "down" && <TrendingDown className="w-4 h-4 text-green-600" />}
                        {product.trend === "up" && <TrendingUp className="w-4 h-4 text-red-600" />}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {product.location}
                        </span>
                        <span>{product.store}</span>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-2xl font-bold text-gray-900">L. {product.price.toFixed(2)}</div>
                      {product.previousPrice !== product.price && (
                        <div className="text-sm text-gray-500">Anterior: L. {product.previousPrice.toFixed(2)}</div>
                      )}
                      <div
                        className={`text-sm font-medium ${
                          product.trend === "down"
                            ? "text-green-600"
                            : product.trend === "up"
                              ? "text-red-600"
                              : "text-gray-600"
                        }`}
                      >
                        {product.trend === "down" && `↓ L. ${(product.previousPrice - product.price).toFixed(2)}`}
                        {product.trend === "up" && `↑ L. ${(product.price - product.previousPrice).toFixed(2)}`}
                        {product.trend === "stable" && "Sin cambios"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">¿Encontraste un precio diferente?</h3>
            <p className="text-gray-600 mb-6">
              Ayúdanos a mantener la información actualizada reportando los precios que encuentres
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Camera className="w-5 h-5 mr-2" />
              Reportar Precio
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
