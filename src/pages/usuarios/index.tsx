import { Layout, SideBar, Modal, Headline } from '@/components/GeralComponents'

import { useState } from 'react'

import {
  WrapperUsuarios,
  ContentUsuarios,
  ButtonAdd,
  WrapperTable,
  TableRow,
  TableHeader,
  TableData,
  ButtonDelete
} from '..//..//components/StylesPages/StylesUsuarios'

export default function Usuarios() {
  const [openModal, setOpenModal] = useState(false)

  function handleOpenModal() {
    setOpenModal(!openModal)
  }

  function handleCloseModal() {
    setOpenModal(false)
  }
  return (
    <Layout>
      <WrapperUsuarios>
        <SideBar />
        <ContentUsuarios>
          <Headline
            title="tabela de usuários"
            text="gerenciamento de usuários"
          />
          <ButtonAdd onClick={handleOpenModal} />
          {openModal && <Modal onClose={handleCloseModal} />}
          <WrapperTable>
            <TableRow>
              <TableHeader>id</TableHeader>
              <TableHeader>nome</TableHeader>
              <TableHeader>e-mail</TableHeader>
              <TableHeader>tipo</TableHeader>
              <TableHeader>status</TableHeader>
              <TableHeader>nível</TableHeader>
              <TableHeader>ação</TableHeader>
            </TableRow>
            <TableRow>
              <TableData>01</TableData>
              <TableData>lorran</TableData>
              <TableData>lorransalldanha@gmail.com</TableData>
              <TableData>administrador</TableData>
              <TableData>bloqueado</TableData>
              <TableData>20</TableData>
              <TableData>
                <ButtonDelete />
              </TableData>
            </TableRow>
          </WrapperTable>
        </ContentUsuarios>
      </WrapperUsuarios>
    </Layout>
  )
}
