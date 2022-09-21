import Menu from "components/Menu";
import { navigationItems } from "data/navigation";
import { Outlet } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

 const Settings = () => {
    return (
        <S.Settings>
            <Menu 
            active={RoutePath.SETTINGS} 
            navItems={navigationItems}/>
            <S.SettingsPage>
                <header>
                    <S.SettingsPageHeaderTitle>Configurações</S.SettingsPageHeaderTitle>
                </header>
                <S.SettingsContent>
                    <S.SettingsContentSidebar>
                        {"Componente NavColumn"}
                    </S.SettingsContentSidebar>
                    <S.SettingsContentBox>
                        <S.SettingsContentBoxEmpty>Selecione uma categoria</S.SettingsContentBoxEmpty>
                        <Outlet />
                    </S.SettingsContentBox>
                </S.SettingsContent>
            </S.SettingsPage>
        </S.Settings>
    );
 }

 export default Settings;