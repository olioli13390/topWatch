import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSerieContext } from "../../../../context/SerieProvider";
import SerieCard from "./SerieCard";

const SerieList = ({ isTopRated = false }) => {
    const { visiblePopSeries, visibleTopSeries, prevPopSlide, nextPopSlide, prevTopSlide, nextTopSlide } = useSerieContext()
    const series = isTopRated ? visibleTopSeries : visiblePopSeries

    return (
        <div className="relative px-15 mb-8">
            <div className="relative h-130 overflow-hidden">
                <button
                    onClick={isTopRated ? prevTopSlide : prevPopSlide}
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition-colors"
                >
                    <ChevronLeft />
                </button>
                <ul className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2 h-full">
                    {series.map((serie) => (
                        <SerieCard key={serie.id} serie={serie} />
                    ))}
                </ul>
                <button
                    onClick={isTopRated ? nextTopSlide : nextPopSlide}
                    type="button"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 transition-colors"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default SerieList
