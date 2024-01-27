import React from 'react';

const Radio: React.FC<{ checked: boolean }> = ({ checked }) => {
    return checked ? (
        <div className="flex justify-center items-center w-[22px] aspect-square rounded-full border-2 border-primary2">
            <div className="w-[12px] aspect-square rounded-full bg-primary2" />
        </div>
    ) : (
        <div className="w-[22px] aspect-square rounded-full border-2 border-gray2" />
    );
};

export default Radio;
