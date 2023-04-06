import Products from '../Products';

export default function Newarrivals() {
    return (
        <>
       <div className="flex justify-center my-8">
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-center"><h1 className='text-2xl tracking-widest '>New Arrivals</h1></div>
        
        <div className="flex justify-center p-8" >
            <div className="grid lg:grid-cols-4 gap-4 grid-cols-1 md:grid-cols-2">
            <Products />
            <Products />
            <Products />
            <Products />
            </div>
        </div>

        </div>
        <div className='grid justify-items-center'>
           <button className='bg-[#D2461C] 
           p-2 text-white tracking-normal px-8'> Show All</button> 
        </div>
            </div>
        </div>
        </>
    );
}
     
        
        