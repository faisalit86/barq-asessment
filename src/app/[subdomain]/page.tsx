"use client";
import { sampleOrders } from "@/lib/data";
import { usePathname } from "next/navigation";
import React from "react";

export default function PlatformOrders() {
  const pathname = usePathname();

  const platform = pathname.split("/")[1];

  const platformOrders = sampleOrders[platform as keyof typeof sampleOrders];

  return (
    <div className="px-7 my-7">
      <h2 className="font-2xl font-bold uppercase mb-7">{platform}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-left">Amount ($)</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {platformOrders?.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No orders available
                </td>
              </tr>
            ) : (
              platformOrders.map((order: any) => (
                <tr key={order.orderId} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{order.orderId}</td>
                  <td className="px-4 py-2">{order.customerName}</td>
                  <td className="px-4 py-2">${order.amount}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded `}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
