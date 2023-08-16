import { UserButton } from '@clerk/nextjs'
import { FC } from 'react'



const page: FC = ({}) => {
 
  return (
    <div>
      <p>this is dashboard page</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  

  )
}

export default page