interface API {
    minimizeWindow: () => void,
    maximizeWindow: () => void,
    triggerContextMenu: () => void,
    generateUUID: () => void,
    onOpenFolder: (func) => void
}

declare const api: API
