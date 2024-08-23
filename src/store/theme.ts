import { create } from 'zustand'

type Theme = 'wireframe' | 'dark'

interface ThemeState {
    theme: Theme
    toggleTheme: () => void
    setTheme: (theme: Theme) => void
}

const useThemeStore = create<ThemeState>((set) => ({
    theme: 'wireframe',
    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === 'wireframe' ? 'dark' : 'wireframe'
        })),
    setTheme: (theme) => set({ theme })
}))

export { useThemeStore }
