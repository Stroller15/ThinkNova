"use client"
import { FC } from 'react'
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Sidebar from "@/components/Sidebar"
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface MobileSidebarProps {
  
}

const MobileSidebar: FC<MobileSidebarProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className='p-0'>
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar