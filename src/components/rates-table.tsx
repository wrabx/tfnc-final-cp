import { rates } from "@/data/content";

export function RatesTable() {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-cream">
      <table className="w-full text-left text-sm">
        <caption className="border-b border-line px-4 py-3 text-left font-display text-2xl text-ink">
          Per session
        </caption>
        <thead>
          <tr className="text-muted">
            <th scope="col" className="px-4 py-3 font-medium">
              Format
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              60 min
            </th>
            <th scope="col" className="px-4 py-3 font-medium">
              30 min
            </th>
          </tr>
        </thead>
        <tbody>
          {rates.map((row) => (
            <tr key={row.name} className="border-t border-line">
              <th scope="row" className="px-4 py-4 font-semibold text-ink">
                {row.name}
                {row.note ? (
                  <span className="mt-0.5 block text-xs font-medium text-muted">{row.note}</span>
                ) : null}
              </th>
              <td className="px-4 py-4 text-lg font-semibold tabular-nums">{row.sixty}</td>
              <td className="px-4 py-4 text-lg font-semibold tabular-nums">{row.thirty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
