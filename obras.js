/*
  ============================================================
  AQUÍ CONFIGURAS TUS LUGARES Y TUS OBRAS
  ============================================================
  Cada lugar = un QR. El código (ej. "plaza-central") va en el QR.
  Para cada obra:
    titulo      → nombre que aparece al tocarla
    imagen      → nombre del archivo de imagen (súbelo junto a index.html) (PNG transparente ideal)
    ancho       → tamaño en metros (1.5 = metro y medio de ancho)
    distancia   → a cuántos metros del visitante aparece
    angulo      → dónde aparece: 0 = al frente, 90 = a la derecha,
                  -90 = a la izquierda, 180 = detrás
    altura      → metros arriba (+) o abajo (-) de los ojos
    flotar      → true para que se mueva suavemente (opcional)
    descripcion → texto corto opcional
  Las imágenes de ejemplo son de muestra: cámbialas por tu arte.
*/

window.ARTISTA = "Tu nombre de artista";

window.LUGARES = {

  "plaza-central": {
    nombre: "Plaza Central",
    descripcion: "Tres piezas rodean la banca junto a la fuente.",
    obras: [
      { titulo: "Sol de barrio", imagen: "sol-de-barrio.svg", ancho: 1.6, distancia: 3, angulo: 0, altura: 0.4, flotar: true,
        descripcion: "El sol que sale entre los techos." },
      { titulo: "Pez de cobre", imagen: "pez-de-cobre.svg", ancho: 1.4, distancia: 2.5, angulo: -55, altura: 0, flotar: true,
        descripcion: "Nada por el aire de la plaza." },
      { titulo: "Ventana nocturna", imagen: "ventana-nocturna.svg", ancho: 1.1, distancia: 3, angulo: 60, altura: 0.1,
        descripcion: "Una ventana a otra noche." }
    ]
  },

  "muro-del-puerto": {
    nombre: "Muro del puerto",
    descripcion: "Un mural virtual sobre la pared gris.",
    obras: [
      { titulo: "Ola", imagen: "ola.svg", ancho: 4, distancia: 5, angulo: 0, altura: 0.6,
        descripcion: "Mural de cuatro metros que solo existe aquí." }
    ]
  }

};
