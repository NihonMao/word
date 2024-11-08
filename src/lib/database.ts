import Item from "@/interfaces/item";
import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

// 获取数据库页面
async function getAllPages(): Promise<QueryDatabaseResponse> {
    const pages: QueryDatabaseResponse = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID! });
    return pages;
}

// 获取数据库所有条目
async function getAllItems(): Promise<Array<Item>> {
    const pages: QueryDatabaseResponse = await getAllPages();
    return pages.results;
}

export { getAllPages, getAllItems };