export default function NoteItem({
  title,
  createdAt,
  content,
  onDelete,
  onDone,
  id,
  done,
}) {
  return (
    <>
      <div className="border-2 p-3 rounded-lg">
        <h1 className="font-bold h-1/4">{title}</h1>
        <hr className="border-2 my-2 rounded-xl" />
        <p className="text-sm opacity-50">
          {new Date(createdAt).toLocaleDateString()}
        </p>
        <p className="overflow-hidden truncate">{content}</p>
        <div className="flex mt-2">
          <button
            onClick={() => onDelete(id)}
            className="bg-red-500 hover:bg-red-600 mr-1 px-2 rounded-md w-1/2"
          >
            Delete
          </button>
          <button
            onClick={() => onDone(id)}
            className="bg-yellow-500 hover:bg-yellow-600 ml-1 px-2 rounded-md w-1/2"
          >
            {done ? "Uncomplete" : "Complete"}
          </button>
        </div>
      </div>
    </>
  );
}
