import { Headline, DisplayTypography } from '@/components/GeralComponents'
import {
  WrapperModal,
  ContentModal,
  DisplayButtonClose,
  BlockRegistration,
  FieldRegistration,
  ContentFieldBlock,
  FieldCheckBlock,
  TypeFieldCheck,
  ButtonSaveDate
} from './styles'

interface PropType {
  onClose: any;
}

export default function Modal({ onClose }: PropType) {
  return (
    <WrapperModal>
      <ContentModal>
        <DisplayButtonClose onClick={onClose} />
        <Headline title="cadastro de usuário" text="insira os dados abaixo." />
        <BlockRegistration>
          <FieldRegistration type="text" placeholder="nome" />
          <FieldRegistration type="text" placeholder="e-mail" />
          <FieldRegistration type="text" placeholder="usuario" />
          <FieldRegistration type="number" placeholder="numero final" />
          <FieldRegistration type="number" placeholder="nível" />
          <ContentFieldBlock>
            <DisplayTypography DisplayTypography="clique para bloquear o usuário" />
            <FieldCheckBlock type="checkbox" />
          </ContentFieldBlock>
          <ContentFieldBlock>
            <DisplayTypography DisplayTypography="tipo" />
            <TypeFieldCheck>
              <FieldCheckBlock type="checkbox" />
              <DisplayTypography DisplayTypography="usuário" />
            </TypeFieldCheck>
            <TypeFieldCheck>
              <FieldCheckBlock type="checkbox" />
              <DisplayTypography DisplayTypography="operador" />
            </TypeFieldCheck>
            <TypeFieldCheck>
              <FieldCheckBlock type="checkbox" />
              <DisplayTypography DisplayTypography="administrador" />
            </TypeFieldCheck>
          </ContentFieldBlock>
          <ButtonSaveDate>
            <DisplayTypography DisplayTypography="salvar" />
          </ButtonSaveDate>
        </BlockRegistration>
      </ContentModal>
    </WrapperModal>
  )
}
