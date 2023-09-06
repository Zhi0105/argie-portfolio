import { create } from 'zustand'

const RouteStore = create((set) =>({
    route: '',
    activeRoute: null,
    setRoute: (string) => set((state) => ({ route: string })),
    setActiveRoute: (string) => set((state) => ({ activeRoute: string })),

})) 

export default RouteStore