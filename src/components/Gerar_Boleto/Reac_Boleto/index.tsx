import React, { useEffect, useState } from 'react'
import { Page, Text, View, Document ,StyleSheet, Image } from '@react-pdf/renderer'

import JsBarcode from 'jsbarcode'
import { createCanvas } from 'canvas'

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 10,
    fontSize: 10
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderBottomStyle: 'solid'
  },
  header2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20
  },
  containerText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 5
  },
  contentBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  contentText: {
    width: '70%',
    flexDirection: 'column',
    fontStyle: 'normal',
    textAlign: 'left',
    fontSize: 10
  },
  contentTextWidth: {
    width: '100%',
    marginBottom: 10,
    fontStyle: 'normal',
    textAlign: 'left'
  },
  contentTextWidthBorder: {
    width: '100%',
    fontStyle: 'normal',
    textAlign: 'left',
    borderWidth: 1.5,
    borderColor: '#2f3e94',
    padding: 10
  },
  contentValue: {
    maxWidth: '30%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#cbcbcb',
    padding: 15,
    marginLeft: 10
  },
  typographyValue: {
    fontWeight: 500,
    fontStyle: 'normal',
    textAlign: 'center'
  },
  img: {
    width: '100%',
    maxWidth: '35%',
    padding: '10px 0'
  },
  img2: {
    width: '100%',
    maxWidth: '15%',
    padding: '10px 10px'
  },
  img3: {
    width: '100%',
    maxWidth: '26%',
    padding: '15px 10px'
  },
  wrapperCheckOut: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'solid',
    marginTop: 15
  },
  contentTextCheckOut: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 20
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  fontBold: {
    fontFamily: 'Helvetica-Bold'
  },
  separador: {
    margin: 10
  },
  rowView: {
    flexDirection: 'row'
  },
  textFloatRight: {
    textTransform: 'capitalize',
    fontWeight: 500,
    fontStyle: 'normal',
    textAlign: 'right',
    width: '100%',
    marginRight: 10,
    marginTop: 10
  },
  textFloatLeft: {
    textTransform: 'capitalize',
    fontWeight: 500,
    fontStyle: 'normal',
    textAlign: 'left',
    width: '100%',
    marginLeft: 10,
    marginBottom: 10
  },
  borderDashed: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    width: '100%',
    maxWidth: '95%',
    margin: '20px auto'
  },
  containerBoerderImage: {
    width: '100%',
    borderWidth: 2,
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: 20
  },
  containerBorderImageRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%'
  },
  viewCodigoBarras: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: '100%',
    margin: 'auto',
    textAlign: 'center'
  },
  imgCodigoBarras: {
    width: '100%',
    backgroundSize: 'contain',
    padding: '10px',
    margin: '5px auto'
  }
})

export interface IBoletoProps {
  id?: number
  // eslint-disable-next-line prettier/prettier
  nomeCliente: string
  valor: string
  dataVencimento: string
  codigoCliente: string
  cpfCnpj?: string
  codigoBarrasPix?: string
  descricao: string
  nomeAvalistaBoleto: string
  tipo?: 'bo' | 'px'
  nomeAvalistaPix?: string
  cidade?: string
}

export function Boleto({
  nomeCliente,
  valor,
  dataVencimento,
  codigoCliente,
  codigoBarrasPix: codigoBarras,
  descricao,
  nomeAvalistaBoleto
}: IBoletoProps) {
  const canvas = createCanvas(300, 50)

  JsBarcode(canvas, codigoBarras!)
  console.log(canvas.toDataURL())

  const [imgB002Url, setImgB002Url] = useState('');
  const [imgB003Url, setImgB003Url] = useState('');
  const [imgB004Url, setImgB004Url] = useState('');

  // Função para converter a imagem em URL de dados (data URL)
  const convertImageToDataUrl = async (imagePath: RequestInfo | URL) => {
    const response = await fetch(imagePath);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  };

  useEffect(() => {
    // Carregar as imagens ao montar o componente
    convertImageToDataUrl('/img/IMG_B002.png')
      .then((url) => { setImgB002Url(url); })
      .catch((error) => { console.log(error); });
    convertImageToDataUrl('/img/IMG_B003.png')
      .then((url) => { setImgB003Url(url); })
      .catch((error) => { console.log(error); });
    convertImageToDataUrl('/img/IMG_B004.png')
      .then((url) => { setImgB004Url(url); })
      .catch((error) => { console.log(error); });
  }, []);

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Image style={styles.img} src={imgB002Url} />
          <View style={styles.header2}>
            <Image style={styles.img3} src={imgB003Url}  />
            <Text>Um Produto</Text>
            <Image style={styles.img2} src={imgB002Url}  />
          </View>
        </View>
        <View style={styles.containerText}>
          <View style={styles.contentBlock}>
            <View style={styles.contentText}>
              <View style={styles.rowView}>
                <Text>Prezado(a) </Text>
                <Text style={styles.fontBold}>{nomeCliente}</Text>
              </View>
              <View style={styles.separador}></View>
              <Text>
                Este é o boleto com o demonstrativo do acordo firmado em{' '}
                {dataVencimento}
              </Text>
              <View style={styles.separador}></View>

              <Text>
                Para garantir as condições oferecidas no acordo, este boleto
                deve ser pago até a data de vencimento nele indicada. Se o
                boleto não for pago até está data, está proposta ficará sem
                efeito{' '}
              </Text>
            </View>
            <View style={styles.contentValue}>
              <Text style={styles.typographyValue}>
                <Text style={{ textTransform: 'capitalize' }}>valor </Text>do
                <Text> acordo</Text>
              </Text>
              <Text style={styles.fontBold}>R$ {valor}</Text>
            </View>
          </View>
        </View>

        <View style={styles.contentTextWidth}>
          <Text>
            Comunicamos que seu débito(s) detalhado(s) na presente, realizado
            originalmente junto as Instituição descriminas abaixo: foi(foram)
            cedido(s) e transferido(s) ao © Serasa Experian FEIRAO LIMPA NOME -
            São Paulo - Av das Nações Unidas tomando se legitimo credor de
            seu(s) débito(s).
          </Text>
        </View>

        <View style={styles.contentTextWidthBorder}>
          <Text>
            Toda negociação precisa que haja um avalista responsável
            juridicamente para que a mesma seja concretizada.{' '}
            {nomeAvalistaBoleto} e a pessoa responsável pelo acordo, sendo seu
            avalista junto as empresas que você tem dívidas. Toda a
            responsabilidade sobre a baixa de seu débito é de nossa empresa ©
            Serasa Experian uma das mais seguras do Brasil.
          </Text>
        </View>
        {/* <Image src={Logo} /> */}
        <View style={styles.wrapperCheckOut}>
          <View style={styles.contentTextCheckOut}>
            <Text style={styles.fontBold}>CÓDIGO DO CLIENTE</Text>
            <Text>{codigoCliente}</Text>
          </View>
          <View style={styles.contentTextCheckOut}>
            <Text style={styles.fontBold}>VALOR A PAGAR</Text>
            <Text>R$ {valor}</Text>
          </View>
          <View style={styles.contentTextCheckOut}>
            <Text style={styles.fontBold}>DATA DE VENCIMENTO</Text>
            <Text>{dataVencimento}</Text>
          </View>
          {/* CONTADOR DE PAGINAS Ñ APAGAR */}
        </View>
        <Text style={styles.textFloatRight}>Autenticação Mecânica</Text>
        <View style={styles.borderDashed}></View>
        <Text style={styles.textFloatLeft}>documento para pagamento</Text>
        <View style={styles.containerBoerderImage}>
          <Image style={styles.img} src={imgB002Url} />

          <View style={styles.containerBorderImageRow}>
            <View style={styles.contentTextCheckOut}>
              <Text style={styles.fontBold}>CÓDIGO DO CLIENTE</Text>
              <Text>{codigoCliente}</Text>
            </View>
            <View style={styles.contentTextCheckOut}>
              <Text style={styles.fontBold}>VALOR A PAGAR</Text>
              <Text>R$ {valor}</Text>
            </View>
            <View style={styles.contentTextCheckOut}>
              <Text style={styles.fontBold}>DATA DE VENCIMENTO</Text>
              <Text>{dataVencimento}</Text>
            </View>
          </View>
          <Text
            style={{
              textAlign: 'left',
              textTransform: 'uppercase'
            }}
          >
            contra apresentação
          </Text>
        </View>
        <Text style={styles.textFloatRight}>
          Autenticação Mecânica/Ficha de Compensação
        </Text>
        <View style={styles.viewCodigoBarras}>

              <Image src={canvas.toDataURL()} style={styles.imgCodigoBarras} />
        </View>

        <View style={styles.body}>
          <Text>
            Restrições no SPC SERASA serão regularizadas em até 3 dias úteis -
            Devolução de documentos (cheques, carta de anuência e aplicável):
            somente após a quitação deste Acordo.
          </Text>
        </View>
        {/* <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        /> */}
      </Page>
      {descricao !== '' && (
        <Page style={styles.page}>
          <View style={styles.header}>
            <Image style={styles.img} src={imgB002Url}  />
            <View style={styles.header2}>
              <Image style={styles.img3} src={imgB003Url}  />
              <Text>Um Produto</Text>
              <Image style={styles.img2} src={imgB002Url}  />
            </View>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.fontBold}>
              DEMOSTRATIVO DOS VALORES DO CONTRATO ORIGINAL EM ABERTO
            </Text>
            <Text>{descricao}</Text>
          </View>
        </Page>
      )}
    </Document>
  )
}