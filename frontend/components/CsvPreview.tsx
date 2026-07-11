"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {
  rows: any[];
};

export default function CsvPreview({ rows }: Props) {
  if (rows.length === 0) return null;

  const headers = Object.keys(rows[0]);

  return (
    <div className="mt-8 overflow-auto rounded-lg border">
      <h3 className="p-4 text-xl font-semibold">CSV Preview</h3>

      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.slice(0, 10).map((row, index) => (
            <TableRow key={index}>
              {headers.map((header) => (
                <TableCell key={header}>{String(row[header] ?? "")}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
