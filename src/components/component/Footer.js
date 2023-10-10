import React from "react";

const Footer = () => {
    return (
        <footer className="flex justify-evenly border-t-2 border-t-[#eeeeee] border-solid mt-10  pt-20 pb-10 xs:flex-col">
            <div className="xs:mt-6 ml-2">
                <h3 className="text-left text-black mb-4 font-bold xs:ml-4 ">ABOUT US  </h3>
                <ul className="font-normal text-left xs:ml-4">
                    <li className="mb-3">
                        Class aptent taciti sociosqu
                    </li>
                    <li className="mb-3">
                        conubia nostra, per inceptos
                    </li>
                    <li className="mb-3">
                        himenaeos. Aenean porta
                    </li>
                    <li className="mb-3">
                        est nec faucibus scelerisque
                    </li>
                </ul>
            </div>
            <div className="xs:mt-6">
                <h3 className="text-left text-black   mb-4 font-bold xs:ml-4">
                    RECENT COMMENTS
                </h3>
                <ul className="font-normal text-left xs:ml-4">
                    <li className="mb-3">
                        Ryan Ray on Denim Cardigan
                    </li>
                    <li className="mb-3">
                        Ryan Ray on Active Ribbed Hooded Top
                    </li>
                    <li className="mb-3">
                        Ryan Ray on Relaxed Velvet T-shirt
                    </li>
                </ul>
            </div>
            <div className="xs:mt-6">
                <h3 className="text-left text-black mb-4 font-bold xs:ml-4">
                    QUICK LINKS
                </h3>
                <ul className="font-normal text-left xs:ml-4">
                    <li className="mb-3">
                        Special Offers
                    </li>
                    <li className="mb-3">
                        Gift Cards
                    </li>
                    <li className="mb-3">
                        Student Discount
                    </li>
                    <li className="mb-3">
                        Subscriber Discount
                    </li>
                </ul>
            </div>
            <div className="xs:mt-6 mr-2">
                <h3 className="text-left text-black mb-4 font-bold xs:ml-4">
                    RECENT POSTS
                </h3>
                <ul className="font-normal text-left xs:ml-4">
                    <li className="mb-3">
                        Now and then
                    </li>
                    <li className="mb-3">
                        The city fashion shot
                    </li>
                    <li className="mb-3">
                        Smartphone and real life
                    </li>
                    <li className="mb-3">
                        Get a ride on the street
                    </li>
                </ul>
            </div>

        </footer>
        // <footer className="bg-black py-2">
        //     <div className="flex justify-center">
        //         <span class="text-sm text-white text-center">&copy; 2023 TrendPrime.
        //         </span>
        //     </div>
        // </footer>
    );
};

export default Footer;
