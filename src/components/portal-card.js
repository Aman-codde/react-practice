import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PortalCard({icon,title,description}) {
    return(
        <div className="w-1/3 text-left">
            <FontAwesomeIcon icon={icon} className="text-5xl mb-10 p-4 text-indigo-500 bg-indigo-100 rounded-md"/>
            <p className="font-bold text-2xl pb-5">{title}</p>
            <p className="pb-3 font-bold text-gray-400">{description}</p>
        </div>
    )
}