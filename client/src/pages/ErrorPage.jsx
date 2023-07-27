import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="min-h-screen bg-dark flex flex-col gap-8 items-center justify-center p-8 text-center text-lg">
      <h1 className="text-6xl text-pink-light">{ error?.status } { error?.statusText }</h1>
      <h2 className="font-heading text-4xl uppercase">Uh oh!</h2>
    </main>
  )
}
