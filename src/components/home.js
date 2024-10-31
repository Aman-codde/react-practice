import { DATA_PORTAL} from './data_portal';
import PortalCard from "./portal-card";

export default function Home(){
    return(
        <>
        <section className="flex flex-wrap m-4 bg-slate-50 p-4">
            <PortalCard  {...DATA_PORTAL[0]}/>
            <PortalCard  {...DATA_PORTAL[1]}/>
            <PortalCard  {...DATA_PORTAL[2]}/>
            <PortalCard  {...DATA_PORTAL[3]}/>
            <PortalCard  {...DATA_PORTAL[4]}/>
            <PortalCard  {...DATA_PORTAL[5]}/>
        </section>
        </>
    )
}