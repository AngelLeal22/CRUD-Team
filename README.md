# ServidorTEAM 🚀
Repositorio del proyecto de ejemplo para manejo de cursos de programación y matemáticas.

## Descripción

Este proyecto es un **servidor con Node.js y Express** que organiza cursos de programación y matemáticas. Permite:

- Listar todos los cursos disponibles.
- Filtrar cursos por lenguaje o nivel.
- Ordenar cursos según vistas.
- Usar rutas separadas para programación y matemáticas.

El servidor está estructurado usando **routers**, siguiendo buenas prácticas de Node.js y Express.

## Tecnologías utilizadas

- Node.js
- Express
- Git / GitHub
- Visual Studio Code

## Rutas principales

### Programación
- `/api/cursos/programacion` → Lista todos los cursos de programación.
- `/api/cursos/programacion/:lenguaje` → Filtra cursos por lenguaje (ej: python, javascript).
- `/api/cursos/programacion/:lenguaje/:nivel` → Filtra cursos por lenguaje y nivel (basico, intermedio, avanzado).

### Matemáticas
- `/api/cursos/matematicas` → Lista todos los cursos de matemáticas.
- `/api/cursos/matematicas/:nivel` → Filtra cursos de matemáticas por nivel.

### Idiomas
- `/api/cursos/idiomas` → Lista todos los cursos de idiomas.
- `/api/cursos/idiomas/:idioma` → Filtra cursos por idioma.
- `/api/cursos/idiomas/:idioma/:nivel` → Filtra cursos por idioma y nivel (basico y intermedio).

### General
- `/api/cursos` → Lista todos los cursos (programación y matemáticas).
- `/` → Mensaje de bienvenida al servidor.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/curso-desastre.git
Instalar dependencias:

bash
Copiar
Editar
npm install
Iniciar el servidor:

bash
Copiar
Editar
node app.js
El servidor por defecto se ejecuta en http://localhost:3000.

Autores
Ing. Angel Leal
Ing. Josue Chirivi
Ing. Ángel Hernández


Licencia
Proyecto de ejemplo para fines educativos.
