import Hero from "@/components/layout/hero";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-2xl mb-4">Bienvenido a Lexia</h2>
        <p className="text-lg">
          Lexia es un asistente legal impulsado por inteligencia artificial diseñado para simplificar el trabajo de los abogados.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Análisis rápido de documentos legales</li>
          <li>Generación de resúmenes y reportes</li>
          <li>Búsqueda avanzada de jurisprudencia</li>
          <li>Asistencia en la redacción de contratos</li>
        </ul>
        <p className="mt-4">
          Descubra cómo Lexia puede transformar su práctica legal y aumentar su eficiencia.
        </p>
      </main>
    </>
  );
}
