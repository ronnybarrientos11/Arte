/*
  ============================================================
  AQUÍ VIVEN TUS INTERVENCIONES
  ============================================================
  No hace falta escribir esto a mano: la sección "Nueva intervención"
  de la página te da el bloque listo. Pégalo justo DEBAJO de la línea
  "window.LUGARES = {".

  Todos los archivos (imágenes, .mind y fotos guía) van sueltos,
  junto a index.html.

  SOBRE UN MURO (modo: "pared")
    ancla  → archivo .mind (el reconocimiento del muro)
    guia   → foto del muro que ve el visitante mientras apunta
    obras  → x, y: posición (0,0 = centro del muro)
             ancho: tamaño (1 = todo el ancho del muro)
             giro: grados

  FLOTANDO (sin modo)
    ancho y distancia en metros; angulo: 0 al frente, 90 derecha,
    -90 izquierda, 180 detrás.
*/

window.ARTISTA = "Tu nombre de artista";

window.LUGARES = {

  "plaza-central": {
    nombre: "Plaza Central",
    descripcion: "Ejemplo flotante: tres piezas alrededor de quien mira.",
    obras: [
      { titulo: "Sol de barrio", imagen: "sol-de-barrio.svg", ancho: 1.6, distancia: 3, angulo: 0, altura: 0.4, flotar: true },
      { titulo: "Pez de cobre", imagen: "pez-de-cobre.svg", ancho: 1.4, distancia: 2.5, angulo: -55, altura: 0, flotar: true },
      { titulo: "Ventana nocturna", imagen: "ventana-nocturna.svg", ancho: 1.1, distancia: 3, angulo: 60, altura: 0.1 }
    ]
  }

};
