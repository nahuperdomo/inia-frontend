import Container from "../../layouts/Container";
import Topbar from "../../layouts/Topbar"
import DashboardSection from "../../components/DashboardSection";
import IconHome from "../../components/icons/IconHome";
import IconUsers from "../../components/icons/IconUsers";
import IconOther from "../../components/icons/IconOther";
import AlertBanner from "../../components/AlertBanner";
import { demo } from "./demo";


export default function IniaDashboard() {
    return (
        <div className="min-h-dvh bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
            <Topbar />
            <Container>
                <div className="grid gap-6">
                    <DashboardSection
                        title="Lotes"
                        icon={<IconHome className="size-5" />}
                        subtitle={demo.lots.city}
                        items={demo.lots.metrics}
                    />


                    <DashboardSection
                        title="Usuarios"
                        icon={<IconUsers className="size-5" />}
                        items={demo.users}
                    />


                    <DashboardSection
                        title="Otros"
                        icon={<IconOther className="size-5" />}
                        items={demo.others}
                    />


                    <AlertBanner message="El porcentaje XX se pasó del 6% en el Lote XX" />
                </div>
            </Container>
        </div>
    );
}