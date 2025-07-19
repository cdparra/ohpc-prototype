"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Coffee, Heart, Users } from "lucide-react"
import Image from "next/image"

export default function MatePage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const pages = [
    // Página 0 - Inicio
    {
      title: "El Mate Paraguayo",
      subtitle: "Una tradición que une corazones",
      content: (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 mx-auto bg-amber-100 rounded-full flex items-center justify-center">
              <Coffee className="w-12 h-12 text-amber-700" />
            </div>
            <p className="text-lg text-amber-800 leading-relaxed max-w-2xl mx-auto">
              Bienvenido a un viaje poético a través de la tradición más querida de nuestro pueblo. El mate no es solo
              una bebida, es el alma de nuestra cultura.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20240808_160818505.MP.jpg-Tz86QRRz5xXxoai6VrPOD3L21Ah8HK.jpeg"
                alt="Comunidad reunida"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <p className="text-sm text-amber-700">Nuestra comunidad unida por la tradición</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20250522_135536532.jpg-gBDofVsAbtrUFgA3pH1BIg4jTKYhZ8.jpeg"
                alt="Compartiendo mate"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <p className="text-sm text-amber-700">El momento sagrado de compartir</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },

    // Página 1
    {
      title: "Más que una bebida",
      subtitle: "El mate es costumbre, es vida",
      content: (
        <div className="space-y-8">
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
            <p className="text-lg text-amber-900 leading-relaxed italic">
              "El mate no es una bebida. Bueno, sí. Es un líquido y entra por la boca. Pero no es una bebida. En este
              país nadie toma mate porque tenga sed. Es más bien una costumbre, como rascarse."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-amber-800 leading-relaxed">
                El mate es exactamente lo contrario que la televisión: te hace conversar si estás con alguien, y te hace
                pensar cuando estás solo.
              </p>
            </div>
            <Card className="overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20221210-WA0024.jpg-uVu1wa51jFGfTAQeR7wW9RJJnNzmcw.jpeg"
                alt="Momento de reflexión"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>
        </div>
      ),
    },

    // Página 2
    {
      title: "La hospitalidad del mate",
      subtitle: "En todas las casas, en todos los corazones",
      content: (
        <div className="space-y-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-lg text-green-900 leading-relaxed italic mb-4">
              "Cuando llega alguien a tu casa la primera frase es hola y la segunda: ¿unos mates?"
            </p>
            <p className="text-green-800 leading-relaxed">
              Esto pasa en todas las casas. En la de los ricos y en la de los pobres. Pasa entre mujeres charlatanas y
              chismosas, y pasa entre hombres serios o inmaduros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20220428_161023212.PORTRAIT.jpg-H7QCc9Cir7U2yCTg9x2DwnRkASoLhy.jpeg"
                alt="Compartiendo conocimiento"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <p className="text-sm text-green-700">Transmitiendo sabiduría de generación en generación</p>
              </CardContent>
            </Card>

            <div className="flex items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <span className="text-green-800">Une a todas las generaciones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-green-600" />
                  <span className="text-green-800">Trasciende diferencias sociales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Página 3
    {
      title: "El ritual sagrado",
      subtitle: "Cuando un niño se hace grande",
      content: (
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="text-lg text-blue-900 leading-relaxed italic mb-4">
              "El día que un chico pone la pava al fuego y toma su primer mate sin que haya nadie en casa, en ese
              minuto, es que ha descubierto que tiene alma."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-blue-800 leading-relaxed">
                La yerba no se le niega a nadie. Es lo único que hay siempre, en todas las casas. Siempre. Con
                inflación, con hambre, con militares, con democracia, con cualquiera de nuestras pestes y maldiciones
                eternas.
              </p>
              <p className="text-blue-800 leading-relaxed">Y si un día no hay yerba, un vecino tiene y te da.</p>
            </div>

            <Card className="overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20221221_184858290.jpg-EQ1VUG3ZWIH9sS8wSTsnTfSSrpFoDg.jpeg"
                alt="Celebrando tradiciones"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </Card>
          </div>
        </div>
      ),
    },

    // Página 4 - Final con regalo
    {
      title: "Los valores del mate",
      subtitle: "Una demostración de humanidad",
      content: (
        <div className="space-y-8">
          <div className="bg-purple-50 p-6 rounded-lg">
            <p className="text-lg text-purple-900 leading-relaxed italic mb-4">
              "El sencillo mate es nada más y nada menos que una demostración de valores..."
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-purple-800">
              <div className="space-y-2">
                <p>• La solidaridad de bancar esos mates lavados</p>
                <p>• El respeto por los tiempos para hablar y escuchar</p>
                <p>• La sinceridad para decir: ¡Basta, cambiá la yerba!</p>
                <p>• El compañerismo hecho momento</p>
              </div>
              <div className="space-y-2">
                <p>• La generosidad de dar hasta el final</p>
                <p>• La hospitalidad de la invitación</p>
                <p>• La justicia de uno por uno</p>
                <p>• La actitud ética, franca y leal</p>
              </div>
            </div>
          </div>

          <Card className="overflow-hidden mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20221210-WA0025.jpg-oHK8PCKV8UAew8uytoWmnhYPhF2Akh.jpeg"
              alt="Nuestra familia matera"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6 text-center">
              <p className="text-purple-700 mb-4">Nuestra familia matera, unidos por la tradición</p>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-green-100 to-amber-100 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">🎁 ¡Tu Regalo Especial! 🎁</h3>
            <p className="text-green-700 mb-6">
              Como amante del buen mate paraguayo, queremos regalarte acceso exclusivo a nuestra comunidad donde
              compartimos los mejores consejos, recetas y momentos materos.
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={() => setShowModal(true)}
            >
              🎁 Tu regalo te espera al otro lado de este botón
            </Button>
          </div>
        </div>
      ),
    },
  ]

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-amber-700 text-white p-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">🧉 Mate Paraguayo Orgánico</h1>
          <p className="text-green-100">La tradición que une corazones</p>
        </div>
      </header>

      {/* Progress bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Página {currentPage + 1} de {pages.length}
            </span>
            <span className="text-sm text-gray-600">{Math.round(((currentPage + 1) / pages.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-600 to-amber-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{pages[currentPage].title}</h2>
          <p className="text-xl text-gray-600 mb-8">{pages[currentPage].subtitle}</p>
        </div>

        <div className="mb-12">{pages[currentPage].content}</div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={prevPage} disabled={currentPage === 0} className="px-6 bg-transparent">
            ← Anterior
          </Button>

          <div className="flex space-x-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentPage ? "bg-green-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {currentPage < pages.length - 1 ? (
            <Button onClick={nextPage} className="bg-green-600 hover:bg-green-700 px-6">
              Siguiente <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setCurrentPage(0)} className="px-6">
              Volver al inicio
            </Button>
          )}
        </div>
      </main>

      {/* Modal del regalo */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full mx-4 overflow-hidden">
            <div className="relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              >
                ✕
              </button>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20250719_134721109.PORTRAIT.jpg-zIy85RSSF1UnFnIbPRAyfR1du8WfRU.jpeg"
                alt="Set de mate regalo"
                width={400}
                height={500}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">🎉 Feliz Cumpleaños Kiki! 🎉</h3>
              <p className="text-lg text-gray-700 mb-6">Este regalo especial está en camino ✨</p>
              <Button
                onClick={() => setShowModal(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
              >
                ¡Qué emoción! 🧉
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-amber-700 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-green-100 mb-2">
            "El mate es la actitud ética, franca y leal de encontrarse sin mayores pretensiones que compartir."
          </p>
          <p className="text-sm text-green-200">Celebrando la tradición del mate paraguayo orgánico</p>
        </div>
      </footer>
    </div>
  )
}
