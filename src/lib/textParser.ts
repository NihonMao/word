import RichText from "@/interfaces/richText";

// 用于解析例句中的条目单词
function parseRichText(richText: RichText[]): string {
    return richText.map((t: RichText) => {
        if (t.annotations.underline) {
            return '<u>' + t.plain_text + '</u>';
        } else {
            return t.plain_text;
        }
    }).join("");
}

export {
    parseRichText
}