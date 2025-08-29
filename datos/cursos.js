let infoCursos = {
  programacion: [
    {
      id: 1,
      titulo: "Aprende Python",
      lenguaje: "python",
      vistas: 15000,
      nivel: "basico"
    },
    {
      id: 2,
      titulo: "Aprende Python",
      lenguaje: "python",
      vistas: 13553,
      nivel: "intermedio"
    },
    {
      id: 3,
      titulo: "Aprende JavaScript",
      lenguaje: "javascript",
      vistas: 1021213,
      nivel: "basico"  
    },
    {
      id: 4,
      titulo: "Aprende NodeJs",
      lenguaje: "javascript",
      vistas: 105454,
      nivel: "basico"  
    }
  ],
  matematicas: [
    {
      id: 1,
      titulo: "Álgebra Básica",
      tema: "algebra",
      vistas: 20000,
      nivel: "basico"
    },
    {
      id: 2,
      titulo: "Álgebra Intermedia",
      tema: "algebra",
      vistas: 35000,
      nivel: "intermedio"
    },
    {
      id: 3,
      titulo: "Cálculo Básico",
      tema: "calculo",
      vistas: 42000,
      nivel: "basico"
    },
    {
      id: 4,
      titulo: "Trigonometría Avanzada",
      tema: "trigonometria",
      vistas: 28000,
      nivel: "avanzado"
    }
  ]
};

// exportacion de los cursos con module.exports
module.exports.infoCursos = infoCursos;
