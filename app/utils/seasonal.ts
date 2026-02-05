export function isDateInRange(
  start: { month: number; day: number },
  end: { month: number; day: number },
) {
  const now = new Date()

  const startDate = new Date(now.getFullYear(), start.month - 1, start.day)

  const endDate = new Date(now.getFullYear(), end.month - 1, end.day)

  return now >= startDate && now <= endDate
}

/**
 * 🎃 Halloween Week (Oct 25 → Oct 31)
 */
export function isHalloweenWeek() {
  return isDateInRange({ month: 10, day: 25 }, { month: 10, day: 31 })
}

/**
 * ❄️ Christmas Week (Dec 20 → Dec 26)
 */
export function isChristmasWeek() {
  return isDateInRange({ month: 12, day: 20 }, { month: 12, day: 26 })
}

export const seasonalEffects = {
  halloween: isHalloweenWeek(),
  christmas: isChristmasWeek(),
}
