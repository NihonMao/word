'use client'

const HeaderMenu = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="my-[15px] w-full flex flex-row items-center justify-between px-[10px]">
                <div className="font-bold flex w-full h-full flex-row justify-start items-center">
                    <div className="flex flex-row hover:cursor-pointer text-[26px] items-center space-x-2" onClick={() => { window.open("https://mirror-garlic-05f.notion.site/12f924430eac80e9903ecd5a9161ec92?v=471a7aee24c242db9e6c05d8fe468f86&pvs=4", '_blank') }}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='32px' height='32px' viewBox='0 0 24 24'><title>notion_line</title><g id="notion_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z'/><path fill='#09244BFF' d='M16.388 4.05a1 1 0 0 1 .632.165l1.36.907-10.998.845L6.245 4.83zM5 6.414v8.92a1 1 0 0 0 .2.6L6 17V7.414zm14 11.66L8 18.92V7.926l11-.846zm2 0a2 2 0 0 1-1.847 1.994l-11.529.887a2 2 0 0 1-1.753-.794L3.6 17.133a3 3 0 0 1-.6-1.8V4.926a2 2 0 0 1 1.847-1.994l11.388-.876a3 3 0 0 1 1.894.495l1.98 1.32A2 2 0 0 1 21 5.535zM17 9.5a1 1 0 1 0-2 0v4.28l-2.648-4.304A1 1 0 0 0 11.5 9H11a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-4.28l2.648 4.304a1 1 0 0 0 .852.476h.5a1 1 0 0 0 1-1z'/></g></svg>
                        <span>
                            日语单词本
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu;
