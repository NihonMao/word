import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Item from "@/interfaces/item";
import { getAllItems } from "@/lib/database";
import { generatorQuizList } from "@/lib/quizGenerator";

export default async function Home() {
  const itemList: Array<Item> = await getAllItems();
  const quizList = generatorQuizList(itemList, 10);
  if(itemList == undefined || itemList.length == 0 || quizList == undefined || quizList.length == 0) {
    return <></>
  }
  // 主页面
  // 直接显示题目 :D
  return (
    <main className="m-0 min-h-screen min-w-screen flex flex-col items-center">
      <div className="md:w-full max-w-3xl flex flex-col items-center w-full min-h-screen ">
        <div className="w-full">
          <Header />
        </div>
        <div className="grow w-full flex items-center">
          <Intro />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
