const PopUpNationalDesign = () => {
    return(
        <div className="flex items-center w-full p-4 gap-4 bg-white rounded-md">
            <div>
                <img src="" alt="" className="max-w-sm rounded-lg"/>
            </div>
            <div className="">
                <div className="">
                <h1 className="bg-gradient-to-r from-dark-red to-light-red text-transparent bg-clip-text font-bold text-2xl">The First Person to Translate the Deuterocanonical Books and Part of the New Testament into Macapat</h1>
                <p className="text-gray-400 text-xs border-l border-gray-400 px-2">Jakarta, 08 January, 2025</p>
                </div>
                <p className="font-medium text-black">Christ Srie Harinto (82), or Eyang Christ, is a TNI AL Marine veteran who wrote 16 books of macapat songs based on holy scriptures. Through macapatan at St. Yohanes Baptista Parish, Parung, Bogor, he invites the congregation to read holy scriptures and preserve culture.</p>
            </div>
            <div className="absolute bottom-3 right-3">
                <button className="px-5 py-2 bg-light-red rounded-full">Close</button>
            </div>
        </div>
    )
}