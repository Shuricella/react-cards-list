import {Component} from "react";

// export default class Pagination extends Component{
//     constructor (props) {
//     // ключевое слово super позволяет вывести props
//      super(props);
//      this.state = {};
//     }

//     render () {
//         return(
//             <div>Hello, from Pagination</div>
//         );
//     }
// }



  // Сдесь логика создания одного кружочка PaginationItem
const PaginationItem = ({pageIndex, isActive}) => {
    return (
        <li>
            <a href="#" 
            className="krug non-styles ${isActive}">
            {pageIndex + 1}
            </a>
        </li>
    );
}

const Pagination = ({totalPages = 0}) => {
    return (
        <main>
            <div className="osnova">
                <nav className="ramka">

                    <a href="#" className="krug krug-left" data-element="nav-prev">
                    <i className="bi bi-chevron-left"></i>
                    </a>
          
                    <ul className="page-list non-styles" data-element="pagination">
                        {new Array(totalPages).fill(1).map( (_, index) => {
                            return <PaginationItem pageIndex={index} onClick={ () => {} } /> })
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


