import { Loader2, TriangleAlert } from "lucide-react"
import { useSerieContext } from "../../../context/SerieProvider"
import ListPopSeries from "./components/ListPopSeries"
import ListTopSeries from "./components/ListTopSeries"
import Modal from "./components/Modal"
import SerieDetails from "./components/SerieDetails"


const Series = () => {

    const { loading, error } = useSerieContext()

    return (
        <>
            <div className='flex flex-col items-center h-full'>
                {error && (
                    <div className='flex gap-4'>
                        <TriangleAlert />
                        <p>{error}</p>
                    </div>
                )}
                {loading ? (
                    <Loader2 className='animate-spin h-12 w-12 text-center' />
                ) : (
                    <>
                        <ListPopSeries />
                        <ListTopSeries />
                    </>
                )}
            </div>
            <Modal>
                <SerieDetails />
            </Modal>
        </>
    )
}

export default Series