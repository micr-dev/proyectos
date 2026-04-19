import type { RepoDescription } from "../repo-description-types";

export const softwareBatchC = {
  squircle: {
    paragraphs: [
      "Squircle es una aplicación Next.js que te permite soltar imágenes o GIFs, ajustar el radio de las esquinas, las sombras, los contornos y exportar archivos con esquinas transparentes sin enviar nada a un servidor.",
      "Las herramientas de esquina en línea o bien rompen la calidad o te obligan a volver a otro editor, por lo que esta versión mantiene cada vista previa y máscara dentro del navegador mientras te permite ajustar los detalles de la presentación final antes de exportar.",
      "La aplicación funciona enteramente en local con Tailwind, un efecto de nieve de píxeles en Three.js y empaquetado por lotes con JSZip para que las exportaciones salgan al instante y nunca tengas que subir los originales.",
    ],
    languages: ["TypeScript", "CSS", "JavaScript"],
  },
  "supabase-keepalive": {
    paragraphs: [
      "Supabase-keepalive es un script de Python que llama repetidamente a un RPC ligero en tu base de datos Supabase para evitar que el nivel gratuito se pause.",
      "Supabase pausa los proyectos gratuitos después de una semana de inactividad y los comandos de ping regulares no cuentan como trabajo real, por lo que este script ejecuta una función real en lugar de depender del tráfico inactivo.",
      "Llama a la función `ping` a través de REST mediante `requests`, por lo que cada ejecución realiza un trabajo de base de datos que reinicia el temporizador de inactividad.",
    ],
    languages: ["Python"],
  },
  "t3-chat-zipper": {
    paragraphs: [
      "t3-chat-zipper es un userscript que añade tres botones de exportación ZIP en t3.chat y automáticamente agrupa las vallas de código en archivos descargables.",
      "Guardar fragmentos de conversaciones de T3 normalmente requiere copiar los mensajes uno por uno porque la API de chat no tiene un flujo de exportación por lotes.",
      "El script observa las copias del portapapeles, el último mensaje o un lapso de mensajes recientes, infiere nombres de archivo de las vallas y canaliza todo a través de un escritor ZIP que coincide con el estilo de T3.",
    ],
    languages: ["JavaScript"],
  },
  traccia: {
    paragraphs: [
      "Traccia convierte archivos personales en un grafo de habilidades que explica de dónde viene una habilidad, qué tan profunda es, qué tan actual está y qué tan central es dentro del archivo general.",
      "La mayoría de herramientas de archivo son buenas almacenando material pero malas contando la historia de las habilidades, mientras que las herramientas de perfil lo aplanan todo en un pitch y descartan el rastro de evidencia.",
      "La CLI ingiere notas, código, documentos, chats de IA y datos exportados de plataformas sin tocar los archivos originales, luego renderiza un grafo con marcas temporales y comandos para explicar, revisar y exportar.",
    ],
    languages: ["Python"],
  },
  tailstick: {
    paragraphs: [
      "Tailstick se ofrece como una CLI y una GUI de alta en Tailscale lanzadas desde USB que permiten dar de alta máquinas de campo, emitir cesiones limitadas y controlar la limpieza sin montar un backend.",
      "El alta en campo no debería depender de scripts ad hoc que dispersan secretos y estado, y esta herramienta mantiene el flujo del operador simple mientras vincula todas las cesiones a la misma interfaz de comandos.",
      "Los binarios leen una configuración JSON, admiten modos de sesión, temporizados y permanentes, y dejan desplegado un agente programado que limpia las cesiones cuando lo indican el USB o el temporizador.",
    ],
    languages: ["Go", "HTML", "PowerShell", "Shell"],
  },
  tuneport: {
    paragraphs: [
      "Tuneport es una extensión de navegador que detecta la pista de YouTube o SoundCloud que estás viendo, la compara con Spotify, la añade a una lista de reproducción y descarga copias de alta calidad en paralelo.",
      "Spotify prohíbe añadir archivos locales mediante programación, por lo que la sincronización de los flujos de descubrimiento requería unir los metadatos coincidentes con las descargas locales y las adiciones a las listas de reproducción.",
      "La extensión coincide de forma difusa con los títulos, descarga fuentes sin pérdidas a través de Lucida y yt-dlp, y opcionalmente entrega archivos a un puente Spicetify para que los archivos locales puedan aterrizar en listas de reproducción sin manipulación manual.",
    ],
    languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  tupac: {
    paragraphs: [
      "Tupac es un bot de Discord que crea estructuras de proyectos completas, incluyendo canales, roles, plantillas e hilos de tareas, para cada nuevo equipo de producción.",
      "Gestionar docenas de categorías, roles con acrónimos y flujos de trabajo de aprobación en un gremio ocupado ralentiza a los equipos creativos si todo es manual.",
      "El bot ejecuta comandos de asistente, sincroniza plantillas, asigna automáticamente roles de proyecto y conecta hilos de preguntas para que los proyectos se mantengan organizados sin copiar y pegar repetitivamente.",
    ],
    languages: ["Python", "Dockerfile"],
  },
  tuireel: {
    paragraphs: [
      "Tuireel ejecuta sesiones de terminal con scripts, captura fotogramas y renderiza demostraciones pulidas en MP4, WebM o GIF con cursores y efectos de sonido opcionales basados en configuraciones declarativas.",
      "Grabar una demostración de terminal a mano significa hacer malabares con grabadoras de pantalla, superposiciones y tiempos inconsistentes en lugar de describir el flujo de antemano.",
      "La CLI genera configuraciones JSONC, reproduce secuencias de pasos y compone superposiciones mediante perfiles y preajustes para que el vídeo final sea reproducible.",
    ],
    languages: ["TypeScript", "JavaScript"],
  },
  UndyingTerminal: {
    paragraphs: [
      "UndyingTerminal es un shell remoto seguro reconectable para Windows que mantiene las sesiones activas a través de desconexiones y túneles.",
      "Las sesiones SSH, los cambios de VPN o el cierre de la tapa matan inmediatamente el estado del shell, por lo que recuperar ese contexto hace perder tiempo cada vez que la red falla.",
      "El servidor se mantiene activo localmente, el cliente se reconecta con la salida reproducida, y los ayudantes de jump-host y túnel mantienen el estado de la sesión intacto sin perder los búferes.",
    ],
    languages: ["C++", "TypeScript", "CSS", "CMake"],
  },
  "upstash-keepalive": {
    paragraphs: [
      "Upstash-keepalive es un script de Python que realiza operaciones SET más EXPIRE para que tu base de datos Upstash Redis vea actividad real en lugar de PINGs inactivos.",
      "Upstash archiva las instancias de Redis de nivel gratuito después de 14 días sin escrituras, y un PING por sí solo no cuenta como actividad.",
      "El script escribe una clave `upstash-keepalive` con un TTL de 30 días en un horario o a través de GitHub Actions para que el servicio nunca piense que la base de datos está inactiva.",
    ],
    languages: ["Python"],
  },
  vapora: {
    paragraphs: [
      "Vapora es una herramienta OSINT interactiva que mapea el grafo de amigos de una cuenta de Steam, enriquece los nodos con métricas y exporta CSV listos para Gephi, además de un informe de amigos probables.",
      "Investigar comunidades a mano significa rastrear listas repetidamente y calcular manualmente la centralidad, lo que hace que el flujo de trabajo sea lento y propenso a errores.",
      "El asistente recopila una clave API de Steam y un objetivo, ejecuta un BFS de profundidad limitada y anota cada nodo con etiquetas de grado, intermediación y comunidad antes de escribir las exportaciones.",
    ],
    languages: ["Python"],
  },
  veyoff: {
    paragraphs: [
      "Veyoff es un proxy man-in-the-middle de RFB que se sitúa entre el proxy de Veyon y UltraVNC, ofreciendo reenvío transparente en modo normal y enmarcando u ocultando cuando es necesario.",
      "Hay momentos en los que necesitas congelar la vista, ocultar ventanas sensibles o mostrar contornos de presencia sin que el profesor note nada inusual.",
      "El proxy reescribe las actualizaciones del búfer de cuadros, fuerza las codificaciones Raw, aplica contornos de color y restaura los puertos respaldados por el registro para que el profesor solo vea tráfico RFB válido.",
    ],
    languages: ["C++", "Python", "CMake"],
  },
  waterWAV: {
    paragraphs: [
      "WaterWAV es un script de Python que incrusta una imagen en el espectrograma de un archivo de audio a través de STFT para que la marca de agua aparezca cuando lo cargas en un visor de espectrogramas.",
      "WaterWAV hace que el truco del espectrograma al estilo Aphex Twin sea utilizable sin obligarte a construir el flujo de trabajo de procesamiento de señales desde cero.",
      "La herramienta invierte la máscara, atenúa las frecuencias entre 200 Hz y 10.700 Hz, y genera un nuevo WAV más gráficos de comparación para que puedas inspeccionar la imagen oculta.",
    ],
    languages: ["Python"],
  },
} as const satisfies Record<string, RepoDescription>;
