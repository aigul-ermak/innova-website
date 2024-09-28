import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative isolate flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        AI Powered app
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                        Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                </div>
            </div>
        </div>
    );

};

export default Home;
