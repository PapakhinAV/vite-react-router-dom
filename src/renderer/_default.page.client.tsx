import ReactDOM from 'react-dom/client'
import {PageShell} from "./PageShell";
import {PageContextClient} from "./types";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
const clientRouting = true, hydrationCanBeAborted = true

let root: ReactDOM.Root


async function render(pageContext: PageContextClient) {
  const page = (
    <BrowserRouter>
      <PageShell pageContext={pageContext}>
        <AppRoutes />
      </PageShell>
    </BrowserRouter>
  )
  const container = document.getElementById('react-root')!
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
}
function addPageContext() {
  return {
    pageContext: {
      isLoading: true
    }
  }
}

export { render, clientRouting, hydrationCanBeAborted, addPageContext };
