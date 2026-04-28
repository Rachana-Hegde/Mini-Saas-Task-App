export default function TaskItem({ task, onDelete, onUpdate }) {
  return (
    <div className="flex justify-between border p-2 mb-2 rounded">
      <span>
        {task.title} - {task.status}
      </span>

      <div className="flex gap-2">
        <button
          className="bg-green-500 text-white px-2"
          onClick={() => onUpdate(task.id)}
        >
          Done
        </button>

        <button
          className="bg-red-500 text-white px-2"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}