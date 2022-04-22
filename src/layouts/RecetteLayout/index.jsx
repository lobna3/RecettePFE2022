import RacetteHeader from "../../components/RacetteHeader"

export default ({ children }) => {
    return (
        <>
            <RacetteHeader>

            </RacetteHeader>
            <div style={{ padding: '15px' }} >
                {
                    children
                }
            </div>

        </>
    )
}