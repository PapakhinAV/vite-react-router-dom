import {FC, PropsWithChildren} from 'react'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <header>
        {/* Here might be your header component or navigation */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Here might be your footer component */}
      </footer>
    </div>
  )
}

export default Layout
