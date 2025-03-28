**Nombre del Proyecto:** Around The U.S.

**Desarrollado por:** Josefina Nicole Medina

**Descripción:**
Around The U.S es una aplicación web que permite a los usuarios explorar diversos lugares de interés en Estados Unidos, desde frondosos bosques hasta vibrantes ciudades. La interfaz intuitiva y amigable proporciona una experiencia de usuario atractiva para descubrir y disfrutar de los destinos más destacados del país.

Con la incorporación del Proyecto 12, Around The U.S se ha conectado a un servidor, permitiendo la sincronización de datos y la interacción en tiempo real.

**Tecnologías Utilizadas:**
- **HTML5:** Estructura semántica y accesible.
- **CSS3:** Estilos responsivos con flexbox y grid.
- **JavaScript (ES6+):** Interactividad dinámica sin recargar la página.
- **Metodología BEM:** Organiza y estructura el código CSS para facilitar su mantenimiento y escalabilidad.
- **Media Queries:** Aseguran compatibilidad con diversos dispositivos.
- **Fetch API:** Integración con el servidor para recuperar y enviar datos.

**Funcionalidades Destacadas:**

1. **Exploración de Lugares:** Navegación por diversas tarjetas informativas de lugares de interés.
2. **Agregar Tarjetas:** Los usuarios pueden contribuir agregando sus propias tarjetas de destinos.
3. **Eliminar Tarjetas:** Posibilidad de eliminar tarjetas no deseadas.
4. **Me gusta:** Los usuarios pueden dar "me gusta" a tarjetas y ver su estado en tiempo real.
5. **Edición de Perfil:** Modificación de nombre y descripción mediante un formulario modal.
6. **Sincronización con el Servidor:**
   - Carga automática de información del usuario desde el servidor.
   - Obtención y visualización de tarjetas en tiempo real.
   - Edición de perfil sincronizada con el servidor.
   - Agregar y eliminar "me gusta" en tarjetas con peticiones PUT y DELETE.
   - Eliminación de tarjetas con verificación mediante una ventana emergente.
   - Actualización de la foto de perfil del usuario mediante una solicitud PATCH.
   - Indicadores de carga en formularios para mejorar la experiencia del usuario.

**Conexión con el Servidor:**
El proyecto se ha integrado con el servidor de Around The U.S mediante una API REST, utilizando un token de autenticación para identificar cada usuario. Todas las solicitudes de datos y actualizaciones son gestionadas a través de la clase `Api`, la cual estructura todas las interacciones con el backend de manera organizada y modular.

**Repositorio en GitHub:**
[Enlace al proyecto en GitHub Pages](https://nikittty.github.io/web_project_around/)

**Explora los encantos de Estados Unidos con Around The U.S y descubre todo lo que este diverso país tiene para ofrecer!**

