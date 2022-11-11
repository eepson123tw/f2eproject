import { useRouteError } from 'react-router-dom';
import React from 'react';
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex h-[100%] items-center justify-center bg-black">
      <div
        id="error-page"
        className="flex h-[60vh]  w-[60vh] flex-col justify-evenly rounded bg-white/30 p-5 text-center shadow-lg shadow-yellow-500 backdrop-invert backdrop-opacity-75"
      >
        <h1 className=" text-[5rem]">Oops!</h1>
        <p className=" text-2xl font-bold">Sorry, an unexpected error has occurred.</p>
        <p className="  font-extrabold text-red-400">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
