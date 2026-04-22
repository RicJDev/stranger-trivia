# Stranger Trivia

Un juego de trivia con temática de Stranger Things desarrollado con vanilla JavaScript y Vite.

## Cómo ejecutarlo

```bash
npm run dev      # Iniciar servidor de desarrollo
npm run build    # Build de producción
npm run preview # Preview del build
```

## Estructura del proyecto

```
src/
├── main.js              # Entry point y coordinator
├── game/
│   ├── levels.js        # Datos de preguntas por nivel
│   ├── state.js         # Estado del juego
│   └── questions.js    # Helpers para preguntas
└── ui/
    ├── screens.js       # Control de pantallas
    ├── questionDisplay.js  # Render de preguntas
    ├── modal.js        # Modal de nivel
    └── header.js       # Header y resultados
```

## Reglas del juego

- 3 niveles: Fácil, Medio, Difícil
- 15 preguntas en total
- Las respuestas correctas suman puntos
- Al pasar de nivel aparece un modal informativo
- Al final muestra puntuación y mensaje según el rendimiento

## Tech Stack

- Vanilla JavaScript (ES Modules)
- Vite
- CSS (sin framework)
- Tauri (para ejecutables nativos)

## Ejecutables (Tauri)

El proyecto incluye Tauri para generar ejecutables nativos para diferentes plataformas:

```bash
npm run tauri dev      # Ejecutar en modo desarrollo
npm run tauri build    # Compilar para producción
```

### Plataformas soportadas

- **Linux**: AppImage (.AppImage)
- **Windows**: Ejecutable (.exe)
- **Android**: APK (.apk)

### GitHub Releases

Las releases se generan automáticamente mediante GitHub Actions. Para crear una nueva release:

1. Crea un tag de versión:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. La action compilara automaticamente para las 3 plataformas y generara los artefactos.

3. Se subiran automaticamente a la release de GitHub.
