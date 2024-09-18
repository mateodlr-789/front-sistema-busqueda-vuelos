import { create } from "zustand";

interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),

  setSystemTheme: () =>
    set(() => ({
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    })),
}));

export default useThemeStore;
