import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface RateRow {
  type: string;
  minDeposit: string;
  rate: string;
  term: string;
}

interface RateGroup {
  type: string;
  rows: Omit<RateRow, "type">[];
}

const RATE_GROUPS: RateGroup[] = [
  {
    type: "Regular Savings",
    rows: [{ minDeposit: "₱100.00", rate: "3%", term: "n/a" }],
  },
  {
    type: "Youth Savings",
    rows: [{ minDeposit: "₱50.00", rate: "3%", term: "n/a" }],
  },
  {
    type: "Aflatoun Savings",
    rows: [{ minDeposit: "₱50.00", rate: "3%", term: "n/a" }],
  },
  {
    type: "Time Deposit",
    rows: [
      { minDeposit: "₱1,000 – 2,000", rate: "4%", term: "12 mos" },
      { minDeposit: "₱20,001 – 100,000", rate: "4.5%", term: "12 mos" },
      { minDeposit: "₱100,001 – 300,000", rate: "5%", term: "12 mos" },
      { minDeposit: "₱300,001 – 500,000", rate: "5.5%", term: "12 mos" },
      { minDeposit: "₱500,001 & above", rate: "6%", term: "12 mos" },
    ],
  },
  {
    type: "Land & Building Deposit",
    rows: [
      { minDeposit: "Below ₱100,000", rate: "6%", term: "5 yrs" },
      { minDeposit: "₱100,000 – 499,999.99", rate: "7%", term: "5 yrs" },
      { minDeposit: "₱500,000 – 999,999.99", rate: "8%", term: "5 yrs" },
      { minDeposit: "₱1,000,000 & above", rate: "9%", term: "5 yrs" },
    ],
  },
  {
    type: "Share Capital",
    rows: [{ minDeposit: "₱5,000", rate: "Based on net surplus", term: "none" }],
  },
];

export function DepositRatesTable() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[hsl(213,62%,22%)] hover:bg-[hsl(213,62%,22%)]">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Type of Savings
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Minimum Deposit
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Interest Rate p.a.
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Minimum Term
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {RATE_GROUPS.map((group, groupIndex) =>
              group.rows.map((row, rowIndex) => (
                <TableRow
                  key={`${group.type}-${rowIndex}`}
                  className={cn(
                    groupIndex % 2 === 0 ? "bg-white dark:bg-[hsl(213,45%,15%)]" : "bg-[hsl(142,45%,32%)]/[0.03]",
                    rowIndex === 0 && "border-t-2 border-t-[hsl(142,45%,32%)]/15"
                  )}
                >
                  {rowIndex === 0 ? (
                    <TableCell
                      rowSpan={group.rows.length}
                      className="align-top font-display font-semibold text-[hsl(213,62%,18%)] dark:text-white"
                    >
                      {group.type}
                    </TableCell>
                  ) : null}
                  <TableCell className="text-sm text-[hsl(220,20%,30%)] dark:text-white/70">{row.minDeposit}</TableCell>
                  <TableCell className="text-sm font-semibold text-[hsl(142,45%,30%)]">{row.rate}</TableCell>
                  <TableCell className="text-sm text-[hsl(220,20%,30%)] dark:text-white/70">{row.term}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <p className="border-t border-black/5 px-6 py-4 text-xs text-[hsl(220,20%,45%)] dark:border-white/10 dark:text-white/50">
        Rates are per annum (p.a.) and subject to periodic review by the board of
        directors. Ask a membership officer for the latest published rates.
      </p>
    </div>
  );
}
