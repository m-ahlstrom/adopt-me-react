import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export default function renderApp(url, options) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    options,
  )

  return stream
}
