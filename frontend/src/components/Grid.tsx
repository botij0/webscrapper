interface Listing {
    title: string
    price: number
    url: string
}

const Grid = ({ listings }: { listings: Listing[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {listings.map((listing, index) => (
                <div key={index} className="border border-gray-300 rounded-lg shadow-md p-4 text-center">
                    <h3 className="text-lg font-semibold text-emerald-500">{listing.title}</h3>
                    <p className="text-gray-500">{listing.price}</p>
                    <a href={listing.url} target="_blank" rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-500 hover:underline">
                        View listing
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Grid