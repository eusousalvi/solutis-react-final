function checkFieldType(field) {
    return (typeof (field) === "string" ? (field === "" ? "Actions" : field) : "Checkbox");
}

function AirportsTableHeader({ fields, prefix }) {

    return (
        <thead>
            <tr>
                {
                    fields.map(field => {
                        const fieldName = checkFieldType(field);
                        return (
                            <th key={prefix+fieldName} id={prefix+fieldName}>
                                {field}
                            </th>
                        )
                    }
                    )
                }
            </tr>
        </thead>
    )
}

export default AirportsTableHeader