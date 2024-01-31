function getUserDataGitHub() {
	const xhttpr = new XMLHttpRequest();
	let token = document.getElementById('token').value;
	let service = "https://api.github.com/user/emails"
	
	console.log(service);
	
	xhttpr.open('GET', service, true);
	xhttpr.setRequestHeader('Authorization', 'Bearer ' + token);
	
	xhttpr.send();

	xhttpr.onload = ()=> {
		showResults(xhttpr);
	};
}

function showResults(xhttpr) {
	const response = JSON.parse(xhttpr.responseText);
	let primary = false;
	if (xhttpr.status === 200) {

		// Process the response data here
		document.getElementById('results').innerHTML="";
		for(var i=0; i<response.length; i++) {
			if(response[i]["primary"] === true) {
				if(response[i]["visibility"] === 'public') {
					if(response[i]["email"].includes("@uniandes.edu.co")) {
						document.getElementById('results').innerHTML+="<b>¡Enhorabuena! Su cuenta se encuentra bien configurada</b>.<br/>";
						document.getElementById('results').innerHTML+="La visibilidad del usuario es pública.<br/>";
						document.getElementById('results').innerHTML+="El correo configurado es " + response[i]["email"] + ".";
					} else {
						document.getElementById('results').innerHTML+="<b class='text-danger'>¡Su cuenta no se encuentra bien configurada!<b><br/>";
						document.getElementById('results').innerHTML+="La visibilidad del usuario está bien configurada ya que la opción Keep my email private está desmarcada.<br/>";
						document.getElementById('results').innerHTML+="El correo <b class='text-danger'>" + response[i]["email"] + "</b> configurado actualmente <b class='text-danger'>no es un correo Uniandes</b>.<br/><br/>";
						document.getElementById('results').innerHTML+="<b>Debe configurar de manera adecuada su usuario antes de iniciar el robot nuevamente.</b> ";
						document.getElementById('results').innerHTML+="Recuerde que el correo principal debe ser el correo Uniandes y que la opción Keep my email private debe estar desmarcada.<br/>";
						document.getElementById('results').innerHTML+="En el siguiente enlace están las <a href='https://misovirtual.virtual.uniandes.edu.co/codelabs/configuracion-cuenta-github/index.html#0' target='_blank'>instrucciones para la configuración de su cuenta</a>. ";
						document.getElementById('results').innerHTML+="Luego de actualizar sus datos, debe esperar aproximadamente dos minutos antes de realizar de nuevo esta verificación.";
					}
				} else {
						document.getElementById('results').innerHTML+="<b class='text-danger'>¡Su cuenta no se encuentra bien configurada!<b><br/>";
						document.getElementById('results').innerHTML+="La visibilidad del usuario actualmente es <b class='text-danger'>privada</b> y debería ser pública, el problema está en que la opción Keep my email address private está marcada y NO debería estarlo. <br/>";
						document.getElementById('results').innerHTML+="El correo configurado actualmente es " + response[i]["email"] + ".<br/><br/>";
						document.getElementById('results').innerHTML+="<b>Debe configurar de manera adecuada su usuario antes de iniciar el robot nuevamente.</b> ";
						document.getElementById('results').innerHTML+="Recuerde que el correo principal debe ser el correo Uniandes y que la opción Keep my email private debe estar desmarcada.<br/>";
						document.getElementById('results').innerHTML+="En el siguiente enlace están las <a href='https://misovirtual.virtual.uniandes.edu.co/codelabs/configuracion-cuenta-github/index.html#0' target='_blank'>instrucciones para la configuración de su cuenta</a>. ";
						document.getElementById('results').innerHTML+="Luego de actualizar sus datos, debe esperar aproximadamente dos minutos antes de realizar de nuevo esta verificación.";
				}
			}
		}

	} else {
		document.getElementById('results').innerHTML="<b class='text-danger'>Error al consultar el PAT. GitHub reporta: " + response["message"] + "</b.";
	}
}