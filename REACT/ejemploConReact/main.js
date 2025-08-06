// Importamos React
import React from "https://esm.sh/react@18.2.0"
// Importamos ReactDOM
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appDomElement = document.getElementById('app')

const root = ReactDOM.createRoot(appDomElement)

const button = React.createElement('button', { "data-id": 123 }, 'Boton 1')
const button2 = React.createElement('button', { "data-id": 456 }, 'Boton 2')
const button3 = React.createElement('button', { "data-id": 789 }, 'Boton 3')

/*  MAL
root.render(button)
root.render(button2)
root.render(button3)
*/
/*  NO queremos tener un div
const div = React.createElement('div', null, [button, button2, button3])
root.render(div)
*/

const app = React.createElement('React.Fragment', null, [button, button2, button3])

root.render(app)

/* JSX
<React.Fragment>
    <button data-id="123">Button 1</button>
    <button data-id="456">Button 2</button>
    <button data-id="789">Button 3</button>
</React.Fragment>
*/