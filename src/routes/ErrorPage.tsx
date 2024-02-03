import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex-col">
      <h1 className="font-semibold text-black text-xl m-2">Oops!</h1>
      <p className="font-semibold text-black text-xl m-2">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="font-black text-red-500">{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  );
}