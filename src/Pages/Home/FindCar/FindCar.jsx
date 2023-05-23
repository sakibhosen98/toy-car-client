
import {FaCarAlt, FaNewspaper} from 'react-icons/fa'
import { VscNotebook} from 'react-icons/vsc';
import {GiPriceTag} from 'react-icons/gi';
import {GrServices} from 'react-icons/gr';
import {AiFillSafetyCertificate} from 'react-icons/ai';

import { Link } from 'react-router-dom';

const FindCar = () => {
    return (
        <div className='my-10 px-20'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold my-5' >All the ways to find car chemistry</h1>
                <p>We are your one-stop shop for buying and selling your car. Get matched to your perfect car, or sell on swiftly</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2' >

                <div className="flex gap-5 p-10">
                    <div>
                        <FaCarAlt size={70} color='black' />
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold mb-3">Shop</h3>
                        <div>
                            Find cars for sale, local dealers, and advice. Also, our price-badging and price-drop notifications keep you informed of potential deals.
                        </div>
                        <div className='py-5 text-blue-600' ><Link className='text-blue font-bold' target='_blank' to="https://www.cars.com/shopping/" >Find cars for sale</Link></div>
                    </div>
                </div>

                <div className="flex gap-5 p-10">
                    <div>
                        <VscNotebook size={70} color='blue'/>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold mb-3v">Research</h3>
                        <div>
                        View side-by-side comparisons, payment calculators, video reviews, and consumer reviews. These let you hear the good and the bad from current car owners.
                        </div>
                        <div className='py-5  text-blue-600'  ><Link className='text-blue font-bold' target='_blank' to="https://www.cars.com/research/" >Compare what is out there</Link></div>
                    </div>
                </div>

                <div className="flex gap-5 p-10">
                    <div>
                        <FaNewspaper size={70} color='black'/>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold mb-3v">News</h3>
                        <div>
                        Our very own Cars.com experts offer unbiased coverage of today is automotive landscape. Yes, there will be dad jokes.
                        </div>
                        <div className='py-5  text-blue-600'  ><Link className='text-blue font-bold' target='_blank' to="https://www.cars.com/news/" >Learn from the best</Link></div>
                    </div>
                </div>
                
                <div className="flex gap-5 p-10">
                    <div>
                        <GiPriceTag size={70} color='blue'/>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold mb-3v">Sell</h3>
                        <div>
                        Check out our free, secure methods for selling your car. You can either sell directly to a private-party shopper or get an Instant Offer from a dealership. Choose the option that’s right for you!
                        </div>
                        <div className='py-5  text-blue-600'  ><Link className='text-blue font-bold' target='_blank' to="https://www.cars.com/sell/" >Sell your car</Link></div>
                    </div>
                </div>

                <div className="flex gap-5 p-10">
                    <div>
                        <GrServices size={70} color='blue'/>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold mb-3v">Service & Repair</h3>
                        <div>
                        Watch do-it-yourself tutorials or find local repair options.
                        </div>
                        <div className='py-5  text-blue-600'  ><Link className='text-blue font-bold' target='_blank' to="https://www.cars.com/auto-repair/" >Learn to DIY</Link></div>
                    </div>
                </div>

                <div className="flex gap-5 p-10">
                    <div>
                        <AiFillSafetyCertificate size={70} color='blue'/>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-bold mb-3v">Certified Pre-Owned</h3>
                        <div>
                        Learn why you should consider a Certified Pre-Owned car, and get info on manufacturer programs.

                        </div>
                        <div className='py-5  text-blue-600'  ><Link className='text-blue font-bold' target='_blank' to="https://www.cars.com/cpo/" >Explore CPO</Link></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FindCar;