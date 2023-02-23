import React, {useEffect, useState} from "react";
import Menu from "../Menu";
import MarginsTable from "./MarginsTable";
import IMargin from "../../types/IMargin";
import axios from "axios";


const Margins = ():JSX.Element => {

    const [margins, setMargins] = useState<IMargin[]>();

    useEffect(() => {

        (async () => {
            const data = await axios.get("/api/margins");
            setMargins(data.data);

        })();

    }, [])


    return (
        <>
        <Menu/>
        <MarginsTable Margins={margins!}/>
        </>
    )
}

export default Margins;