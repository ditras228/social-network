import s from './Paginator.module.css'
import React, {useState} from 'react'
import {FaArrowLeft, FaArrowRight} from 'react-icons/all'



const Paginator: React.FC<PropsType> = ({currentPage, onPageChanged, totalCount})=> {
    let pageSize = 10
    let portionSize = 5

    let pagesCount = Math.ceil(totalCount / pageSize)
    let portionCount = Math.ceil(pagesCount / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    let pages: Array<number> =[]
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pages}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}><FaArrowLeft/></button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                            return <div onClick={() => onPageChanged(p)}
                                        className={currentPage === p && s.selectedPage || s.page}>{p}</div>
                        }
                    )}
            {portionNumber < portionCount &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}><FaArrowRight/></button>
            }
        </div>
    )
}

export default Paginator

type PropsType = {
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber:number)=> void
}