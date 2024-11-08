'use client'

const Footer = () => {
    return (
        <div className="w-full flex flex-col border-t-[1px]">
            <div className="my-[15px] w-full flex flex-row items-center justify-between px-[10px]">
                <div className="flex w-full h-full flex-row justify-center items-center">
                    <div className="flex flex-row text-[12px] items-center space-x-2 opacity-50">
                        <span>Made with <a className="hover:cursor-pointer hover:underline" href="https://mirror-garlic-05f.notion.site/12f924430eac80e9903ecd5a9161ec92?v=471a7aee24c242db9e6c05d8fe468f86" target="_blank">Notion</a> & <a className="hover:cursor-pointer hover:underline" href="https://github.com/NihonMao/word" target="_blank">NextJS</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
