
import { useNavigate } from "react-router-dom";
import "../recipe/Recipe.css"

export default function Recipe(props){
    let recipe = props.recipe.recipe;
    console.log(recipe)

    const navigate = useNavigate();
    const goToHomepage = () => {
        navigate("/");
    }

    return(
        <div>
            <div className="row navigation">
                <div onClick={() => goToHomepage()} className="col left-arrow pointer"><h1>{String.fromCodePoint(8249)}</h1></div>
                <div className="col heart-float"><h1> <i className="fa fa-heart-o pointe"></i></h1></div>
            </div>
            <div>
                <h1 className="headingOnRecipe">{recipe.label}</h1>
                <p className="recipeType">{recipe.mealType}</p>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className="row">
                        <h2>Nutritions</h2>
                        <div className="oval">
                            <div className="little-circle mx-n1">{Math.floor(recipe.calories)}</div>
                            <div className="col"> <b>Calories</b> <br/> <span className="light">Kcal</span></div>
                        </div>

                        <div className="oval">
                            <div className="little-circle mx-n1">{Math.floor(recipe.totalNutrients.CHOCDF.quantity)}</div>
                            <div className="col"> <b>Carbs</b> <br/> <span className="light">Grams</span></div>
                        </div>

                        <div className="oval">
                            <div className="little-circle mx-n1">{Math.floor(recipe.totalNutrients.PROCNT.quantity)}</div>
                            <div className="col"> <b>Protien</b> <br/> <span className="light">Grams</span></div>
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <img className="food-img-recipe" src={recipe.images.REGULAR.url} alt="Food Image"></img>

                </div>

            </div>
            <div className="ingredients">
                <h2>Ingredients</h2>
                {recipe.ingredientLines.map((item, key) => {
                    return(
                        <div key={key}>
                            <p className="">{item}</p>
                        </div>
                    )
                })}
            </div>
            <div className="recipePreparation">
                <h2>
                    Recipe Preparation
                </h2>
                <a href={recipe.url}>Link to Prep</a>
                hello
            </div>
        </div>
    )
}