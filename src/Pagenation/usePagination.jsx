import React, { useMemo } from "react";

export const DOTS = '...';

function range(start, end) {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
}

export function usePagenation({totalCount, pageSize, siblingCount = 1, currentPage}){
    // jab valuie in dependecly change hoti hai tab useMemo callback run hota hai
const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize); // this ceil method ensure that we reseave extra page for remaining data itd define next higher value
    const totalPageNumbers  =  siblingCount + 5;

    // case 1: if number of page is less than jitna page dikhana chahte hai
    if(totalPageNumbers >= totalPageCount){
        return range(1, totalCount);
    }

    // 
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowrightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalCount;

    // case 2: no left dots but right dots..
    if(!shouldShowLeftDots && shouldShowrightDots){
        let leftItemCount = 3 + 2 * siblingCount;
        let leftRange = range(1, leftItemCount);

        return [...leftRange, DOTS, totalPageCount];
    }

    // case 3: no right dots but left dots...
    if(shouldShowLeftDots && !shouldShowrightDots){
        let rightItemCount = 3 + 2 * !siblingCount;
        let rightRange = range(
            totalPageCount - rightItemCount + 1,
            totalPageCount
        );
        return [firstPageIndex, DOTS, ...rightRange]
    }

    // case 4: Both left and right dots to
    if(shouldShowLeftDots && shouldShowLeftDots){
        let middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }


}, [totalCount, pageSize, siblingCount, currentPage]);
return paginationRange;
};