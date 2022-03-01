import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
    font-family: 'Inter', sans-serif;
    list-style: none;
  }

  :root {
    --primary: #ff577f;
    --primary-focus: #ff427f;
    --primary-disabled: #59323f;
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343b41;
    --gray-1: #868e96;
    --gray-0: #f8f9fa;
    --success: #3fe864;
    --failure: #e83f5b;
  }

  button {
    cursor: pointer;
  }
`
