// "Bienvenidos a Hawkins. Las reglas son simples: Los amigos no mienten, las brújulas no funcionan y si escuchas un reloj, corre por tu vida. ¡Que empiece la partida!",

export const levels = {
  easy: {
    message: "Estás entrando a un nivel súper fácil",
    questions: [
      {
        id: 1,
        text: "¿Cómo se llama el gato de Dustin?",
        options: ["Pizza Man", "Mews", "Junior Dustin"],
        correct: 1,
      },
      {
        id: 2,
        text: "¿Qué juego es el que siempre juegan los chicos?",
        options: [
          "Las escondidas (el juego favorito de Will y Vecna)",
          "Verdad o Reto",
          "Quién anda más en bicicleta",
          "Calabozos y Dragones",
        ],
        correct: 3,
      },
      {
        id: 3,
        text: 'Dustin tiene una mascota muy extraña en la temporada 2 a la que llama "Dart". ¿Qué criatura es?',
        options: ["Un Demodog", "Azotamentes", "Demobats"],
        correct: 0,
      },
      {
        id: 4,
        text: "¿Quién es águila calva?",
        options: ["Joyce", "Hopper", "Erika", "Murray"],
        correct: 3,
      },
    ],
  },
  medium: {
    message:
      "Ya basta de ese nivel fácil. Estás entrando en una dimensión donde nada es lo que parece. Responde bien o termina como Barb: siendo el personaje que todos olvidan en la primera temporada",
    questions: [
      {
        id: 5,
        text: "¿Cuál es el método de comunicación que utiliza Joyce Byers para hablar con su hijo Will?",
        options: [
          "WhatsApp Premium",
          "Gastar todo el presupuesto de la casa en luces de Navidad y pintura para las paredes",
          "Señales de humo desde el patio",
          "Gritos desesperados (aunque eso también lo hizo)",
        ],
        correct: 1,
      },
      {
        id: 6,
        text: "¿Cuál es el verdadero superpoder de Steve Harrington, además de pelear con monstruos?",
        options: [
          "Su puntería con el bate",
          "Su pelazo (mantenido con 4 aplicaciones de spray)",
          'Su habilidad para ser la mejor "niñera" de Hawkins',
        ],
        correct: 1,
      },
      {
        id: 7,
        text: "¿Cuál es el mayor misterio de la serie que todavía no tiene explicación?",
        options: [
          "¿Qué es el Upside Down?",
          "¿Cómo es que el grupo de niños siempre anda en bici y nunca se cansan ni les da un calambre?",
          "¿Dónde está el papá de Dustin?",
          "¿Cómo sobrevive Hopper a tantas explosiones?",
        ],
        correct: 1,
      },
      {
        id: 8,
        text: "¿Cuál es la mayor tragedia que le ocurrió a los chicos en la temporada 3 (según ellos)?",
        options: [
          "Que el Azotamentes regresara",
          "Que cerraran el laboratorio",
          "Que Eleven y Max les terminaran el mismo día y ahora no tienen quién les tome la mano",
          "Que se quedaron sin pilas para el walkie-talkie",
        ],
        correct: 2,
      },
      {
        id: 9,
        text: "¿Cuál es el requisito indispensable para ser parte del grupo de amigos de Mike?",
        options: [
          "Saber pelear",
          "Tener un superpoder",
          'Ser un "nerd" de nivel legendario y estar dispuesto a morir por una partida de Calabozos y Dragones',
          "Tener una bicicleta con luces LED",
        ],
        correct: 2,
      },
      {
        id: 10,
        text: 'Si Erika Sinclair te dice que eres un "nerd", ¿qué debes responder para salir ileso?',
        options: [
          '"¡Tú también lo eres!"',
          'Nada, simplemente acepta tu destino y admite que "no puedes deletrear América sin Erika"',
          "Llamar a su mamá",
          "Darle un helado gratis",
        ],
        correct: 1,
      },
      {
        id: 11,
        text: "¿Qué descubrimiento científico hizo Dustin sobre las brújulas en la primera temporada?",
        options: [
          "Que sirven para encontrar tesoros",
          "Que si la aguja se vuelve loca, o hay un portal cerca o alguien dejó un imán gigante por ahí",
          "Que apuntan siempre hacia donde hay waffles",
          "Que funcionan mejor si las golpeas fuerte",
        ],
        correct: 1,
      },
      {
        id: 12,
        text: "¿Cuál es la diferencia entre un Demogorgon y un perro normal de Hawkins?",
        options: [
          "El Demogorgon es más juguetón",
          "Que cuando el Demogorgon abre la boca parece una flor de pesadilla que te quiere cenar",
          "Que el Demogorgon no necesita collar",
          "El perro normal no sabe abrir portales interdimensionales (creemos)",
        ],
        correct: 1,
      },
    ],
  },
  hard: {
    message:
      "Bienvenidos a la Dimensión Desconocida de esta sala. Regla #1: Si te sale sangre por la nariz, vas ganando. Regla #2: Si escuchas un reloj, déjanos tus waffles y huye. ¡Que comience el juego antes de que el Azotamentes nos pida de cenar!",
    questions: [
      {
        id: 13,
        text: "¿Qué objeto cotidiano y antiguo aparece siempre en las visiones de las víctimas de Vecna justo antes de morir?",
        options: [
          "Un teléfono de disco que no deja de sonar",
          "Un reloj de pie (de péndulo) incrustado en la pared",
          "Una televisión con estática",
          "Una bicicleta oxidada que se mueve sola",
        ],
        correct: 1,
      },
      {
        id: 14,
        text: '¿Qué descubre Dustin que le gusta comer a su "mascota" Dart antes de que decida que los gatos son más sabrosos?',
        options: [
          "Papas fritas con mucha sal",
          'Barritas de chocolate "Three Musketeers" (Mosqueteros)',
          "Sobras de pizza de la basura",
          "El pegamento de la escuela",
        ],
        correct: 1,
      },
      {
        id: 15,
        text: "¿Qué es lo que Billy empieza a comer directamente del refrigerador cuando el Azotamentes empieza a controlarlo?",
        options: [
          "Un pollo entero crudo",
          "Botes de químicos y helado derretido mezclado con basura",
          "Hielo seco",
          "Cebollas crudas como si fueran manzanas",
        ],
        correct: 1,
      },
    ],
  },
};
