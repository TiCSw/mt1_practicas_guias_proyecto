## Estrategia para mezclar ramas de funcionalidad con la rama *develop*/desarrollo

Detectar un *push* ea cualquier rama de funcionalidad y validar en el mensaje de *commit* una palabra clave para identificar que la funcionalidad ha sido terminada y puede integrarse a desarrollo. Esta estrategia implica tres pasos:
1. Detectar la palabra clave que se defina en el commit
2. Actualizar la ramade funcionalidadcon respecto a la rama de desarrollo, es decir mezclar en la rama funcionalidad, la rama de desarrollo.
3. Correr las pruebas en la rama de funcionalidad. Si las pruebas pasan se mezclala rama de funcionalidad en la rama desarrollo, de lo contrariose cierra la acción.

### Estrategia para mezclarla rama releasecon la rama master
Detectar un *push* a desarrollo y validar en el mensaje de *commit* una palabra clave para identificar si se va a crear la rama *release*. Si se detecta la palabra clave en el *commit* se crea la rama *release*, se mezcla en la rama *release* la rama de desarrollo y se corren las pruebas. Si las pruebas pasan se mezcla la rama *release* en la rama *master*, de lo contrario se cierra la acción.

#### Algunas Instrucciones de GitHub Actionsque pueden ser útiles para implementar estas estrategias
1. Si desea detectar un pusha cualquier rama que este nombrada con un prefijo (p. ej.el prefijo <code>**historia**</code>) puede incluir en la definición de ramas del flujo <code>**historia****</code>:
    <pre>
    on:
        push:
            branches:
                - 'historia**'
    </pre>
2. Si desea validar una palabra clave en el mensaje de commit, por ejemplo, "PALABRACLAVE", puede utilizar la función <code>**contanis**</code>:
    <pre>
    if: ${{ contains(github.event.head_commit.message, 'PALABRACLAVE') }}
    </pre>
3. Si desea identificar el nombre de la rama que hizo el push,puede utilizarla variable <code>**github.ref**</code>:
    <pre>
    ${{ github.ref }}
    </pre>
4. Si desea mezclar 2 ramas, puede utilizarla instrucción del Marketplacedirect-merge-action. Ver documentación en: https://github.com/tukasz/direct-merge-action
<pre>
  - name: Mezcla rama1 -> rama2
    uses: tukasz/direct-merge-action@master
    with:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      source-branch: rama1
      target-branch: rama2
</pre>
5. Si desea crear una rama, puede utilizar.
<pre>
  - name: Crear rama
    run: |
      git checkout -b rama
      git push -f -u origin rama
</pre>
    
&emsp;Esta instrucción ejecuta dos comandos git, uno para crear la rama en el contenedor del action y otro para sobreescribirla con el repositorio remoto. <code>-f</code> es la abreviación de <code>--force</code> y <code>-u</code> es la abreviación de <code>--set-upstream</code>.
    
En este enlace pueden encontrar la documentación oficial sobre la sintaxis de GitHub Actions: https://docs.github.com/es/actions/using-workflows/workflow-syntax-for-github-actions
    
