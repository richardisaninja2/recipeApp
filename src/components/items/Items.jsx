
import { Route, useNavigate } from "react-router-dom";
import "../items/Items.css";
import {React, useState} from "react";
import VerticalRecipeList from "../verticalRecipeList/VerticalRecipeList";
export default function Items(props){

    const navigate = useNavigate();
    const [like, setLike] = useState(false)
    const recipes = 
    {
        "from": 1,
        "to": 20,
        "count": 5826,
        "_links": {
            "next": {
                "href": "https://api.edamam.com/api/recipes/v2?q=wings&app_key=33c42f0c1a65ccd7be6878de773ec448&_cont=CHcVQBtNNQphDmgVQntAEX4BYUt3BAoPQ2BCAmQTZlRzBgAAUXlSAjFHZQAnUgUEETNBB2ARZAR6BFBRFmJDAWtGNQEnVgcVLnlSVSBMPkd5BgNK&type=public&app_id=a1cfd682",
                "title": "Next page"
            }
        },
        "hits": [
            {
                
                
                "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b9b9ec7321893c7c91a4899a0c186953",
                "label": "Molded Tomato Salads",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71f9a86c9bfa430e6b3d7aea040627aacc7ef3e8e582294f4813cc5b4be5ef10",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5125f9daaa0bb50d0a52bd90d63c4e92107d782779e0dcdc69b97656f51858ec",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1393da82d94aa72d1ac6a97521ea176075d52b3d656e319edbb82ce94901bd44",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71f9a86c9bfa430e6b3d7aea040627aacc7ef3e8e582294f4813cc5b4be5ef10",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/1150331/molded-tomato-salads",
                "shareAs": "http://www.edamam.com/recipe/molded-tomato-salads-b9b9ec7321893c7c91a4899a0c186953/salads",
                "yield": 8.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegan",
                    "Vegetarian",
                    "Pescatarian",
                    "Paleo",
                    "Mediterranean",
                    "DASH",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "4 pounds ripe tomatoes",
                    "Salt and freshly ground pepper",
                    "1/4 cup extra-virgin olive oil, plus more for molding salads",
                    "1 medium clove garlic, minced",
                    "1 large shallot, peeled and finely chopped",
                    "2 1/2 tablespoons fresh marjoram leaves, roughly chopped",
                    "8 shiso or nasturtium leaves, for garnish"
                ],
                "ingredients": [
                    {
                        "text": "4 pounds ripe tomatoes",
                        "quantity": 4.0,
                        "measure": "pound",
                        "food": "tomatoes",
                        "weight": 1814.36948,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 11.73461688,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 5.86730844,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1/4 cup extra-virgin olive oil, plus more for molding salads",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "extra-virgin olive oil",
                        "weight": 54.0,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1 medium clove garlic, minced",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 large shallot, peeled and finely chopped",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "shallot",
                        "weight": 80.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                        "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                    },
                    {
                        "text": "2 1/2 tablespoons fresh marjoram leaves, roughly chopped",
                        "quantity": 2.5,
                        "measure": "tablespoon",
                        "food": "marjoram",
                        "weight": 4.25,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bqc1f9kb84j9zcboenn1wb0c6t1a",
                        "image": "https://www.edamam.com/food-img/47f/47f75ecad128851ba407efd51c73eb47.jpg"
                    },
                    {
                        "text": "8 shiso or nasturtium leaves, for garnish",
                        "quantity": 1.0,
                        "measure": "leaf",
                        "food": "shiso",
                        "weight": 0.15,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ao023nobmcrunkam7kepwb43d7qk",
                        "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
                    }
                ],
                "calories": 892.3269505844002,
                "totalCO2Emissions": 4190.271925692741,
                "co2EmissionsClass": "D",
                "totalWeight": 1973.1196432933339,
                "totalTime": 0.0,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "salad"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 892.3269505844002,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 58.215308215144,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 8.080618041716003,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 40.0773314481716,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 7.460743406631201,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 91.35516517360001,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 63.75235237828001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 27.602812795320002,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 54.255293098016004,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 19.312136501760005,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4561.747118781452,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 330.6285095540001,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 242.0780687809334,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4724.066498240267,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.352406666540002,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.6751669412893344,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 510.40402253519994,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 781.0513548788001,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 258.10906876,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7440529007152001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.3882838563920001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 11.201764027416003,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.8325814515604002,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 312.2453644348,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 312.2453644348,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 17.740840199776002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 212.59157476160001,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1781.3866378647067,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 44.61634752922001,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 89.56201263868307,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 40.40309020858001,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 30.45172172453334,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 110.41125118128001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 38.62427300352001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 190.07279661589382,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 33.06285095540001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 57.63763542403176,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 100.51205315404823,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 57.51337036966668,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 33.41060855717577,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 72.91486036217141,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 86.78348387542223,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 286.7878541777778,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 62.00440839293335,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 29.867988953230775,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 70.01102517135001,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 140.96780396618465,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 78.0613411087,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 118.27226799850669,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 177.15964563466667,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 58.215308215144,
                        "hasRDI": true,
                        "daily": 89.56201263868307,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 8.080618041716003,
                                "hasRDI": true,
                                "daily": 40.40309020858001,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 40.0773314481716,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 7.460743406631201,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 91.35516517360001,
                        "hasRDI": true,
                        "daily": 30.45172172453334,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 63.75235237828001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 27.602812795320002,
                                "hasRDI": true,
                                "daily": 110.41125118128001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 54.255293098016004,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 19.312136501760005,
                        "hasRDI": true,
                        "daily": 38.62427300352001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4561.747118781452,
                        "hasRDI": true,
                        "daily": 190.07279661589382,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 330.6285095540001,
                        "hasRDI": true,
                        "daily": 33.06285095540001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 242.0780687809334,
                        "hasRDI": true,
                        "daily": 57.63763542403176,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4724.066498240267,
                        "hasRDI": true,
                        "daily": 100.51205315404823,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.352406666540002,
                        "hasRDI": true,
                        "daily": 57.51337036966668,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.6751669412893344,
                        "hasRDI": true,
                        "daily": 33.41060855717577,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 510.40402253519994,
                        "hasRDI": true,
                        "daily": 72.91486036217141,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 781.0513548788001,
                        "hasRDI": true,
                        "daily": 86.78348387542223,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 258.10906876,
                        "hasRDI": true,
                        "daily": 286.7878541777778,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7440529007152001,
                        "hasRDI": true,
                        "daily": 62.00440839293335,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.3882838563920001,
                        "hasRDI": true,
                        "daily": 29.867988953230775,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 11.201764027416003,
                        "hasRDI": true,
                        "daily": 70.01102517135001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.8325814515604002,
                        "hasRDI": true,
                        "daily": 140.96780396618465,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 312.2453644348,
                        "hasRDI": true,
                        "daily": 78.0613411087,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 312.2453644348,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 17.740840199776002,
                        "hasRDI": true,
                        "daily": 118.27226799850669,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 212.59157476160001,
                        "hasRDI": true,
                        "daily": 177.15964563466667,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1781.3866378647067,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/b9b9ec7321893c7c91a4899a0c186953?type=public&app_id=a1cfd682&app_key=33c42f0c1a65ccd7be6878de773ec448",
                    "title": "Self"
                }
            }
        },
            {
                
                
                "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b9b9ec7321893c7c91a4899a0c186953",
                "label": "Molded Tomato Salads",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71f9a86c9bfa430e6b3d7aea040627aacc7ef3e8e582294f4813cc5b4be5ef10",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5125f9daaa0bb50d0a52bd90d63c4e92107d782779e0dcdc69b97656f51858ec",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1393da82d94aa72d1ac6a97521ea176075d52b3d656e319edbb82ce94901bd44",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71f9a86c9bfa430e6b3d7aea040627aacc7ef3e8e582294f4813cc5b4be5ef10",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/1150331/molded-tomato-salads",
                "shareAs": "http://www.edamam.com/recipe/molded-tomato-salads-b9b9ec7321893c7c91a4899a0c186953/salads",
                "yield": 8.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegan",
                    "Vegetarian",
                    "Pescatarian",
                    "Paleo",
                    "Mediterranean",
                    "DASH",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "4 pounds ripe tomatoes",
                    "Salt and freshly ground pepper",
                    "1/4 cup extra-virgin olive oil, plus more for molding salads",
                    "1 medium clove garlic, minced",
                    "1 large shallot, peeled and finely chopped",
                    "2 1/2 tablespoons fresh marjoram leaves, roughly chopped",
                    "8 shiso or nasturtium leaves, for garnish"
                ],
                "ingredients": [
                    {
                        "text": "4 pounds ripe tomatoes",
                        "quantity": 4.0,
                        "measure": "pound",
                        "food": "tomatoes",
                        "weight": 1814.36948,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 11.73461688,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 5.86730844,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1/4 cup extra-virgin olive oil, plus more for molding salads",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "extra-virgin olive oil",
                        "weight": 54.0,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1 medium clove garlic, minced",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 large shallot, peeled and finely chopped",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "shallot",
                        "weight": 80.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                        "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                    },
                    {
                        "text": "2 1/2 tablespoons fresh marjoram leaves, roughly chopped",
                        "quantity": 2.5,
                        "measure": "tablespoon",
                        "food": "marjoram",
                        "weight": 4.25,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bqc1f9kb84j9zcboenn1wb0c6t1a",
                        "image": "https://www.edamam.com/food-img/47f/47f75ecad128851ba407efd51c73eb47.jpg"
                    },
                    {
                        "text": "8 shiso or nasturtium leaves, for garnish",
                        "quantity": 1.0,
                        "measure": "leaf",
                        "food": "shiso",
                        "weight": 0.15,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ao023nobmcrunkam7kepwb43d7qk",
                        "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
                    }
                ],
                "calories": 892.3269505844002,
                "totalCO2Emissions": 4190.271925692741,
                "co2EmissionsClass": "D",
                "totalWeight": 1973.1196432933339,
                "totalTime": 0.0,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "salad"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 892.3269505844002,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 58.215308215144,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 8.080618041716003,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 40.0773314481716,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 7.460743406631201,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 91.35516517360001,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 63.75235237828001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 27.602812795320002,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 54.255293098016004,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 19.312136501760005,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4561.747118781452,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 330.6285095540001,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 242.0780687809334,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4724.066498240267,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.352406666540002,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.6751669412893344,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 510.40402253519994,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 781.0513548788001,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 258.10906876,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7440529007152001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.3882838563920001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 11.201764027416003,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.8325814515604002,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 312.2453644348,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 312.2453644348,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 17.740840199776002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 212.59157476160001,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1781.3866378647067,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 44.61634752922001,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 89.56201263868307,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 40.40309020858001,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 30.45172172453334,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 110.41125118128001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 38.62427300352001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 190.07279661589382,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 33.06285095540001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 57.63763542403176,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 100.51205315404823,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 57.51337036966668,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 33.41060855717577,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 72.91486036217141,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 86.78348387542223,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 286.7878541777778,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 62.00440839293335,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 29.867988953230775,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 70.01102517135001,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 140.96780396618465,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 78.0613411087,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 118.27226799850669,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 177.15964563466667,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 58.215308215144,
                        "hasRDI": true,
                        "daily": 89.56201263868307,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 8.080618041716003,
                                "hasRDI": true,
                                "daily": 40.40309020858001,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 40.0773314481716,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 7.460743406631201,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 91.35516517360001,
                        "hasRDI": true,
                        "daily": 30.45172172453334,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 63.75235237828001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 27.602812795320002,
                                "hasRDI": true,
                                "daily": 110.41125118128001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 54.255293098016004,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 19.312136501760005,
                        "hasRDI": true,
                        "daily": 38.62427300352001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4561.747118781452,
                        "hasRDI": true,
                        "daily": 190.07279661589382,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 330.6285095540001,
                        "hasRDI": true,
                        "daily": 33.06285095540001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 242.0780687809334,
                        "hasRDI": true,
                        "daily": 57.63763542403176,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4724.066498240267,
                        "hasRDI": true,
                        "daily": 100.51205315404823,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.352406666540002,
                        "hasRDI": true,
                        "daily": 57.51337036966668,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.6751669412893344,
                        "hasRDI": true,
                        "daily": 33.41060855717577,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 510.40402253519994,
                        "hasRDI": true,
                        "daily": 72.91486036217141,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 781.0513548788001,
                        "hasRDI": true,
                        "daily": 86.78348387542223,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 258.10906876,
                        "hasRDI": true,
                        "daily": 286.7878541777778,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7440529007152001,
                        "hasRDI": true,
                        "daily": 62.00440839293335,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.3882838563920001,
                        "hasRDI": true,
                        "daily": 29.867988953230775,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 11.201764027416003,
                        "hasRDI": true,
                        "daily": 70.01102517135001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.8325814515604002,
                        "hasRDI": true,
                        "daily": 140.96780396618465,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 312.2453644348,
                        "hasRDI": true,
                        "daily": 78.0613411087,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 312.2453644348,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 17.740840199776002,
                        "hasRDI": true,
                        "daily": 118.27226799850669,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 212.59157476160001,
                        "hasRDI": true,
                        "daily": 177.15964563466667,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1781.3866378647067,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/b9b9ec7321893c7c91a4899a0c186953?type=public&app_id=a1cfd682&app_key=33c42f0c1a65ccd7be6878de773ec448",
                    "title": "Self"
                }
            }
        },
        {
                
                
            "recipe": {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b9b9ec7321893c7c91a4899a0c186953",
            "label": "Molded Tomato Salads",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71f9a86c9bfa430e6b3d7aea040627aacc7ef3e8e582294f4813cc5b4be5ef10",
            "images": {
                "THUMBNAIL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5125f9daaa0bb50d0a52bd90d63c4e92107d782779e0dcdc69b97656f51858ec",
                    "width": 100,
                    "height": 100
                },
                "SMALL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1393da82d94aa72d1ac6a97521ea176075d52b3d656e319edbb82ce94901bd44",
                    "width": 200,
                    "height": 200
                },
                "REGULAR": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71f9a86c9bfa430e6b3d7aea040627aacc7ef3e8e582294f4813cc5b4be5ef10",
                    "width": 300,
                    "height": 300
                }
            },
            "source": "Martha Stewart",
            "url": "https://www.marthastewart.com/1150331/molded-tomato-salads",
            "shareAs": "http://www.edamam.com/recipe/molded-tomato-salads-b9b9ec7321893c7c91a4899a0c186953/salads",
            "yield": 8.0,
            "dietLabels": [],
            "healthLabels": [
                "Vegan",
                "Vegetarian",
                "Pescatarian",
                "Paleo",
                "Mediterranean",
                "DASH",
                "Dairy-Free",
                "Gluten-Free",
                "Wheat-Free",
                "Egg-Free",
                "Peanut-Free",
                "Tree-Nut-Free",
                "Soy-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Red-Meat-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Sesame-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free",
                "Sulfite-Free",
                "Kosher",
                "Immuno-Supportive"
            ],
            "cautions": [],
            "ingredientLines": [
                "4 pounds ripe tomatoes",
                "Salt and freshly ground pepper",
                "1/4 cup extra-virgin olive oil, plus more for molding salads",
                "1 medium clove garlic, minced",
                "1 large shallot, peeled and finely chopped",
                "2 1/2 tablespoons fresh marjoram leaves, roughly chopped",
                "8 shiso or nasturtium leaves, for garnish"
            ],
            "ingredients": [
                {
                    "text": "4 pounds ripe tomatoes",
                    "quantity": 4.0,
                    "measure": "pound",
                    "food": "tomatoes",
                    "weight": 1814.36948,
                    "foodCategory": "vegetables",
                    "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                    "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                },
                {
                    "text": "Salt and freshly ground pepper",
                    "quantity": 0.0,
                    "measure": null,
                    "food": "Salt",
                    "weight": 11.73461688,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "Salt and freshly ground pepper",
                    "quantity": 0.0,
                    "measure": null,
                    "food": "pepper",
                    "weight": 5.86730844,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "1/4 cup extra-virgin olive oil, plus more for molding salads",
                    "quantity": 0.25,
                    "measure": "cup",
                    "food": "extra-virgin olive oil",
                    "weight": 54.0,
                    "foodCategory": "Oils",
                    "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                    "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                },
                {
                    "text": "1 medium clove garlic, minced",
                    "quantity": 1.0,
                    "measure": "clove",
                    "food": "garlic",
                    "weight": 3.0,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "1 large shallot, peeled and finely chopped",
                    "quantity": 1.0,
                    "measure": "<unit>",
                    "food": "shallot",
                    "weight": 80.0,
                    "foodCategory": "vegetables",
                    "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                    "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                },
                {
                    "text": "2 1/2 tablespoons fresh marjoram leaves, roughly chopped",
                    "quantity": 2.5,
                    "measure": "tablespoon",
                    "food": "marjoram",
                    "weight": 4.25,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_bqc1f9kb84j9zcboenn1wb0c6t1a",
                    "image": "https://www.edamam.com/food-img/47f/47f75ecad128851ba407efd51c73eb47.jpg"
                },
                {
                    "text": "8 shiso or nasturtium leaves, for garnish",
                    "quantity": 1.0,
                    "measure": "leaf",
                    "food": "shiso",
                    "weight": 0.15,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_ao023nobmcrunkam7kepwb43d7qk",
                    "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
                }
            ],
            "calories": 892.3269505844002,
            "totalCO2Emissions": 4190.271925692741,
            "co2EmissionsClass": "D",
            "totalWeight": 1973.1196432933339,
            "totalTime": 0.0,
            "cuisineType": [
                "mediterranean"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "salad"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 892.3269505844002,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 58.215308215144,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 8.080618041716003,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 0.0,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 40.0773314481716,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 7.460743406631201,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 91.35516517360001,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 63.75235237828001,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 27.602812795320002,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 54.255293098016004,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 19.312136501760005,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 0.0,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 4561.747118781452,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 330.6285095540001,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 242.0780687809334,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 4724.066498240267,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 10.352406666540002,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 3.6751669412893344,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 510.40402253519994,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 781.0513548788001,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 258.10906876,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.7440529007152001,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 0.3882838563920001,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 11.201764027416003,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 1.8325814515604002,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 312.2453644348,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 312.2453644348,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0.0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0.0,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0.0,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 17.740840199776002,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 212.59157476160001,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1781.3866378647067,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 44.61634752922001,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 89.56201263868307,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 40.40309020858001,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 30.45172172453334,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 110.41125118128001,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 38.62427300352001,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 0.0,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 190.07279661589382,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 33.06285095540001,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 57.63763542403176,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 100.51205315404823,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 57.51337036966668,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 33.41060855717577,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 72.91486036217141,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 86.78348387542223,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 286.7878541777778,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 62.00440839293335,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 29.867988953230775,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 70.01102517135001,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 140.96780396618465,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 78.0613411087,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 0.0,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 0.0,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 118.27226799850669,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 177.15964563466667,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 58.215308215144,
                    "hasRDI": true,
                    "daily": 89.56201263868307,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 8.080618041716003,
                            "hasRDI": true,
                            "daily": 40.40309020858001,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 40.0773314481716,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 7.460743406631201,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 91.35516517360001,
                    "hasRDI": true,
                    "daily": 30.45172172453334,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 63.75235237828001,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 27.602812795320002,
                            "hasRDI": true,
                            "daily": 110.41125118128001,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 54.255293098016004,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 0.0,
                            "hasRDI": false,
                            "daily": 0.0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 19.312136501760005,
                    "hasRDI": true,
                    "daily": 38.62427300352001,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 0.0,
                    "hasRDI": true,
                    "daily": 0.0,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 4561.747118781452,
                    "hasRDI": true,
                    "daily": 190.07279661589382,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 330.6285095540001,
                    "hasRDI": true,
                    "daily": 33.06285095540001,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 242.0780687809334,
                    "hasRDI": true,
                    "daily": 57.63763542403176,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 4724.066498240267,
                    "hasRDI": true,
                    "daily": 100.51205315404823,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 10.352406666540002,
                    "hasRDI": true,
                    "daily": 57.51337036966668,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 3.6751669412893344,
                    "hasRDI": true,
                    "daily": 33.41060855717577,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 510.40402253519994,
                    "hasRDI": true,
                    "daily": 72.91486036217141,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 781.0513548788001,
                    "hasRDI": true,
                    "daily": 86.78348387542223,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 258.10906876,
                    "hasRDI": true,
                    "daily": 286.7878541777778,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 0.7440529007152001,
                    "hasRDI": true,
                    "daily": 62.00440839293335,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 0.3882838563920001,
                    "hasRDI": true,
                    "daily": 29.867988953230775,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 11.201764027416003,
                    "hasRDI": true,
                    "daily": 70.01102517135001,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 1.8325814515604002,
                    "hasRDI": true,
                    "daily": 140.96780396618465,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 312.2453644348,
                    "hasRDI": true,
                    "daily": 78.0613411087,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 312.2453644348,
                    "hasRDI": false,
                    "daily": 0.0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0.0,
                    "hasRDI": false,
                    "daily": 0.0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 0.0,
                    "hasRDI": true,
                    "daily": 0.0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 0.0,
                    "hasRDI": true,
                    "daily": 0.0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 17.740840199776002,
                    "hasRDI": true,
                    "daily": 118.27226799850669,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 212.59157476160001,
                    "hasRDI": true,
                    "daily": 177.15964563466667,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0.0,
                    "hasRDI": false,
                    "daily": 0.0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 1781.3866378647067,
                    "hasRDI": false,
                    "daily": 0.0,
                    "unit": "g"
                }
            ]
        },
        "_links": {
            "self": {
                "href": "https://api.edamam.com/api/recipes/v2/b9b9ec7321893c7c91a4899a0c186953?type=public&app_id=a1cfd682&app_key=33c42f0c1a65ccd7be6878de773ec448",
                "title": "Self"
            }
        }
    },
            {
                
                
                "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b9b9ec7321893c7c91a4899a0c186953",
                "label": "Molded Tomato Salads",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71f9a86c9bfa430e6b3d7aea040627aacc7ef3e8e582294f4813cc5b4be5ef10",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5125f9daaa0bb50d0a52bd90d63c4e92107d782779e0dcdc69b97656f51858ec",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1393da82d94aa72d1ac6a97521ea176075d52b3d656e319edbb82ce94901bd44",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/4f9/4f9ab7f975d7fb42d3d1e983a17f706a?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=71f9a86c9bfa430e6b3d7aea040627aacc7ef3e8e582294f4813cc5b4be5ef10",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "Martha Stewart",
                "url": "https://www.marthastewart.com/1150331/molded-tomato-salads",
                "shareAs": "http://www.edamam.com/recipe/molded-tomato-salads-b9b9ec7321893c7c91a4899a0c186953/salads",
                "yield": 8.0,
                "dietLabels": [],
                "healthLabels": [
                    "Vegan",
                    "Vegetarian",
                    "Pescatarian",
                    "Paleo",
                    "Mediterranean",
                    "DASH",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "Sulfite-Free",
                    "Kosher",
                    "Immuno-Supportive"
                ],
                "cautions": [],
                "ingredientLines": [
                    "4 pounds ripe tomatoes",
                    "Salt and freshly ground pepper",
                    "1/4 cup extra-virgin olive oil, plus more for molding salads",
                    "1 medium clove garlic, minced",
                    "1 large shallot, peeled and finely chopped",
                    "2 1/2 tablespoons fresh marjoram leaves, roughly chopped",
                    "8 shiso or nasturtium leaves, for garnish"
                ],
                "ingredients": [
                    {
                        "text": "4 pounds ripe tomatoes",
                        "quantity": 4.0,
                        "measure": "pound",
                        "food": "tomatoes",
                        "weight": 1814.36948,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "Salt",
                        "weight": 11.73461688,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Salt and freshly ground pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "pepper",
                        "weight": 5.86730844,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1/4 cup extra-virgin olive oil, plus more for molding salads",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "extra-virgin olive oil",
                        "weight": 54.0,
                        "foodCategory": "Oils",
                        "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
                        "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
                    },
                    {
                        "text": "1 medium clove garlic, minced",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "1 large shallot, peeled and finely chopped",
                        "quantity": 1.0,
                        "measure": "<unit>",
                        "food": "shallot",
                        "weight": 80.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
                        "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
                    },
                    {
                        "text": "2 1/2 tablespoons fresh marjoram leaves, roughly chopped",
                        "quantity": 2.5,
                        "measure": "tablespoon",
                        "food": "marjoram",
                        "weight": 4.25,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_bqc1f9kb84j9zcboenn1wb0c6t1a",
                        "image": "https://www.edamam.com/food-img/47f/47f75ecad128851ba407efd51c73eb47.jpg"
                    },
                    {
                        "text": "8 shiso or nasturtium leaves, for garnish",
                        "quantity": 1.0,
                        "measure": "leaf",
                        "food": "shiso",
                        "weight": 0.15,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ao023nobmcrunkam7kepwb43d7qk",
                        "image": "https://www.edamam.com/food-img/7f0/7f01cc4f71c5c6ad31051ed74b9c058b.jpg"
                    }
                ],
                "calories": 892.3269505844002,
                "totalCO2Emissions": 4190.271925692741,
                "co2EmissionsClass": "D",
                "totalWeight": 1973.1196432933339,
                "totalTime": 0.0,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "salad"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 892.3269505844002,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 58.215308215144,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 8.080618041716003,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 40.0773314481716,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 7.460743406631201,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 91.35516517360001,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 63.75235237828001,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 27.602812795320002,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 54.255293098016004,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 19.312136501760005,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4561.747118781452,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 330.6285095540001,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 242.0780687809334,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 4724.066498240267,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 10.352406666540002,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 3.6751669412893344,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 510.40402253519994,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 781.0513548788001,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 258.10906876,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.7440529007152001,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.3882838563920001,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 11.201764027416003,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 1.8325814515604002,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 312.2453644348,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 312.2453644348,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 17.740840199776002,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 212.59157476160001,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1781.3866378647067,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 44.61634752922001,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 89.56201263868307,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 40.40309020858001,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 30.45172172453334,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 110.41125118128001,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 38.62427300352001,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 190.07279661589382,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 33.06285095540001,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 57.63763542403176,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 100.51205315404823,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 57.51337036966668,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 33.41060855717577,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 72.91486036217141,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 86.78348387542223,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 286.7878541777778,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 62.00440839293335,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 29.867988953230775,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 70.01102517135001,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 140.96780396618465,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 78.0613411087,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 118.27226799850669,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 177.15964563466667,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 58.215308215144,
                        "hasRDI": true,
                        "daily": 89.56201263868307,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 8.080618041716003,
                                "hasRDI": true,
                                "daily": 40.40309020858001,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 40.0773314481716,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 7.460743406631201,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 91.35516517360001,
                        "hasRDI": true,
                        "daily": 30.45172172453334,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 63.75235237828001,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 27.602812795320002,
                                "hasRDI": true,
                                "daily": 110.41125118128001,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 54.255293098016004,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 19.312136501760005,
                        "hasRDI": true,
                        "daily": 38.62427300352001,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4561.747118781452,
                        "hasRDI": true,
                        "daily": 190.07279661589382,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 330.6285095540001,
                        "hasRDI": true,
                        "daily": 33.06285095540001,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 242.0780687809334,
                        "hasRDI": true,
                        "daily": 57.63763542403176,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 4724.066498240267,
                        "hasRDI": true,
                        "daily": 100.51205315404823,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 10.352406666540002,
                        "hasRDI": true,
                        "daily": 57.51337036966668,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 3.6751669412893344,
                        "hasRDI": true,
                        "daily": 33.41060855717577,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 510.40402253519994,
                        "hasRDI": true,
                        "daily": 72.91486036217141,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 781.0513548788001,
                        "hasRDI": true,
                        "daily": 86.78348387542223,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 258.10906876,
                        "hasRDI": true,
                        "daily": 286.7878541777778,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.7440529007152001,
                        "hasRDI": true,
                        "daily": 62.00440839293335,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.3882838563920001,
                        "hasRDI": true,
                        "daily": 29.867988953230775,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 11.201764027416003,
                        "hasRDI": true,
                        "daily": 70.01102517135001,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 1.8325814515604002,
                        "hasRDI": true,
                        "daily": 140.96780396618465,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 312.2453644348,
                        "hasRDI": true,
                        "daily": 78.0613411087,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 312.2453644348,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 17.740840199776002,
                        "hasRDI": true,
                        "daily": 118.27226799850669,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 212.59157476160001,
                        "hasRDI": true,
                        "daily": 177.15964563466667,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1781.3866378647067,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/b9b9ec7321893c7c91a4899a0c186953?type=public&app_id=a1cfd682&app_key=33c42f0c1a65ccd7be6878de773ec448",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_085e89c12bb1ac8439fd824a381bf2aa",
                "label": "Amalfi salads",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/153/15335912a7752c57a474817cee006b9e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=530fc499825aeabde2c9641d5dff1814100e4dbd49fb91c2996998f85ca5d0a2",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/153/15335912a7752c57a474817cee006b9e-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8621129ca4c0295f1aaea0bb704a02b85d0c551a9e901a09866ef319da070fbe",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/153/15335912a7752c57a474817cee006b9e-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=48209f026d16d8f657e83afae7080f7241833c06b4ad1bf3a8f5d56c807f6fd4",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/153/15335912a7752c57a474817cee006b9e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=95dc93ee538428317c8edeffe04d43e79ff0f30f185efdc39879017c82789216",
                        "width": 300,
                        "height": 300
                    }
                },
                "source": "BBC Good Food",
                "url": "https://www.bbcgoodfood.com/recipes/amalfi-salads",
                "shareAs": "http://www.edamam.com/recipe/amalfi-salads-085e89c12bb1ac8439fd824a381bf2aa/salads",
                "yield": 8.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Sugar-Conscious",
                    "Kidney-Friendly",
                    "Keto-Friendly",
                    "Vegan",
                    "Vegetarian",
                    "Pescatarian",
                    "Paleo",
                    "Mediterranean",
                    "DASH",
                    "Dairy-Free",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "FODMAP-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "50g pine nut",
                    "2 x 110g packs salad leaves (we used bistro salad with red chard)",
                    "200g SunBlush tomato , roughly chopped",
                    "200g black olive (niçoise are great)"
                ],
                "ingredients": [
                    {
                        "text": "50g pine nut",
                        "quantity": 50.0,
                        "measure": "gram",
                        "food": "pine nut",
                        "weight": 50.0,
                        "foodCategory": "plant-based protein",
                        "foodId": "food_b5d59t6bhqudbqalw7k4fb6ncio8",
                        "image": "https://www.edamam.com/food-img/52f/52fa29cb9d1ab6502f137a98c8a63f09.jpg"
                    },
                    {
                        "text": "2 x 110g packs salad leaves (we used bistro salad with red chard)",
                        "quantity": 220.0,
                        "measure": "gram",
                        "food": "salad leaves",
                        "weight": 220.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_bfmb5cybk1o247bmrmry4a6jvp60",
                        "image": "https://www.edamam.com/food-img/79e/79e8dd0ee229cbc32171ec362ce93a37.jpg"
                    },
                    {
                        "text": "200g SunBlush tomato , roughly chopped",
                        "quantity": 200.0,
                        "measure": "gram",
                        "food": "tomato",
                        "weight": 200.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_a6k79rrahp8fe2b26zussa3wtkqh",
                        "image": "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg"
                    },
                    {
                        "text": "200g black olive (niçoise are great)",
                        "quantity": 200.0,
                        "measure": "gram",
                        "food": "black olive",
                        "weight": 200.0,
                        "foodCategory": "canned fruit",
                        "foodId": "food_atlv2r9b29ejzeb1o3wgkaxqajcb",
                        "image": "https://www.edamam.com/food-img/822/8221f2141e8dafd469414b20777735ca.jpg"
                    }
                ],
                "calories": 641.9,
                "totalCO2Emissions": 1747.3087912,
                "co2EmissionsClass": "C",
                "totalWeight": 670.0,
                "totalTime": 20.0,
                "cuisineType": [
                    "south east asian"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "salad"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 641.9,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 57.06,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 7.1518,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.0,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 24.788400000000003,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 18.826,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 33.648,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 21.578000000000003,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 12.07,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 9.673,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 12.995999999999999,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 1498.6,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 276.6,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 186.3,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 1331.9,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 17.999000000000002,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 4.511000000000001,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 407.5,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 1077.7,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 38.4,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 0.42040000000000005,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.2989,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 4.1456,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 0.38780000000000003,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 346.20000000000005,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 346.20000000000005,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 9.331,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 269.95,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 558.26,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 32.095,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 87.78461538461538,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 35.759,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 11.216000000000001,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 48.28,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 25.991999999999997,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 62.44166666666667,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 27.660000000000004,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 44.357142857142854,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 28.338297872340426,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 99.99444444444447,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 41.009090909090915,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 58.214285714285715,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 119.74444444444444,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 42.666666666666664,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 35.03333333333334,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 22.99230769230769,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 25.91,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 29.83076923076923,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 86.55000000000001,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 62.20666666666666,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 224.95833333333334,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 57.06,
                        "hasRDI": true,
                        "daily": 87.78461538461538,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 7.1518,
                                "hasRDI": true,
                                "daily": 35.759,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 24.788400000000003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 18.826,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 33.648,
                        "hasRDI": true,
                        "daily": 11.216000000000001,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 21.578000000000003,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 12.07,
                                "hasRDI": true,
                                "daily": 48.28,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 9.673,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 12.995999999999999,
                        "hasRDI": true,
                        "daily": 25.991999999999997,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 1498.6,
                        "hasRDI": true,
                        "daily": 62.44166666666667,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 276.6,
                        "hasRDI": true,
                        "daily": 27.660000000000004,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 186.3,
                        "hasRDI": true,
                        "daily": 44.357142857142854,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 1331.9,
                        "hasRDI": true,
                        "daily": 28.338297872340426,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 17.999000000000002,
                        "hasRDI": true,
                        "daily": 99.99444444444447,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 4.511000000000001,
                        "hasRDI": true,
                        "daily": 41.009090909090915,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 407.5,
                        "hasRDI": true,
                        "daily": 58.214285714285715,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 1077.7,
                        "hasRDI": true,
                        "daily": 119.74444444444444,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 38.4,
                        "hasRDI": true,
                        "daily": 42.666666666666664,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 0.42040000000000005,
                        "hasRDI": true,
                        "daily": 35.03333333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.2989,
                        "hasRDI": true,
                        "daily": 22.99230769230769,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 4.1456,
                        "hasRDI": true,
                        "daily": 25.91,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 0.38780000000000003,
                        "hasRDI": true,
                        "daily": 29.83076923076923,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 346.20000000000005,
                        "hasRDI": true,
                        "daily": 86.55000000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 346.20000000000005,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 9.331,
                        "hasRDI": true,
                        "daily": 62.20666666666666,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 269.95,
                        "hasRDI": true,
                        "daily": 224.95833333333334,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 558.26,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/085e89c12bb1ac8439fd824a381bf2aa?type=public&app_id=a1cfd682&app_key=33c42f0c1a65ccd7be6878de773ec448",
                    "title": "Self"
                }
            }
        },
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c70e27f2cc1cb986818d998895e6ecc0",
                "label": "Tzatziki Potato Salad",
                "image": "https://edamam-product-images.s3.amazonaws.com/web-img/414/41436b9bd90183e3217f6c6f42a1b3bd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=331e8313f40d3abb5904b10ad64b5da0b6e9f7cc5f3d3b528c16a14c950a570e",
                "images": {
                    "THUMBNAIL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/414/41436b9bd90183e3217f6c6f42a1b3bd-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3051643031ade39749da19670371ae6588aa1f99f1715c57a72214b97b0d8f85",
                        "width": 100,
                        "height": 100
                    },
                    "SMALL": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/414/41436b9bd90183e3217f6c6f42a1b3bd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c2ab31c77fa871bb7297cfc48071b0d1cbe888cfc2684d04a547d103ba010b70",
                        "width": 200,
                        "height": 200
                    },
                    "REGULAR": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/414/41436b9bd90183e3217f6c6f42a1b3bd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=331e8313f40d3abb5904b10ad64b5da0b6e9f7cc5f3d3b528c16a14c950a570e",
                        "width": 300,
                        "height": 300
                    },
                    "LARGE": {
                        "url": "https://edamam-product-images.s3.amazonaws.com/web-img/414/41436b9bd90183e3217f6c6f42a1b3bd-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLWVhc3QtMSJHMEUCIQDfC8U2kJo3Z9MHDlD%2B%2Fi64BZtMEtwRHzPu2lH6RBxVdwIgcen2ciVEXXeZSyrrmxAAq1Wjym%2FNChsfSIzkoW4j884quQUILhAAGgwxODcwMTcxNTA5ODYiDMxl5IPxkRRdTPiHqiqWBeg7J7%2BGjinjk4wbT918hEfTl5IwoDB9RoyCQQdQ%2BSsZtnlXx334p0D6yBBRRcYWL%2FXSXAtm92LLLHR6xRj1XqFNCq6AKzW6%2BJ82A9VQBtp0VvKBaa0Qx5jyDzT%2FWTT1vcChHbXZvLPMaSjoaFUUqWrJ0rtsEzQboZi9wMkYZLgpH9XcEEQq4tRB0a7OyFM3L4zQ3SwTtCGqnrBMUaXClGBao%2BXyoJCzA9vaa194V%2BfJ04p5eK9S72NeQuqX9mZY6RNX%2FuwFqpt%2FW9Uliivgg9%2BIEyYE8sAcMU22mQOQrargFqNP9Ovniyo6ciGGV7mq4xusBZwyxfV5HZ6iZnNXoDraqSZVFvo0tyTcyVMxPSuz3Fd%2F%2FnSP8jQ0acRnp9Qqha%2FglglpJ6%2BM1R7magZZN02d%2FmjPDujbNLZosPwKpyHWsD%2FtNp38Y24a%2FUCPw5HZ5n15b8YDTaUyIN%2BlrWHcGz7NAkrieVvidQdKvo57LcngFeYJzvu1GZsPfkOonzAIe976z3fomFvpiwJ2GFMQiBuOD%2B3vfDsLVE8wH9utidDA9Dx9WcNm5HhGPSBoNNq2RIhWGvDE%2BbIaClWx5qTUeBBsueHjd%2Fwu0BAEaeR%2B3Q9%2B5FJEt3LstQ8MO1YbjEja8btaXleAbEiI718G21voM5ZneDc0Awi39%2Bh9YbuCLPxyKq6Ijm2RNMzIZJESYoVo4ZpfLu9hacGMRZ54Z2uSc%2Fk5%2FS163H9NUD9w%2FH7U3BPYIpgpzqW6X5SZrApPVrlqGpe%2B4yMU6Zz2USOfFNwfEcJdB6qxXzp24uxuiEULHOwxXMGHYmNXuqU6RR0XzEYnjHgGRzwUoQCGXmmE4KtFSCoeb2SVFfGKQ7GnA28W5Pbt1TRVGheQMMjrtLQGOrEB33%2BKWlAdxQzpRfsaAl9Y5heFPy75HL4nlaRUqYM%2FQ2rU%2FBFc6q7x64geaUIUQlcS1dUQ4WW%2BNIM5Xw%2BUAMwaJAsjkdr%2BnuK0hg2zIXBdBoSf58v8fpIEdqG8Vda8A4DsBIgnAs%2FhPL6VK15exN4FXDZBYJG1Z%2F83fV7dVKRTISU5xnWkIX%2B6n6mT7DArmz%2BD%2BOdXdRKyqP7qvCQXNcVKStaL7XZ4GYFmGODzUyOIVPh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240709T142707Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBZKNXNGH%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2cef6d797aa2473cdaff8be857ed46e64251b4c7acf8a75ccc67148c12d8be16",
                        "width": 600,
                        "height": 600
                    }
                },
                "source": "Smitten Kitchen",
                "url": "http://smittenkitchen.com/2012/05/tzatziki-potato-salad/",
                "shareAs": "http://www.edamam.com/recipe/tzatziki-potato-salad-c70e27f2cc1cb986818d998895e6ecc0/salads",
                "yield": 8.0,
                "dietLabels": [
                    "High-Fiber"
                ],
                "healthLabels": [
                    "Vegetarian",
                    "Pescatarian",
                    "Mediterranean",
                    "Gluten-Free",
                    "Wheat-Free",
                    "Egg-Free",
                    "Peanut-Free",
                    "Tree-Nut-Free",
                    "Soy-Free",
                    "Fish-Free",
                    "Shellfish-Free",
                    "Pork-Free",
                    "Red-Meat-Free",
                    "Crustacean-Free",
                    "Celery-Free",
                    "Mustard-Free",
                    "Sesame-Free",
                    "Lupine-Free",
                    "Mollusk-Free",
                    "Alcohol-Free",
                    "No oil added",
                    "Sulfite-Free",
                    "Kosher"
                ],
                "cautions": [
                    "Sulfites"
                ],
                "ingredientLines": [
                    "4 pounds potatoes (I like tiny Yukon golds, but you can use whatever boiling potatoes you like for salads)",
                    "1 3/4 cups Greek yogurt (I used full-fat but I think other fat levels would work)",
                    "1/4 cup sour cream",
                    "2 tablespoons freshly squeezed lemon juice (from half a big lemon)",
                    "1 tablespoon white wine vinegar",
                    "1 tablespoon minced fresh dill",
                    "1 medium garlic clove, minced",
                    "2 teaspoons kosher salt",
                    "Freshly ground black pepper",
                    "1 hothouse or English cucumber (1 pound), unpeeled but quartered lengthwise, seeds removed"
                ],
                "ingredients": [
                    {
                        "text": "4 pounds potatoes (I like tiny Yukon golds, but you can use whatever boiling potatoes you like for salads)",
                        "quantity": 4.0,
                        "measure": "pound",
                        "food": "potatoes",
                        "weight": 1814.36948,
                        "foodCategory": "vegetables",
                        "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
                        "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
                    },
                    {
                        "text": "1 3/4 cups Greek yogurt (I used full-fat but I think other fat levels would work)",
                        "quantity": 1.75,
                        "measure": "cup",
                        "food": "Greek yogurt",
                        "weight": 504.0,
                        "foodCategory": "yogurt",
                        "foodId": "food_bllzl82a5fkj4yanmzoztapdyryz",
                        "image": "https://www.edamam.com/food-img/689/6891387401f579242e7303ce8ec00e18.jpg"
                    },
                    {
                        "text": "1/4 cup sour cream",
                        "quantity": 0.25,
                        "measure": "cup",
                        "food": "sour cream",
                        "weight": 57.5,
                        "foodCategory": "Dairy",
                        "foodId": "food_adp9fcubzl3lr7bcvzn3rbfiiiwq",
                        "image": "https://www.edamam.com/food-img/f9d/f9d6183267b041b0aff9a10b89c9c15f.jpg"
                    },
                    {
                        "text": "2 tablespoons freshly squeezed lemon juice (from half a big lemon)",
                        "quantity": 2.0,
                        "measure": "tablespoon",
                        "food": "lemon juice",
                        "weight": 30.4999999994844,
                        "foodCategory": "100% juice",
                        "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
                        "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
                    },
                    {
                        "text": "1 tablespoon white wine vinegar",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "white wine vinegar",
                        "weight": 14.9,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_ai77igmb8f0rj6blsokr8bxx5n2n",
                        "image": "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg"
                    },
                    {
                        "text": "1 tablespoon minced fresh dill",
                        "quantity": 1.0,
                        "measure": "tablespoon",
                        "food": "fresh dill",
                        "weight": 0.556249999990595,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_avhhd2padkkzx8a9swnmlb1km3qb",
                        "image": "https://www.edamam.com/food-img/874/8740aacb8e1a348cd5eead1f0bb552d4.jpg"
                    },
                    {
                        "text": "1 medium garlic clove, minced",
                        "quantity": 1.0,
                        "measure": "clove",
                        "food": "garlic",
                        "weight": 3.0,
                        "foodCategory": "vegetables",
                        "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                        "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                    },
                    {
                        "text": "2 teaspoons kosher salt",
                        "quantity": 2.0,
                        "measure": "teaspoon",
                        "food": "kosher salt",
                        "weight": 9.70833333382575,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
                        "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                    },
                    {
                        "text": "Freshly ground black pepper",
                        "quantity": 0.0,
                        "measure": null,
                        "food": "black pepper",
                        "weight": 8.664379299999903,
                        "foodCategory": "Condiments and sauces",
                        "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                        "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                    },
                    {
                        "text": "1 hothouse or English cucumber (1 pound), unpeeled but quartered lengthwise, seeds removed",
                        "quantity": 1.0,
                        "measure": "pound",
                        "food": "English cucumber",
                        "weight": 453.59237,
                        "foodCategory": "vegetables",
                        "foodId": "food_bv7aggjag9rxsaatklqzobca5fzn",
                        "image": "https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg"
                    }
                ],
                "calories": 2051.2409689778824,
                "totalCO2Emissions": 14555.714542925576,
                "co2EmissionsClass": "F",
                "totalWeight": 2896.790812633301,
                "totalTime": 0.0,
                "cuisineType": [
                    "mediterranean"
                ],
                "mealType": [
                    "lunch/dinner"
                ],
                "dishType": [
                    "salad"
                ],
                "totalNutrients": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 2051.2409689778824,
                        "unit": "kcal"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 40.36080435596866,
                        "unit": "g"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 23.191525293862785,
                        "unit": "g"
                    },
                    "FATRN": {
                        "label": "Trans",
                        "quantity": 0.45770000000000005,
                        "unit": "g"
                    },
                    "FAMS": {
                        "label": "Monounsaturated",
                        "quantity": 2.768187507571893,
                        "unit": "g"
                    },
                    "FAPU": {
                        "label": "Polyunsaturated",
                        "quantity": 1.463704196161882,
                        "unit": "g"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 361.4680614420338,
                        "unit": "g"
                    },
                    "CHOCDF.net": {
                        "label": "Carbohydrates (net)",
                        "quantity": 318.80811015463553,
                        "unit": "g"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 42.65995128739824,
                        "unit": "g"
                    },
                    "SUGAR": {
                        "label": "Sugars",
                        "quantity": 41.678334565137,
                        "unit": "g"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 79.46736593004786,
                        "unit": "g"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 100.95700000000002,
                        "unit": "mg"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 4140.72218266238,
                        "unit": "mg"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 732.2378737230673,
                        "unit": "mg"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 498.2010876933021,
                        "unit": "mg"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 8593.583686739104,
                        "unit": "mg"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 16.958475269950586,
                        "unit": "mg"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 6.6822439598034835,
                        "unit": "mg"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 1205.1697516299523,
                        "unit": "mg"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 299.3353373559637,
                        "unit": "µg"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 383.4801688289925,
                        "unit": "mg"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 1.622935275146871,
                        "unit": "mg"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 0.8475105339768946,
                        "unit": "mg"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 19.873238443941382,
                        "unit": "mg"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 5.683862296222746,
                        "unit": "mg"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 314.9016634038827,
                        "unit": "µg"
                    },
                    "FOLFD": {
                        "label": "Folate (food)",
                        "quantity": 314.9016634038827,
                        "unit": "µg"
                    },
                    "FOLAC": {
                        "label": "Folic acid",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 0.12075000000000001,
                        "unit": "µg"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "µg"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 0.6701918723892255,
                        "unit": "mg"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 123.56794587159983,
                        "unit": "µg"
                    },
                    "WATER": {
                        "label": "Water",
                        "quantity": 1943.4940053914838,
                        "unit": "g"
                    }
                },
                "totalDaily": {
                    "ENERC_KCAL": {
                        "label": "Energy",
                        "quantity": 102.56204844889412,
                        "unit": "%"
                    },
                    "FAT": {
                        "label": "Fat",
                        "quantity": 62.09354516302871,
                        "unit": "%"
                    },
                    "FASAT": {
                        "label": "Saturated",
                        "quantity": 115.95762646931394,
                        "unit": "%"
                    },
                    "CHOCDF": {
                        "label": "Carbs",
                        "quantity": 120.48935381401127,
                        "unit": "%"
                    },
                    "FIBTG": {
                        "label": "Fiber",
                        "quantity": 170.63980514959297,
                        "unit": "%"
                    },
                    "PROCNT": {
                        "label": "Protein",
                        "quantity": 158.93473186009572,
                        "unit": "%"
                    },
                    "CHOLE": {
                        "label": "Cholesterol",
                        "quantity": 33.65233333333334,
                        "unit": "%"
                    },
                    "NA": {
                        "label": "Sodium",
                        "quantity": 172.53009094426582,
                        "unit": "%"
                    },
                    "CA": {
                        "label": "Calcium",
                        "quantity": 73.22378737230673,
                        "unit": "%"
                    },
                    "MG": {
                        "label": "Magnesium",
                        "quantity": 118.61930659364336,
                        "unit": "%"
                    },
                    "K": {
                        "label": "Potassium",
                        "quantity": 182.842206100832,
                        "unit": "%"
                    },
                    "FE": {
                        "label": "Iron",
                        "quantity": 94.21375149972548,
                        "unit": "%"
                    },
                    "ZN": {
                        "label": "Zinc",
                        "quantity": 60.74767236184985,
                        "unit": "%"
                    },
                    "P": {
                        "label": "Phosphorus",
                        "quantity": 172.16710737570747,
                        "unit": "%"
                    },
                    "VITA_RAE": {
                        "label": "Vitamin A",
                        "quantity": 33.259481928440415,
                        "unit": "%"
                    },
                    "VITC": {
                        "label": "Vitamin C",
                        "quantity": 426.0890764766583,
                        "unit": "%"
                    },
                    "THIA": {
                        "label": "Thiamin (B1)",
                        "quantity": 135.24460626223924,
                        "unit": "%"
                    },
                    "RIBF": {
                        "label": "Riboflavin (B2)",
                        "quantity": 65.19311799822266,
                        "unit": "%"
                    },
                    "NIA": {
                        "label": "Niacin (B3)",
                        "quantity": 124.20774027463364,
                        "unit": "%"
                    },
                    "VITB6A": {
                        "label": "Vitamin B6",
                        "quantity": 437.2201766325189,
                        "unit": "%"
                    },
                    "FOLDFE": {
                        "label": "Folate equivalent (total)",
                        "quantity": 78.72541585097068,
                        "unit": "%"
                    },
                    "VITB12": {
                        "label": "Vitamin B12",
                        "quantity": 5.031250000000001,
                        "unit": "%"
                    },
                    "VITD": {
                        "label": "Vitamin D",
                        "quantity": 0.0,
                        "unit": "%"
                    },
                    "TOCPHA": {
                        "label": "Vitamin E",
                        "quantity": 4.467945815928171,
                        "unit": "%"
                    },
                    "VITK1": {
                        "label": "Vitamin K",
                        "quantity": 102.9732882263332,
                        "unit": "%"
                    }
                },
                "digest": [
                    {
                        "label": "Fat",
                        "tag": "FAT",
                        "schemaOrgTag": "fatContent",
                        "total": 40.36080435596866,
                        "hasRDI": true,
                        "daily": 62.09354516302871,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Saturated",
                                "tag": "FASAT",
                                "schemaOrgTag": "saturatedFatContent",
                                "total": 23.191525293862785,
                                "hasRDI": true,
                                "daily": 115.95762646931394,
                                "unit": "g"
                            },
                            {
                                "label": "Trans",
                                "tag": "FATRN",
                                "schemaOrgTag": "transFatContent",
                                "total": 0.45770000000000005,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Monounsaturated",
                                "tag": "FAMS",
                                "schemaOrgTag": null,
                                "total": 2.768187507571893,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Polyunsaturated",
                                "tag": "FAPU",
                                "schemaOrgTag": null,
                                "total": 1.463704196161882,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Carbs",
                        "tag": "CHOCDF",
                        "schemaOrgTag": "carbohydrateContent",
                        "total": 361.4680614420338,
                        "hasRDI": true,
                        "daily": 120.48935381401127,
                        "unit": "g",
                        "sub": [
                            {
                                "label": "Carbs (net)",
                                "tag": "CHOCDF.net",
                                "schemaOrgTag": null,
                                "total": 318.80811015463553,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Fiber",
                                "tag": "FIBTG",
                                "schemaOrgTag": "fiberContent",
                                "total": 42.65995128739824,
                                "hasRDI": true,
                                "daily": 170.63980514959297,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars",
                                "tag": "SUGAR",
                                "schemaOrgTag": "sugarContent",
                                "total": 41.678334565137,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            },
                            {
                                "label": "Sugars, added",
                                "tag": "SUGAR.added",
                                "schemaOrgTag": null,
                                "total": 0.0,
                                "hasRDI": false,
                                "daily": 0.0,
                                "unit": "g"
                            }
                        ]
                    },
                    {
                        "label": "Protein",
                        "tag": "PROCNT",
                        "schemaOrgTag": "proteinContent",
                        "total": 79.46736593004786,
                        "hasRDI": true,
                        "daily": 158.93473186009572,
                        "unit": "g"
                    },
                    {
                        "label": "Cholesterol",
                        "tag": "CHOLE",
                        "schemaOrgTag": "cholesterolContent",
                        "total": 100.95700000000002,
                        "hasRDI": true,
                        "daily": 33.65233333333334,
                        "unit": "mg"
                    },
                    {
                        "label": "Sodium",
                        "tag": "NA",
                        "schemaOrgTag": "sodiumContent",
                        "total": 4140.72218266238,
                        "hasRDI": true,
                        "daily": 172.53009094426582,
                        "unit": "mg"
                    },
                    {
                        "label": "Calcium",
                        "tag": "CA",
                        "schemaOrgTag": null,
                        "total": 732.2378737230673,
                        "hasRDI": true,
                        "daily": 73.22378737230673,
                        "unit": "mg"
                    },
                    {
                        "label": "Magnesium",
                        "tag": "MG",
                        "schemaOrgTag": null,
                        "total": 498.2010876933021,
                        "hasRDI": true,
                        "daily": 118.61930659364336,
                        "unit": "mg"
                    },
                    {
                        "label": "Potassium",
                        "tag": "K",
                        "schemaOrgTag": null,
                        "total": 8593.583686739104,
                        "hasRDI": true,
                        "daily": 182.842206100832,
                        "unit": "mg"
                    },
                    {
                        "label": "Iron",
                        "tag": "FE",
                        "schemaOrgTag": null,
                        "total": 16.958475269950586,
                        "hasRDI": true,
                        "daily": 94.21375149972548,
                        "unit": "mg"
                    },
                    {
                        "label": "Zinc",
                        "tag": "ZN",
                        "schemaOrgTag": null,
                        "total": 6.6822439598034835,
                        "hasRDI": true,
                        "daily": 60.74767236184985,
                        "unit": "mg"
                    },
                    {
                        "label": "Phosphorus",
                        "tag": "P",
                        "schemaOrgTag": null,
                        "total": 1205.1697516299523,
                        "hasRDI": true,
                        "daily": 172.16710737570747,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin A",
                        "tag": "VITA_RAE",
                        "schemaOrgTag": null,
                        "total": 299.3353373559637,
                        "hasRDI": true,
                        "daily": 33.259481928440415,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin C",
                        "tag": "VITC",
                        "schemaOrgTag": null,
                        "total": 383.4801688289925,
                        "hasRDI": true,
                        "daily": 426.0890764766583,
                        "unit": "mg"
                    },
                    {
                        "label": "Thiamin (B1)",
                        "tag": "THIA",
                        "schemaOrgTag": null,
                        "total": 1.622935275146871,
                        "hasRDI": true,
                        "daily": 135.24460626223924,
                        "unit": "mg"
                    },
                    {
                        "label": "Riboflavin (B2)",
                        "tag": "RIBF",
                        "schemaOrgTag": null,
                        "total": 0.8475105339768946,
                        "hasRDI": true,
                        "daily": 65.19311799822266,
                        "unit": "mg"
                    },
                    {
                        "label": "Niacin (B3)",
                        "tag": "NIA",
                        "schemaOrgTag": null,
                        "total": 19.873238443941382,
                        "hasRDI": true,
                        "daily": 124.20774027463364,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin B6",
                        "tag": "VITB6A",
                        "schemaOrgTag": null,
                        "total": 5.683862296222746,
                        "hasRDI": true,
                        "daily": 437.2201766325189,
                        "unit": "mg"
                    },
                    {
                        "label": "Folate equivalent (total)",
                        "tag": "FOLDFE",
                        "schemaOrgTag": null,
                        "total": 314.9016634038827,
                        "hasRDI": true,
                        "daily": 78.72541585097068,
                        "unit": "µg"
                    },
                    {
                        "label": "Folate (food)",
                        "tag": "FOLFD",
                        "schemaOrgTag": null,
                        "total": 314.9016634038827,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Folic acid",
                        "tag": "FOLAC",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin B12",
                        "tag": "VITB12",
                        "schemaOrgTag": null,
                        "total": 0.12075000000000001,
                        "hasRDI": true,
                        "daily": 5.031250000000001,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin D",
                        "tag": "VITD",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": true,
                        "daily": 0.0,
                        "unit": "µg"
                    },
                    {
                        "label": "Vitamin E",
                        "tag": "TOCPHA",
                        "schemaOrgTag": null,
                        "total": 0.6701918723892255,
                        "hasRDI": true,
                        "daily": 4.467945815928171,
                        "unit": "mg"
                    },
                    {
                        "label": "Vitamin K",
                        "tag": "VITK1",
                        "schemaOrgTag": null,
                        "total": 123.56794587159983,
                        "hasRDI": true,
                        "daily": 102.9732882263332,
                        "unit": "µg"
                    },
                    {
                        "label": "Sugar alcohols",
                        "tag": "Sugar.alcohol",
                        "schemaOrgTag": null,
                        "total": 0.0,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    },
                    {
                        "label": "Water",
                        "tag": "WATER",
                        "schemaOrgTag": null,
                        "total": 1943.4940053914838,
                        "hasRDI": false,
                        "daily": 0.0,
                        "unit": "g"
                    }
                ]
            },
            "_links": {
                "self": {
                    "href": "https://api.edamam.com/api/recipes/v2/c70e27f2cc1cb986818d998895e6ecc0?type=public&app_id=a1cfd682&app_key=33c42f0c1a65ccd7be6878de773ec448",
                    "title": "Self"
                }
            }
            }           
        ]
    }
    const [likedRecipe, setLikedRecipe] = useState({})

    
    const concatinateWord = (word) => {

        const array = word.split(" ");
        let newWord = "";

        if(array.length > 2){
            return array[0] + " "+ array[1] + " ...";
        }else{
            for(let i = 0; i<array.length; i++){
                newWord += array[i] + " "
            }
            return newWord;
        }
    }

    const goToRecipe = (location) => {
            navigate(`/${location}`)
    }

    const toggleLike = (key) => {
        // console.log(like)
        // if(Object.keys)
        setLike(!like)

    }

    return(
        <div className="">
                <div className="row">
                    <input type="text" className="fa fa-search heart-float mb-4 search" placeholder="&#xF002;" name="search"/>
                    
                    
                </div>
            <div className=" item-list">

                {recipes.hits.map((item, key) => {
                    return(
                        <div className="foods card"  key = {key}>
                            <div className="">
                                
                                <div className="circular-img"><img src={item.recipe.images.SMALL.url}/></div>
                                <h3 className="pointer" onClick={() => {goToRecipe(item.recipe.label); props.setRecipe(item)}}>{concatinateWord(item.recipe.label)}</h3>
                                <p>{item.recipe.mealType}</p>
                                <div className="row ">
                                    <div className="col"><p>{Math.floor(item.recipe.totalNutrients.ENERC_KCAL.quantity)} Kcal</p></div>
                                    <div className="col"><i onClick={() => toggleLike()} className={`fa fa-heart-o pointer ${!like ? "circle-for-heart" : "toggle-like"}` } ></i></div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>

            <div  className="long-item-container">
            {recipes.hits.map((item,key) => {
                    return(
                        <div key={key} onClick={() => {goToRecipe(item.recipe.label); props.setRecipe(item)}}>
                            <VerticalRecipeList  item={item}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}