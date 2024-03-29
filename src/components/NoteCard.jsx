import changeDateFormat from '../utils/dateFormatter';

export default function NoteCard({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  onActivate,
}) {
  return (
    <div className="group flex-1 relative min-w-72 cursor-pointer overflow-hidden bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-full lg:max-w-[352px] rounded-md sm:px-10">
      <span className="absolute -top-10 -left-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[100]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <div className="space-y-4 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <h4 className="text-2xl">{title}</h4>
          <p className="text-gray-400 italic group-hover:text-white">
            {changeDateFormat(createdAt)}
          </p>
          <p className="min-h-40 line-clamp-5 group-hover:line-clamp-none">{body}</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7 flex gap-4">
          <button
            type="button"
            className="border-2 px-4 rounded text-sky-500 transition-all duration-300 group-hover:text-white hover:bg-red-700 hover:border-red-700"
            onClick={() => onDelete(id)}
          >
            Hapus
          </button>
          <button
            type="button"
            className="border-2 px-4 rounded text-sky-500 transition-all duration-300 group-hover:text-white  hover:bg-green-700 hover:border-green-700"
            onClick={() => (archived ? onActivate(id) : onArchive(id))}
          >
            {archived ? 'Aktifkan' : 'Arsipkan'}
          </button>
        </div>
      </div>
    </div>
  );
}
