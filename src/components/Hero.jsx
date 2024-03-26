import banner from '../assets/images/banner.png'
const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg " />
                    <div className='pr-24'>
                        <h1 className="text-5xl  font-bold">Books to freshen up <br />your bookshelf</h1>
                     
                        <button className="btn bg-lime-500 text-white mt-6">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;