export const NAVIGATE = 'NAVIGATE'

export function navigate(destination) {
  return {
    type: NAVIGATE,
    payload: destination,
  }
}
