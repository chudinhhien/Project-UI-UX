export const addTarget = (target) => {
  return {
    type: "ADD_TARGET",
    value: target
  }
}

export const closeModalTarget = () => {
  return {
    type: "CLOSE_MODAL_TARGET"
  }
}

export const openKPI = (targets) => {
  return {
    type: "OPEN_KPI",
    value: targets
  }
}