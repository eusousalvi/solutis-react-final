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
                            <th scope="col" className={fieldName === "Actions" ? "col-md-2" : ""} key={prefix+fieldName}>
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