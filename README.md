# Random user
-------
## Funcionalidades Principales:

1. **Obtención de Usuarios:**
   - La aplicación realiza una petición a la [API RandomUser](https://randomuser.me/) para obtener datos variados de 100 usuarios.

2. **Visualización en Tabla Interactiva:**
   - Se muestra la información de los usuarios en una tabla fácil de entender.
   - Las columnas incluyen:
     - **Imagen:** Muestra la foto del usuario para una identificación rápida.
     - **Nombre Completo:** Presenta el nombre y apellido del usuario.
     - **Email:** Proporciona la dirección de correo electrónico.
     - **País:** Indica la ubicación del usuario para una referencia geográfica.
     - **Botón para Eliminar:** Cada fila tiene un botón que permite eliminar al usuario correspondiente del listado.

3. **Eliminación Rápida:**
   - Para simplificar la gestión de usuarios, al hacer clic en el botón de eliminar, el usuario seleccionado se eliminará instantáneamente del listado.

## Ventajas Adicionales:
   - **Interfaz Amigable:** La aplicación presenta una interfaz intuitiva y fácil de usar para una experiencia fluida del usuario.
   - **Actualizaciones Dinámicas:** La tabla se actualiza dinámicamente al eliminar usuarios, garantizando una representación precisa y actualizada de la información.


## Estructura general de carpetas:
    ├── node_modules
    ├── src
    │    ├── Modules
    │    │   ├── Users
    │    │   │   ├── Application
    │    │   │   ├── Domain
    │    │   │   ├── Infrastructure
    │    ├── Pages
    │    ├── Shared
    │    ├── main.tsx
    ├── package.json
    ├── package-lock.json 
    ├── README.md
    └── .gitignore
  > Se implementa Arquitectura Hexagonal + Vertical Slicing


## Convención CSS
- CSS modular
- Escritura BEM 
 - La metodología Bloque, Elemento, Modificador (comúnmente conocida como BEM ) es una convención de nomenclatura popular para clases en HTML y CSS.

     **Ejemplo:**
     | Clase | Tipo |
     |--------|--------|
     | Avatar| Bloque|
     | Avatar__img| Elemento imágen|
     | Avatar__img--hover| Modificador|

## Requerimientos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Configuración del proyecto

1. Clonar este repositorio:

    ```bash
    git clone https://github.com/Hmendez19/frontend-random-users.git
    ```

2. Navegue hasta el directorio del proyecto:

    ```bash
    cd frontend-random-users
    ```

3. Instalación de dependencias:

    ```bash
    npm install
    # o utilizando yarn
    # yarn install
    ```

## Desarrollo
1. Para ejecutar el proyecto en modo de desarrollo, utilice el siguiente comando:

    ```bash
    npm run dev
    # o utilizando yarn
    # yarn dev
     ```
  - Aparecerá información de la siguiente manera:
      ```bash
       VITE v5.0.8

      ➜  Local:   http://127.0.0.1:5173/
      ➜  Network: use --host to expose
      ➜  press h + enter to show help
      ```

2. Visite la url  [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

