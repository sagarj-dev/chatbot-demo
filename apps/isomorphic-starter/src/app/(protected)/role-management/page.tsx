import PageHeader from "@/app/shared/page-header";
import RolesGrid from "@/app/shared/roles-permissions/roles-grid";
import React from "react";

const pageHeader = {
  title: "Products",
  breadcrumb: [
    {
      href: "",
      name: "Home"
    },
    {
      name: "Role Management"
    }
  ]
};
const page = () => {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>
      <RolesGrid />
    </>
  );
};

export default page;
