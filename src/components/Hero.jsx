import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.png'
const Hero = () => {
    
    return (
       
        <div>
              <div className="hero bg-base-200  mt-0 my-20 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg " />
                    <div className=''>
                        <h1 className="text-5xl  font-bold">Books to freshen up <br />your bookshelf</h1>
                     
                     
                       <div className='mt-16 btn bg-lime-500 text-white '>
                       <Link to={'/listed'}>View The List</Link>
                       </div>
                    </div>
                </div>
            </div>

            
        </div>


    );
};

export default Hero;