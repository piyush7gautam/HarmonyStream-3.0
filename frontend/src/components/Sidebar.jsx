export default function Sidebar({title}){
  return(
    <div className="w-64 bg-zinc-900 h-screen p-5">
      <h1 className="text-green-500 text-2xl font-bold mb-6">{title}</h1>
      <p className="hover:text-green-500 cursor-pointer">Dashboard</p>
      <p className="hover:text-green-500 cursor-pointer mt-3">Library</p>
    </div>
  );
}