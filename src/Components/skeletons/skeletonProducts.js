import React from "react";
import Shimmer from "./shimmer";
import SkeletonElement from "./skeletonElement";

const SkeletonProducts = () => {
    return (
        <div>
            <div className="skeleton-products">
                <SkeletonElement type={'avatar'} />
                <SkeletonElement type={'text'} />
                <SkeletonElement type={'text'} />
                <SkeletonElement type={'text'} />
                <SkeletonElement type={'text'} />
                <SkeletonElement type={'title'} />
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonProducts;