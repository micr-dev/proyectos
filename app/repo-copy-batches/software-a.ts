import type { RepoDescription } from "../repo-description-types";

export const softwareBatchA = {
  "anonQ": {
    paragraphs: [
      "anonQ es una plataforma de preguntas y respuestas anónimas que puedes alojar tú mismo, hecha con Next.js y Tailwind, y publica las preguntas y respuestas de los visitantes en un feed público.",
      "Muchas comunidades quieren recibir mensajes anónimos sin recurrir a seguimiento invasivo, así que anonQ combina un flujo público de preguntas y respuestas con límites de uso, soporte BYOK, reescritura opcional con IA y alertas de ntfy para la administración.",
      "Supabase guarda los eventos, Auth0 protege el panel y ntfy, junto con el proceso de reescritura, mantiene el feed anónimo sin volverlo torpe."
    ],
    languages: ["TypeScript", "CSS", "JavaScript"]
  },
  "anydesk-legacy-bin": {
    paragraphs: [
      "anydesk-legacy-bin empaqueta Anydesk 6.0.1 para Arch Linux a través del AUR para que puedas fijar la última versión estable del cliente antiguo.",
      "Esta versión sigue siendo útil porque las nuevas arrastran avisos de uso comercial, bloqueos y regresiones en Wayland, así que el paquete conserva ese comportamiento anterior sin depender de instaladores perdidos.",
      "El PKGBUILD se limita a distribuir el ejecutable histórico y a dejarlo disponible mediante `yay -S anydesk-legacy-bin`, sin obligarte a recompilar nada en la máquina."
    ],
    languages: ["Shell"]
  },
  "archie": {
    paragraphs: [
      "ArchieTok convierte repositorios de GitHub en vídeos cortos bilingües para TikTok e Instagram combinando guiones de Gemini, voces de ElevenLabs, renders PNGtuber y procesamiento multimedia dentro de un flujo reproducible.",
      "La idea es sacar vídeos destacados de repositorios sin editarlos uno por uno a mano, así que el sondeo RSS activa el worker pesado mientras la orquestación opcional con n8n gestiona las ejecuciones locales y las credenciales.",
      "GitHub Actions coordina el sondeo RSS con el proceso principal, y el runner opcional de n8n expone una API HTTP que lanza `pipeline_v2.py`, publica en TikTok e Instagram y envía alertas por ntfy."
    ],
    languages: ["Python", "HTML", "JavaScript", "CSS"]
  },
  "bdss-club-website": {
    paragraphs: [
      "BDSS Club Archive es una vitrina hecha con React 19, TypeScript y Vite que replica la presentación de los lanzamientos de ropa mientras integra manifiesto, FAQ y fichas de producto que enlazan a marketplaces chinos.",
      "Esta versión mantiene los lanzamientos seleccionados y el control administrativo guardando productos y lanzamientos en un GitHub Gist privado y protegiendo la gestión con flujos autenticados por JWT y subidas a Imgur.",
      "Las rutas serverless de Vercel leen y escriben el Gist, la interfaz de administración gestiona importaciones, exportaciones y compresión de imágenes, y las acciones autenticadas mantienen el catálogo público alineado con el inventario real."
    ],
    languages: ["TypeScript", "HTML", "JavaScript"]
  },
  "bolify": {
    paragraphs: [
      "Boilify es un plugin OpenFX para DaVinci Resolve 19+ que simula el temblor de línea típico de la animación dibujada a mano con controles de intensidad, tamaño, velocidad y complejidad.",
      "Está pensado para editores que quieren ese efecto artesanal sin tener que construir un efecto personalizado para Resolve, con una implementación centrada en el render multihilo, el ajuste fino de parámetros y la conservación del alfa.",
      "La compilación en C++ y CMake enlaza con el SDK de OpenFX y añade un ajustador en el navegador para previsualizar los cambios antes de copiar los valores por defecto al bundle."
    ],
    languages: ["C++", "JavaScript", "CSS", "HTML"]
  },
  "Celeste-QuartzSkin": {
    paragraphs: [
      "Quarzite es un mod de skin de Celeste OC que reemplaza a Madeline con el personaje original, completo con cambios de color de pelo según el contador de dashes y animaciones de inactividad personalizadas.",
      "El objetivo es darle a cada partida una identidad propia dentro del juego, con Everest, Olympus y Skin Mod Helper manteniendo el trabajo de sprites y la lógica de color basada en los dashes alineados con CelesteNet.",
      "La instalación pasa por Olympus y Everest, mientras Skin Mod Helper (Plus) habilita los colores de pelo ligados a los dashes que se guardan en las carpetas `Graphics` y `Dialog`."
    ],
    languages: ["Python"]
  },
  "chalcopyrite": {
    paragraphs: [
      "Chalcopyrite es una suite de monitorización de precios que sortea Cloudflare, eBay Shield y defensas similares con una combinación de scraping y resolutores.",
      "Está pensada para tiendas protegidas por Cloudflare, eBay Shield y hCaptcha, así que combina fingerprinting TLS, `curl_cffi`, clústeres de Playwright, clientes de resolución y respaldos con FlareSolverr antes de cada comprobación.",
      "El orquestador en Python coordina los resolutores, los navegadores sin interfaz, las estrategias de reintento y las alertas de Discord, mientras SQLite en modo WAL guarda trazas de auditoría de cada ejecución."
    ],
    languages: ["Python", "Shell", "Dockerfile"]
  },
  "cinco": {
    paragraphs: [
      "Cinco convierte Discord en un CMS para tiendas estáticas al combinar comandos de barra con GitHub Gists, tokens cifrados, menús interactivos y subidas de imágenes a Catbox.",
      "Las tiendas necesitan una interfaz de administración segura y basada en botones, así que los permisos por rol, los asistentes con IA y la sincronización del gist en tiempo real evitan tener que montar paneles propios.",
      "Cada comando descifra tokens, actualiza el JSON del gist y el bot de Discord dockerizado mantiene botones, permisos y sincronización acoplados al sitio desplegado."
    ],
    languages: ["TypeScript", "Dockerfile"]
  },
  "dialogue-textbox": {
    paragraphs: [
      "Dialogue Textbox Generator crea videos de diálogo estilo Undertale/Deltarune con animación de escritura, y la versión web más reciente basada en React añade previsualizaciones en vivo, fuentes personalizadas y exportaciones GIF/MP4.",
      "La interfaz más nueva reemplazó la GUI/TUI/CLI de Python heredada porque esas herramientas no podían ofrecer vistas previas modernas, por lo que la interfaz de usuario web se encarga de la experiencia mientras conserva los scripts fuera de línea para casos extremos.",
      "El repositorio conserva los scripts de Python para renderizado offline, mientras el cliente web alojado orquesta la animación de escritura y el proceso de exportación."
    ],
    languages: ["Python", "TypeScript", "HTML", "CSS"]
  },
  "DXFtoIRL": {
    paragraphs: [
      "DXF to A4 PDF Converter es una utilidad de Python que mosaica dibujos DXF en archivos PDF de varias páginas en formato A4 horizontal para que la salida impresa se mantenga fiel a la escala original.",
      "La verificación de hardware exige impresiones a tamaño completo, por lo que la herramienta evita el escalado para ajustar a la página y se limita a las entidades DXF 2D comunes utilizadas en placas CAD y diseños de teclado.",
      "ezdxf analiza la geometría mientras reportlab renderiza los mosaicos, asegurando que el PDF exportado se imprima al 100% de escala sin ajustes manuales."
    ],
    languages: ["Python"]
  },
  "elevenlabs-webui": {
    paragraphs: [
      "elevenlabs-webui-client es un paquete Python ligero que reutiliza el flujo de autenticación de la interfaz de usuario web de ElevenLabs para exponer operaciones de TTS basadas en tokens de actualización fuera del navegador.",
      "El paquete está diseñado para configuraciones que dependen de credenciales de estilo WebUI en lugar de la API pública, con soporte para tokens de actualización de Firebase, extracción opcional de perfiles de navegador y ayudantes de CLI.",
      "La CLI envuelve el proceso de autenticación, transmite la salida MP3 con alineación de tiempo y rota las credenciales mientras mantiene inactivo el fallback opcional de xi-api-key."
    ],
    languages: ["Python"]
  },
  "glob": {
    paragraphs: [
      "Glob es un optimizador autoalojado de archivos glb y gltf, hecho con React, Vite, Express y Node, que reduce el tamaño de los activos 3D y los comparte con vistas previas interactivas.",
      "La aplicación mantiene la compresión 3D local y deliberada, con decimación de malla, compresión Draco, redimensionamiento de texturas y colas masivas en lugar de los compresores web habituales que generan spam.",
      "Las subidas pasan por etapas de soldado, decimación, cuantización y Draco dentro del pipeline de Node, mientras el frontend actualiza estadísticas y enlaces para compartir."
    ],
    languages: ["TypeScript", "CSS", "HTML", "JavaScript"]
  }
} as const satisfies Record<string, RepoDescription>;
