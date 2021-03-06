import React from "react";




function Tag(props){
    return(
        <button className="bg-purple-bright text-white active:bg-teal-600 font-bold text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            {/*<i className="fas fa-heart"></i>*/} {props.name}
        </button>
    )
}
export default Tag;