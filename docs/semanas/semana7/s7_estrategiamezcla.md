## Estrategia para mezclar ramas de funcionalidad con la rama *develop*/desarrollo

Detectar un *push* en cualquier rama de funcionalidad y validar en el mensaje de *commit* una palabra clave para identificar que la funcionalidad ha sido terminada y puede integrarse a desarrollo. Esta estrategia implica tres pasos:
1. Detectar la palabra clave que se defina en el commit
2. Actualizar la rama de funcionalidad con respecto a la rama de desarrollo, es decir mezclar la rama de desarrollo en la rama funcionalidad.
3. Correr las pruebas en la rama de funcionalidad. Si las pruebas pasan se mezcla la rama de funcionalidad en la rama desarrollo, de lo contrario se cierra la acción.

### Estrategia para mezclar la rama release con la rama master
Detectar un *push* a desarrollo y validar en el mensaje de *commit* una palabra clave para identificar si se va a crear la rama *release*. Si se detecta la palabra clave en el *commit* se crea la rama *release*, se mezcla la rama de desarrollo en la rama *release* y se corren las pruebas. Si las pruebas pasan se mezcla la rama *release* en la rama *master*, de lo contrario se cierra la acción.

#### Algunas instrucciones de GitHub Actions que pueden ser útiles para implementar estas estrategias
1. Si desea detectar un push a cualquier rama que este nombrada con un prefijo (p. ej.el prefijo <code>**historia**</code>) puede incluir en la definición de ramas del flujo <code><b>historia**</b></code>:
    <pre>
    on:
        push:
            branches:
                - 'historia**'
    </pre>
2. Si desea validar una palabra clave en el mensaje de commit, por ejemplo, "PALABRACLAVE", puede utilizar la función <code><b>contanis</b></code>:
    <pre>
    if: $&#123;&#123; contains(github.event.head_commit.message, 'PALABRACLAVE') &rcub;&rcub;
    </pre>
3. Si desea identificar el nombre de la rama que hizo el push, puede utilizar la variable <code><b>github.ref</b></code>:
    <pre>
    $&#123;&#123; github.ref &rcub;&rcub;
    </pre>
4. Si desea mezclar 2 ramas, puede utilizar la instrucción del Marketplace direct-merge-action. Ver documentación en: https://github.com/tukasz/direct-merge-action
<pre>
  - name: Mezcla rama1 -> rama2
    uses: tukasz/direct-merge-action@master
    with:
      GITHUB_TOKEN: $&#123;&#123; secrets.GITHUB_TOKEN &rcub;&rcub;
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
    
