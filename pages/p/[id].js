import {useRouter} from 'next/router'
import Context from "../context";

export default function Visualisation() {
    const router = useRouter();

    return (
        <div>
            {router.query.id === "vis-onboarding" ?
                <p><h1>{router.query.id}</h1>This is the visualisation post content.</p> : <Context/>
            }
        </div>
    )
}