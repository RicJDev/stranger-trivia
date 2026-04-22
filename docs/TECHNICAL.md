# Documentación Técnica - Stranger Trivia

## Estructura del Proyecto

```
stranger-trivia/
├── src/
│   ├── main.js              # Entry point
│   ├── reset.css           # Reset CSS
│   ├── style.css         # Estilos principales
│   ├── utility.css      # Clases utilitarias
│   ├── assets/          # Recursos (imágenes, audio)
│   ├── game/           # Lógica del juego
│   │   ├── state.js     # Estado del juego
│   │   ├── questions.js # Gestión de preguntas
│   │   └── levels.js   # Niveles y preguntas
│   └── ui/             # Interfaz de usuario
│       ├── screens.js  # Cambio de pantallas
│       ├── header.js  # Encabezado (nivel, puntuación)
│       ├── modal.js   # Modal de niveles
│       └── questionDisplay.js # Pregunta y feedback
├── index.html
└── package.json
```

## Flujo del Juego

### 1. Inicio (index.html)

- Pantalla de bienvenida con título "Stranger Things"
- Música de fondo (main-theme.mp3) iniciada al hacer click

### 2. main.js

- `startGame()`: Reinicia estado, reproduce música, muestra quiz
- `nextQuestion()`: Avanza pregunta, cambia nivel al chegar a los límites
- `showResults()`: Muestra puntuación final, sonidos de victoria

### 3. Niveles

El juego tiene 3 niveles:

- **Fácil** (4 preguntas): Índice 0-3
- **Medio** (8 preguntas): Índice 4-11
- **Difícil** (3 preguntas): Índice 12-14

El cambio de nivel ocurre cuando:

- `newState.currentQuestionIndex === easyCount` → Medio
- `newState.currentQuestionIndex === easyCount + mediumQuestions` → Difícil

### 4. state.js

```js
const LEVEL_ORDER = ['easy', 'medium', 'hard']
const LEVEL_NAMES = { easy: 'Fácil', medium: 'Medio', hard: 'Difícil' }

let state = {
  currentLevelIndex: 0,
  currentQuestionIndex: 0,
  score: 0,
  isPaused: false,
}
```

### 5. questionDisplay.js

- `renderQuestion()`: Muestra pregunta y opciones
- `showFeedback()`: Muestra correcto/incorrecto + efectos de sonido
- Mensajes aleatorios para feedback (7 correctos, 7 incorrectos)

### 6. Efectos de Sonido (index.html)

- `#bg-music`: Música de fondo (loop)
- `#sounds-correct`: Campana al acertar
- `#sounds-wrong`: Sonido al fallar
- `#sounds-finish`: Tada al terminar

### 7. Estilos (style.css)

Variables CSS principales:

```css
:root {
  --st-black: #1f1313;
  --st-red-bright: #ef0b0b;
  --st-red-light: #ff1a1a;
  --st-red-dark: #940001;
}
```

Responsive: `@media (max-width: 600px)`

## Puntos Clave

###bug 1: Niveles no cambiaban
**Problema**: `getQuestionCountAtLevel(2)` retornaba acumulado (12), no solo medium (8).
**Solución**: Usar `levels.medium.questions.length` directamente.

### Bug 2: feedback cubría opciones

**Problema**: `position: absolute` sobre las opciones.
**Solución**: Feedback integrado debajo de opciones con animación fadeIn.

### Bug 3:舌尖 titube en móvil

**Solución**: Media query con fuentes reducidas.
