import { Listing } from '../schemas/listing'

const Grid = ({ listings }: { listings: Listing[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 mb-auto">
            {listings.map((listing, index) => (
                <div key={index} className="border bg-emerald-900 border-slate-300 rounded-lg shadow-md p-4 text-center hover:bg-emerald-700/50">
                    <h3 className="text-lg font-semibold text-emerald-300">{listing.title}</h3>
                    <p className="text-slate-300">{listing.price}</p>
                    <a href={listing.url} target="_blank" rel="noopener noreferrer"
                        className="inline-block mt-2 text-sky-400 hover:underline">
                        View airbnb
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Grid