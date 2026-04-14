import type { RepoDescription } from "../repo-description-types";

export const micrMs26Batch = {
  "m-d/about": {
    paragraphs: [
      "About reúne la biografía, la cronología y el texto de apoyo que la escena de Spline en micr.dev muestra en la sección \"about\" del portafolio 3D.",
      "Separar esa narrativa permite tratar la biografía, la línea temporal y el texto específico de la escena como una capa propia, en vez de mezclarlo todo en el repositorio principal de aterrizaje.",
      "El repositorio mantiene el mismo embed de Spline, los fragmentos de texto y los activos estáticos sincronizados con el resto de micr.dev para que la sección \"about\" cargue al instante y con el estilo correcto."
    ],
    languages: ["JavaScript", "CSS", "HTML"]
  },
  "m-d/blog": {
    paragraphs: [
      "Blog es el sitio estático en Next.js para textos largos que replica el diseño de referencia mientras aloja contenido MDX local.",
      "El sitio le da a la pila de escritura un lugar dedicado para publicaciones editables, temas por publicación y flujos de trabajo de borrador sin arrastrar un CMS más pesado.",
      "El repositorio une MDX en `content/posts`, una ruta `/mdx-editor` solo para desarrolladores, y las herramientas de Next.js circundantes para que cada publicación pueda ser previsualizada, tematizada y publicada desde la misma fuente."
    ],
    languages: ["TypeScript", "MDX", "CSS", "JavaScript"]
  },
  "m-d/micr.dev": {
    paragraphs: [
      "micr.dev es el pequeño portafolio 3D hecho con Spline que sirve la página principal con sus efectos ópticos y el trabajo de cámara marcado por la escena.",
      "Es la puerta de entrada al portafolio, así que la escena 3D, los activos y el texto principal conviven y se ajustan como una única experiencia.",
      "El repositorio entrega la escena de Spline, la copia adaptada para Chrome y una build pensada para aceleración por hardware, de modo que el sitio vaya fluido cuando esa aceleración está disponible."
    ],
    languages: ["JavaScript", "HTML"]
  },
  "m-d/microkeebs": {
    paragraphs: [
      "Microkeebs es un catálogo en Next.js para la línea Microkeebs que reúne páginas de presentación para cada lanzamiento de placa, historia de teclado y activos relacionados.",
      "El catálogo de teclados necesitaba su propio diseño y modelo de datos, con espacio para ajustar la tipografía, el espaciado y el contenido de lanzamiento sin forzarlo en el portafolio principal.",
      "El proyecto parte de create-next-app, conecta `next/font` con Geist y mantiene la lógica de estilo junto a los datos en TypeScript para que toda la experiencia de Microkeebs conserve la misma tipografía pulida."
    ],
    languages: ["TypeScript", "CSS", "JavaScript", "HTML"]
  },
  "m-d/proyectos": {
    paragraphs: [
      "Proyectos es el repositorio de datos que impulsa la lista del portafolio y actúa como la fuente canónica de metadatos, descripciones y categorización que lee la interfaz.",
      "Mantiene los datos del portafolio editables y reordenables sin tocar la carcasa visual, de modo que la colección pueda tratarse como contenido y no como un layout codificado a mano.",
      "Las definiciones de TypeScript, el mapa de metadatos y las herramientas de soporte mantienen cada entrada alineada con el sitio publicado y siguen siendo fáciles de reutilizar en otros contextos."
    ],
    languages: ["TypeScript", "CSS", "JavaScript"]
  },
  "m-d/quarzite": {
    paragraphs: [
      "Quarzite almacena los activos de la galería y el texto contextual que micr.dev muestra en su escaparate especializado.",
      "Quarzite tiene su propio lenguaje visual y su propio contexto, así que la galería, las exportaciones y el texto de apoyo viven en un repositorio dedicado en vez de quedar diluidos dentro del sitio principal.",
      "El repositorio reutiliza las mismas exportaciones de Spline, activos estáticos y hooks de scripting para que la escena de Quarzite salga con la cámara, la iluminación y la tipografía previstas."
    ],
    languages: ["JavaScript", "HTML", "CSS", "TypeScript"]
  },
  "m-d/thinko": {
    paragraphs: [
      "Thinko recrea un escritorio de Windows XP basado en navegador, con barra de tareas, menú de Inicio y aplicaciones creadas específicamente como Paint, Winamp y Mis imágenes.",
      "thinko.micr.dev gira por completo en torno a la metáfora del escritorio, así que el shell estilo XP, las aplicaciones juguetonas y los flujos de moderación se construyen alrededor de esa única interfaz.",
      "El repositorio combina el front-end personalizado en CRA con las API de Vercel Functions para que el escritorio, la moderación y los juegos embebidos se mantengan sincronizados."
    ],
    languages: ["HTML", "JavaScript", "CSS"]
  },
  "m-d/tokens": {
    paragraphs: [
      "Tokens, también conocido como slopmeter, es la CLI y la interfaz web complementaria que convierte un calendario de Claude Code, Codex, Cursor y otros registros de uso en mapas de calor continuos.",
      "La herramienta ofrece una vista reproducible del uso de tokens de múltiples proveedores, reemplazando las hojas de cálculo y los paneles de control de proveedores dispersos con una única ruta de datos.",
      "El proyecto utiliza Bun para la CLI y Next.js para la página alojada, vincula ambos a la misma ruta de datos y expone controles para que el mapa de calor, la exportación JSON y los artefactos SVG puedan regenerarse desde un solo comando."
    ],
    languages: ["TypeScript", "CSS", "JavaScript"]
  },
  "ms26/bansho": {
    paragraphs: [
      "Bansho es una pasarela MCP que coloca autenticación por API key, listas de herramientas permitidas por rol, limitación de velocidad y un registro de auditoría en PostgreSQL delante de cualquier servidor ascendente.",
      "Las implementaciones de MCP necesitan autenticación, política de herramientas y controles de auditoría en un solo lugar, y Bansho coloca ese punto de control delante de cualquier servidor ascendente.",
      "La capa de servicios de Go superpone Postgres, Redis y sus políticas YAML para que cada llamada pase por auth → authz → rate → audit antes de reenviarse, y siempre falla en modo cerrado cuando falta un almacén o una política."
    ],
    languages: ["Go", "HTML", "Bicep", "Dockerfile"]
  },
  "ms26/delvn": {
    paragraphs: [
      "Delvn es un proceso CTI multiagente que ingiere fuentes de CVE, pulsos de AlienVault OTX y avisos RSS de seguridad para generar un informe ejecutivo priorizado.",
      "Delvn filtra las fuentes de amenazas hasta las señales que realmente afectan una pila declarada en lugar de verter otra manguera de alertas sin procesar en la bandeja de entrada.",
      "El repositorio lanza agentes recolectores, ejecuta la correlación de vectores de Azure, califica los hallazgos contra el perfil de la pila y genera un informe en formato markdown listo para la revisión de la dirección."
    ],
    languages: ["Python"]
  },
  "ms26/indagine": {
    paragraphs: [
      "Indagine es un meta-agente forense que envuelve agentes fallidos, captura trazas de OpenTelemetry y clasifica la causa raíz antes de que alguien tenga que adivinar qué se rompió.",
      "Indagine convierte los fallos del agente en evidencia rastreable en lugar de dejar el proceso de depuración a la memoria y las conjeturas.",
      "El proceso en Python persiste trazas, ejecuta analizadores, clasifica cada fallo en una de seis categorías de la taxonomía y emite propuestas de solución listas para aplicar, junto con su justificación."
    ],
    languages: ["Python"]
  },
  "ms26/jarspect": {
    paragraphs: [
      "Jarspect es un escáner de mods de Minecraft que prioriza la IA y combina búsquedas de hash de MalwareBazaar, extracción profunda de capacidades de bytecode y un veredicto de Azure OpenAI.",
      "El escáner se dirige a malware jar ofuscado que elude las heurísticas de texto y las firmas simples, donde el comportamiento interesante solo aparece después de una inspección más profunda.",
      "El proceso carga el archivo jar, extrae los grupos de constantes, ejecuta YARA por entrada, construye un perfil de capacidades, pide un veredicto a la IA y deja que una capa de anulación estática fije MALICIOSO cuando saltan señales de alta confianza."
    ],
    languages: ["Rust", "TypeScript", "Shell", "YARA"]
  },
  "ms26/repatrol": {
    paragraphs: [
      "Repatrol es un enjambre de QA de Playwright que sirve a un juego objetivo, explora cada estado y vigila la ruta de bloqueo determinista hasta que ocurre.",
      "El objetivo es realizar pruebas de presión continuas con capturas de pantalla y evidencia en video, para que los fallos puedan convertirse en borradores de problemas de GitHub en lugar de desaparecer entre las pruebas manuales.",
      "El repositorio vincula el servidor HTTP incorporado con las fases de explorador, caos, detector y reportero, de modo que cada ejecución escribe artefactos estructurados, sube una captura de pantalla y redacta automáticamente el cuerpo del problema."
    ],
    languages: ["TypeScript"]
  },
  "ms26/spikehound": {
    paragraphs: [
      "Spikehound caza los picos de costos de Azure ejecutando cinco agentes investigadores en paralelo, sintetizando sus hallazgos y recomendando los próximos pasos antes de que un humano revise el panel.",
      "Spikehound cierra la brecha entre una alerta de Azure Monitor que se dispara y un plan de remediación utilizable sin sondear la cuenta en la nube con acciones de seguimiento a ciegas.",
      "El flujo en C# sobre Azure Functions se reparte entre agentes de coste, recurso e historial, coordina un diagnóstico en Foundry y deja cada remediación detrás de aprobaciones en Slack o Discord y de sus interruptores de seguridad."
    ],
    languages: ["C#"]
  }
} as const satisfies Record<string, RepoDescription>;
