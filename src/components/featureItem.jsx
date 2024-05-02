function FeatureItem ({ icon, altIcon, title, paragraph }){
    return (
        <div className="flex flex-col items-center p-10">
          <img src={icon} alt={altIcon} className="w-36 border-[10px] border-solid border-[#00bc77] rounded-full p-4" />
          <h3 className="text-[#222] text-xl font-bold mb-2 mt-5">{title}</h3>
          <p>{paragraph}</p>
        </div>
    )
}

export default FeatureItem;