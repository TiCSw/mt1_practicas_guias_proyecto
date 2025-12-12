# Guía para activar el pre-commit con IA (OpenAI)

Esta guía explica cómo habilitar en la máquina local el hook de pre-commit que analiza los cambios realizados y sugiere mensajes de commit utilizando un modelo de IA. Todos los archivos necesarios ya están incluidos en el repositorio del curso.

---

## 1. Pasos previos
 
- Configurar la API Key de OpenAI ([ver instructivo](./MT1PEA-InstructivoOpenAI.pdf)).

---

## 2. Archivos incluidos en el repositorio y su propósito

El repositorio ya contiene los siguientes archivos de configuración:

```
.pre-commit-config.yaml
requirements-dev.txt
/scripts/ai_precommit_openai.py
```

Descripción de cada archivo:

- **.pre-commit-config.yaml**  
  Configura el hook de pre-commit indicando qué script debe ejecutarse antes de cada commit.

- **requirements-dev.txt**  
  Contiene las dependencias necesarias para que el hook funcione, incluyendo `pre-commit`, `openai` y `python-dotenv`.

- **scripts/ai_precommit_openai.py**  
  Script que realiza la auditoría del commit.  
  Recibe el diff, llama al modelo de IA y muestra un análisis con sugerencias y clasificaciones.

---

## 3. Crear el archivo `.env` (no se debe subir a Git)

En la raíz del proyecto, crear un archivo llamado `.env`:

```
OPENAI_API_KEY=sk_XXXXXXXX
PRECOMMIT_AI_MODE=warn
```

- `warn`: permite el commit y muestra recomendaciones.  
- `block`: bloquea commits cuando la IA identifica problemas (opción para etapas avanzadas).

El archivo `.env` ya está en `.gitignore`, por lo que no forma parte del repositorio.

---

## 4. Instalar dependencias

En la raíz del proyecto, ejecutar:

```bash
pip install -r requirements-dev.txt
```

(Se recomienda hacerlo dentro de un entorno virtual.)

---

## 5. Instalar el hook de pre-commit (una única vez por proyecto)

Ejecutar en la raíz:

```bash
pre-commit install
```

La salida esperada es:

```
pre-commit installed at .git/hooks/pre-commit
```

A partir de este punto, cada commit ejecutará automáticamente el análisis con IA.

---

## 6. Probar la instalación

1. Realizar una modificación en cualquier archivo del repositorio.  
2. Ejecutar:

```bash
git add .
git commit -m "prueba"
```

El hook debe mostrar un **JSON** con:

- Clasificación del cambio  
- Mensaje de commit sugerido  
- Indicadores de calidad o posibles riesgos  

El commit se completará o se bloqueará según el modo configurado en `PRECOMMIT_AI_MODE`.

---

## 7. Notas finales

- El hook no modifica archivos del proyecto; únicamente analiza el diff y entrega una recomendación.  
- La decisión final sobre el mensaje de commit siempre recae en la persona desarrolladora.  
- Este mecanismo se integra naturalmente con el flujo TDD, permitiendo registrar con claridad las etapas Rojo, Verde y Azul.

---
