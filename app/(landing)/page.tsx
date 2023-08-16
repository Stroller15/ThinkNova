import { FC } from 'react'
import Link from "next/link";
import { Button } from '@/components/ui/button';


const page: FC = ({}) => {
  return (
    <div>
      <div>landing page (unprotected route)</div>
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      
      
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
        </div>
      
    </div>
  );

}

export default page