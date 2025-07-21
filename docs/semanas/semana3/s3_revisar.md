## Semana 3 - Revisar las Historias de Usuario con apoyo de IA

### Objetivo

Asegurar la calidad de las historias de usuario a través de una revisión que garantice claridad, completitud y coherencia, apoyándose en un script de validación con IA.

### Pasos previos

---
* Haber detallado las historias de usuario del proyecto en la wiki.
* Crear la página de Enunciado del proyecto:
  * Crear una página llamada **Enunciado** en la raíz de la wiki.
  * Copiar el enunciado completo del proyecto asignado en esta página ya que será tenida en cuenta por el validador para evaluar las historias de usuario.

**Nota importante**
El uso del validador automático requiere configurar una API Key de OpenAI.  
Las instrucciones detalladas para obtener y configurar esta clave se encuentran en el archivo **README.md** del repositorio.

> Para el alcance del proyecto del curso, es suficiente contar con un saldo aproximado de **5 USD** en la cuenta de OpenAI.  
> Se recomienda eliminar el método de pago registrado una vez finalizada la práctica para evitar cobros futuros.


### Descripción actividad

---

#### ![](./../../assets/images/individuo.png) Actividad individual

* Ejecutar el validador:
  * Acceder a la pestaña **Actions** del repositorio en GitHub.
  * Ejecutar el flujo de trabajo llamado **Validación automática de historias en la Wiki**.
> El validador revisará las historias detalladas y dejará un registro con observaciones en cada archivo `.md` correspondiente.

* Revisar los resultados de la IA:
  * Abrir cada historia revisada y leer con atención las sugerencias generadas por la IA.
  * Analizar los comentarios para comprender por qué se hacen las observaciones y cómo mejorar la historia.

* Ajustar las historias de usuario:
  * Realizar las correcciones necesarias en las historias de usuario, basándose en las sugerencias recibidas.
  * Volver a ejecutar el validador hasta que la revisión evidencie que la historia está correctamente detallada.

### Recursos

---
* Consultar las instrucciones para obtener y configurar la API Key necesaria en el archivo `README.md`  del repositorio.
* Utilizar el flujo de trabajo ya configurado en GitHub Actions para realizar la validación.

### Entregables

---

En la wiki del proyecto:
* Las historias de usuario corregidas, con la evidencia de revisión generada por la IA.

### Criterios de evaluación

---

* Todas las historias de usuario fueron revisadas mediante el validador automático y dicha revisión está evidenciada en los archivos.
* Las observaciones emitidas por la IA fueron comprendidas y corregidas.
* Las historias cumplen con los lineamientos del curso y están completas, claras y correctamente detalladas.
