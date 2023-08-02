import React from 'react';
import Layout from "../Components/Layout";
import {PageContext} from "./types";
import { PageContextProvider } from './usePageContext'


function PageShell({ pageContext, children }: { pageContext: PageContext; children: React.ReactNode }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          {/*<Sidebar>*/}
          {/*  <Logo />*/}
          {/*  <Link href="/">Welcome</Link>*/}
          {/*  <Link href="/markdown">Markdown</Link>*/}
          {/*  <Link href="/star-wars">Data Fetching</Link>*/}
          {/*  <Link href="/hello">Routing</Link>*/}
          {/*</Sidebar>*/}
          {/*<Content>*/}
            {children}
          {/*</Content>*/}
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}

export {PageShell};
