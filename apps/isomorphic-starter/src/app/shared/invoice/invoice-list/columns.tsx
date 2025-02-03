"use client";

import { routes } from "@/config/routes";
import AvatarCard from "@core/ui/avatar-card";
import DateCell from "@core/ui/date-cell";
import { createColumnHelper } from "@tanstack/react-table";
import { Checkbox, Text } from "rizzui";
import { getStatusBadge } from "@core/components/table-utils/get-status-badge";
import TableRowActionGroup from "@core/components/table-utils/table-row-action-group";
import { InvoiceTableDataType } from "./table";

const columnHelper = createColumnHelper<InvoiceTableDataType>();

export const invoiceListColumns = [
  columnHelper.display({
    id: "select",
    size: 50,
    header: ({ table }) => (
      <Checkbox
        className="ps-3"
        aria-label="Select All"
        checked={table.getIsAllPageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="ps-3"
        aria-label="Select Row"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    )
  }),
  columnHelper.accessor("name", {
    id: "name",
    size: 250,
    header: "Customer",
    enableSorting: false,
    cell: ({ row }) => (
      <AvatarCard
        src={row.original.avatar}
        name={row.original.name}
        description={row.original.email.toLowerCase()}
      />
    )
  }),
  columnHelper.accessor("role", {
    id: "role",
    size: 150,
    header: "role",
    enableSorting: false,
    cell: ({ row }) => getStatusBadge(row.original.role)
  }),
  columnHelper.accessor("createdAt", {
    id: "createdAt",
    size: 200,
    header: "Created",
    cell: ({ row }) => <DateCell date={new Date(row.original.createdAt)} />
  }),

  columnHelper.display({
    id: "permissions",
    size: 120,
    header: "Permissions",
    cell: ({
      row,
      table: {
        options: { meta }
      }
    }) => (
      <TableRowActionGroup
        editUrl={routes.invoice.edit(row.original.id)}
        viewUrl={routes.invoice.details(row.original.id)}
        onDelete={() => {
          // @ts-expect-error
          meta?.handleDeleteRow?.(row.original);
        }}
      />
    )
  }),
  columnHelper.display({
    id: "actions",
    size: 120,
    header: "Actions",
    cell: ({
      row,
      table: {
        options: { meta }
      }
    }) => (
      <TableRowActionGroup
        editUrl={routes.invoice.edit(row.original.id)}
        viewUrl={routes.invoice.details(row.original.id)}
        onDelete={() => {
          // @ts-expect-error
          meta?.handleDeleteRow?.(row.original);
        }}
      />
    )
  })
];
