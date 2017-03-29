import domready from 'domready'

import { render } from 'react-dom'

domready(function () {
  render(<h1>hello kitty</h1>, document.getElementById('app'))
})
