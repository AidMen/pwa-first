//Create
export const TOGGLE_DRAWER = '[DRAWER] TOGGLE_DRAWER'
export const OPEN_DRAWER = '[DRAWER] OPEN_DRAWER'
export const CLOSE_DRAWER = '[DRAWER] CLOSE_DRAWER'


export const toggleDrawer = (open) => {
    return {
        type: TOGGLE_DRAWER,
        payload: {
            open: !open,
        }
    }
}