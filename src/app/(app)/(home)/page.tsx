import configPromise from '@payload-config'
import { getPayload } from 'payload'

const page = async() => { 
  const paylaod = await getPayload({
    config: configPromise,  
  })

  const data = await paylaod.find({
    collection: "categories",
  })
  return (
   <div>
     {
        JSON.stringify(data, null, 2)
     }
   </div>
  )
}

export default page 