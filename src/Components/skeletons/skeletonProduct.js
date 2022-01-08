import React from "react";
import Shimmer from "./shimmer";
import SkeletonElement from "./skeletonElement";

const SkeletonProduct = () => {
    return (
        <div>
            <div className="skeleton-products">
                <div className="container" style={{ backgroundColor: '#535353' }}>
                    <div className="row">
                        <div className="col-md-4">
                            <SkeletonElement type={'lgAvatar'} />
                        </div>
                        <div className="col-md-8">
                            <SkeletonElement type={'title'} />
                            <SkeletonElement type={'title'} />
                            <SkeletonElement type={'text'} />
                            <SkeletonElement type={'text'} />
                            <SkeletonElement type={'text'} />
                            <SkeletonElement type={'text'} />
                            <SkeletonElement type={'title'} />
                        </div>
                    </div>
                </div>
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonProduct;