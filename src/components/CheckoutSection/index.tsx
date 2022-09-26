import { HTMLAttributes } from "react";
import { useState } from "react";
import CheckboxIcon from "components/CheckboxIcon";
import OrderConfirmation from "components/OrderComfirmation";

import { ReactComponent as Card } from "assets/icons/credit-card.svg";
import { ReactComponent as Cash } from "assets/icons/wallet.svg";
import { OrderItemType } from "types/OrderItemType";

import * as S from "./style";

type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps ={
  orders: OrderItemType[];
  selectedTable?: number;
  onOrdersChange: (orders: OrderItemType[]) => void;
  onCloseSection: () => void;
} & CheckoutSectionType;

const CheckoutSection = ({orders, onOrdersChange, selectedTable, onCloseSection}: CheckoutSectionProps) => {
  
  const [closing, setClosing] = useState<boolean>(false);

  const handleCloseSection = () => {
    setClosing(true);
    setTimeout(onCloseSection, 800);
  }

  return (
    <S.CheckoutSection closing={closing}>
      <S.CheckoutSectionConfirmation>
        <S.BackIcon onClick={handleCloseSection}  />
        <OrderConfirmation orders={orders} onOrdersChange={onOrdersChange}/>
      </S.CheckoutSectionConfirmation>
      <S.CheckoutSectionPayment>
        <S.CheckoutSectionPaymentHead>Pagamento</S.CheckoutSectionPaymentHead>
        <S.CheckoutSectionPaymentSub>
          2 metodos de pagamentos disponiveis
        </S.CheckoutSectionPaymentSub>
        <S.CheckoutSectionPaymentForm>
          <S.CheckoutSectionPaymentFormTitle>
            Médoto de Pagamento
          </S.CheckoutSectionPaymentFormTitle>
          <S.PaymentForm>
            <S.PaymentFormCheckbox>
              <CheckboxIcon active={true} value="Cartão" icon={<Card />}/>
              <CheckboxIcon active={false} value="Dinheiro" icon={<Cash />}/>
            </S.PaymentFormCheckbox>
            <>
              <S.PaymentFormGroup>
                <label htmlFor="titular">Titular do Cartão</label>
                <input
                  type="text"
                  name="titular"
                  id="titular"
                  placeholder="Tiago Braga"
                />
              </S.PaymentFormGroup>

              <S.PaymentFormGroup>
                <label htmlFor="cardr">Número do Cartão</label>
                <input
                  type="text"
                  name="card"
                  id="card"
                  placeholder="1234 3456 5678 7890"
                />
              </S.PaymentFormGroup>

              <S.PaymentFormHalf>
                <S.PaymentFormHalfItem>
                  <label htmlFor="validity">Validade</label>
                  <input
                    type="text"
                    name="card"
                    id="validity"
                    placeholder="12/2022"
                  />
                </S.PaymentFormHalfItem>

                <S.PaymentFormHalfItem>
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" name="tcvv" id="cvv" placeholder="140" />
                </S.PaymentFormHalfItem>
              </S.PaymentFormHalf>
            </>
          </S.PaymentForm>
        </S.CheckoutSectionPaymentForm>
        <S.PaymentActions>
          <S.PaymentActionsDetails>
            <S.PaymentActionsDetailsOrderType>
              <label htmlFor="card">Tipo de pedido</label>
              <select>
                <option>{""}</option>
              </select>
            </S.PaymentActionsDetailsOrderType>
            <S.PaymentActionsDetailsTableNumber>
              <label htmlFor="card">Número da mesa</label>
              <input
                type="text"
                name="table"
                id="table"
                placeholder="01"
                disabled
                value={selectedTable}
              />
            </S.PaymentActionsDetailsTableNumber>
          </S.PaymentActionsDetails>

          <S.PaymentActionsButtonGroup>
            <S.PaymentActionsButtonGroupCancel>
              Cancelar
            </S.PaymentActionsButtonGroupCancel>
            <S.PaymentActionsButtonGroupConfirm>
              Confirmar Pagamento
            </S.PaymentActionsButtonGroupConfirm>
          </S.PaymentActionsButtonGroup>
        </S.PaymentActions>
      </S.CheckoutSectionPayment>
    </S.CheckoutSection>
  );
};

export default CheckoutSection;
