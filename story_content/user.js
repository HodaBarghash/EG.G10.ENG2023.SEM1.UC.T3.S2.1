function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RXXsBtDuTP":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v11q1attempts:player.GetVar("v11q1attempts"),v11q1answeredcorrect:player.GetVar("v11q1answeredcorrect"),v11q2attempts:player.GetVar("v11q2attempts"),v11q2answeredcorrect:player.GetVar("v11q2answeredcorrect"),v11q3attempts:player.GetVar("v11q3attempts"),v11q3answeredcorrect:player.GetVar("v11q3answeredcorrect")})
	}
	)
}

