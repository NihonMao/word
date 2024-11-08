import Option from "@/interfaces/option";
import Item from "@/interfaces/item";

// 获取题面列表
function getRandomQuizItems(itemList: Array<Item>, count: number): Array<Item> {
    if(count <= 0) {
        return [];
    }
    if(count >= itemList.length) {
        return [...itemList];
    }
    const shuffled = itemList.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 获取错误选项列表
function getWrongAnswerList(item: Item, itemList: Array<Item>): Array<Item> {
    const filteredList = itemList.filter(element => element !== item);
    if(filteredList.length <= 3) {
        return filteredList;
    }
    else {
        const result: Array<Item> = [];
        while(result.length < 3) {
            const randomIndex = Math.floor(Math.random() * filteredList.length);
            const randomItem = filteredList[randomIndex];
            if (!result.includes(randomItem)) {
                result.push(randomItem);
            }
        }
        return result;
    }
}

// 解析答案列表为选项列表
function parserAnswerToOptions(item: Item, itemList: Array<Item>): Array<Item> {
    let answerList: Array<Item> = [];
    const wrongAnswer = getWrongAnswerList(item, itemList);
    answerList.push(item);
    wrongAnswer.map((w) => {
        answerList.push(w);
    });
    answerList = answerList.sort(() => 0.5 - Math.random());
    const optionList: Array<Item> = [];
    answerList.map((answer: Item) => {
        if(answer == item) {
            const option: Option = {
                value: 1,
                item: answer
            }
            optionList.push(option);
        }
        else {
            const option: Option = {
                value: 0,
                item: answer
            }
            optionList.push(option);
        }
    });
    return optionList;
}

// 生成题目列表（包含题目和选项）
function generatorQuizList(itemList: Array<Item>, count: number): Array<object> {
    const quizList: Array<object>  = [];
    const quizItems = getRandomQuizItems(itemList, count);
    quizItems.map((q) => {
        const option = parserAnswerToOptions(q, getWrongAnswerList(q, itemList));
        const quiz = {
            quiz: q,
            option: option
        };
        quizList.push(quiz);
    });
    return quizList;
}

export {
    generatorQuizList
}