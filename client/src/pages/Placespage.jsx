import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";

export default function Placespage() {
  const { action } = useParams();
  return (
    <>
      {action != "new" && (
        <div className="text-center">
          <Link
            to="/account/places/new"
            className="bg-primary inline-flex text-white px-4 py-2 mt-6 gap-2 drop-shadow-2xl  mx-auto rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">
              Title Must be small and Catchy{" "}
            </p>
            <input
              type="text"
              placeholder="title , for example: my Lovely Apt."
            />
            <p className="text-gray-500 text-sm">Address to this place </p>
            <h2 className="text-xl mt-4">Address</h2>
            <input type="text" placeholder="Address" />
            <h2 className="text-xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">
              The more the pics is better{" "}
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4">
              <button className="border bg-transparent p-8 text-2xl test-gray-600 rounded-2xl">
                +
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
