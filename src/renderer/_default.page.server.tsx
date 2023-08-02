import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import {PageContext} from "./types";
import {PageShell} from "./PageShell";
import AppRoutes from "../routes/AppRoutes";

const passToClient = ['pageProps', 'urlPathname', 'initialData', 'isLoading']

async function render(pageContext: PageContext) {
  const pageHtml = renderToString(
    <StaticRouter location={pageContext.urlPathname}>
      <PageShell pageContext={pageContext}>
        <AppRoutes />
      </PageShell>
    </StaticRouter>
  )
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`
}

export { render, passToClient };
