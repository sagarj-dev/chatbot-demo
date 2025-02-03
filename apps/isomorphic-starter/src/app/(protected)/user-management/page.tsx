import Link from "next/link";
import { routes } from "@/config/routes";
import { Button } from "rizzui";
import InvoiceTable from "@/app/shared/invoice/invoice-list/table";
import { PiPlusBold } from "react-icons/pi";
import { metaObject } from "@/config/site.config";
import PageHeader from "@/app/shared/page-header";

export const metadata = {
  ...metaObject("Invoices")
};

const pageHeader = {
  title: "Invoice List",
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: "Home"
    },
    {
      href: routes.invoice.home,
      name: "Invoice"
    },
    {
      name: "List"
    }
  ]
};

export default function InvoiceListPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <Link href={routes.invoice.create} className="w-full @lg:w-auto">
            <Button as="span" className="w-full @lg:w-auto">
              <PiPlusBold className="me-1.5 h-[17px] w-[17px]" />
              Add User
            </Button>
          </Link>
        </div>
      </PageHeader>

      <InvoiceTable />
    </>
  );
}
