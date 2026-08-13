import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RateRow {
  space: string;
  detail: string;
  rate: string;
}

interface RateGroup {
  title: string;
  rows: RateRow[];
  footnote?: string;
}

const GROUPS: RateGroup[] = [
  {
    title: "Commercial Space Rental",
    rows: [
      { space: "Small Commercial Space", detail: "Up to 25 sqm", rate: "₱8,000 – ₱10,000/month" },
      { space: "Medium Commercial Space", detail: "26 – 40 sqm", rate: "₱10,000 – ₱15,000/month" },
      { space: "Large Commercial Space", detail: "41 – 60 sqm", rate: "₱20,000 – ₱25,000/month" },
    ],
  },
  {
    title: "Cubicle / Small Business Space",
    rows: [
      { space: "Small Cubicle / Table Space", detail: "—", rate: "₱1,500 – ₱2,500/month" },
      { space: "Standard Cubicle", detail: "—", rate: "₱3,000 – ₱5,000/month" },
    ],
  },
  {
    title: "Function Hall / Event Space",
    rows: [
      { space: "Function Hall / Rooftop Event Space", detail: "Per day", rate: "₱3,000/day" },
    ],
    footnote: "Excludes catering, decorations, cleaning fees, and sound system operator unless otherwise agreed.",
  },
  {
    title: "Temporary Vending / Food Stall",
    rows: [
      { space: "Afternoon / Night Vending Space", detail: "Daily", rate: "₱50 – ₱150/day" },
      { space: "Weekly Temporary Stall", detail: "Weekly", rate: "₱300 – ₱700/week" },
      { space: "Monthly Temporary Stall", detail: "Monthly", rate: "Subject to agreement" },
    ],
  },
];

export function FacilityRatesTable() {
  return (
    <div className="space-y-8">
      {GROUPS.map((group) => (
        <div
          key={group.title}
          className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm dark:bg-[hsl(213,45%,15%)] dark:border-white/10"
        >
          <div className="border-b border-black/5 px-6 py-4 dark:border-white/10">
            <h3 className="font-display text-lg font-semibold text-[hsl(213,62%,18%)] dark:text-white">
              {group.title}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[hsl(213,62%,22%)] hover:bg-[hsl(213,62%,22%)]">
                  <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                    Space
                  </TableHead>
                  <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                    Area / Basis
                  </TableHead>
                  <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                    Rate
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {group.rows.map((row) => (
                  <TableRow key={row.space}>
                    <TableCell className="font-medium text-[hsl(213,62%,18%)] dark:text-white">
                      {row.space}
                    </TableCell>
                    <TableCell className="text-sm text-[hsl(220,20%,30%)] dark:text-white/70">
                      {row.detail}
                    </TableCell>
                    <TableCell className="text-sm font-semibold text-[hsl(142,45%,30%)] dark:text-[hsl(142,55%,70%)]">
                      {row.rate}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {group.footnote && (
            <p className="border-t border-black/5 px-6 py-3 text-xs text-[hsl(220,20%,45%)] dark:border-white/10 dark:text-white/50">
              {group.footnote}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
