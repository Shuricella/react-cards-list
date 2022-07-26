import {Component, useState} from "react";

  // Сдесь логика создания одного кружочка PaginationItem
  // Компонент Pagination не знает, что он будет делать (напр. перебирать странички)
const PaginationItem = ({pageIndex, isActive, onClick}) => {

    // проверяем условие для активной странички activeClass
    const activeClass = isActive ? 'active' : '';
    return (
        //сдесь onClick есть как имя и как зарезервированное в React
        <li onClick={onClick}>
            <a href="#" 
            className={`krug non-styles ${activeClass}`}>
            {pageIndex + 1}
            </a>
        </li>
    );
};

const Pagination = ({totalPages = 0, activePageIndex = 0}) => {
    //организуем сохранение состояния и присвоим начальное значеие равное activePageIndex
    //при классовом компоненте эта запись выглядит: this.state.activePageIndex=activePageIndex;
    //useState возврашает массив из которого необходимо забрать аргументы pageIndex, setPageIndex (это функция)
    const [pageIndex, setPageIndex] = useState(activePageIndex);
 
    /*этаже запись в классовом компоненте:
    class Component extends React.component {
        constructor () {
            super();
            this.state = {
                ctivePageIndex: this.props.activePageIndex
            }
        }
        setPageIndex (value) {
        this.setState (prevState => {
            return{...prevState, ...{activePageIndex: value}};
        });
    }
    }
    */

    const changePage = (newPageIndex) => {
        setPageIndex(newPageIndex);
        // console.log(newPageIndex);
    };

    return (
        <main>
            <div className="osnova">
                <nav className="ramka">

                    <a href="#" className="krug krug-left" data-element="nav-prev">
                    <i className="bi bi-chevron-left"></i>
                    </a>
          
                    <ul className="page-list non-styles" data-element="pagination">
                        {
                            new Array(totalPages).fill(1).map( (_, index) => {
                                return <PaginationItem
                                onClick={() => changePage(index)}
                                pageIndex={index}
                                isActive={pageIndex === index} />
                            })
                        }
                    </ul>
        
                    <a href="#" className="krug krug-right" data-element="nav-next">
                    <i className="bi bi-chevron-right"></i>
                    </a>
                    
                </nav>
            </div>
        </main>
    )
};

export default Pagination;


