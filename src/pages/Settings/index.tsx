import Menu from "components/Menu";
import NavColumn from "components/NavColumn";
import { navigationItems } from "data/navigation";
import { Outlet, useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

 const Settings = () => {

    const navigate = useNavigate();
    const handleNavigation = (path: RoutePath) => navigate(path);
    
    return (
        <S.Settings>
            <Menu 
            active={RoutePath.SETTINGS} 
            navItems={navigationItems}
            onNavigate={handleNavigation}
            onLogout={() => navigate(RoutePath.LOGIN)} 
            />
            <S.SettingsPage>
                <header>
                    <S.SettingsPageHeaderTitle>Configurações</S.SettingsPageHeaderTitle>
                </header>
                <S.SettingsContent>
                    <S.SettingsContentSidebar>
                        <NavColumn activeRoute={RoutePath.SETTINGS_PRODUCTS}/>
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