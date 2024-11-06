import { DATA_PORTAL} from './data_portal';
import PortalCard from "./portal-card";
import PortalTitle from './portal-title';

export default function Home(){
    return(
        <section className='bg-slate-50 py-14'>
            <PortalTitle/>
            <div className="flex flex-wrap m-4 p-4">
                <PortalCard  {...DATA_PORTAL[0]}/>
                <PortalCard  {...DATA_PORTAL[1]}/>
                <PortalCard  {...DATA_PORTAL[2]}/>
                <PortalCard  {...DATA_PORTAL[3]}/>
                <PortalCard  {...DATA_PORTAL[4]}/>
                <PortalCard  {...DATA_PORTAL[5]}/>
            </div>
        </section>
       
    )
}