"use client";

import { useMemo, useState } from "react";

import { Search, Copy, Mail, Building2, User } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type Props = {
  data: any;
};

export default function ImportResults({ data }: Props) {
  const [search, setSearch] = useState("");

  if (!data) return null;

  if (!data.result || data.result.length === 0) {
    return null;
  }

  const rows = data.result;
  const filtered = useMemo(() => {
    return rows.filter((row: any) => {
      return Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    });
  }, [rows, search]);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);

    toast.success("Email copied.");
  };
  return (
    <Card className="mt-12 rounded-3xl border-0 shadow-2xl">
      <CardContent className="p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black">AI Import Results</h2>

            <p className="mt-2 text-slate-500">
              Review AI generated CRM records before final import.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search
              className="absolute left-4 top-3 text-slate-400"
              size={18}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email..."
              className="w-full rounded-xl border bg-slate-50 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
          <div className="max-h-[650px] overflow-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-slate-100 z-10">
                <tr className="text-left">
                  <th className="p-4">Lead</th>

                  <th className="p-4">Company</th>

                  <th className="p-4">Status</th>

                  <th className="p-4">Phone</th>

                  <th className="p-4">City</th>

                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((lead: any, index: number) => (
                  <tr
                    key={index}
                    className="border-t transition hover:bg-slate-50"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                          <User size={20} className="text-blue-600" />
                        </div>

                        <div>
                          <p className="font-semibold">{lead.name || "-"}</p>

                          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                            <Mail size={14} />

                            {lead.email || "-"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-slate-400" />

                        {lead.company || "-"}
                      </div>
                    </td>

                    <td className="p-4">
                      <Badge className="rounded-full bg-green-100 px-4 py-1 text-green-700 hover:bg-green-100">
                        {lead.crm_status || "GOOD_LEAD"}
                      </Badge>
                    </td>

                    <td className="p-4">
                      {lead.mobile_without_country_code || "-"}
                    </td>

                    <td className="p-4">{lead.city || "-"}</td>

                    <td className="p-4">
                      <button
                        onClick={() => copyEmail(lead.email)}
                        className="rounded-xl bg-slate-100 p-3 transition hover:bg-blue-600 hover:text-white"
                      >
                        <Copy size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
