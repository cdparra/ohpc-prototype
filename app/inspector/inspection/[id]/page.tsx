"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Camera,
  Save,
  Send,
  AlertTriangle,
  CheckCircle,
  Upload,
  Mic,
  Navigation,
  MessageSquare,
  FileText,
  Smartphone,
} from "lucide-react"
import Link from "next/link"

// Formularios dinámicos según tipo de establecimiento
const marketTypeFields = {
  supermercado: [
    { id: "gondola", label: "Número de Góndola", type: "text", required: true },
    { id: "seccion", label: "Sección", type: "select", options: ["Abarrotes", "Lácteos", "Carnes", "Panadería"] },
    { id: "promocion", label: "¿Producto en Promoción?", type: "select", options: ["Sí", "No"] },
    { id: "descuento", label: "% Descuento", type: "number", conditional: "promocion=Sí" },
  ],
  mercado: [
    { id: "puesto", label: "Número de Puesto", type: "text", required: true },
    { id: "vendedor", label: "Nombre del Vendedor", type: "text", required: true },
    { id: "origen", label: "Origen del Producto", type: "text" },
    { id: "calidad", label: "Calidad Visual", type: "select", options: ["Excelente", "Buena", "Regular", "Mala"] },
  ],
  pulperia: [
    { id: "propietario", label: "Propietario", type: "text" },
    { id: "horario", label: "Horario de Atención", type: "text" },
    { id: "credito", label: "¿Vende a Crédito?", type: "select", options: ["Sí", "No"] },
  ],
  feria: [
    { id: "evento", label: "Nombre del Evento", type: "text", required: true },
    { id: "organizador", label: "Organizador", type: "text" },
    { id: "frecuencia", label: "Frecuencia", type: "select", options: ["Diaria", "Semanal", "Quincenal", "Mensual"] },
    { id: "temporada", label: "¿Producto de Temporada?", type: "select", options: ["Sí", "No"] },
  ],
}

const productsToInspect = [
  { id: 1, name: "Arroz Blanco", category: "Granos Básicos", priority: "high", completed: false },
  { id: 2, name: "Frijoles Rojos", category: "Granos Básicos", priority: "high", completed: false },
  { id: 3, name: "Aceite Vegetal", category: "Aceites", priority: "medium", completed: false },
  { id: 4, name: "Azúcar Blanca", category: "Endulzantes", priority: "medium", completed: false },
  { id: 5, name: "Huevos (Docena)", category: "Proteínas", priority: "high", completed: false },
  { id: 6, name: "Leche Entera", category: "Lácteos", priority: "low", completed: false },
  { id: 7, name: "Pan Blanco", category: "Panadería", priority: "medium", completed: false },
  { id: 8, name: "Pollo Entero", category: "Carnes", priority: "high", completed: false },
]

export default function InspectionPage() {
  const [selectedMarketType, setSelectedMarketType] = useState("supermercado")
  const [currentProduct, setCurrentProduct] = useState(0)
  const [products, setProducts] = useState(productsToInspect)
  const [isRecording, setIsRecording] = useState(false)
  const [inspectionProgress, setInspectionProgress] = useState(0)

  const currentFields = marketTypeFields[selectedMarketType as keyof typeof marketTypeFields] || []
  const completedProducts = products.filter((p) => p.completed).length
  const totalProducts = products.length
  const progressPercentage = (completedProducts / totalProducts) * 100

  const handleProductComplete = (productId: number) => {
    setProducts((prev) => prev.map((p) => (p.id === productId ? { ...p, completed: true } : p)))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/inspector" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Inspección en Progreso</h1>
                <p className="text-xs text-gray-600">Supermercado La Colonia - Col. Palmira</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  {completedProducts}/{totalProducts}
                </div>
                <div className="text-xs text-gray-600">Productos</div>
              </div>
              <Button variant="outline" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Reportar Problema
              </Button>
              <Button size="sm">
                <Send className="w-4 h-4 mr-2" />
                Finalizar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Progreso de Inspección</h3>
              <Badge variant={progressPercentage === 100 ? "default" : "secondary"}>
                {Math.round(progressPercentage)}% Completado
              </Badge>
            </div>
            <Progress value={progressPercentage} className="h-3 mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Iniciado: 10:00 AM</span>
              <span>Tiempo estimado restante: {Math.max(0, 45 - Math.round(progressPercentage * 0.45))} min</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="products" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="products">Productos</TabsTrigger>
                <TabsTrigger value="establishment">Establecimiento</TabsTrigger>
                <TabsTrigger value="evidence">Evidencias</TabsTrigger>
              </TabsList>

              <TabsContent value="products">
                <Card>
                  <CardHeader>
                    <CardTitle>Registro de Productos</CardTitle>
                    <CardDescription>
                      Formulario dinámico adaptado para: <Badge variant="outline">{selectedMarketType}</Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Product Selection */}
                    <div>
                      <Label>Producto Actual</Label>
                      <Select
                        value={currentProduct.toString()}
                        onValueChange={(value) => setCurrentProduct(Number.parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {products.map((product, index) => (
                            <SelectItem key={product.id} value={index.toString()}>
                              <div className="flex items-center space-x-2">
                                {product.completed && <CheckCircle className="w-4 h-4 text-green-600" />}
                                <span>{product.name}</span>
                                <Badge
                                  variant={
                                    product.priority === "high"
                                      ? "destructive"
                                      : product.priority === "medium"
                                        ? "default"
                                        : "secondary"
                                  }
                                  className="ml-2"
                                >
                                  {product.priority}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Basic Product Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="price">Precio Actual (L.)</Label>
                        <Input type="number" step="0.01" placeholder="0.00" />
                      </div>
                      <div>
                        <Label htmlFor="brand">Marca</Label>
                        <Input placeholder="Marca del producto" />
                      </div>
                      <div>
                        <Label htmlFor="presentation">Presentación</Label>
                        <Input placeholder="Ej: 1 lb, 500g, etc." />
                      </div>
                    </div>

                    {/* Dynamic Fields Based on Market Type */}
                    <div className="border-t pt-6">
                      <h4 className="text-md font-semibold text-gray-900 mb-4">
                        Información Específica -{" "}
                        {selectedMarketType.charAt(0).toUpperCase() + selectedMarketType.slice(1)}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentFields.map((field) => (
                          <div key={field.id}>
                            <Label htmlFor={field.id}>
                              {field.label}
                              {field.required && <span className="text-red-500 ml-1">*</span>}
                            </Label>
                            {field.type === "select" ? (
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder={`Seleccionar ${field.label.toLowerCase()}`} />
                                </SelectTrigger>
                                <SelectContent>
                                  {field.options?.map((option) => (
                                    <SelectItem key={option} value={option.toLowerCase()}>
                                      {option}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            ) : (
                              <Input type={field.type} placeholder={`Ingrese ${field.label.toLowerCase()}`} />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Observations */}
                    <div>
                      <Label htmlFor="observations">Observaciones</Label>
                      <Textarea
                        placeholder="Observaciones adicionales sobre el producto, condiciones del establecimiento, etc."
                        className="min-h-[100px]"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <Button onClick={() => handleProductComplete(products[currentProduct].id)} className="flex-1">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Completar Producto
                      </Button>
                      <Button variant="outline">
                        <Save className="w-4 h-4 mr-2" />
                        Guardar Borrador
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="establishment">
                <Card>
                  <CardHeader>
                    <CardTitle>Información del Establecimiento</CardTitle>
                    <CardDescription>Datos generales y configuración del tipo de mercado</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Market Type Selection */}
                    <div>
                      <Label>Tipo de Establecimiento</Label>
                      <Select value={selectedMarketType} onValueChange={setSelectedMarketType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="supermercado">Supermercado</SelectItem>
                          <SelectItem value="mercado">Mercado Municipal</SelectItem>
                          <SelectItem value="pulperia">Pulpería</SelectItem>
                          <SelectItem value="feria">Feria</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Coordenadas GPS</Label>
                        <div className="flex space-x-2">
                          <Input value="14.0889, -87.2750" readOnly />
                          <Button variant="outline" size="icon">
                            <Navigation className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label>Hora de Llegada</Label>
                        <Input value="10:15 AM" readOnly />
                      </div>
                    </div>

                    {/* Establishment Conditions */}
                    <div>
                      <Label>Condiciones del Establecimiento</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="limpio" />
                          <label htmlFor="limpio" className="text-sm">
                            Limpio
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="organizado" />
                          <label htmlFor="organizado" className="text-sm">
                            Organizado
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="iluminado" />
                          <label htmlFor="iluminado" className="text-sm">
                            Bien Iluminado
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="ventilado" />
                          <label htmlFor="ventilado" className="text-sm">
                            Ventilado
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Staff Interaction */}
                    <div>
                      <Label>Interacción con Personal</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar nivel de cooperación" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excelente">Excelente</SelectItem>
                          <SelectItem value="buena">Buena</SelectItem>
                          <SelectItem value="regular">Regular</SelectItem>
                          <SelectItem value="mala">Mala</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="evidence">
                <Card>
                  <CardHeader>
                    <CardTitle>Captura de Evidencias</CardTitle>
                    <CardDescription>Documentación fotográfica y de audio para validar la inspección</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Photo Capture */}
                    <div>
                      <Label>Fotografías</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Foto del Establecimiento</p>
                          <Button variant="outline" size="sm">
                            <Camera className="w-4 h-4 mr-2" />
                            Tomar Foto
                          </Button>
                        </div>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600 mb-2">Foto de Precios</p>
                          <Button variant="outline" size="sm">
                            <Camera className="w-4 h-4 mr-2" />
                            Tomar Foto
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Audio Notes */}
                    <div>
                      <Label>Notas de Audio</Label>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-600">Grabación de observaciones</span>
                          <Badge variant={isRecording ? "destructive" : "outline"}>
                            {isRecording ? "Grabando..." : "Detenido"}
                          </Badge>
                        </div>
                        <div className="flex space-x-4">
                          <Button
                            variant={isRecording ? "destructive" : "default"}
                            onClick={() => setIsRecording(!isRecording)}
                          >
                            <Mic className="w-4 h-4 mr-2" />
                            {isRecording ? "Detener" : "Grabar"}
                          </Button>
                          <Button variant="outline">
                            <Upload className="w-4 h-4 mr-2" />
                            Subir Audio
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Document Upload */}
                    <div>
                      <Label>Documentos Adicionales</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Facturas, recibos, o documentos de soporte</p>
                        <Button variant="outline" size="sm">
                          Seleccionar Archivos
                        </Button>
                      </div>
                    </div>

                    {/* Evidence Summary */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-3">Resumen de Evidencias</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">12</div>
                          <div className="text-gray-600">Fotografías</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">3</div>
                          <div className="text-gray-600">Audios</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-600">2</div>
                          <div className="text-gray-600">Documentos</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-600">45min</div>
                          <div className="text-gray-600">Duración</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Products Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Lista de Productos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`flex items-center justify-between p-2 rounded-lg ${
                        product.completed ? "bg-green-50 border border-green-200" : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        {product.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                        )}
                        <span className={`text-sm ${product.completed ? "text-green-900" : "text-gray-700"}`}>
                          {product.name}
                        </span>
                      </div>
                      <Badge
                        variant={
                          product.priority === "high"
                            ? "destructive"
                            : product.priority === "medium"
                              ? "default"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {product.priority}
                      </Badge>
                    </div>
                  ))}
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
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Reportar Problema
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contactar Supervisor
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Modo Sin Conexión
                </Button>
              </CardContent>
            </Card>

            {/* Inspection Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Info de Inspección</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Inspector:</span>
                  <span className="font-medium">Juan Pérez</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inicio:</span>
                  <span className="font-medium">10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duración:</span>
                  <span className="font-medium">45 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado:</span>
                  <Badge variant="secondary">En Progreso</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
