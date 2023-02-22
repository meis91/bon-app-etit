import { useSearchParams } from "react-router-dom";
export default function Recipe(props) {
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("id"))
    console.log(searchparams.get("title"))
    const ingredients = searchparams.get("quantities")
    console.log(ingredients)
    return (
        <div>

            <h1> Recipe page </h1>
            id is {searchparams.get("id")} <br></br>
            id is {searchparams.get("id")} <br></br>
            title is {searchparams.get("title")} <br></br>
            description is {searchparams.get("description")}<br></br>
            <div>

            </div>

            portions is {searchparams.get("portions")}<br></br>
            instructions is {searchparams.get("instructions")}<br></br>
            image is {searchparams.get("image")}
        </div>

    )
}
