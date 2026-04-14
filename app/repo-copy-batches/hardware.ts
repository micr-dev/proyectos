import type { RepoDescription } from "../repo-description-types";

export const hardwareBatch = {
  ancla: {
    paragraphs: [
      "Ancla es un bloqueador para iPhone instalado mediante sideload que vincula cada sesión a una etiqueta NFC emparejada y a una pantalla bloqueada, de modo que el usuario tenga que volver físicamente a esa etiqueta antes de poder desbloquear nada.",
      "Los bloqueadores de productividad al uso son demasiado fáciles de esquivar, así que Ancla ata las sesiones de concentración a un ancla física y endurece las vías de liberación cuando un simple interruptor no basta.",
      "Orquesta Apple Screen Time, la automatización de Atajos y la extensión Shield para que el bloqueo siga activo en el dispositivo y solo la etiqueta emparejada, o el reto de emergencia, pueda abrir esa pantalla."
    ],
    languages: ["Swift", "TypeScript", "CSS", "JavaScript"]
  },
  "RPi4toNAS-Guide": {
    paragraphs: [
      "RPi4toNAS-Guide es una guía DIY para montar un NAS con Raspberry Pi 4, con scripts que automatizan copias de seguridad de Windows, descargas desde servidores remotos, rotación de backups y un escritorio Linux accesible desde el navegador.",
      "La guía está pensada para una Raspberry Pi que gestione copias de seguridad del PC, descargas desde VPS remotos y acceso de administración dentro de un flujo doméstico repetible, en vez de depender de un puñado de scripts sueltos.",
      "El repositorio se apoya en OpenMediaVault, LVM, wake-on-LAN y scripts auxiliares para que cada fase, desde el montaje hasta el escritorio remoto, pueda repetirse siguiendo los mismos comandos documentados."
    ],
    languages: ["Batchfile", "Shell"]
  },
  "topre-ec-archive": {
    paragraphs: [
      "DeskthorityWiki-TopreECArchive preserva las secciones Topre/Electrostatic Capacitive de la wiki de Deskthority como HTML estático servido a través de GitHub Pages.",
      "El archivo conserva esas páginas porque la venta de Deskthority interrumpió el acceso de edición y descarga, poniendo años de documentación de la comunidad en riesgo de desaparecer.",
      "El repositorio guarda las capturas HTML extraídas y la página principal para que los visitantes puedan seguir navegando por el material archivado de Topre/EC aunque la wiki original esté caída."
    ],
    languages: ["HTML"]
  },
  YAWN60: {
    paragraphs: [
      "YAWN60 es un diseño de teclado del 60% inspirado en Bakeneko que combina un peso estilo Unikorn, un perfil lateral modificado, un borde tipo cherry y grabados con archivos STEP y DXF listos para CAD, además de medios de construcción.",
      "El proyecto parte de un objetivo real de fabricación y equilibra opciones de montaje, materiales y límites de mecanizado en vez de quedarse en un simple render.",
      "Incluye los archivos de carcasa, peso trasero y placa junto con la lista de materiales, las notas del prototipo y las pruebas de sonido para que cualquiera pueda fabricarlo o ajustarlo con las mismas concesiones prácticas en mente."
    ],
    languages: ["CAD", "STEP", "DXF"]
  }
} as const satisfies Record<string, RepoDescription>;
