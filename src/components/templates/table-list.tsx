import { RowData, Table, flexRender } from "@tanstack/react-table";

type Props<T extends RowData> = {
  table: Table<T>;
};

export default function TableList<T extends RowData>({ table }: Props<T>) {
  return (
    <div className="w-[1248px] overflow-hidden rounded-3xl shadow-[0px_2px_4px_-2px_#0000000D] ring-1 ring-gray-200">
      <table className="w-full table-auto">
        <thead className="bg-primary-50 shadow-[0px_4px_6px_-1px_#0000001A]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="text-center font-['Arial'] text-sm font-bold leading-[53px] text-gray-500"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="divide-y-[1px] divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="text-center text-lg leading-[82px] tracking-[0.64px] lg:leading-[132px]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}
