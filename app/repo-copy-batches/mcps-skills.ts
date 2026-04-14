import type { RepoDescription } from "../repo-description-types";

export const mcpsSkillsBatch = {
  "camofox-mcp": {
    paragraphs: [
      "camofox-mcp expone el flujo de trabajo completo del navegador camofox, incluyendo pestañas, navegación, interacción, instantáneas, importación de cookies y macros, como herramientas MCP dedicadas.",
      "Los agentes necesitan eso porque el control manual del navegador es frágil y cada tarea de pestaña, instantánea y cookie se convertiría de otro modo en una secuencia frágil de comandos de shell.",
      "Asigna cada punto final del navegador a su propio controlador MCP, mantiene las credenciales y los tiempos de espera de camofox en variables de entorno explícitas, y muestra diagnósticos de salud para la sesión.",
    ],
    languages: ["TypeScript", "JavaScript"],
  },
  "catbox-mcp": {
    paragraphs: [
      "catbox-mcp es un servidor MCP de JavaScript para subir archivos a Catbox.moe y Litterbox, a la vez que gestiona álbumes y eliminaciones.",
      "Los agentes necesitan esto porque regularmente necesitan almacenamiento confiable para artefactos grandes sin salir del prompt, pero Catbox no expone una API amigable para agentes.",
      "El servidor expone ayudantes de carga y eliminación, soporte de userhash y un enlace de cuenta impulsado por `CATBOX_USERHASH` para que las cargas permanezcan etiquetadas de manera consistente.",
    ],
    languages: ["JavaScript"],
  },
  "chatgpt-webui-mcp": {
    paragraphs: [
      "chatgpt-webui-mcp automatiza chatgpt.com a través de camofox para que los clientes de MCP puedan ejecutar prompts de GPT-5.2 Pro, generación de imágenes e investigación de larga duración sin manipulación manual del navegador.",
      "Las tareas de investigación profunda y de generación de imágenes superan los tiempos de espera habituales, así que los equipos necesitaban una interfaz de automatización fiable que respetara el sistema de tokens de sesión ya existente.",
      "Lo resuelve pasando los tokens de sesión por variables de entorno, exponiendo herramientas de lenguaje natural para prompts y ejecuciones unificadas, y ofreciendo utilidades de larga duración junto con plantillas de despliegue SSE.",
    ],
    languages: ["TypeScript", "JavaScript"],
  },
  "discord-self-mcp": {
    paragraphs: [
      "discord-self-mcp es un servidor MCP de Python basado en discord.py-self que permite a tu agente actuar a través de tu cuenta personal de Discord para mensajes directos, gestión de servidores e interacciones.",
      "Los bots regulares no pueden leer tus MD ni comportarse como el usuario, por lo que la automatización aún necesitaba un puente autoalojado que respetara el control de tokens y los límites de velocidad.",
      "El paquete incluye asistentes de configuración, limitación de velocidad, resolución de captchas, integración con discrawl y un modo CLI opcional para que cada acción pueda ejecutarse como MCP o como servicio en segundo plano.",
    ],
    languages: ["Python", "JavaScript"],
  },
  "kagi-mcp": {
    paragraphs: [
      "kagi-mcp es un pequeño servidor Rust que envuelve el binario kagi-cli existente y ofrece herramientas de búsqueda, asistente, traducción, resumen, noticias y enriquecimiento a través de MCP.",
      "Los clientes lo requerían porque duplicar la lógica de la CLI para MCP rompería la paridad con las credenciales, pero aún necesitaban un punto final local que pudieran generar desde Claude, Zed u OpenCode.",
      "Se mantiene mínimo al generar `kagi` para cada llamada, analizando la salida JSON que la CLI ya emite y respetando los tokens de sesión o API configurables, además de las anulaciones de tiempo de espera.",
    ],
    languages: ["Rust"],
  },
  "namecheap-mcp": {
    paragraphs: [
      "namecheap-webui-mcp maneja el panel de control de Namecheap a través de Playwright para que los agentes puedan administrar dominios sin una clave API o una lista blanca de IP.",
      "Los operadores de dominio todavía dependen de la interfaz de usuario web para DNS, servidores de nombres y conmutadores de funciones, por lo que tenía que haber una versión con script del flujo de trabajo manual.",
      "Reutiliza `storage-state.json` para la persistencia de autenticación, expone herramientas para paneles de control, dominios, DNS y características, y mantiene las URL base, el modo sin cabeza y los tiempos de espera de navegación configurables a través de variables de entorno.",
    ],
    languages: ["TypeScript"],
  },
  "perplexity-mcp": {
    paragraphs: [
      "perplexity-webui-mcp lanza el servidor MCP de perplexity-webui-scraper ascendente para que puedas consultar Perplexity Pro a través de un token de sesión de WebUI.",
      "La WebUI es la única forma de acceder a sus modelos, pero los trabajos largos de investigación son frágiles sin un wrapper fiable, así que los agentes necesitaban una interfaz de automatización más sólida.",
      "Este paquete fija el runner original, las sesiones y variables de proxy, expone herramientas específicas por modelo y documenta plantillas de despliegue con Tailscale y SSE.",
    ],
    languages: ["TypeScript", "JavaScript"],
  },
  "claude-skills": {
    paragraphs: [
      "ordinary-claude-skills agrega cientos de paquetes y scripts de prompt de Claude en carpetas categorizadas con documentación de apoyo.",
      "Los flujos de trabajo con Claude se benefician de habilidades reutilizables, pero el material útil de la comunidad estaba disperso e inconsistente hasta que se reunió en un catálogo local.",
      "El repositorio mantiene `skills_all` y `skills_categorized`, proporciona fragmentos de configuración del sistema de archivos MCP y enlaza cada flujo de trabajo de comando de barra al sitio de documentación.",
    ],
    languages: ["Python", "PowerShell", "Shell", "JavaScript"],
  },
  "gsap-skills": {
    paragraphs: [
      "gsap-skills empaqueta habilidades de referencia de Opencode para patrones de animación GSAP: líneas de tiempo, ScrollTrigger, texto, SVG, FLIP, arrastrable, observador, easing, ayudantes de React y notas de rendimiento.",
      "Los ingenieros de animación seguían reescribiendo los mismos ejemplos, por lo que era necesario un catálogo centralizado y fácil de copiar y pegar de técnicas de GSAP.",
      "Envía las carpetas `skills/` más el comando `/gsap`, instrucciones de instalación para sincronizar habilidades y comandos en Opencode, y un recordatorio sobre la licencia estándar sin cargo de GSAP.",
    ],
    languages: ["JavaScript", "Markdown"],
  },
  "seedance-skills": {
    paragraphs: [
      "seedance-skills agrupa paquetes de prompts de Opencode para la generación de video Seedance 2.0, cubriendo análisis de repositorio, escritura de guiones, prompts de segmentos, selección de montaje y paquetes de prompts.",
      "Las promociones de software listas para enviar necesitan un flujo de trabajo repetible en lugar de instrucciones ad hoc, por lo que las habilidades codifican el método de montaje repo-first con pasos claros.",
      "El repositorio expone el comando `/seedance-prompts`, las habilidades `seedance` y `seedance-prompt-generator`, e instrucciones para sincronizar esas carpetas en el directorio local de habilidades.",
    ],
    languages: ["Markdown", "JavaScript"],
  },
} as const satisfies Record<string, RepoDescription>;
