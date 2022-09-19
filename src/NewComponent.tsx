type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        < table style={
            {
                padding: "10px 20px",
                textAlign:
            "center"
        }
        }>
            {
                topCars.map((car, index) => {
                    return (
                        <>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <th style={{border: '1PxSolidBlack'}}>{car.manufacturer}</th>
                                <td>{car.model}</td>
                            </tr>
                        </>

                    )
                })
            }
        </table>
    )
}