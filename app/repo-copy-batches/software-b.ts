import type { RepoDescription } from "../repo-description-types";

export const softwareBatchB = {
  gitquarry: {
    paragraphs: [
      "Gitquarry es un CLI de terminal para búsqueda de repositorios de GitHub que preserva el comportamiento de búsqueda nativo por defecto y solo habilita descubrimiento ampliado, reranking y enriquecimiento basado en README bajo petición explícita.",
      "La mayoría de CLIs de búsqueda reescriben consultas o fuerzan heurísticas de clasificación, así que gitquarry mantiene la semántica nativa intacta y convierte los modos mejorados en opt-in para uso interactivo, flujos de scripting e instancias de GitHub Enterprise.",
      "Construido en Rust con binarios multiplataforma y un wrapper npm, expone comandos de búsqueda e inspección con modos de salida estructurados que mantienen stdout limpio para pipelines y autenticación por host respaldada por almacenamiento seguro.",
    ],
    languages: ["Rust", "Python", "JavaScript", "Ruby", "Nix", "Shell"],
  },
  "goofish-watcher": {
    paragraphs: [
      "Goofish-watcher es un asistente integrado en Discord que automatiza el login por QR de Goofish, exporta el `storage_state` de Playwright y reenvía los eventos de ai-goofish-monitor como mensajes directos.",
      "El inicio de sesión QR, la exportación de estado y las alertas de webhook son frágiles de coordinar en una caja sin cabeza, por lo que el repositorio mantiene esos flujos bajo un pequeño orquestador.",
      "Los comandos de barra como `/login qr`, `/login export_state` y `/login status` ejecutan Playwright sin interfaz gráfica, guardan `storage_state.json` y retransmiten los hooks de ai-goofish-monitor a Discord.",
    ],
    languages: ["Python", "Dockerfile"],
  },
  "hermes-nightshift": {
    paragraphs: [
      "Hermes-nightshift es un asistente con GLM 5.1 ejecutado por cron que selecciona tus repositorios públicos, los clona y abre PR o redacta incidencias estructuradas mientras la ventana de uso sigue abierta.",
      "La gracia está en aprovechar esa ventana: el presupuesto que queda de GLM se invierte en trabajo útil sobre repositorios en vez de caducar sin más.",
      "Cada ejecución comprueba la cuota disponible, recorre el bucle planificar -> implementar -> revisar, publica un PR o una incidencia y desmonta el clon dejando el estado registrado.",
    ],
    languages: ["Python"],
  },
  "hermes-dayshift": {
    paragraphs: [
      "Hermes-dayshift-glm es el implementador supervisado por humanos que acompaña a hermes-nightshift-glm: analiza sus incidencias y PR, los clasifica y los coloca en un tablero kanban local para triaje manual.",
      "Como nightshift funciona en piloto automático y genera ruido además de señal, dayshift añade un paso de filtro humano donde las tarjetas deben moverse a carriles de ejecución explícitos antes de que ningún agente actúe.",
      "Usa un tablero jKanban respaldado por un fichero de estado JSON, clasifica cada elemento por facilidad de reparación y esfuerzo, y luego despacha a Codex o Hermes/GLM con políticas de modelo, razonamiento y fusión específicas de cada carril.",
    ],
    languages: ["Python"],
  },
  "kagi-cli": {
    paragraphs: [
      "Kagi-cli es la puerta de enlace de terminal que muestra todas las funciones de Kagi, desde la búsqueda y las respuestas rápidas hasta el asistente, la traducción, el resumen, las fuentes y los comandos de la API de pago, dentro de un único binario.",
      "La CLI mantiene Kagi programable desde la shell sin dividir las credenciales entre herramientas separadas, por lo que la búsqueda, las funciones respaldadas por sesiones y los comandos de API de pago comparten una única interfaz.",
      "El flujo `kagi auth` configura las credenciales una vez, JSON sigue siendo la salida predeterminada para las herramientas, y comandos como `kagi search`, `kagi assistant` y `kagi fastgpt` viven todos detrás del mismo binario.",
    ],
    languages: ["Rust", "Shell", "JavaScript", "MDX"],
  },
  "kefine-website": {
    paragraphs: [
      "Kefine-website es una tienda hecha con Vite y React para lanzamientos seleccionados, estados de próximos proyectos y un CMS apoyado en GitHub Gist, con logo en Three.js y señales de sonido.",
      "La tienda necesita una presentación cuidada para los lanzamientos, los avances de producción y los datos gestionados por administración, sin repartir los medios y la edición del CMS entre herramientas separadas.",
      "Tailwind, shadcn/ui, Framer Motion, GSAP y el panel basado en Gist mantienen editables los productos y el estado del pipeline sin tocar JSON a mano.",
    ],
    languages: ["TypeScript", "CSS", "HTML", "JavaScript"],
  },
  mullgate: {
    paragraphs: [
      "Mullgate es una CLI que convierte una suscripción de Mullvad en un conjunto gestionado de oyentes SOCKS5, HTTP y HTTPS autenticados, vinculados a alias de ruta explícitos.",
      "Tunelizar todo el host a través de Mullvad desperdicia dispositivos y oculta la visibilidad del operador, por lo que Mullgate expone oyentes por ruta, selección de retransmisión y diagnósticos para el tráfico que elijas.",
      "El flujo guiado de `mullgate setup` escribe la configuración canónica y los artefactos de ejecución, y la misma interfaz impulsa `proxy start`, `proxy status`, `proxy doctor` y las utilidades de relay.",
    ],
    languages: ["TypeScript", "Shell", "PowerShell", "JavaScript"],
  },
  nagrom: {
    paragraphs: [
      "Nagrom es un bot de Discord autoalojable que pasa las afirmaciones por un proceso escalonado de verificación de hechos, fuerza salidas en JSON y guarda cada veredicto en SQLite.",
      "Los servidores necesitan soporte BYOK, recuperación de múltiples proveedores y seguimiento explícito de costos en lugar de verificaciones rápidas ad hoc, por lo que Nagrom bloquea la recuperación y la puntuación por niveles antes de responder.",
      "El núcleo asíncrono en Python, el asistente gráfico de configuración y el historial en SQLite mantienen guiado el proceso de verificación mientras la síntesis, la puntuación de gravedad y las respuestas estructuradas se generan automáticamente.",
    ],
    languages: ["Python", "HTML", "TeX", "Mermaid"],
  },
  onairo: {
    paragraphs: [
      "Onairo es una extensión de Chromium que captura selecciones, texto e imágenes del portapapeles y contenido del clic derecho, lo envía a proveedores alojados o al puente nativo de Codex, y devuelve respuestas para copiar, pegar, escribir o superposiciones de información.",
      "Los flujos de un solo paso necesitan la mínima fricción posible: capturar algo, mandarlo a Kimi, OpenRouter, Z.ai o a un endpoint compatible con OpenAI y ver el resultado sin salir de la página.",
      "El popup en React y TypeScript, las vistas previas de configuración en vivo y el host nativo opcional de Codex mantienen el ciclo rápido sin renunciar a la elección de proveedor ni a las superposiciones con estilo.",
    ],
    languages: ["TypeScript", "JavaScript", "CSS", "HTML"],
  },
  "opencode-studio": {
    paragraphs: [
      "Opencode-studio es la GUI de Next.js y Express que te permite alternar servidores MCP, editar habilidades y complementos, gestionar la autenticación y observar el uso sin editar manualmente el JSON de OpenCode.",
      "Las configuraciones de OpenCode se vuelven complejas rápidamente, por lo que la herramienta utiliza perfiles, copias de seguridad, paneles de control y asistentes de importación en lugar de obligar a todos a editar archivos sin procesar.",
      "El frontend del navegador se comunica con el backend de Express, lee `~/.config/opencode`, vuelve a escribir los cambios en disco y expone desde la misma interfaz los protocolos de deep link y la sincronización con GitHub.",
    ],
    languages: ["TypeScript", "JavaScript", "CSS", "Shell"],
  },
  openslate: {
    paragraphs: [
      "Openslate redirige el tráfico de Slate a través de una instancia local de CLIProxyAPI para que tus sesiones de Slate se mantengan en tus propios créditos en lugar de forzar cargos de Random Labs.",
      "Los usuarios de Slate todavía necesitan el flujo de trabajo, pero no la facturación forzada de Random Labs, por lo que el proyecto reescribe la ruta a un proxy local de CLIProxyAPI en su lugar.",
      "Una simple instalación de `node install.mjs` reescribe el tráfico de `/v3/stream` y registra las reescrituras para su verificación.",
    ],
    languages: ["JavaScript", "Shell"],
  },
  protoncode: {
    paragraphs: [
      "Protoncode es una aplicación de escritorio para Windows y Linux que prioriza la bandeja, que monitorea una sesión activa de Proton Mail y muestra notificaciones OTP enmascaradas cerca de la bandeja del sistema.",
      "Abrir Proton Mail cada vez filtra códigos e interrumpe los flujos de trabajo, por lo que Protoncode mantiene una ventana oculta con superposiciones enmascaradas que solo revelan códigos cuando el usuario lo solicita.",
      "El binario de Rust aloja webviews incrustados, engancha las claves de inicio automático y te permite revelar o copiar códigos sin abrir la bandeja de entrada.",
    ],
    languages: ["Rust"],
  },
  scudo: {
    paragraphs: [
      "Scudo es un menú de endurecimiento de Windows 11 que agrupa cada control con una justificación visible, preajustes y instantáneas de reversión en lugar de un montón de scripts.",
      "Los scripts de endurecimiento bruscos ocultan lo que cambian, por lo que Scudo mantiene menús CLI y GUI con preajustes, instantáneas e instalaciones de ayuda opcionales para que puedas decidir qué aplicar.",
      "El menú expone comandos CLI, conmutadores GUI, instantáneas de reversión e instalaciones de ayuda opcionales para que cada paso pueda ser auditado, aplicado o deshecho.",
    ],
    languages: ["PowerShell", "Batchfile"],
  },
  sincronizado: {
    paragraphs: [
      "La CLI `sinc` de Sincronizado mantiene tus archivos locales sincronizados con un VPS remoto para que los agentes de IA pesados se ejecuten allí mientras editas con tu editor local.",
      "Las laptops tienen buenos editores pero una capacidad de cómputo débil, por lo que el proyecto cierra esa brecha con Mutagen, SSH y tmux en lugar de obligarte a editar directamente en el servidor.",
      "La herramienta orquesta sesiones de sincronización de Mutagen, persistencia en tmux y utilidades de reanudación para que el espacio de trabajo remoto refleje tu árbol local.",
    ],
    languages: ["TypeScript", "Shell", "PowerShell", "MDX"],
  },
  SpainGPT: {
    paragraphs: [
      "SpainGPT es un bot de Discord que automatiza las ventas, el aprovisionamiento de suscripciones, el manejo de tickets, las referencias y la autenticación Codex basada en CLIProxyAPI para la comunidad de SpainGPT.",
      "La asignación manual de roles y la entrega de credenciales filtran secretos, por lo que el bot aplica la verificación, flujos de tickets guiados, comandos de administrador y entrega directa por DM.",
      "Comandos como `/assign`, `/codex-url` y `/code` mapean los flujos de Discord a CLIProxyAPI, entregan credenciales enmascaradas y mantienen los runbooks documentados sincronizados.",
    ],
    languages: ["TypeScript", "Dockerfile", "Shell"],
  },
} as const satisfies Record<string, RepoDescription>;
