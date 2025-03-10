import { Link } from "react-router-dom";
const CardArticle = () => {
    return(
        <div className="max-w-sm rounded-lg shadow-2xl p-5 bg-white">
            <div className="relative h-60 w-full rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1666587128445-4623f8f8f033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF2YSUyMGRhbmNlfGVufDB8fDB8fHww" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="border-l-4 border-light-red px-2 mt-4">
                <p className="text-sm text-gray-500">Cici Dian Eviliya</p>
            </div>
            <div className="mt-3">
            <a href="https://www.kompasiana.com/cicidian5506/677d5ab134777c0b59547556/sering-dikira-pamer-tubuh-ternyata-ini-usaha-penari-untuk-melestarikan-budaya" target="_blank" className="text-black font-medium text-[15px] hover:underline">
            Thought to be Showing Off Their Bodies, It Turns Out This is the Dancers' Effort to Preserve Culture
            </a>
            </div>
        </div>
    )
}

export default CardArticle;