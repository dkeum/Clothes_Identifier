import ImageUpload from "@/app/component/ImageUpload";


  export default function Home() {
    const clothesType = [
      { type: 'T-shirt/top', emoji: '👕' },
      { type: 'Trouser', emoji: '👖' },
      { type: 'Pullover', emoji: '🧥' },
      { type: 'Dress', emoji: '👗' },
      { type: 'Coat', emoji: '🧥' },
      { type: 'Sandal', emoji: '👡' },
      { type: 'Shirt', emoji: '👔' },
      { type: 'Sneaker', emoji: '👟' },
      { type: 'Bag', emoji: '🎒' },
      { type: 'Ankle boot', emoji: '👢' },
    ];
  
    return (
      <div className="w-screen h-screen">
        <h1 className="text-center font-extrabold text-4xl mt-5">Clothes Identifier</h1>
        <div className="w-full h-1/4 border-b-4 border-black flex flex-col justify-center align-middle items-center ">
          <h3 className="mt-6 ml-5 font-semibold">Trained on a 1000 images from FMINST dataset</h3>
          <h3 className="ml-5 font-semibold mt-4 mb-2">Able to identify:</h3>
          <div className="grid grid-cols-4 gap-4 md:flex md:flex-row md:justify-start md:items-center ml-5 my-4 ">
            {clothesType.map((clothes, i) => (
              <div
                className="flex flex-col justify-center items-center w-auto text-md mx-1 border-2 p-1 border-blue-200 rounded-lg text-ellipsis overflow-hidden"
                key={i}
              >
                <p>{clothes.type}</p>
                <span className="text-lg" role="img" aria-label={clothes.type}>
                  {clothes.emoji}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-3/4">
          <ImageUpload />
        </div>
      </div>
    );
  }