export function compareDates(date) {
  const today = new Date()
  const dateToCompare = new Date(date)
  
  if (dateToCompare > today) return true
  else if (dateToCompare < today) return false
}