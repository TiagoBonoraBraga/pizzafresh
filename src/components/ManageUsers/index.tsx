import { ReactComponent as Add } from "assets/icons/add.svg";
import EditProduct from "components/EditProduct";
import { HTMLAttributes } from "react";
import * as S from "./style";

type ManageUsersType = HTMLAttributes<HTMLDivElement>;

type ManageUsersProps = {} & ManageUsersType;



const ManageUsers = ({...props}: ManageUsersProps ) => {
    return (
        <S.ManageUsers {...props}>
            <S.ManageUsersTitle>Gerenciar Usuários</S.ManageUsersTitle>
            <S.ManageUsersSub>
                <b>Usuário</b>
            </S.ManageUsersSub>
            <S.ManageUsersContent>
                <S.ManageUsersContentAdd>
                    <Add />
                    <span>Adicionar Usuários</span>
                </S.ManageUsersContentAdd>
                <S.ManageUsersContentAdd>
                    <S.EditForm 
                        type="text"
                        placeholder="Nome"
                    />
                    <S.EditForm 
                         type="text"
                         placeholder="Nome de usuário"
                    />
                    <S.EditForm
                         type="password"
                         placeholder="Senha"
                    />
                    <S.EditForm
                         type="password"
                         placeholder="Confirmar Senha"
                    />
                    <S.EditForm 
                         type="url"
                         placeholder="Imagem"
                    />
                </S.ManageUsersContentAdd>
                {"componente edituser"}
            </S.ManageUsersContent>
            <S.ManageUsersActions>
                <S.ManageUsersActionsCancel>Cancelar</S.ManageUsersActionsCancel>
                <S.ManageUsersActionsSave>Salvar Mudanças</S.ManageUsersActionsSave>
            </S.ManageUsersActions>
        </S.ManageUsers>
    );
}

export default ManageUsers;