import Image from 'react-bootstrap/Image';

function ExampleCarouselImage() {
  
  return ( <>  
    <div className="p-5 mb-4 bg-body-tertiary rounded-3 d-flex align-items-center justify-content-center" style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Image
        src="https://img.freepik.com/foto-gratis/narracion-viajes-pareja_52683-102408.jpg?w=996&t=st=1691378962~exp=1691379562~hmac=8ea34dc5ee5004facc77842abecb1b48abde921dab32b66bbbfdf0588275a9af"
        fluid
        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
      />
    </div>
      </>
  )
}


export default ExampleCarouselImage;