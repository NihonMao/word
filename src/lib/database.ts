import { Client } from "@notionhq/client";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
    auth: process.env.NOTION_TOKEN
});

async function getDatabase(): Promise<QueryDatabaseResponse> {
    const pages = await notion.databases.query({ database_id: process.env.NOTION_DATABASE_ID! });
    return pages;
}

export { notion, getDatabase };