import * as S from "./style";

const CheckoutSection = () => {
  return (
    <S.CheckoutSection closing={false}>
      <S.CheckoutSectionConfirmation>
        <S.BackIcon />
        {"Component OrderConfirmation"}
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
              {"Conponete ChechboxIcon"}
              {"Conponete ChechboxIcon"}
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
                value={""}
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
