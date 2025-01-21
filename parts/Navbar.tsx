import React from 'react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

function Navbar() {
  return (  
    <div>
            <NavigationMenu
            
            >
              <NavigationMenuList

              >
                <NavigationMenuItem>Home</NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

    </div>
  )
}

export default Navbar