import React from 'react';

const User = ({ user }) => {
    const { avatar, first_name, last_name } = user;
    return (
        <div className='flex items-center space-x-4 p-3 bg-gray-100 justify-center rounded-md'>
            {/* user avatar */}
            <img src={avatar} className='border border-gray-400 w-1/2 rounded-sm' alt="user" />
            {/* first and last name */}
            <div className='flex flex-col justify-between w-1/2 h-full'>
                <div className='space-y-2'>
                    <div>
                        <p className='text-[12px] text-gray-400 underline'>First Name</p>
                        <h3 className='text-xl leading-4 font-bold'>{first_name}</h3>
                    </div>
                    <div>
                        <p className='text-[12px] text-gray-400 underline'>Last Name</p>
                        <h3 className='text-xl leading-4 font-bold'>{last_name}</h3>
                    </div>
                </div>
                {/* action buttons */}
                <div className='w-full flex justify-between'>
                    <button className='btn btn-outline btn-xs sm:btn-sm text-teal-700 w-2/5'>Edit</button>
                    <button className='btn btn-outline btn-xs sm:btn-sm text-red-500 w-2/5'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default User;
