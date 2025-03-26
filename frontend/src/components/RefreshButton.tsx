interface RefreshButtonProps {
    onClick: () => void
    isLoading: boolean
}

const RefreshButton = ({ onClick, isLoading }: RefreshButtonProps) => {
    return (
        <button onClick={onClick} className="
        bg-emerald-900 text-white rounded-lg px-8 py-2 font-bold border border-slate-300 shadow-md p-4 
       hover:bg-emerald-700/50 my-5 ms-auto hover:cursor-pointer" disabled={isLoading}>
            {isLoading ? "Loading..." : "Refresh"}
        </button>
    )
}

export default RefreshButton