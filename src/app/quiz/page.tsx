import Item from "@/interfaces/item";
import { getAllItems } from "@/lib/database";
import { generatorQuizList } from "@/lib/quizGenerator";

export default async function Quiz() {
    const itemList: Array<Item> = await getAllItems();
    const quizList = generatorQuizList(itemList, 10);
    if(itemList == undefined || itemList.length == 0 || quizList == undefined || quizList.length == 0) {
        return <></>
    }
    return <></>
}