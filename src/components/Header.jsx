export default function Header() {
  return (
    <>
      <div className="m-6 flex justify-between">
        <h1 className="text-white font-bold text-left text-3xl">
          PERSONAL NOTE APP
        </h1>
        <ul className="flex gap-6">
          <li className="text-white bg-green-700 px-2 p-1 rounded-md w-">
            Add Note
          </li>
          <li className="text-white bg-yellow-800 px-2 p-1 rounded-md w-">
            Home
          </li>
        </ul>
      </div>
    </>
  );
}
