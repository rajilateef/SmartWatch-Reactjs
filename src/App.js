import React, {Component} from 'react';
import classes from './App.module.css';
import './App.module.css';
import ProductData from "./ProductData";
import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./ProductDetails/ProductDetails";
import Topbar from './Topbar'

class App extends Component{
    state = {
        productData: ProductData,
        currentPreviewImagePos: 0,
        currentSelectedFeature: 0,
    }
    onColorOptionclick = (pos) => {
        // const updatePreviewImage = this.state.productData.colorOptions[pos].imageUrl;
        this.setState({currentPreviewImagePos: pos});
    }

    onFeatureItemClick = (pos) =>{
       this.setState({currentSelectedFeature: pos});
    }
    render(){
        return (
            <div className="App">
                <Topbar/>
                <div className={classes.MainContainer}>
                    <div className={classes.ProductPreview}>
                        <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
                         currentSelectedFeature={this.state.currentSelectedFeature}/>
                    </div>

                    <div className={classes.ProductData}>
                        <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionclick}
                         currentPreviewImagePos ={this.state.currentPreviewImagePos} onFeatureItemClick = {this.onFeatureItemClick}
                        currentSelectedFeature={this.state.currentSelectedFeature}/>
                    </div>

                </div>
            </div>
        );
    }

}

export default App