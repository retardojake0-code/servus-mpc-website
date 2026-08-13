import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface PlanRow {
  plan: string;
  amountPerUnit: string;
  totalMonths: string;
  totalContributions: string;
  payout: string;
  accent: "bronze" | "silver" | "gold";
}

const PLANS: PlanRow[] = [
  {
    plan: "Bronze",
    amountPerUnit: "₱300.00",
    totalMonths: "60",
    totalContributions: "₱18,000.00",
    payout: "₱20,134.76",
    accent: "bronze",
  },
  {
    plan: "Silver",
    amountPerUnit: "₱500.00",
    totalMonths: "60",
    totalContributions: "₱30,000.00",
    payout: "₱33,557.93",
    accent: "silver",
  },
  {
    plan: "Gold",
    amountPerUnit: "₱1,000.00",
    totalMonths: "60",
    totalContributions: "₱60,000.00",
    payout: "₱67,115.85",
    accent: "gold",
  },
];

const ACCENT_DOT: Record<PlanRow["accent"], string> = {
  bronze: "bg-[hsl(28,55%,45%)]",
  silver: "bg-[hsl(210,10%,60%)]",
  gold: "bg-[hsl(45,80%,45%)]",
};

export function SpecialSavingsPlanTable() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[hsl(213,62%,22%)] hover:bg-[hsl(213,62%,22%)]">
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Plan
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Amount per Unit
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Total Months
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Total Contributions at Term
              </TableHead>
              <TableHead className="text-xs font-semibold uppercase tracking-wider text-white">
                Pay-out at Term
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {PLANS.map((row, i) => (
              <TableRow
                key={row.plan}
                className={i % 2 === 0 ? "bg-white dark:bg-[hsl(213,45%,15%)]" : "bg-[hsl(142,45%,32%)]/[0.03]"}
              >
                <TableCell className="font-display font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                  <span className="flex items-center gap-2">
                    <span className={cn("h-2.5 w-2.5 rounded-full", ACCENT_DOT[row.accent])} />
                    {row.plan}
                  </span>
                </TableCell>
                <TableCell className="text-sm text-[hsl(220,20%,30%)] dark:text-white/70">{row.amountPerUnit}</TableCell>
                <TableCell className="text-sm text-[hsl(220,20%,30%)] dark:text-white/70">{row.totalMonths}</TableCell>
                <TableCell className="text-sm text-[hsl(220,20%,30%)] dark:text-white/70">{row.totalContributions}</TableCell>
                <TableCell className="text-sm font-semibold text-[hsl(142,45%,30%)]">{row.payout}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="border-t border-black/5 px-6 py-4 text-xs text-[hsl(220,20%,45%)] dark:border-white/10 dark:text-white/50">
        Figures shown are per unit over a 60-month term. Members may hold
        multiple units per plan; ask a membership officer to compute your
        projected pay-out.
      </p>
    </div>
  );
}
