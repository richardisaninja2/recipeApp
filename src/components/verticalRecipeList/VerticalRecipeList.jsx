
import { useNavigate } from "react-router-dom";
import "../verticalRecipeList/VerticalRecipeList.css"
import { useState } from "react";
export default function VerticalRecipeList(props){
    const navigate = useNavigate();
    const recipe = props.item.recipe; 
    console.log(recipe)
    

    const goToRecipe = (location) => {
        navigate(`/${location}`)
}


    return(
        <div className="">
            <div className="long-item ">
                <div className=" col-3">
                    <img className="small-thumbnail" src={recipe.images.THUMBNAIL.url} alt={`image of ${recipe.label}`}/>
                    <h2></h2>
                </div>
                <div className="col-3">
                    <span className="col"><i className="fa fa-clock-o"></i> &nbsp;</span>
                    <span className="col">{`${recipe.totalTime} min`}</span>
                </div>
                <div className="col-2">
                    <span className="col"><i className='fa fa-fire'></i>{recipe.yield} serv</span>
                    {/* <span className="col">Servings</span> */}
                </div>
                <div className="col-3">
                    <span className="col"><i className="fa fa-fire"></i> </span>
                    <span className="col">{`${Math.floor(recipe.totalNutrients.ENERC_KCAL.quantity)} kcal`}</span>
                </div>
                <div className="col-1">
                    <span className="col"><i  className='fa fa-angle-right right-arrow pointer'></i> </span>
                    <span className="col"></span>
                </div>

            </div>
        </div>
    )
}