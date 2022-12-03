import PropTypes from "prop-types"
import './Product.css'

function Product({title, user = "Victor", status = false}){

    return <div className="product" onClick={function (e){ console.log(e.target)}}>
        <h1>{title} dice <span className={status ? 'bk-green': 'bk-red'} >{user}</span></h1>
    </div>
}

Product.propTypes = {
    user: PropTypes.string.isRequired
}

export default Product