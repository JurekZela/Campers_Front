import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
body {
  margin: 0;
    padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
    font-family: Inter;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}

li {
  list-style: none;
}

* {
  box-sizing: border-box;
}

p {
  text-decoration: none;
  margin: 0;
  padding: 0;
  list-style: none;
  }
  
`;

export default GlobalStyled;