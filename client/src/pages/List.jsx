// src/List.jsx

import React from "react";

const List = ({ submissions }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Submissions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Username
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Plant Name
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Role
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Product
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Quantity
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Number
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                Attachment
              </th>
              <th className="w-2/12 py-3 px-4 uppercase font-semibold text-sm">
                Details
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                From Date
              </th>
              <th className="w-1/12 py-3 px-4 uppercase font-semibold text-sm">
                To Date
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {submissions.map((submission, index) => (
              <tr key={index} className="bg-gray-100 border-b">
                <td className="py-3 px-4">{submission.username}</td>
                <td className="py-3 px-4">{submission.name}</td>
                <td className="py-3 px-4">{submission.plantName}</td>
                <td className="py-3 px-4">{submission.role}</td>
                <td className="py-3 px-4">{submission.product}</td>
                <td className="py-3 px-4">{submission.quantity}</td>
                <td className="py-3 px-4">{submission.number}</td>
                <td className="py-3 px-4">
                  {submission.attachment ? submission.attachment.name : ""}
                </td>
                <td className="py-3 px-4">{submission.details}</td>
                <td className="py-3 px-4">{submission.fromDate}</td>
                <td className="py-3 px-4">{submission.toDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
