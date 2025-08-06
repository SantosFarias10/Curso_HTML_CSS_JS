# REACT

## ¿Que es?

React es una BIBLiOTECA (diferente de FRAMEWORK) de JS, para construir interfaces de usuario (UI). React solo se enfoca en la interfaz (la "vista" de una app). No incluye de forma nativa ruteo, menejo de datos o APIs (eso se agrega con librerias externas o frameworks como Next.js <--- Proximo curso).

## Data

Para poder ejecutar React tuve que iniciar un servidor web local en mi computadora. ¿Como? con node

```bash
npx serve
```

Sirve archivos desde la carpeta en la que lo ejecutas, usando el protocolo HTTP.

## JSX

### ¿Que es?

Es JavaScript XML. Es una extension de ECMAScript. En vez de escribir esto en React:

```JS
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement("h1", null, "Hola React"));
```

Es mas Simple asi con JSX:

```JS
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<h1>Hola React</h1>);
```

## Vite

Usamos vite para inicializar el proyecto