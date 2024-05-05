
import PropTypes from 'prop-types';
import Feature from './Feature';

const Option = ({option}) => {
    const {Name, Features, Price} = option;
    // console.log(option);
    return (
        <div className="border rounded-md flex flex-col p-3" data-aos="zoom-out-down"
        data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
            <h2 className="text-3xl font-bold text-center ">{Name}</h2>
            <h3 className="text-5xl text-center font-bold text-red-500">{Price} <br /></h3>
            <p className='text-4xl text-center'>Monthly</p>
            

            <div className='flex-grow m-3 mb-14'>
                {
                    Features.map((feature,idx)=><Feature key={idx}
                    feature={feature}
                   ></Feature>)
                }
            </div>
            <button className=' p-2 mb-3 bg-green-300 hover:bg-green-500 rounded-xl'>Buy now</button>
        </div>
    );
};

Option.propTypes ={
    option: PropTypes.object
 }
export default Option;

