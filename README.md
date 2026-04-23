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
- Capacitor (Android)
- Electron (Windows)

---

## Builds Nativos

El proyecto soporta dos plataformas nativas: Android (APK) y Windows (EXE).

### Requisitos

| Plataforma | Requisito |
|-----------|-----------|
| Android   | Android SDK |
| Windows   | Node.js 20+ |

### Local

```bash
# 1. Generar web assets
npm run build

# 2. Android APK
npx cap add android    # (si no existe la carpeta android)
cd android && ./gradlew assembleDebug
# Output: android/app/build/outputs/apk/debug/app-debug.apk

# 3. Windows EXE
cd electron && npm install   # (solo primera vez)
cd electron && npm run make
# Output: electron/release/
```

### GitHub Actions

Las builds se generan automáticamente sin necesidad de entorno local.

```bash
# Ambos a la vez
gh workflow run release.yml

# O individualmente
gh workflow run android.yml
gh workflow run windows.yml
```

Esto genera:
- **Android**: `app-debug.apk`
- **Windows**: `Setup.exe` (en `electron/release/`)

---

## Estructura de carpetas adicionales

```
electron/           # Electron wrapper para Windows
├── main.js        # Entry point
├── preload.js    # Bridge rendererプロセス
├── package.json # Dependencias
└── assets/    # Iconos

android/          # Android native (Capacitor)
└── app/build/outputs/apk/debug/app-debug.apk
```