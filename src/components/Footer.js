import React from 'react'

const Footer = () => {
    return (


        <footer class="bg-black shadow dark:bg-gray-800 text-white">
            <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-white">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-white">© 2023 TrendPrime. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 text-white">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;