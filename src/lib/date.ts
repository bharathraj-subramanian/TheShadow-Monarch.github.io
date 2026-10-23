const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Accepts "2026", "2026-06" or "2026-06-17" and returns "2026" or "Jun 2026".
export function formatDate(value: string): string {
  const [year, month] = value.trim().split('-');
  if (!/^\d{4}$/.test(year ?? '')) throw new Error(`Bad date: ${value}`);
  if (month === undefined) return year;
  const index = Number(month) - 1;
  if (!(index >= 0 && index < 12)) throw new Error(`Bad month in date: ${value}`);
  return `${MONTHS[index]} ${year}`;
}
