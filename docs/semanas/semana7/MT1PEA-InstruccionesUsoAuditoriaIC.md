# Auditoría Automática de Integración Continua con IA

Esta guía explica cómo **habilitar y utilizar la auditoría automática de Integración Continua con IA** que analiza los cambios integrados en el proyecto y genera retroalimentación técnica sobre la calidad de la integración, el uso de TDD y la claridad del historial de commits.  
Todos los archivos y el pipeline necesarios **ya están incluidos en el repositorio del curso**.

---

## Alcance de la auditoría con IA

La auditoría con IA:

- Se ejecuta automáticamente como parte del pipeline de Integración Continua entregado.
- Analiza únicamente cambios integrados en las ramas:
  - `develop`
  - `release*`
- No bloquea el pipeline.
- No modifica código ni genera implementaciones.
- No reemplaza las pruebas unitarias ni las validaciones del equipo.

Su propósito es **formativo e informativo**.

---

## Pasos previos

Antes de utilizar la auditoría con IA, se debe cumplir con lo siguiente:

- Usar el repositorio base entregado por el curso.
- Mantener activo el pipeline de Integración Continua provisto.
- Configurar la API Key de OpenAI ([ver instructivo](./../semana3/MT1PEA-InstructivoOpenAI.pdf)).
- No eliminar ni modificar el workflow de auditoría IA incluido en el repositorio.

---

## ¿Cuándo se ejecuta la auditoría?

La auditoría con IA se ejecuta automáticamente cuando se integran cambios mediante un `push` a:

- la rama `develop`
- una rama `release*`

Esto garantiza que la IA evalúe **decisiones de integración**, no trabajo en progreso.

---

## ¿Qué evalúa la auditoría con IA?

Durante la ejecución del pipeline, la IA analiza:

- El **diff** del último commit integrado.
- El **mensaje de commit** asociado a la integración.

Con base en esta información, evalúa:

- Uso adecuado del ciclo **TDD (Rojo – Verde – Azul)**.
- Tamaño y enfoque del cambio integrado.
- Coherencia entre pruebas y lógica.
- Calidad del diseño y mantenibilidad.
- Riesgos potenciales para futuras integraciones.
- Claridad y utilidad del mensaje de commit como registro histórico.

---

## ¿Dónde consultar el resultado?

El reporte generado por la auditoría con IA se publica automáticamente en GitHub Actions.

**Para consultarlo:**

1. Ingresar al repositorio del proyecto.
2. Ir a la pestaña **Actions**.
3. Seleccionar el workflow:
   **“AI Auditor de Cambios (Integración)”**.
4. Abrir la ejecución correspondiente al push realizado.
5. Ingresar al job **“Auditoría IA de integración”**.
6. Revisar el log del job.

El reporte aparece como texto dentro del log del job.

---

## Uso esperado de la retroalimentación

La retroalimentación generada por la IA debe utilizarse como:

- Insumo para reflexión técnica,
- Apoyo para mejorar futuras integraciones,
- Referencia para fortalecer prácticas de TDD y CI.

No se espera que todas las observaciones se corrijan de inmediato, pero sí que el equipo:

- Las lea
- Las comprenda
- Las tenga en cuenta posteriormente.

---

## Buenas prácticas recomendadas

- Revisar el reporte de auditoría después de cada integración a `develop` o `release`.
- Analizar las observaciones en conjunto como equipo.
- Relacionar la retroalimentación con:
  - Tamaño de los commits,
  - Orden de los ciclos TDD,
  - Claridad del mensaje de integración.
- Mantener el criterio técnico del equipo por encima de las sugerencias automáticas.

---

## Consideraciones finales

La auditoría automática con IA:

- Hace parte del pipeline de Integración Continua entregado por el curso.
- Refuerza prácticas profesionales usadas en la industria.
- No sustituye la responsabilidad del equipo ni la toma de decisiones técnicas.

Esta práctica se integra al curso como un ejemplo de **uso responsable y controlado de IA en procesos de ingeniería de software**.
