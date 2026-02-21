import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

function DashboardLayout() {
  const navigate = useNavigate();

  const items = [{
      title: "Bus",
      links: [
        { name: "Add Bus", slug: "add-bus" },
        { name: "View Bus", slug: "view-bus" },
        { name: "Edit Bus", slug: "edit-bus" },
        { name: "Delete Bus", slug: "delete-bus" },
      ],}
    // },
    // {
    //   title: "Route",
    //   links: [
    //     { name: "Add Route", slug: "/route/add" },
    //     { name: "View Route", slug: "/route/view" },
    //     { name: "Edit Route", slug: "/route/edit" },
    //     { name: "Delete Route", slug: "/route/delete" },
    //   ],
    // },
    // {
    //   title: "Trip",
    //   links: [
    //     { name: "Add Trip", slug: "/trip/add" },
    //     { name: "View Trip", slug: "/trip/view" },
    //     { name: "Edit Trip", slug: "/trip/edit" },
    //     { name: "Delete Trip", slug: "/trip/delete" },
    //   ],
    // },
  ];

  return (
    <div className="w-full h-screen flex">
      
      {/* LEFT SIDEBAR */}
      <div className="w-64 bg-gray-100 p-4">
        {items.map((section) => (
          <div key={section.title} className="mb-4">

            <h2 className="font-bold mb-2">{section.title}</h2>

            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.slug}>
                  <button
                    onClick={() => navigate(link.slug)}
                    className="w-full text-left px-4 py-2 hover:bg-blue-100 rounded"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="flex-1 p-6 bg-white">
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;