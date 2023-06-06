import qrImage from './assets/image-qr-code.png'
import QRCard from './components/QRCard/qrcard'

const qrData = {
  img: qrImage,
  title: 'Improve your front-end skills by building projects',
  description: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
}

function App() {

  return (
    <>
      <QRCard {...qrData} />
    </>
  )
}

export default App
