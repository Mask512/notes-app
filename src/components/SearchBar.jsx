export default function SearchBar({ onSearch }) {
  return (
    <div className='bg-white p-4 rounded shadow-xl'>
    <h3 className='text-2xl font-bold text-gray-700 mb-4'>Cari Catatan</h3>
      <div className="flex items-center ">
        <div className="relative w-full">
          <input
            type="text"
            className="h-12 w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="contoh : Functional"
            onChange={e => onSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
