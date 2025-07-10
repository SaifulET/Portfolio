import { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  url: string;
  tech: string;
  fullDes: string;
};

export default function ServiceCard({ icon, title, description, url,tech ,fullDes}: ServiceCardProps) {
  const techs = tech.split(" ");
  return (
    <div className='w-100  border border-black   border-4 bg-card overflow-hidden rounded-2xl shadow-[0_0_20px_10px_#0E2D33]'>
      <div className="relative group w-100 h-60  overflow-hidden shadow-lg ">
      {/* Scrollable preview container */}
      <div className="absolute inset-0 overflow-hidden group-hover:opacity-0 transition-opacity duration-300">
        <div className="h-[200%] animate-scroll-preview origin-top-left scale-[0.5]">
          <iframe
            src={url}
            title={title}
            className="w-[200%] h-[200%] pointer-events-none border-none"
          />
        </div>
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100  transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
        <div className="text-primary text-4xl mb-3">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-muted text-sm mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white hover:text-black px-4 py-2 rounded hover:bg-orange-200 transition"
        >
          View Project
        </a>
      </div>
    </div>
    <div className='pl-10 pb-10 pt-5  pr-4 overflow-hidden text-left'>
    <h1 className='font-bold text-gray-100 text-xl pb-4' >{title}</h1>
    <h5 className='font-semibold text-gray-400 h-30'>{fullDes}</h5>
    <div className='grid grid-cols-12 gap-2 mt-5 '>
      {techs.map((Technology,i)=>{
        return(
          <div key={i} className='col-span-4 mr-2  '>
            <button className='bg-gray-800 font-semibold text-blue-500 p-2 rounded-lg '>{Technology}</button>
          </div>
        )
      })}
    </div>
    </div>
    

    </div>
  );
}
