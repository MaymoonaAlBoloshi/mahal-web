import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header, Drawer } from '../components'
import { useThemeStore } from 'store/theme.ts'

const Route = createRootRoute({
  component: () => {
    const { theme } = useThemeStore()
    return (
      <>
        <div data-theme={theme} className="drawer h-screen overflow-scroll">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Header />
            <main className="p-4 overflow-scroll h-full">
              <Outlet />
            </main>
          </div>
          <Drawer />
        </div>
      </>
    )
  }
})

export { Route }
