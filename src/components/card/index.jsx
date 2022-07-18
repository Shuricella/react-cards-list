import {Component} from "react";

export default class Card extends Component {
  constructor (props) {
    // ключевое слово super позволяет вывести props
    super(props);
    this.product = props.product;
    //  this.state = {};
  }

  render () {
    const {images, rating, price, title, category} = this.product;
    return (
      <div className="blok-rama">
                                                         
        <div className="blok-img">
          <img class="img-dimen" src={`${images [0]}`}></img>
        </div>

        <div className="blok-zv-cn">

          <div className="blok-zvezda">
            <div className="corect1">{rating}</div>
            <div className="corect1"><i class="bi bi-star"></i></div>
          </div>

          <div className="blok-cena">{price}</div>

        </div>

        <div className="blok-naz">
        <div className="corect3">{title}</div>
        </div>

        <div className="typ">
        <div className="corect4">{category}</div>
        </div>

        <div className="blok-add knop">
        <div className="corect5">Add To Cart</div>
        </div>

      </div>
    );
  }
}