const Drawer = () => {
    return (
        <aside className="drawer-side">
            <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                <li>
                    <a href="#sidebar-item1">Sidebar Item 1</a>
                </li>
                <li>
                    <a href="#sidebar-item2">Sidebar Item 2</a>
                </li>
            </ul>
        </aside>
    )
}

export { Drawer }
