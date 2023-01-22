# API REST Angular

API REST usando Angular version 15.0.0

Caracteristicas:

    1. Inicio de sesión mediante correo y contraseña.
    2. Obtener todos los datos de una tabla
    3. Actualizar datos especificos de la tabla
    4. Eliminar datos especificos de la tabla
    5. Agregar datos a la tabla

## Instalación

Clone el repositorio, dirigete a la ruta del proyecto y ejecutar `npm i` y luego `ng serve`, entonces se puede abrir localhost:4200 en el navegador.

## Artefactos para entorno de producción

Ejecuta `ng build` para compilar el proyecto. Los artefactos de compilación serán almacenados en el directorio `dist/`, para usar una compilación de producción use el indicador --prod

## Instalación en un entorno docker

Clone el repositorio, dirigete a la ruta del proyecto y ejecute los siguientes comandos.

```bash
docker build -t angular-test .
docker run -d -p 8080:80 --name angular-test
```

Una vez el container de Angular este corriendo, en el explorador abrir

```browser
http://localhost:8080
```