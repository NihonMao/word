export default interface RichText {
    type: string,
    text: object,
    annotations: {
        bold: boolean,
        italic: boolean,
        strikethrough: boolean,
        underline: boolean,
        code: boolean,
        color: string,
    };
    plain_text: string,
    href: string
}