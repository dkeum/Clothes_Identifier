import ImageUpload from "@/app/component/ImageUpload";


export default function Home() {


  const clothesType = ['T-shirt/top','Trouser', 'Pullover', 'Dres', 'Coat', 'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']
  return (
   
      <div className="w-screen h-screen">
        <div className="w-full h-1/3 border-b-4 border-black align-middle items-center ">
            <h1 className="text-center font-extrabold text-4xl mt-5">Clothes Identifier</h1>
            <h3 className="mt-6 ml-5"> Trained on a 1000 images from FMINST dataset </h3>
            <h3 className="ml-5"> Able to identify: </h3>
            <div className="grid grid-cols-4 gap-4 md:flex md:flex-row ml-2 my-4 ">
            {clothesType.map((clothes, i )=> (
              <div className="flex justify-center items-center w-auto text-sm mx-auto border-2 p-1 border-blue-200 rounded-lg text-ellipsis overflow-hidden"  key ={i }>
                 {clothes}
              </div>

            ))}
            </div>
            
        </div>

        <div className="w-full h-2/3">
            <ImageUpload/>
        </div>
          
       </div>
   
  )
}
